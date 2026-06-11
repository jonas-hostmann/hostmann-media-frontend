'use client';

import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl?: string | null;
  imageAlt?: string;
  slug?: string;
  className?: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  imageUrl,
  imageAlt = '',
  slug = '#',
  className,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const stripHtml = (html: string) => {
    if (typeof window === 'undefined') return html.replace(/<[^>]*>/g, '');
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <a
      href={`/blog/${slug}`}
      className={cn(
        'group bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(29,78,216,0.15)] block',
        className
      )}
    >
      <div className="aspect-video overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
            <div className="w-16 h-16 bg-primary-200 rounded-lg" />
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3">
        <span className="text-xs text-slate-400 font-medium">{formattedDate}</span>
        <h4 className="text-lg font-semibold text-slate-800 line-clamp-2">{title}</h4>
        <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed">
          {stripHtml(excerpt)}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 mt-2">
          Weiterlesen
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}
