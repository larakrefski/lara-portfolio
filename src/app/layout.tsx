import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google';
// import localFont from 'next/font/local';
import "./globals.css";

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
  title: "Lara Krefski - Product Designer",
  description: "Lara Krefski is a product designer specializing in crafting intuitive and engaging digital experiences. With a passion for user-centered design, Lara combines creativity with strategic thinking to deliver impactful solutions that resonate with users and drive business success.",
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
      <body className="font-sans min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
