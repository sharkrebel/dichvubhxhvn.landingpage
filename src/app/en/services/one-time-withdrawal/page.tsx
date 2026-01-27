import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import CTAButton from "@/components/CTAButton";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import JsonLd, { faqSchemaBHXHEn } from "@/components/JsonLd";

export const metadata: Metadata = constructMetadata({
    path: "/en/services/one-time-withdrawal",
    title: "One-time Social Insurance Withdrawal Service - Fast & Legal 2025",
    description: "Specializing in one-time social insurance withdrawal, book merging, book loss. Consulting on correct 2025 SI laws, legal authorization procedures.",
});

const breadcrumbItems = [
    { name: "Home", path: "/en" },
    { name: "Services", path: "/en/services" },
    { name: "One-time Withdrawal", path: "/en/services/one-time-withdrawal" },
];

const steps = [
    {
        number: "01",
        title: "Reception & Consultation",
        description:
            "Check book, contribution history, determine conditions and suitable processing plan.",
    },
    {
        number: "02",
        title: "Sign Authorization",
        description:
            "Clients only need to visit the notary office once to sign authorization (if choosing authorization method).",
    },
    {
        number: "03",
        title: "Submission & Explanation",
        description:
            "We work directly with the Social Insurance agency, explaining and resolving any issues on your behalf.",
    },
    {
        number: "04",
        title: "Result & Handover",
        description:
            "SI money transferred to your account. We hand over all original documents.",
    },
];

export default function OneTimeWithdrawalPageEn() {
    return (
        <>
            <BreadcrumbJsonLd items={breadcrumbItems} />
            <JsonLd data={faqSchemaBHXHEn} />
            {/* Hero */}
            <section className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            SI Law 2024 - Effective 1/7/2025
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                            One-time Social Insurance Withdrawal
                        </h1>
                        <p className="text-lg lg:text-xl text-white/80 mb-8">
                            We assist in preparing documents and submitting on your behalf (via authorization). Fast processing,
                            legally compliant, 100% fee refund commitment if not successful.
                        </p>
                        <CTAButton size="lg" className="bg-white text-[var(--primary)] hover:bg-white/90">
                            Free Consultation Now
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* Conditions - Cards */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-black tracking-tight mb-4">
                            One-time Withdrawal Conditions under Law 2025
                        </h2>
                        <p className="text-[var(--text-secondary)]">
                            The Social Insurance Law 2024 (effective from 1/7/2025) has important changes regarding
                            one-time withdrawal conditions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Card 1 - Before 1/7/2025 */}
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl border-2 border-green-500 p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-bold rounded-bl-xl">
                                ✓ Eligible
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold mb-4 text-green-600">
                                    Participated BEFORE 1/7/2025
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm">
                                            Still eligible after <strong>12 months</strong> of stopping contribution
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm">
                                            Applies to those with contribution periods before 1/7/2025
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm">
                                            This is the <strong>main customer group</strong> of our service
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 2 - After 1/7/2025 */}
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl border-2 border-amber-500 p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-amber-500 text-white px-4 py-1 text-sm font-bold rounded-bl-xl">
                                ⚠ Restricted
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold mb-4 text-amber-600">
                                    Participated AFTER 1/7/2025
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span className="text-sm">
                                            Only eligible if <strong>settling abroad</strong>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span className="text-sm">
                                            Suffering from <strong>life-threatening diseases</strong> (cancer, paralysis...)
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span className="text-sm">
                                            Reached retirement age but <strong>not enough years contributed</strong>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-[var(--text-secondary)] mb-4">
                            Not sure which group you belong to?
                        </p>
                        <CTAButton>Submit Info for Appraisal</CTAButton>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-white dark:bg-[#0d141b]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-black tracking-tight mb-4">
                            Working Process
                        </h2>
                        <p className="text-[var(--text-secondary)]">
                            Optimized process ensures convenient travel and fastest money reception.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className="relative bg-[var(--background)] dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]"
                            >
                                <div className="text-5xl font-black text-[var(--primary)]/20 mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                                <p className="text-sm text-[var(--text-secondary)]">
                                    {step.description}
                                </p>
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                                        <svg
                                            className="w-6 h-6 text-[var(--primary)]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fees */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-black tracking-tight mb-4">
                            Reference Fees
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-[var(--border)]">
                            <h3 className="text-xl font-bold mb-2">Consultation & Guide</h3>
                            <p className="text-4xl font-black text-[var(--primary)] mb-4">
                                From 1 Million
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-2 text-sm">
                                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Guide to filling documents
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Guide on method & submission place
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Nationwide guidance
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    You submit yourself
                                </li>
                            </ul>
                            <CTAButton variant="outline" className="w-full">
                                Choose This Package
                            </CTAButton>
                        </div>

                        <div className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white rounded-2xl p-8 relative overflow-hidden">
                            <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-xs font-bold">
                                Popular
                            </div>
                            <h3 className="text-xl font-bold mb-2">Full Authorization</h3>
                            <p className="text-4xl font-black mb-4">From 12 Million</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-2 text-sm">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Sign authorization only once
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    We handle everything
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Authorization in HCMC
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Pay later option available
                                </li>
                            </ul>
                            <CTAButton className="w-full bg-white text-[var(--primary)]">
                                Choose This Package
                            </CTAButton>
                        </div>
                    </div>

                    <p className="text-center text-sm text-[var(--text-secondary)] mt-8">
                        * 100% Refund if work cannot be done
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white dark:bg-[#0d141b]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl font-black tracking-tight mb-6">
                        Ready to Withdraw?
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                        Contact now for free consultation on conditions and the most suitable processing plan
                        for you.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <CTAButton size="lg">Contact for Consultation</CTAButton>
                        <a
                            href="tel:0973358077"
                            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-[var(--primary)] bg-[var(--primary)]/10 rounded-xl hover:bg-[var(--primary)]/20 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            0973 358 077
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
