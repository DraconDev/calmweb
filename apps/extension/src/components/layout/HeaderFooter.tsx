import React from 'react';
import clsx from 'clsx';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  sticky?: boolean;
  className?: string;
}

/**
 * Page header with optional title and subtitle.
 * Can be made sticky for scrolling content.
 */
export function Header({
  children,
  title,
  subtitle,
  sticky = false,
  className,
  ...props
}: HeaderProps) {
  return (
    <header
      className={clsx(
        'border-b',
        sticky && 'sticky top-0 z-10 bg-background/95 backdrop-blur',
        className
      )}
      {...props}
    >
      <div className="px-4 py-3">
        {title && <h1 className="text-lg font-semibold">{title}</h1>}
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        {children}
      </div>
    </header>
  );
}

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Simple footer for consistent bottom spacing and alignment.
 */
export function Footer({
  children,
  className,
  ...props
}: FooterProps) {
  return (
    <footer
      className={clsx('border-t mt-auto', className)}
      {...props}
    >
      <div className="px-4 py-3">
        {children}
      </div>
    </footer>
  );
}

/**
 * Page layout wrapper with header, content, and optional footer.
 */
export interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  scrollable?: boolean;
}

export function PageLayout({
  children,
  header,
  footer,
  scrollable = true,
  className,
  ...props
}: PageLayoutProps) {
  return (
    <div
      className={clsx(
        'flex flex-col min-h-screen',
        scrollable ? 'overflow-auto' : '',
        className
      )}
      {...props}
    >
      {header && <>{header}</>}
      <main className="flex-1">{children}</main>
      {footer && <>{footer}</>}
    </div>
  );
}
