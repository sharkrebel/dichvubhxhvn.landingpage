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

import TechBackground from "@/components/TechBackground";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata();

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
                <main className="flex-1 pt-16">{children}</main>
                <Footer />

            </body>
        </html>
    );
}
