import clsx from 'clsx';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * Loading placeholder skeleton.
 */
export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={clsx('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  );
}
