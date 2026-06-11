import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Hostmann Media | Webdesign & SEO für KMUs",
    template: "%s | Hostmann Media",
  },
  description: "Jonas Hostmann hilft kleinen und mittelständischen Unternehmen, digital sichtbar zu werden. Professionelles Webdesign, SEO und Online-Marketing.",
  keywords: ["Webdesign", "SEO", "Online-Marketing", "KMU", "Webagentur", "Digitalisierung"],
  authors: [{ name: "Jonas Hostmann" }],
  creator: "Jonas Hostmann",
  metadataBase: new URL("https://hostmann-media.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://hostmann-media.de",
    siteName: "Hostmann Media",
    title: "Hostmann Media | Webdesign & SEO für KMUs",
    description: "Professionelle Web-Lösungen für kleine und mittelständische Unternehmen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hostmann Media",
    description: "Webdesign & SEO für KMUs",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
