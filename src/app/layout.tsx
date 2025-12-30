import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Cengiz Toptan | Toptan Çocuk Giyim - Çocuk Mont, Çocuk Bot Toptancısı",
  description: "Cengiz Toptan - Toptan çocuk mont, toptan çocuk bot, toptan çocuk giyim ürünleri. 2019-2020 dönemi ticari ilişkiler hakkında resmi bilgilendirme ve kamuoyu duyurusu. cengiztoptan.com",
  keywords: "toptan çocuk mont, toptan çocuk bot, çocuk giyim toptan, toptan çocuk kıyafet, çocuk mont toptancısı, çocuk bot toptancısı, cengiz toptan, cengiztoptan, toptan bebek giyim, çocuk giyim toptancıları, istanbul toptan çocuk giyim, toptan kışlık çocuk giyim, toptan çocuk ayakkabı",
  authors: [{ name: "Cengiz Toptan" }],
  creator: "Cengiz Toptan",
  publisher: "Cengiz Toptan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://cengiztoptan.com",
    siteName: "Cengiz Toptan",
    title: "Cengiz Toptan | Toptan Çocuk Mont ve Çocuk Bot Toptancısı",
    description: "Toptan çocuk mont, toptan çocuk bot ve çocuk giyim ürünleri. Geçmiş dönem bilgilendirme ve kamuoyu duyurusu.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cengiz Toptan | Toptan Çocuk Giyim",
    description: "Toptan çocuk mont, toptan çocuk bot. Geçmiş dönem bilgilendirme sayfası.",
  },
  alternates: {
    canonical: "https://cengiztoptan.com",
  },
  other: {
    "geo.region": "TR",
    "geo.placename": "Istanbul",
    "distribution": "global",
    "rating": "general",
    "revisit-after": "7 days",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://cengiztoptan.com" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="Istanbul" />
        <meta name="language" content="Turkish" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Cengiz Toptan",
              "alternateName": ["cengiztoptan.com", "cengiztoptan.com.tr", "Toptan Çocuk Mont", "Toptan Çocuk Bot"],
              "url": "https://cengiztoptan.com",
              "description": "Toptan çocuk mont, toptan çocuk bot ve çocuk giyim ürünleri toptancısı. Geçmiş dönem bilgilendirme sayfası.",
              "foundingDate": "2019",
              "areaServed": "TR",
              "knowsAbout": [
                "Toptan çocuk mont",
                "Toptan çocuk bot", 
                "Çocuk giyim toptan",
                "Toptan çocuk ayakkabı",
                "Toptan bebek giyim",
                "Çocuk kıyafet toptan"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+90-532-166-7697",
                "contactType": "customer service",
                "availableLanguage": "Turkish"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Cengiz Toptan - Toptan Çocuk Mont ve Bot",
              "description": "Toptan çocuk mont, toptan çocuk bot satışı yapan Cengiz Toptan firmasının geçmiş dönem bilgilendirme sayfası",
              "publisher": {
                "@type": "Organization",
                "name": "Cengiz Toptan"
              },
              "about": {
                "@type": "Thing",
                "name": "Toptan Çocuk Giyim",
                "description": "Toptan çocuk mont, toptan çocuk bot, çocuk giyim toptan satış"
              }
            })
          }}
        />
      </head>
      <body className={`${sourceSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
