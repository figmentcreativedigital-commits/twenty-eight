import { cn } from '@/lib/utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** Narrower measure for text-led sections. */
  size?: 'default' | 'narrow';
  as?: keyof JSX.IntrinsicElements;
};

export function Container({
  children,
  className,
  size = 'default',
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-6 sm:px-8 lg:px-12',
        size === 'narrow' ? 'max-w-4xl' : 'max-w-shell',
        className
      )}
    >
      {children}
    </Tag>
  );
}
