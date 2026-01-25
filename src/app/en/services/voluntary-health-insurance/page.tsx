import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
    title: "Voluntary Health Insurance - Simple, Low Cost",
    description:
        "Simplest household Health Insurance registration, lowest cost. Easiest access support channel for Health Insurance.",
};

export default function VoluntaryHealthInsurancePageEn() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-pink-500 to-rose-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                            ❤️ Protect Family Health
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                            Voluntary Health Insurance (Household)
                        </h1>
                        <p className="text-lg lg:text-xl text-white/80 mb-8">
                            Simplest registration, lowest cost, easiest access support channel for Health Insurance.
                        </p>
                        <CTAButton size="lg" className="bg-white text-rose-600 hover:bg-white/90">
                            Register Now
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-black tracking-tight mb-12 text-center">
                        Benefits of Voluntary Health Insurance
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">💰</span>
                            </div>
                            <h3 className="font-bold mb-2">Low Cost</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Reasonable cost, suitable for every family. Supported by the state.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🏥</span>
                            </div>
                            <h3 className="font-bold mb-2">Medical Treatment</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Cover 80-100% of medical examination and treatment costs at registered facilities.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">👨‍👩‍👧‍👦</span>
                            </div>
                            <h3 className="font-bold mb-2">Protect Whole Family</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Register for the whole household, relatives get discounted rates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white dark:bg-[#0d141b]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl font-black tracking-tight mb-6">
                        Want to register HI?
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                        Contact for consultation on fees and benefits suitable for your family.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <CTAButton size="lg">Consult HI Registration</CTAButton>
                        <a
                            href="https://muabhyt.vn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-[var(--primary)] bg-[var(--primary)]/10 rounded-xl hover:bg-[var(--primary)]/20 transition-colors"
                        >
                            Register online at muabhyt.vn
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
