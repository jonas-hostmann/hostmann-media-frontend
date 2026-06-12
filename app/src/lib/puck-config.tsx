import type { Config } from '@measured/puck';

// Import existing components
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import BlogPreview from '@/components/BlogPreview';
import CTASection from '@/components/CTA';
import ContactSection from '@/components/ContactSection';

type PuckComponents = {
  HeroSection: {};
  ServicesSection: {};
  AboutSection: {};
  BlogPreviewSection: {};
  ContactFormSection: {};
  CTASection: {
    title: string;
    subtitle: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
  RichTextBlock: {
    content: string;
  };
  SpacerBlock: {
    height: string;
  };
  HeadingBlock: {
    text: string;
    level: string;
    alignment: string;
  };
};

export const puckConfig: Config<PuckComponents> = {
  categories: {
    'Sektionen': {
      components: ['HeroSection', 'ServicesSection', 'AboutSection', 'BlogPreviewSection', 'ContactFormSection', 'CTASection'],
    },
    'Inhalt': {
      components: ['RichTextBlock', 'HeadingBlock', 'SpacerBlock'],
    },
  },
  components: {
    HeroSection: {
      label: 'Hero-Bereich',
      render: () => <Hero />,
    },
    ServicesSection: {
      label: 'Leistungen-Übersicht',
      render: () => <Services />,
    },
    AboutSection: {
      label: 'Über Mich',
      render: () => <About />,
    },
    BlogPreviewSection: {
      label: 'Blog-Vorschau',
      render: () => <BlogPreview />,
    },
    ContactFormSection: {
      label: 'Kontaktformular',
      render: () => <ContactSection />,
    },
    CTASection: {
      label: 'Call-to-Action',
      fields: {
        title: { type: 'text', label: 'Titel' },
        subtitle: { type: 'text', label: 'Untertitel' },
        primaryLabel: { type: 'text', label: 'Primärer Button Text' },
        primaryHref: { type: 'text', label: 'Primärer Button Link' },
        secondaryLabel: { type: 'text', label: 'Sekundärer Button Text' },
        secondaryHref: { type: 'text', label: 'Sekundärer Button Link' },
      },
      defaultProps: {
        title: 'Bereit, Ihr Unternehmen digital zu transformieren?',
        subtitle: 'Vereinbaren Sie ein kostenloses Erstgespräch.',
        primaryLabel: 'Termin vereinbaren',
        primaryHref: '/kontakt',
        secondaryLabel: 'Direkt E-Mail schreiben',
        secondaryHref: 'mailto:jonas@hostmann-media.de',
      },
      render: ({ title, subtitle, primaryLabel, primaryHref, secondaryLabel, secondaryHref }) => (
        <CTASection
          title={title}
          subtitle={subtitle}
          primaryButton={{ label: primaryLabel, href: primaryHref }}
          secondaryButton={{ label: secondaryLabel, href: secondaryHref }}
        />
      ),
    },
    RichTextBlock: {
      label: 'Text-Block',
      fields: {
        content: { type: 'textarea', label: 'Inhalt' },
      },
      defaultProps: {
        content: 'Hier können Sie Text eingeben...',
      },
      render: ({ content }) => (
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-[720px] mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-base text-slate-600 leading-[1.8] whitespace-pre-wrap">{content}</div>
          </div>
        </section>
      ),
    },
    HeadingBlock: {
      label: 'Überschrift',
      fields: {
        text: { type: 'text', label: 'Text' },
        level: {
          type: 'select',
          label: 'Größe',
          options: [
            { label: 'H1 — Groß', value: 'h1' },
            { label: 'H2 — Mittel', value: 'h2' },
            { label: 'H3 — Klein', value: 'h3' },
          ],
        },
        alignment: {
          type: 'select',
          label: 'Ausrichtung',
          options: [
            { label: 'Links', value: 'left' },
            { label: 'Zentriert', value: 'center' },
          ],
        },
      },
      defaultProps: {
        text: 'Überschrift',
        level: 'h2',
        alignment: 'left',
      },
      render: ({ text, level, alignment }) => {
        const Tag = level as any;
        const sizes: Record<string, string> = {
          h1: 'text-3xl md:text-4xl lg:text-5xl',
          h2: 'text-2xl md:text-3xl',
          h3: 'text-xl md:text-2xl',
        };
        return (
          <section className="bg-white py-8 md:py-12">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
              <Tag className={`font-bold text-slate-900 tracking-tight ${sizes[level] || sizes.h2} ${alignment === 'center' ? 'text-center' : ''}`}>
                {text}
              </Tag>
            </div>
          </section>
        );
      },
    },
    SpacerBlock: {
      label: 'Abstand',
      fields: {
        height: {
          type: 'select',
          label: 'Höhe',
          options: [
            { label: 'Klein (32px)', value: '32' },
            { label: 'Mittel (64px)', value: '64' },
            { label: 'Groß (96px)', value: '96' },
            { label: 'Sehr groß (128px)', value: '128' },
          ],
        },
      },
      defaultProps: { height: '64' },
      render: ({ height }) => <div style={{ height: `${height}px` }} />,
    },
  },
};
