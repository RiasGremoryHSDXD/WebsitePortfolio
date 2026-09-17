'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { personal } from '@/content/personal';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    setStatus('submitting');
    const subject = encodeURIComponent(`Portfolio Contact: ${data.name}`);
    const body = encodeURIComponent(`From: ${data.name} (${data.email})\n\n${data.message}`);
    window.location.assign(`mailto:${personal.email}?subject=${subject}&body=${body}`);
    setTimeout(() => setStatus('sent'), 1500);
  };

  const inputClass = (hasError: boolean) =>
    `w-full bg-surface border ${hasError ? 'border-red-500' : 'border-border-bright'} rounded-lg p-3 font-sans text-foreground text-sm placeholder-foreground-muted focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary transition-colors`;

  return (
    <div className="bg-surface border border-border rounded-2xl p-8">
      <h2 className="font-bold text-xl text-foreground mb-6">Send a message</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label htmlFor="name" className="block font-mono text-xs text-foreground-muted mb-2 uppercase tracking-widest">Name</label>
          <input {...register('name')} id="name" type="text" className={inputClass(!!errors.name)} placeholder="Your name" />
          {errors.name && <p className="text-red-400 text-xs mt-1 font-mono">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block font-mono text-xs text-foreground-muted mb-2 uppercase tracking-widest">Email</label>
          <input {...register('email')} id="email" type="email" className={inputClass(!!errors.email)} placeholder="your@email.com" />
          {errors.email && <p className="text-red-400 text-xs mt-1 font-mono">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block font-mono text-xs text-foreground-muted mb-2 uppercase tracking-widest">Message</label>
          <textarea {...register('message')} id="message" rows={5} className={`${inputClass(!!errors.message)} resize-none`} placeholder="Tell me about your project..." />
          {errors.message && <p className="text-red-400 text-xs mt-1 font-mono">{errors.message.message}</p>}
        </div>
        <button type="submit" disabled={status !== 'idle'}
          className={`btn-primary w-full justify-center py-3 text-base ${status !== 'idle' ? 'opacity-70 cursor-not-allowed' : ''}`}>
          {status === 'idle' && 'Send Message →'}
          {status === 'submitting' && 'Opening email client...'}
          {status === 'sent' && '✓ Email client opened!'}
        </button>
        <p className="text-center text-xs text-foreground-muted font-mono">
          This will open your email client with the message pre-filled.
        </p>
      </form>
    </div>
  );
}
