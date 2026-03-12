import React from 'react';
import clsx from 'clsx';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  center?: boolean;
}

/**
 * Responsive container with configurable max-width and padding.
 * Uses Tailwind's container utilities with custom breakpoints.
 */
export function Container({
  children,
  size = 'md',
  padding = 'md',
  center = true,
  className,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-[320px]', // popup width
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: 'max-w-full',
  };

  const paddingClasses = {
    none: '',
    sm: 'px-3 py-2',
    md: 'px-4 py-4',
    lg: 'px-6 py-6',
  };

  return (
    <div
      className={clsx(
        'w-full',
        center && 'mx-auto',
        sizeClasses[size],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
