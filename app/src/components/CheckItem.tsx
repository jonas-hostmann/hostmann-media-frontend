import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

interface CheckItemProps {
  text: string;
  className?: string;
}

export default function CheckItem({ text, className }: CheckItemProps) {
  return (
    <div className={cn('flex items-start gap-3', className)}>
      <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
      <span className="text-[15px] text-slate-600 leading-relaxed">{text}</span>
    </div>
  );
}
