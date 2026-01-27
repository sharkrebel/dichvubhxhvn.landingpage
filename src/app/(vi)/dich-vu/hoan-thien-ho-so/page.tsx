import Link from "next/link";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import CTAButton from "@/components/CTAButton";
import AuthorBio from "@/components/AuthorBio";
import JsonLd, { organizationSchema } from "@/components/JsonLd";

export const metadata: Metadata = constructMetadata({
    path: "/dich-vu/hoan-thien-ho-so",
    title: "Hoàn thiện hồ sơ BHXH - Gộp sổ, Chốt sổ, Sửa thông tin",
    description: "Dịch vụ hoàn thiện hồ sơ BHXH: gộp sổ, chốt sổ, sửa sai lệch thông tin, xử lý công ty nợ BHXH. 15+ năm kinh nghiệm.",
    image: "/og-huong-dan.png",
});

const services = [
    {
        icon: "📚",
        title: "Gộp nhiều sổ BHXH",
        description:
            "Bạn có nhiều mã số BHXH từ các công ty khác nhau? Chúng tôi gộp thành một sổ duy nhất.",
    },
    {
        icon: "✅",
        title: "Chốt sổ BHXH",
        description:
            "Công ty cũ không chốt sổ, nghỉ ngang? Chúng tôi hỗ trợ hoàn thiện để tiếp tục quyền lợi.",
    },
    {
        icon: "✏️",
        title: "Sửa thông tin cá nhân",
        description:
            "CMND trên sổ khác với CCCD, sai ngày sinh, sai tên? Điều chỉnh nhanh chóng.",
    },
    {
        icon: "🏢",
        title: "Công ty nợ BHXH",
        description:
            "Doanh nghiệp phá sản, nợ BHXH? Chúng tôi tư vấn phương án chốt bảo lưu.",
    },
    {
        icon: "📱",
        title: "Vấn đề VssID",
        description:
            "Không tạo được tài khoản, đăng nhập lỗi? Chúng tôi xử lý được.",
    },
    {
        icon: "⏰",
        title: "Trùng thời gian đóng",
        description:
            "Có thời gian đóng BHXH trùng lặp? Chúng tôi điều chỉnh để thống nhất.",
    },
];

export default function HoanThienHoSoPage() {
    return (
        <>
            <JsonLd data={organizationSchema} />
            {/* Hero */}
            <section className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                            Hoàn thiện hồ sơ BHXH
                        </h1>
                        <p className="text-lg lg:text-xl text-white/80 mb-8">
                            Xử lý mọi vấn đề về hồ sơ BHXH: gộp sổ, chốt sổ, sửa thông tin,
                            công ty nợ BHXH... Chúng tôi hoàn chỉnh cho bạn.
                        </p>
                        <CTAButton size="lg" className="bg-white text-[var(--primary)] shadow-lg">
                            Tư vấn miễn phí
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <div
                                key={service.title}
                                className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="font-bold mb-2">{service.title}</h3>
                                <p className="text-sm text-[var(--text-secondary)]">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-black tracking-tight mb-4">
                            Khu vực hỗ trợ xử lý hồ sơ
                        </h2>
                        <p className="text-[var(--text-secondary)]">
                            Chúng tôi hỗ trợ gộp sổ, chốt sổ và hoàn thiện hồ sơ BHXH trực tiếp tại các khu vực trọng điểm.
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
                                href={`/dich-vu/hoan-thien-ho-so/${loc.slug}`}
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
                        Hồ sơ của bạn đang vướng?
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                        Gửi thông tin để chúng tôi kiểm tra và tư vấn phương án xử lý tối ưu nhất.
                    </p>
                    <CTAButton size="lg">Liên hệ xử lý hồ sơ</CTAButton>
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
