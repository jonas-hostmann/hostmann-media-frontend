import Link from 'next/link';

const footerLinks = {
  leistungen: [
    { label: 'Webdesign', href: '/leistungen#webdesign' },
    { label: 'SEO', href: '/leistungen#seo' },
    { label: 'Webentwicklung', href: '/leistungen#entwicklung' },
    { label: 'Online-Marketing', href: '/leistungen#marketing' },
  ],
  unternehmen: [
    { label: 'Über mich', href: '/about' },
    { label: 'Kontakt', href: '/kontakt' },
    { label: 'Blog', href: '/blog' },
  ],
  rechtliches: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-600 rounded-md flex items-center justify-center">
                <span className="text-white text-sm font-bold">H</span>
              </div>
              <span className="text-base font-bold text-white">HostmannMedia</span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-[280px]">
              Professionelle Web-Lösungen für kleine und mittelständische Unternehmen. Ich helfe Ihnen, digital sichtbar zu werden.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Leistungen</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.leistungen.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Unternehmen</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.unternehmen.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Rechtliches</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.rechtliches.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[13px] text-slate-500">
            &copy; {new Date().getFullYear()} Hostmann Media. Alle Rechte vorbehalten.
          </p>
          <p className="text-[13px] text-slate-500">
            Made with &hearts; by Jonas Hostmann
          </p>
        </div>
      </div>
    </footer>
  );
}
