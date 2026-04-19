import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), // Ensure this is your production URL
  title: "MyWay - ماي واي مصر | منتجات تجميل وعناية وفرص عمل",
  description: "اكتشفي منتجات ماي واي الأصلية في مصر. عروض حصرية على مستحضرات التجميل، العناية بالبشرة والشعر، العطور، والمنظفات. انضمي إلى فريق ماي واي لتحقيق النجاح المالي.",
  keywords: ["My way", "MyWay", "My way egypt", "ماي واي", "منتجات ماي واي", "ماي واي مصر", "عروض ماي واي", "كتالوج ماي واي", "عضوية ماي واي", "مستحضرات تجميل ماي واي", "عناية بالبشرة ماي واي", "عطور ماي واي", "فرصة عمل ماي واي", "بيع مباشر ماي واي", "منتجات طبيعية ماي واي"],
  openGraph: {
    title: "MyWay - ماي واي مصر | منتجات تجميل وعناية وفرص عمل",
    description: "اكتشفي منتجات ماي واي الأصلية في مصر. عروض حصرية على مستحضرات التجميل، العناية بالبشرة والشعر، العطور، والمنظفات. انضمي إلى فريق ماي واي لتحقيق النجاح المالي.",
    url: siteUrl,
    siteName: "MyWay",
    images: [
      {
        url: '/og-image.jpg', // Will be resolved using metadataBase
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className="h-full antialiased"
    >
      <body className={`${tajawal.className} min-h-full flex flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
