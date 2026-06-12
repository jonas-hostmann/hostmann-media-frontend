'use client';

import { cn } from '@/lib/utils';
import { ArrowUpRight, type LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'white' | 'ghost';
  size?: 'default' | 'small';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  icon?: LucideIcon;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  href,
  onClick,
  type = 'button',
  icon: Icon,
  className,
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full cursor-pointer',
    'active:scale-[0.98]',
    size === 'default' ? 'px-7 py-3 text-[15px]' : 'px-4 py-2 text-sm',
    fullWidth && 'w-full',
    variant === 'primary' && 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-900 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(29,78,216,0.2)]',
    variant === 'secondary' && 'bg-transparent border-[1.5px] border-primary-600 text-primary-700 hover:bg-primary-50 hover:-translate-y-0.5',
    variant === 'white' && 'bg-white text-primary-700 hover:bg-primary-50 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]',
    variant === 'ghost' && 'bg-transparent border-[1.5px] border-white/30 text-white hover:bg-white/10 hover:border-white/50',
    disabled && 'opacity-60 cursor-not-allowed pointer-events-none hover:translate-y-0',
    className
  );

  const content = (
    <>
      {children}
      {Icon && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />}
      {!Icon && variant === 'primary' && <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cn(baseClasses, 'group')} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={cn(baseClasses, 'group')} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
