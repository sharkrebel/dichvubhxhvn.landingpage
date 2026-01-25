import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css"; // Correct path to globals.css (parent dir)
import JsonLd, { organizationSchema } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ["latin", "vietnamese"],
    variable: "--font-inter",
    display: "swap",
    preload: true,
});

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
        "Chuyên xử lý hồ sơ rút BHXH 1 lần, gộp sổ, BHYT tự nguyện. 15+ năm kinh nghiệm, tư vấn đúng luật mới nhất 2025, hỗ trợ toàn quốc. Hotline: 0973358077",
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
        languages: {
            "en": "/en",
            "vi": "/",
        }
    },
    openGraph: {
        type: "website",
        locale: "vi_VN",
        url: "https://dichvubhxh.vn",
        siteName: "DichVuBHXH.vn",
        title: "Dịch vụ BHXH Online Trọn Gói - Uy Tín & Chuyên Nghiệp",
        description:
            "Chuyên xử lý hồ sơ rút BHXH 1 lần, gộp sổ, BHYT tự nguyện. 15+ năm kinh nghiệm, tư vấn đúng luật mới nhất 2025.",
        images: [
            {
                url: "https://dichvubhxh.vn/og-image-static.png",
                width: 1200,
                height: 630,
                alt: "DichVuBHXH.vn Open Graph Image",
            },
        ],
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
};

import TechBackground from "@/components/TechBackground";

export default function ViLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="vi" className={inter.variable} suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link rel="dns-prefetch" href="https://muabhyt.vn" />
                <link rel="dns-prefetch" href="https://congdichvubhxh.vn" />
                <JsonLd data={organizationSchema} />
            </head>
            <body className="antialiased min-h-screen flex flex-col">
                <TechBackground />
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-HREH0CV347"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HREH0CV347');
          `}
                </Script>

                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />

            </body>
        </html>
    );
}
