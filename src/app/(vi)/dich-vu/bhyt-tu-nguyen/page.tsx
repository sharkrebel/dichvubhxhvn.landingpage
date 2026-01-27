import Link from "next/link";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import CTAButton from "@/components/CTAButton";
import JsonLd, { faqSchemaBHYT } from "@/components/JsonLd";
import AuthorBio from "@/components/AuthorBio";

export const metadata: Metadata = constructMetadata({
    path: "/dich-vu/bhyt-tu-nguyen",
    title: "Đăng ký BHYT tự nguyện - Đơn giản, Chi phí thấp",
    description: "Đăng ký BHYT hộ gia đình đơn giản nhất, chi phí thấp nhất. Kênh hỗ trợ BHYT dễ tiếp cận nhất.",
    image: "/og-bhyt.png",
});

export default function BHYTTuNguyenPage() {
    return (
        <>
            <JsonLd data={faqSchemaBHYT} />
            {/* Hero */}
            <section className="bg-gradient-to-br from-pink-500 to-rose-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                            ❤️ Bảo vệ sức khỏe gia đình
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                            BHYT tự nguyện (Hộ gia đình)
                        </h1>
                        <p className="text-lg lg:text-xl text-white/80 mb-8">
                            Đăng ký đơn giản nhất, chi phí thấp nhất, kênh hỗ trợ về BHYT tiếp
                            cận dễ dàng nhất.
                        </p>
                        <CTAButton size="lg" className="bg-white text-rose-600 shadow-lg" href="https://muabhyt.vn">
                            Đăng ký ngay
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-black tracking-tight mb-12 text-center">
                        Lợi ích khi tham gia BHYT tự nguyện
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">💰</span>
                            </div>
                            <h3 className="font-bold mb-2">Chi phí thấp</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Mức đóng hợp lý, phù hợp với mọi gia đình. Được hỗ trợ từ nhà nước.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🏥</span>
                            </div>
                            <h3 className="font-bold mb-2">Khám chữa bệnh</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Chi trả 80-100% chi phí khám chữa bệnh tại cơ sở y tế đăng ký.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">👨‍👩‍👧‍👦</span>
                            </div>
                            <h3 className="font-bold mb-2">Bảo vệ cả gia đình</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Đăng ký cho cả hộ gia đình, người thân được giảm giá.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-black tracking-tight mb-4">
                            Khu vực tư vấn BHYT tại chỗ
                        </h2>
                        <p className="text-[var(--text-secondary)]">
                            Chúng tôi hỗ trợ tư vấn và hướng dẫn đăng ký BHYT hộ gia đình tại các quận huyện và tỉnh thành lớn.
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
                                href={`/dich-vu/bhyt-tu-nguyen/${loc.slug}`}
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
                        Bạn muốn đăng ký BHYT?
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                        Liên hệ để được tư vấn mức đóng và quyền lợi phù hợp với gia đình bạn.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <CTAButton size="lg">Đăng ký mua BHYT</CTAButton>
                        <a
                            href="https://muabhyt.vn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-[var(--primary)] bg-[var(--primary)]/10 rounded-xl hover:bg-[var(--primary)]/20 transition-colors"
                        >
                            Đăng ký online tại muabhyt.vn
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
