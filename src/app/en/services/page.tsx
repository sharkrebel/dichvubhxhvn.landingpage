import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import CTAButton from "@/components/CTAButton";
import Link from "next/link";

export const metadata: Metadata = constructMetadata({
    path: "/en/services",
    title: "Our Services - Full-service Social Insurance Store",
    description: "One-time Social Insurance withdrawal, book merging, profile completion, Voluntary Health/Social Insurance. 15+ years experience.",
});

const services = [
    {
        icon: "💰",
        title: "One-time Withdrawal",
        description:
            "Support for one-time Social Insurance withdrawal for Vietnamese workers. Consulting on latest 2025 laws, fast processing.",
        href: "/en/services/one-time-withdrawal",
        features: ["Condition Consulting", "Profile Completion", "Authorized Processing"],
    },
    {
        icon: "🌍",
        title: "Foreigner Services",
        description:
            "Social Insurance withdrawal service for foreign workers in Vietnam. Multi-language support.",
        href: "/en/services/foreigner",
        features: ["Multi-language", "Notarized Translation", "Full Handling"],
    },
    {
        icon: "📋",
        title: "Profile Completion",
        description:
            "Merging books, closing books, correcting information errors, company debt issues, lost books...",
        href: "/en/services/profile-completion",
        features: ["Merge Multiple Books", "Close Book", "Correct Info"],
    },
    {
        icon: "❤️",
        title: "Voluntary Health Ins",
        description:
            "Simplest household Health Insurance registration, lowest cost, easy access support.",
        href: "/en/services/voluntary-health-insurance",
        features: ["Low Cost", "Fast Registration", "24/7 Support"],
    },
    {
        icon: "🛡️",
        title: "Voluntary Social Ins",
        description:
            "Monthly payment or catch-up payment for retirement and survivorship benefits with reasonable fees.",
        href: "/en/services/voluntary-social-insurance",
        features: ["Flexible Payment", "Retirement Saving", "Free Consulting"],
    },
    {
        icon: "🧮",
        title: "Calculation Tools",
        description:
            "Online calculator 2026 to help you estimate one-time withdrawal amount and expected pension.",
        href: "https://muabhyt.vn/tinh-bhxh-1-lan",
        external: true,
        features: ["One-time Calc", "Pension Estimate", "Free"],
    },
];

export default function ServicesPageEn() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                        Full-service SI Consulting
                    </h1>
                    <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
                        We provide comprehensive Social Insurance & Health Insurance services with
                        15+ years of experience handling every case.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Link
                                key={service.title}
                                href={service.href}
                                target={service.external ? "_blank" : undefined}
                                rel={service.external ? "noopener noreferrer" : undefined}
                                className="group bg-white dark:bg-[#1e293b] rounded-2xl border border-[var(--border)] overflow-hidden card-hover"
                            >
                                <div className="p-6">
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h2 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors flex items-center gap-2">
                                        {service.title}
                                        {service.external && (
                                            <svg
                                                className="w-4 h-4 text-[var(--text-secondary)]"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        )}
                                    </h2>
                                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                                        {service.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-medium rounded-full"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white dark:bg-[#0d141b]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl font-black tracking-tight mb-6">
                        Not sure what you need?
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                        Contact us for free consultation. We will help you identify the best solution.
                    </p>
                    <CTAButton size="lg">Free Consultation</CTAButton>
                </div>
            </section>
        </>
    );
}
