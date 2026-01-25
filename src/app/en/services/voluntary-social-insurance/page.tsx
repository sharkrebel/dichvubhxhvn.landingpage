import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
    title: "Voluntary Social Insurance - Flexible Payment, Retirement Savings",
    description:
        "Simple voluntary Social Insurance registration, monthly payment or catch-up payment for retirement and survivorship benefits. Reasonable cost.",
};

export default function VoluntarySocialInsurancePageEn() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                            🛡️ Secure Future
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                            Voluntary Social Insurance
                        </h1>
                        <p className="text-lg lg:text-xl text-white/80 mb-8">
                            Simplest registration, lowest cost. Monthly payment or catch-up payment
                            for retirement and survivorship benefits.
                        </p>
                        <CTAButton size="lg" className="bg-white text-[var(--primary)] hover:bg-white/90">
                            Registration Consultation
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-black tracking-tight mb-12 text-center">
                        Benefits of Voluntary Social Insurance
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                            <div className="text-4xl mb-4">👴</div>
                            <h3 className="font-bold mb-2">Monthly Pension</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                When reaching retirement age and having 20 years of contribution, you receive monthly pension for life.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                            <div className="text-4xl mb-4">💐</div>
                            <h3 className="font-bold mb-2">Survivorship Benefit</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Relatives receive funeral allowace and monthly or one-time survivorship allowance when the participant passes away.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                            <div className="text-4xl mb-4">📅</div>
                            <h3 className="font-bold mb-2">Flexible Payment</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Pay monthly, every 3 months, 6 months, 12 months or one-time for multiple years depending on financial ability.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                            <div className="text-4xl mb-4">💵</div>
                            <h3 className="font-bold mb-2">Selectable Contribution Level</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Choose contribution level from basic salary up to 20 times basic salary, suitable for your income.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white dark:bg-[#0d141b]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl font-black tracking-tight mb-6">
                        Start Accumulating for Future
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                        Contact for consultation on contribution levels and benefits suitable for you.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <CTAButton size="lg">Consult SI Registration</CTAButton>
                        <a
                            href="https://muabhyt.vn/du-kien-luong-huu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-[var(--primary)] bg-[var(--primary)]/10 rounded-xl hover:bg-[var(--primary)]/20 transition-colors"
                        >
                            Pension Estimate at muabhyt.vn
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
