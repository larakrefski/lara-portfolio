import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google';
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from "@next/third-parties/google";


const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

// const geistMono = Geist_Mono({
//   subsets: ["latin"],
//   variable: "--font-mono", // <--- This is the definition
// });

export const metadata: Metadata = {
  title: "Lara Krefski | Principal Web Engineer & Engineering Manager",
  description: "Principal Web Engineer & Engineering Manager specializing in scalable web architecture, clean code, and technical leadership. Building the future of the web with a focus on excellence.",
  openGraph: {
    title: "Lara Krefski | Principal Web Engineer",
    description: "Principal Web Engineer & Engineering Manager specializing in scalable web architecture and technical leadership.",
    url: "https://larakrefski.com",
    siteName: "Lara Krefski",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Lara Krefski - Principal Web Engineer & Engineering Manager",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lara Krefski | Principal Web Engineer",
    description: "Specializing in scalable web architecture and technical leadership.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} h-full antialiased`}
    >
      {/* Google Tag Manager */}
      {process.env.NEXT_PUBLIC_GTM_ID ? (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      ) : null}  
      <body className="font-sans min-h-full flex flex-col" suppressHydrationWarning>
        {/* GTM Noscript Fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}

        {/* Vercel Tools */}
        <Analytics />
        <SpeedInsights />
        
        {/* Google Analytics 4 */}
        {/* {process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        ) : null} */}

      </body>
    </html>
  );
}
