import React from 'react';
import clsx from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'muted';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

/**
 * Generic card component with variant styling.
 * - default: solid background with border
 * - outline: only border, transparent background
 * - muted: subtle background, no border
 */
export function Card({
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
  className,
  ...props
}: CardProps) {
  const baseClasses = 'rounded-lg transition-colors';

  const variantClasses = {
    default: 'bg-popover border border-border',
    outline: 'border border-border bg-transparent',
    muted: 'bg-muted/50',
  };

  const paddingClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };

  const hoverClass = hover ? 'hover:bg-accent/50' : '';

  return (
    <div
      className={clsx(
        baseClasses,
        variantClasses[variant],
        paddingClasses[padding],
        hoverClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
