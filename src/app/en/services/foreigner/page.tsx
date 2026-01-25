import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
    title: "One-time Social Insurance Withdrawal for Foreigners - Specialized Service",
    description:
        "One-time social insurance withdrawal service for foreign workers in Vietnam. Multi-language support, notarized translation, fast processing.",
};

export default function ForeignerServicePageEn() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                            🌍 Foreign Workers Service
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                            Social Insurance Withdrawal for Foreigners
                        </h1>
                        <p className="text-lg lg:text-xl text-white/80 mb-4">
                            Social Insurance Withdrawal Service for Foreign Workers in Vietnam
                        </p>
                        <p className="text-white/80 mb-8">
                            Supporting foreign workers to withdraw SI money before returning home.
                            Team fluent in foreign languages, fast processing.
                        </p>
                        <CTAButton size="lg" className="bg-white text-[var(--primary)] hover:bg-white/90">
                            Contact Us / Liên hệ ngay
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                            <div className="text-4xl mb-4">🗣️</div>
                            <h3 className="font-bold mb-2">Multi-language Support</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Multilingual support available. Our team can communicate in
                                English and guide you through the process.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                            <div className="text-4xl mb-4">📄</div>
                            <h3 className="font-bold mb-2">Certified Translation</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Certified translation services for passports, work permits, and
                                other documents required for the withdrawal process.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="font-bold mb-2">Fast Processing</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Fast processing for workers with urgent departure dates. We
                                optimize the process to meet your timeline.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who can apply */}
            <section className="py-20 bg-white dark:bg-[#0d141b]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-black tracking-tight mb-8 text-center">
                        Eligibility / Đối tượng áp dụng
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-[var(--background)] dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                            <h3 className="font-bold mb-2">
                                Foreign workers in Vietnam
                            </h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Foreign workers who have been contributing to Vietnam&apos;s social
                                insurance system (8% of salary for retirement and survivors
                                fund).
                            </p>
                        </div>
                        <div className="bg-[var(--background)] dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                            <h3 className="font-bold mb-2">Employment contract ended</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Workers whose employment contracts have ended or whose work
                                permits have expired.
                            </p>
                        </div>
                        <div className="bg-[var(--background)] dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                            <h3 className="font-bold mb-2">Returning home or relocating</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Workers returning to their home country or relocating to another
                                country.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl font-black tracking-tight mb-6">
                        Ready to proceed? / Sẵn sàng bắt đầu?
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                        Contact us today for a free consultation. We&apos;ll guide you through
                        the entire process.
                    </p>
                    <CTAButton size="lg">Contact Us / Liên hệ ngay</CTAButton>
                </div>
            </section>
        </>
    );
}
