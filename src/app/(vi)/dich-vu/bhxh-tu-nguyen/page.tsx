import Link from "next/link";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import CTAButton from "@/components/CTAButton";
import JsonLd, { faqSchemaBHXH } from "@/components/JsonLd";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = constructMetadata({
    path: "/dich-vu/bhxh-tu-nguyen",
    title: "BHXH tự nguyện - Đóng linh hoạt, Tích lũy hưu trí",
    description: "Đăng ký BHXH tự nguyện đơn giản, đóng hàng tháng hoặc đóng bù để lãnh hưu trí, tử tuất. Chi phí hợp lý.",
    image: "/og-luong-huu.png",
});

export default function BHXHTuNguyenPage() {
    return (
        <>
            <JsonLd data={faqSchemaBHXH} />
            {/* Hero */}
            <section className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                            🛡️ Bảo đảm tương lai
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                            BHXH tự nguyện
                        </h1>
                        <p className="text-lg lg:text-xl text-white/80 mb-8">
                            Đăng ký đơn giản nhất, chi phí thấp nhất. Đóng hàng tháng hoặc đóng
                            bù để lãnh hưu trí, tử tuất.
                        </p>
                        <CTAButton size="lg" className="bg-white text-[var(--primary)] shadow-lg" href="https://muabhyt.vn">
                            Đăng ký ngay
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-black tracking-tight mb-12 text-center">
                        Quyền lợi BHXH tự nguyện
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                            <div className="text-4xl mb-4">👴</div>
                            <h3 className="font-bold mb-2">Lương hưu hàng tháng</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Khi đủ tuổi nghỉ hưu và đủ 20 năm đóng BHXH, bạn được nhận lương
                                hưu hàng tháng đến suốt đời.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                            <div className="text-4xl mb-4">💐</div>
                            <h3 className="font-bold mb-2">Chế độ tử tuất</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Thân nhân được hưởng trợ cấp mai táng và tuất hàng tháng hoặc một
                                lần khi người tham gia qua đời.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                            <div className="text-4xl mb-4">📅</div>
                            <h3 className="font-bold mb-2">Đóng linh hoạt</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Đóng hàng tháng, 3 tháng, 6 tháng, 12 tháng hoặc một lần cho nhiều
                                năm tùy khả năng tài chính.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                            <div className="text-4xl mb-4">💵</div>
                            <h3 className="font-bold mb-2">Mức đóng tự chọn</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Tự chọn mức đống từ mức lương cơ sở đến 20 lần mức lương cơ sở,
                                phù hợp với thu nhập của bạn.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-black tracking-tight mb-4">
                            Khu vực tư vấn BHXH tại chỗ
                        </h2>
                        <p className="text-[var(--text-secondary)]">
                            Chúng tôi hỗ trợ tư vấn và hướng dẫn tham gia BHXH tự nguyện tại các quận huyện và tỉnh thành lớn trên cả nước.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            { name: "TP. Hồ Chí Minh", slug: "tp-ho-chi-minh" },
                            { name: "Hà Nội", slug: "ha-noi" },
                            { name: "Đà Nẵng", slug: "da-nang" },
                            { name: "Bình Dương", slug: "binh-duong" },
                            { name: "Đồng Nai", slug: "dong-nai" },
                            { name: "Quận 1", slug: "quan-1" },
                            { name: "TP. Thủ Đức", slug: "tp-thu-duc" },
                            { name: "Quận 7", slug: "quan-7" },
                            { name: "Hà Đông", slug: "ha-dong" },
                            { name: "Cầu Giấy", slug: "cau-giay" }
                        ].map((loc) => (
                            <Link
                                key={loc.slug}
                                href={`/dich-vu/bhxh-tu-nguyen/${loc.slug}`}
                                className="p-4 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 text-center hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all font-medium text-sm"
                            >
                                {loc.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white dark:bg-[#0d141b]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl font-black tracking-tight mb-6">
                        Bắt đầu tích lũy cho tương lai
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                        Liên hệ để được tư vấn mức đóng và quyền lợi phù hợp với bạn.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <CTAButton size="lg">Tư vấn đăng ký BHXH</CTAButton>
                        <a
                            href="https://muabhyt.vn/du-kien-luong-huu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-[var(--primary)] bg-[var(--primary)]/10 rounded-xl hover:bg-[var(--primary)]/20 transition-colors"
                        >
                            Ước tính lương hưu tại muabhyt.vn
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
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
