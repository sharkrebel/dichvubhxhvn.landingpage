import Link from "next/link";
import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
    title: "Dịch vụ BHXH - Tư vấn & Hỗ trợ Thủ tục Trọn Gói",
    description:
        "Dịch vụ rút BHXH 1 lần, gộp sổ, hoàn thiện hồ sơ, BHYT/BHXH tự nguyện. 15+ năm kinh nghiệm, xử lý mọi ca từ đơn giản đến phức tạp.",
};

const services = [
    {
        icon: "💰",
        title: "Rút BHXH 1 lần",
        description:
            "Hỗ trợ thủ tục rút BHXH 1 lần cho người lao động Việt Nam. Tư vấn đúng luật 2025, quy trình nhanh chóng.",
        href: "/dich-vu/rut-bhxh-1-lan",
        features: ["Tư vấn điều kiện", "Hoàn thiện hồ sơ", "Ủy quyền xử lý"],
    },
    {
        icon: "🌍",
        title: "Người nước ngoài",
        description:
            "Dịch vụ rút BHXH cho lao động nước ngoài làm việc tại Việt Nam. Hỗ trợ đa ngôn ngữ.",
        href: "/dich-vu/nguoi-nuoc-ngoai",
        features: ["Đa ngôn ngữ", "Dịch thuật công chứng", "Xử lý thay"],
    },
    {
        icon: "📋",
        title: "Hoàn thiện hồ sơ",
        description:
            "Gộp sổ, chốt sổ, xử lý sai lệch thông tin, công ty nợ BHXH, mất sổ...",
        href: "/dich-vu/hoan-thien-ho-so",
        features: ["Gộp nhiều sổ", "Chốt sổ", "Sửa thông tin"],
    },
    {
        icon: "❤️",
        title: "BHYT tự nguyện",
        description:
            "Đăng ký BHYT hộ gia đình đơn giản nhất, chi phí thấp nhất, kênh hỗ trợ dễ tiếp cận.",
        href: "/dich-vu/bhyt-tu-nguyen",
        features: ["Chi phí thấp", "Đăng ký nhanh", "Hỗ trợ 24/7"],
    },
    {
        icon: "🛡️",
        title: "BHXH tự nguyện",
        description:
            "Đóng BHXH hàng tháng hoặc đóng bù để lãnh hưu trí, tử tuất với mức phí hợp lý.",
        href: "/dich-vu/bhxh-tu-nguyen",
        features: ["Đóng linh hoạt", "Tích lũy hưu trí", "Tư vấn miễn phí"],
    },
    {
        icon: "🧮",
        title: "Công cụ tính toán",
        description:
            "Công cụ online 2026 giúp bạn tính số tiền rút BHXH, ước tính lương hưu dự kiến.",
        href: "https://muabhyt.vn",
        external: true,
        features: ["Tính BHXH 1 lần", "Ước tính lương hưu", "Miễn phí"],
    },
];

export default function DichVuPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                        Dịch vụ BHXH Trọn Gói
                    </h1>
                    <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
                        Chúng tôi cung cấp đầy đủ các dịch vụ liên quan đến BHXH, BHYT với
                        15+ năm kinh nghiệm xử lý mọi ca hồ sơ.
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
                        Bạn không chắc cần dịch vụ nào?
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                        Liên hệ với chúng tôi để được tư vấn miễn phí. Chúng tôi sẽ giúp bạn
                        xác định phương án tối ưu nhất.
                    </p>
                    <CTAButton size="lg">Tư vấn miễn phí</CTAButton>
                </div>
            </section>
        </>
    );
}
