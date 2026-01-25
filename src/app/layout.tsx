import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd, { organizationSchema } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

// Viewport configuration for mobile optimization
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#101922" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "DichVuBHXH.vn - Dịch vụ Tư vấn BHXH Trọn Gói",
    template: "%s | DichVuBHXH.vn",
  },
  description:
    "Chuyên xử lý hồ sơ rút BHXH 1 lần, gộp sổ, BHYT tự nguyện. 15+ năm kinh nghiệm, tư vấn đúng luật 2025, hỗ trợ toàn quốc. Hotline: 0973358077",
  keywords: [
    "rút bhxh 1 lần",
    "dịch vụ bhxh",
    "gộp sổ bhxh",
    "bhyt tự nguyện",
    "tư vấn bhxh",
    "rút bảo hiểm xã hội",
  ],
  authors: [{ name: "Tam Giang Co., Ltd", url: "https://tamgiangcapital.com" }],
  creator: "DichVuBHXH.vn",
  metadataBase: new URL("https://dichvubhxh.vn"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://dichvubhxh.vn",
    siteName: "DichVuBHXH.vn",
    title: "DichVuBHXH.vn - Dịch vụ Tư vấn BHXH Trọn Gói",
    description:
      "Chuyên xử lý hồ sơ rút BHXH 1 lần, gộp sổ, BHYT tự nguyện. 15+ năm kinh nghiệm.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add these when you have the actual verification codes
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* DNS Prefetch for external links */}
        <link rel="dns-prefetch" href="https://congdichvubhxh.vn" />
        <link rel="dns-prefetch" href="https://muabhyt.vn" />
        <JsonLd data={organizationSchema} />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}



