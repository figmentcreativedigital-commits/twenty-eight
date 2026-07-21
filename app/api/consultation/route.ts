import { NextResponse } from 'next/server';
import {
  normalizeConsultation,
  validateConsultation,
  hasErrors,
  type ConsultationPayload,
} from '@/lib/validation';

export const runtime = 'nodejs';

/**
 * Consultation submissions.
 *
 * Out of the box this validates input and logs the lead to the server console
 * (development). To deliver leads to a real destination, set the relevant env
 * vars (.env.local) — the handler will use whichever is configured:
 *   1. CONSULTATION_WEBHOOK_URL  -> POST JSON (HubSpot / Zoho / Salesforce / Zapier)
 *   2. RESEND_API_KEY            -> email via Resend
 * No credentials are hard-coded.
 */
export async function POST(request: Request) {
  let raw: Partial<ConsultationPayload>;
  try {
    raw = (await request.json()) as Partial<ConsultationPayload>;
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 });
  }

  const data = normalizeConsultation(raw);

  // Honeypot — a filled "company" field means a bot. Return success quietly so
  // the bot gets no signal, but do not process the submission.
  if (data.company && data.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const errors = validateConsultation(data);
  if (hasErrors(errors)) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  try {
    const delivered = await deliver(data);

    if (!delivered && process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.info('[consultation] New lead (dev — not delivered anywhere):', {
        ...data,
        company: undefined,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[consultation] delivery failed:', err);
    return NextResponse.json(
      { ok: false, message: 'Something went wrong. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}

/** Returns true if the lead was delivered to a configured destination. */
async function deliver(data: ConsultationPayload): Promise<boolean> {
  const webhook = process.env.CONSULTATION_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source: '28-website',
        submittedAt: new Date().toISOString(),
        ...data,
        company: undefined,
      }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return true;
  }

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONSULTATION_TO_EMAIL;
  const from = process.env.CONSULTATION_FROM_EMAIL;
  if (resendKey && to && from) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        subject: `New 28 consultation request — ${data.firstName} ${data.lastName}`,
        text: formatEmail(data),
      }),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}`);
    return true;
  }

  return false;
}

function formatEmail(d: ConsultationPayload): string {
  return [
    'New consultation request via 28 website',
    '',
    `Name:      ${d.firstName} ${d.lastName}`,
    `Email:     ${d.email}`,
    `Phone:     ${d.phone}`,
    `Interests: ${d.interests.join(', ') || '—'}`,
    '',
    `Goals:     ${d.goals || '—'}`,
    `Timeline:  ${d.timeline || '—'}`,
    `Provider:  ${d.preferredProvider || '—'}`,
    `Contact:   ${d.preferredContact || '—'}`,
    `Times:     ${d.preferredTimes || '—'}`,
    '',
    `Submitted: ${new Date().toISOString()}`,
  ].join('\n');
}
