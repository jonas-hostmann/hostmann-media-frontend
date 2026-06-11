import type { Metadata } from "next";
import { FileText, AlertCircle } from "lucide-react";
import { getPosts, type Post } from "@/lib/wordpress";
import SectionHeader from "@/components/SectionHeader";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTA";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tipps, Insights und News rund um Webdesign, SEO und digitales Marketing. Lesen Sie die neuesten Artikel von Hostmann Media.",
};

export default async function BlogPage() {
  let posts: Post[] = [];
  let error = false;

  try {
    const data = await getPosts(12);
    posts = data?.posts?.nodes || [];
  } catch {
    error = true;
    posts = [];
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-900 pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-[100px]" />
          <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-primary-500/15 blur-[80px]" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-primary-400 text-xs font-medium mb-4">
            <FileText className="w-3 h-3" />
            Blog
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Blog
          </h1>
          <p className="mt-3 text-base md:text-lg text-white/75 max-w-[560px] mx-auto">
            Tipps, Insights und News rund um Webdesign, SEO und digitales Marketing.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-slate-50 py-16 md:py-24 min-h-[400px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          {error ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <AlertCircle className="w-12 h-12 text-red-400 mb-4" />
              <p className="text-slate-600 font-medium">Fehler beim Laden der Blog-Posts</p>
              <p className="text-slate-400 text-sm mt-1">Bitte versuchen Sie es später erneut.</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <FileText className="w-16 h-16 text-slate-300 mb-4" />
              <p className="text-slate-400 font-medium">Noch keine Blog-Posts vorhanden</p>
              <p className="text-slate-400 text-sm mt-1">Schauen Sie bald wieder vorbei!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  imageUrl={post.featuredImage?.node?.sourceUrl}
                  imageAlt={post.featuredImage?.node?.altText || post.title}
                  slug={post.slug}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Keinen Artikel verpassen"
        subtitle="Neue Insights direkt in Ihren Posteingang."
        primaryButton={{ label: "Kontakt aufnehmen", href: "/kontakt" }}
        secondaryButton={{ label: "RSS-Feed", href: "#" }}
      />
    </>
  );
}
