import { cn } from '@/lib/utils';
import { type LucideIcon } from 'lucide-react';

interface BadgeProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'default' | 'dark';
  className?: string;
}

export default function Badge({
  children,
  icon: Icon,
  variant = 'default',
  className,
}: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border',
      variant === 'default' && 'bg-primary-50 border-primary-200 text-primary-700',
      variant === 'dark' && 'bg-white/10 border-white/10 text-primary-400',
      className
    )}>
      {Icon && <Icon className="w-3 h-3" />}
      {children}
    </span>
  );
}
