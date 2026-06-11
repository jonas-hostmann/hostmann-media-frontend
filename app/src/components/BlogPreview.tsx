'use client';

import { useEffect, useRef, useState } from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import { getPosts, type PostsData } from '@/lib/wordpress';
import SectionHeader from './SectionHeader';
import BlogCard from './BlogCard';
import Link from 'next/link';

export default function BlogPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [postsData, setPostsData] = useState<PostsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts(3)
      .then(data => setPostsData(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('[data-animate]');
            elements.forEach((el, i) => {
              const htmlEl = el as HTMLElement;
              setTimeout(() => {
                htmlEl.style.opacity = '1';
                htmlEl.style.transform = 'translateY(0)';
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [loading]);

  const posts = postsData?.posts?.nodes || [];

  return (
    <section ref={sectionRef} className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div
          data-animate
          style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <SectionHeader
            preTitle="Blog"
            title="Aktuelles aus der Digitalwelt"
            subtitle="Tipps, Insights und News rund um Webdesign, SEO und digitales Marketing."
          />
        </div>

        {loading ? (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-80 rounded-xl bg-slate-200 animate-pulse" />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="mt-12 flex flex-col items-center justify-center py-16 text-center">
            <FileText className="w-12 h-12 text-slate-300 mb-4" />
            <p className="text-slate-400 font-medium">Noch keine Blog-Posts vorhanden</p>
            <p className="text-slate-400 text-sm mt-1">Schauen Sie bald wieder vorbei!</p>
          </div>
        ) : (
          <>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  data-animate
                  style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <BlogCard
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    imageUrl={post.featuredImage?.node?.sourceUrl}
                    imageAlt={post.featuredImage?.node?.altText || post.title}
                    slug={post.slug}
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:underline underline-offset-2"
              >
                Alle Artikel ansehen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
