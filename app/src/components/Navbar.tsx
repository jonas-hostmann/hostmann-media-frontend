'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { label: 'Startseite', href: '/' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Über mich', href: '/about' },
  { label: 'Kontakt', href: '/kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
          scrolled
            ? 'bg-white/85 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-black/5'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-primary-600 rounded-md flex items-center justify-center">
                <span className="text-white text-base font-bold">H</span>
              </div>
              <span className="text-lg font-bold text-slate-800">HostmannMedia</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-medium text-slate-600 hover:text-primary-600 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/kontakt"
              className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-full hover:from-primary-700 hover:to-primary-900 hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98]"
            >
              Projekt starten
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden w-11 h-11 flex items-center justify-center"
              aria-label="Menü öffnen"
            >
              <Menu className="w-6 h-6 text-slate-700" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[200] bg-white transition-opacity duration-200 md:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-4 border-b border-slate-100">
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
              <div className="w-9 h-9 bg-primary-600 rounded-md flex items-center justify-center">
                <span className="text-white text-base font-bold">H</span>
              </div>
              <span className="text-lg font-bold text-slate-800">HostmannMedia</span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-11 h-11 flex items-center justify-center"
              aria-label="Menü schließen"
            >
              <X className="w-6 h-6 text-slate-700" />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold text-slate-800 hover:text-primary-600 transition-colors duration-200"
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateY(0)' : 'translateY(10px)',
                  transition: `opacity 300ms ease ${i * 50}ms, transform 300ms ease ${i * 50}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center gap-1.5 px-7 py-3 text-base font-medium text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-full"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(10px)',
                transition: `opacity 300ms ease ${navLinks.length * 50}ms, transform 300ms ease ${navLinks.length * 50}ms`,
              }}
            >
              Projekt starten
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
