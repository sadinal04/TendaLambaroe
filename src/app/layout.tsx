import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tenda lambaroe - Pusat jual tenda terpal & Jaring pengaman",
  description:
    "Tenda Lambaroe adalah pusat penjualan tenda terpal, jaring pengaman, payung parasol, dan berbagai produk outdoor berkualitas. Harga terbaik, kualitas terpercaya.",
  keywords: "tenda terpal, jaring pengaman, tenda lipat, tenda kerucut, terpal, payung parasol, tenda pramuka",
  icons: {
    icon: "/images/LogoSingle.png",
  },
  openGraph: {
    title: "Tenda lambaroe - Pusat jual tenda terpal & Jaring pengaman",
    description: "Pusat penjualan tenda terpal dan jaring pengaman berkualitas tinggi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`} data-scroll-behavior="smooth">
      <head>
        {/* Integral CF via Fontshare */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=integral-cf@700,800&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
