import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.myway-egypt.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "موقع شركة ماي واي (ماى واى) مصر | MyWay Egypt",
    template: "%s | ماي واي مصر MyWay",
  },

  description:
    "الموقع الرسمي لشركة ماي واي مصر (ماى واى ايجيبت). اكتشفي منتجات ماي واي الأصلية، عروض كتالوج ماي وي الحصرية، وفرص العمل. انضمي إلينا الآن.",
  keywords: [
    "ماي واي",
    "ماى واى",
    "شركة ماي وي",
    "موقع ماى واى",
    "لوجو ماي واي",
    "ماى واى ايجيبت",
    "ماى واى مصر",
    "منتجات ماي واي",
    "My way",
    "MyWay",
    "My way egypt",
    "عروض ماي واي",
    "كتالوج ماي واي",
    "عضوية ماي واي",
    "مستحضرات تجميل ماي واي",
    "عناية بالبشرة",
    "عطور ماي واي",
    "فرصة عمل ماي واي",
  ],
  openGraph: {
    title: "موقع شركة ماي واي مصر | منتجات وعروض MyWay",
    description:
      "اكتشفي منتجات ماي واي الأصلية في مصر. عروض حصرية على مستحضرات التجميل، العناية بالبشرة والشعر، العطور، والمنظفات.",
    url: siteUrl,
    siteName: "MyWay Egypt",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "لوجو ماي واي - My Way Logo",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  verification: {
    google: "iii6aIOsXsLot2QPJybSEt_QEbcBs7ybWOFDgsFOm9Y",
  },
  alternates: {
    canonical: siteUrl,
  },
};

// JSON-LD Schema to claim the company entity and logo in Google
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ماي واي مصر",
  alternateName: [
    "MyWay Egypt",
    "ماى واى",
    "شركة ماي وي",
    "ماي واى ايجيبت",
    "My Way",
  ],
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${tajawal.className} min-h-full flex flex-col`}>
        <Navbar />
        {children}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MTSHJRKM');
          `}
        </Script>
        <Footer />
      </body>
    </html>
  );
}
