import React, { useState } from 'react';
import clsx from 'clsx';

interface TabsProps {
  children: React.ReactNode;
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

interface TabContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabContext = React.createContext<TabContextValue | null>(null);

export function Tabs({
  children,
  defaultValue,
  value: controlledValue,
  onValueChange,
  className,
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const activeTab = isControlled ? controlledValue : internalValue;

  const setActiveTab = (value: string) => {
    if (!isControlled) {
      setInternalValue(value);
    }
    onValueChange?.(value);
  };

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabContext.Provider>
  );
}

interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function TabList({ children, className, ...props }: TabListProps) {
  return (
    <div
      className={clsx('flex border-b', className)}
      role="tablist"
      {...props}
    >
      {children}
    </div>
  );
}

interface TabTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children: React.ReactNode;
}

export function TabTrigger({
  value,
  children,
  className,
  ...props
}: TabTriggerProps) {
  const context = React.useContext(TabContext);
  if (!context) {
    throw new Error('TabTrigger must be used within Tabs');
  }

  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      className={clsx(
        'px-4 py-2 text-sm font-medium transition-colors',
        'border-b-2 -mb-px',
        isActive
          ? 'border-primary text-primary'
          : 'border-transparent text-muted-foreground hover:text-foreground',
        className
      )}
      onClick={() => setActiveTab(value)}
      {...props}
    >
      {children}
    </button>
  );
}

interface TabContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
}

export function TabContent({
  value,
  children,
  className,
  ...props
}: TabContentProps) {
  const context = React.useContext(TabContext);
  if (!context) {
    throw new Error('TabContent must be used within Tabs');
  }

  const { activeTab } = context;

  if (activeTab !== value) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      className={clsx('py-4', className)}
      {...props}
    >
      {children}
    </div>
  );
}
