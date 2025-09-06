import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children: React.ReactNode;
}

export function Button({ 
  className, 
  variant = 'default', 
  size = 'default',
  children,
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    default: 'bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90',
    destructive: 'bg-[var(--destructive)] text-[var(--destructive-foreground)] hover:opacity-90',
    outline: 'border border-[var(--input)] bg-transparent hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]',
    secondary: 'bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:opacity-80',
    ghost: 'hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]',
    link: 'text-[var(--primary)] underline-offset-4 hover:underline',
  };

  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3 text-sm',
    lg: 'h-11 rounded-md px-8 text-lg',
    icon: 'h-10 w-10',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
