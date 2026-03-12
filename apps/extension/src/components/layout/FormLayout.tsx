import React from 'react';
import clsx from 'clsx';

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  description?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

/**
 * Form field wrapper with label, description, and error handling.
 */
export function FormField({
  label,
  description,
  error,
  required = false,
  children,
  className,
  ...props
}: FormFieldProps) {
  return (
    <div className={clsx('space-y-1.5', className)} {...props}>
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
      {children}
      {error && (
        <p className="text-xs text-destructive">{error}</p>
      )}
    </div>
  );
}

interface FormRowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Horizontal form row for grouping inline fields.
 */
export function FormRow({
  children,
  className,
  ...props
}: FormRowProps) {
  return (
    <div
      className={clsx('flex flex-col sm:flex-row gap-4 items-start sm:items-center', className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface FormActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  align?: 'left' | 'right' | 'between';
}

/**
 * Form action buttons container with alignment options.
 */
export function FormActions({
  children,
  align = 'right',
  className,
  ...props
}: FormActionsProps) {
  const alignClasses = {
    left: 'justify-start',
    right: 'justify-end',
    between: 'justify-between',
  };

  return (
    <div
      className={clsx('flex gap-3 pt-4', alignClasses[align], className)}
      {...props}
    >
      {children}
    </div>
  );
}
