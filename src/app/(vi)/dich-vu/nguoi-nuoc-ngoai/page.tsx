import Link from "next/link";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import CTAButton from "@/components/CTAButton";
import JsonLd, { faqSchemaBHXH } from "@/components/JsonLd";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = constructMetadata({
    path: "/dich-vu/nguoi-nuoc-ngoai",
    title: "Rút BHXH 1 lần cho Người nước ngoài - Dịch vụ Chuyên biệt",
    description: "Dịch vụ rút BHXH 1 lần dành cho lao động nước ngoài làm việc tại Việt Nam. Hỗ trợ đa ngôn ngữ, dịch thuật công chứng.",
    image: "/og-bhxh.png",
});

export default function NguoiNuocNgoaiPage() {
    return (
        <>
            <JsonLd data={faqSchemaBHXH} />
            {/* Hero */}
            <section className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                            🌍 Foreign Workers Service
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                            Rút BHXH 1 lần cho Người nước ngoài
                        </h1>
                        <p className="text-lg lg:text-xl text-white/80 mb-4">
                            Social Insurance Withdrawal Service for Foreign Workers in Vietnam
                        </p>
                        <p className="text-white/80 mb-8">
                            Hỗ trợ lao động nước ngoài rút tiền BHXH trước khi về nước. Đội ngũ
                            thông thạo ngoại ngữ, xử lý nhanh chóng.
                        </p>
                        <CTAButton size="lg" className="bg-white text-[var(--primary)] shadow-lg">
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
                            <h3 className="font-bold mb-2">Hỗ trợ đa ngôn ngữ</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Multilingual support available. Our team can communicate in
                                English and guide you through the process.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                            <div className="text-4xl mb-4">📄</div>
                            <h3 className="font-bold mb-2">Dịch thuật công chứng</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Certified translation services for passports, work permits, and
                                other documents required for the withdrawal process.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="font-bold mb-2">Xử lý nhanh chóng</h3>
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
                        Đối tượng áp dụng / Eligibility
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-[var(--background)] dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                            <h3 className="font-bold mb-2">
                                Lao động nước ngoài làm việc tại Việt Nam
                            </h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Foreign workers who have been contributing to Vietnam&apos;s social
                                insurance system (8% of salary for retirement and survivors
                                fund).
                            </p>
                        </div>
                        <div className="bg-[var(--background)] dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                            <h3 className="font-bold mb-2">Kết thúc hợp đồng lao động</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Workers whose employment contracts have ended or whose work
                                permits have expired.
                            </p>
                        </div>
                        <div className="bg-[var(--background)] dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                            <h3 className="font-bold mb-2">Về nước hoặc chuyển công tác</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Workers returning to their home country or relocating to another
                                country.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-black tracking-tight mb-4">
                            Service Locations / Khu vực hỗ trợ
                        </h2>
                        <p className="text-[var(--text-secondary)]">
                            Our team provides specialized support for expats at all major Social Insurance offices in TP.HCM and Hanoi.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            { name: "TP. Hồ Chí Minh", slug: "tp-ho-chi-minh" },
                            { name: "Hà Nội", slug: "ha-noi" },
                            { name: "Da Nang", slug: "da-nang" },
                            { name: "Bình Dương", slug: "binh-duong" },
                            { name: "Dong Nai", slug: "dong-nai" },
                            { name: "District 1", slug: "quan-1" },
                            { name: "TP. Thủ Đức", slug: "tp-thu-duc" },
                            { name: "District 7 (PMH)", slug: "quan-7" },
                            { name: "Hoan Kiem", slug: "hoan-kiem" },
                            { name: "Hà Đông", slug: "ha-dong" }
                        ].map((loc) => (
                            <Link
                                key={loc.slug}
                                href={`/dich-vu/nguoi-nuoc-ngoai/${loc.slug}`}
                                className="p-4 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 text-center hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all font-medium text-sm"
                            >
                                {loc.name}
                            </Link>
                        ))}
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
                    <CTAButton size="lg">Tư vấn cho người nước ngoài</CTAButton>
                </div>
            </section>

            <section className="py-12 bg-[var(--background)]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <AuthorBio />
                </div>
            </section>
        </>
    );
}
