import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css"; // Use same globals
import JsonLd, { organizationSchemaEn } from "@/components/JsonLd";
import NavbarEn from "@/components/NavbarEn";
import FooterEn from "@/components/FooterEn";

const inter = Inter({
    subsets: ["latin"],
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
        default: "DichVuBHXH.vn - Social Insurance Service Agency",
        template: "%s | DichVuBHXH.vn",
    },
    description:
        "Handling One-time Social Insurance withdrawal, Book merging, Voluntary Health Insurance. 15+ years experience, 2025 Law compliant, Nationwide support.",
    keywords: [
        "social insurance withdrawal",
        "vietnam social insurance",
        "combine social insurance books",
        "voluntary health insurance",
        "social insurance consulting",
    ],
    authors: [{ name: "Tam Giang Co., Ltd", url: "https://tamgiangcapital.com" }],
    creator: "DichVuBHXH.vn",
    metadataBase: new URL("https://dichvubhxh.vn"),
    alternates: {
        canonical: "/en",
        languages: {
            "en": "/en",
            "vi": "/",
        }
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://dichvubhxh.vn/en",
        siteName: "DichVuBHXH.vn",
        title: "DichVuBHXH.vn - Full-service Social Insurance Consulting",
        description:
            "Handling One-time Social Insurance withdrawal, Book merging, Voluntary Health Insurance. 15+ years experience.",
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

export default function EnLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable} suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <JsonLd data={organizationSchemaEn} />
            </head>
            <body className="antialiased min-h-screen flex flex-col">
                <TechBackground />
                {/* Same GA4 tracking */}
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

                <NavbarEn />
                <main className="flex-1">{children}</main>
                <FooterEn />

            </body>
        </html>
    );
}
