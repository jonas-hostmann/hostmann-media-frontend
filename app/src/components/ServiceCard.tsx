'use client';

import { cn } from '@/lib/utils';
import { ArrowUpRight, type LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  className?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  link = '#',
  className,
}: ServiceCardProps) {
  return (
    <div className={cn(
      'group bg-white border border-slate-200 rounded-xl p-8 flex flex-col gap-4 transition-all duration-300 hover:border-primary-200 hover:shadow-[0_10px_40px_-10px_rgba(29,78,216,0.15)] hover:-translate-y-1',
      className
    )}>
      <div className="w-12 h-12 bg-primary-50 rounded-md flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary-600" />
      </div>
      <h4 className="text-xl font-semibold text-slate-800">{title}</h4>
      <p className="text-[15px] text-slate-500 leading-relaxed">{description}</p>
      <a
        href={link}
        className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors duration-200 mt-auto"
      >
        Mehr erfahren
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}
