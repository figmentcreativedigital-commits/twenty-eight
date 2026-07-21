/**
 * Consultation form — shared validation.
 * Hand-rolled (no runtime dependency) so the identical rules run on the
 * client for inline feedback and on the server for trust.
 */

export type ConsultationPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interests: string[];
  goals: string;
  timeline: string;
  preferredProvider: string;
  preferredContact: string;
  preferredTimes: string;
  consent: boolean;
  /** Honeypot — must be empty. Bots tend to fill it. */
  company?: string;
};

export type FieldErrors = Partial<Record<keyof ConsultationPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Accepts common US/intl formats: digits, spaces, dashes, parens, leading +.
const PHONE_RE = /^[+]?[\d\s().-]{7,20}$/;

export function validateConsultation(
  data: Partial<ConsultationPayload>
): FieldErrors {
  const errors: FieldErrors = {};

  if (!data.firstName || data.firstName.trim().length < 1) {
    errors.firstName = 'Please enter your first name.';
  }
  if (!data.lastName || data.lastName.trim().length < 1) {
    errors.lastName = 'Please enter your last name.';
  }
  if (!data.email || !EMAIL_RE.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.phone || !PHONE_RE.test(data.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!data.interests || data.interests.length === 0) {
    errors.interests = 'Please select at least one area of interest.';
  }
  if (data.consent !== true) {
    errors.consent = 'Please agree to be contacted so we can respond.';
  }

  return errors;
}

export function hasErrors(errors: FieldErrors): boolean {
  return Object.keys(errors).length > 0;
}

/** Server-side normalization — trims and clamps lengths defensively. */
export function normalizeConsultation(
  raw: Partial<ConsultationPayload>
): ConsultationPayload {
  const clip = (v: unknown, max: number) =>
    typeof v === 'string' ? v.trim().slice(0, max) : '';

  return {
    firstName: clip(raw.firstName, 120),
    lastName: clip(raw.lastName, 120),
    email: clip(raw.email, 200),
    phone: clip(raw.phone, 40),
    interests: Array.isArray(raw.interests)
      ? raw.interests.filter((i) => typeof i === 'string').slice(0, 20)
      : [],
    goals: clip(raw.goals, 2000),
    timeline: clip(raw.timeline, 300),
    preferredProvider: clip(raw.preferredProvider, 120),
    preferredContact: clip(raw.preferredContact, 60),
    preferredTimes: clip(raw.preferredTimes, 300),
    consent: raw.consent === true,
    company: clip(raw.company, 200),
  };
}
