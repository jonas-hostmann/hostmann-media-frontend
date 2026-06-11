'use client';

import { useState, type FormEvent } from 'react';
import { cn } from '@/lib/utils';
import { Send, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';
import Button from './Button';

type FormState = 'idle' | 'error' | 'success';

interface ContactFormProps {
  className?: string;
  fullWidthButton?: boolean;
}

export default function ContactForm({ className, fullWidthButton = false }: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('idle');
    setFieldErrors({});

    const errors: Record<string, boolean> = {};
    if (!formData.name.trim()) errors.name = true;
    if (!formData.email.trim() || !validateEmail(formData.email)) errors.email = true;
    if (!formData.service) errors.service = true;
    if (!formData.message.trim()) errors.message = true;

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setFormState('error');
      return;
    }

    setFormState('success');
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  if (formState === 'success') {
    return (
      <div className={cn(
        'flex items-start gap-3 p-4 rounded-md border border-green-500 bg-green-50',
        className
      )}>
        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-green-800">Vielen Dank!</p>
          <p className="text-sm text-green-600 mt-1">Ich melde mich bei Ihnen.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn('flex flex-col gap-5', className)} noValidate>
      {formState === 'error' && (
        <div className="flex items-start gap-3 p-4 rounded-md border border-red-500 bg-red-50">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-red-800">Bitte korrigieren Sie die markierten Felder.</p>
          </div>
        </div>
      )}

      <div>
        <input
          type="text"
          placeholder="Ihr Name *"
          value={formData.name}
          onChange={e => handleChange('name', e.target.value)}
          className={cn(
            'w-full px-4 py-3 rounded-md border text-[15px] text-slate-700 placeholder:text-slate-400 transition-all duration-200 outline-none focus:border-primary-500 focus:ring-[3px] focus:ring-primary-500/10',
            fieldErrors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-300'
          )}
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="ihre@email.de *"
          value={formData.email}
          onChange={e => handleChange('email', e.target.value)}
          className={cn(
            'w-full px-4 py-3 rounded-md border text-[15px] text-slate-700 placeholder:text-slate-400 transition-all duration-200 outline-none focus:border-primary-500 focus:ring-[3px] focus:ring-primary-500/10',
            fieldErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-300'
          )}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Ihr Unternehmen (optional)"
          value={formData.company}
          onChange={e => handleChange('company', e.target.value)}
          className="w-full px-4 py-3 rounded-md border border-slate-300 text-[15px] text-slate-700 placeholder:text-slate-400 transition-all duration-200 outline-none focus:border-primary-500 focus:ring-[3px] focus:ring-primary-500/10"
        />
      </div>

      <div className="relative">
        <select
          value={formData.service}
          onChange={e => handleChange('service', e.target.value)}
          className={cn(
            'w-full px-4 py-3 rounded-md border text-[15px] text-slate-700 transition-all duration-200 outline-none focus:border-primary-500 focus:ring-[3px] focus:ring-primary-500/10 appearance-none bg-white',
            !formData.service && 'text-slate-400',
            fieldErrors.service ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-300'
          )}
        >
          <option value="" disabled>Gewünschte Leistung *</option>
          <option value="webdesign">Webdesign</option>
          <option value="seo">SEO & Content</option>
          <option value="webentwicklung">Webentwicklung</option>
          <option value="marketing">Online-Marketing</option>
          <option value="analytics">Analytics & Tracking</option>
          <option value="mobile">Mobile Optimierung</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
      </div>

      <div>
        <textarea
          rows={5}
          placeholder="Beschreiben Sie Ihr Projekt... *"
          value={formData.message}
          onChange={e => handleChange('message', e.target.value)}
          className={cn(
            'w-full px-4 py-3 rounded-md border text-[15px] text-slate-700 placeholder:text-slate-400 transition-all duration-200 outline-none focus:border-primary-500 focus:ring-[3px] focus:ring-primary-500/10 resize-vertical',
            fieldErrors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-300'
          )}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        icon={Send}
        fullWidth={fullWidthButton}
      >
        Nachricht senden
      </Button>
    </form>
  );
}
