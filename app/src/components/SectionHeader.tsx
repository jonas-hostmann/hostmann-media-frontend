import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  preTitle: string;
  title: string;
  subtitle?: string;
  variant?: 'center' | 'left' | 'left-accent';
  className?: string;
}

export default function SectionHeader({
  preTitle,
  title,
  subtitle,
  variant = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(
      'flex flex-col gap-3',
      variant === 'center' && 'items-center text-center',
      variant === 'left' && 'items-start',
      variant === 'left-accent' && 'items-start',
      className
    )}>
      {variant === 'left-accent' && (
        <div className="w-10 h-[3px] bg-primary-600 rounded-full" />
      )}
      <span className={cn(
        'text-xs font-semibold uppercase tracking-[0.05em] text-primary-600',
      )}>
        {preTitle}
      </span>
      <h2 className={cn(
        'text-2xl md:text-4xl font-bold text-slate-800 tracking-tight',
        variant === 'center' && '',
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-base text-slate-500 leading-relaxed max-w-xl',
          variant === 'center' && '',
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
