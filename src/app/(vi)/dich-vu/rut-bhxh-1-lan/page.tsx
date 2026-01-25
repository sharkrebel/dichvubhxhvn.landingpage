import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "Dịch vụ Rút BHXH 1 Lần - Nhanh Chóng & Đúng Luật mới nhất 2025",
    description:
        "Chuyên xử lý hồ sơ rút bảo hiểm xã hội 1 lần, gộp sổ, mất sổ. Tư vấn đúng luật BHXH 2025, thủ tục ủy quyền hợp pháp, không cần đi lại nhiều lần.",
    keywords: [
        "rút bhxh 1 lần",
        "dịch vụ bảo hiểm xã hội",
        "rút tiền bảo hiểm",
        "thủ tục bhxh 2025",
    ],
};

const breadcrumbItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Dịch vụ", path: "/dich-vu" },
    { name: "Rút BHXH 1 lần", path: "/dich-vu/rut-bhxh-1-lan" },
];

const steps = [
    {
        number: "01",
        title: "Tiếp nhận & Tư vấn",
        description:
            "Kiểm tra sổ, quá trình đóng BHXH, xác định điều kiện và phương án xử lý phù hợp.",
    },
    {
        number: "02",
        title: "Ký hồ sơ ủy quyền",
        description:
            "Khách hàng chỉ cần ra văn phòng công chứng 1 lần duy nhất để ký ủy quyền (nếu chọn hình thức ủy quyền).",
    },
    {
        number: "03",
        title: "Nộp hồ sơ & Giải trình",
        description:
            "Chúng tôi làm việc trực tiếp với cơ quan BHXH, giải trình và xử lý mọi vướng mắc thay bạn.",
    },
    {
        number: "04",
        title: "Nhận kết quả & Bàn giao",
        description:
            "Tiền BHXH về tài khoản của bạn. Chúng tôi bàn giao đầy đủ hồ sơ gốc.",
    },
];

export default function RutBHXH1LanPage() {
    return (
        <>
            <BreadcrumbJsonLd items={breadcrumbItems} />
            {/* Hero */}
            <section className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            Luật BHXH 2024 - Hiệu lực 1/7/2025
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                            Dịch vụ Rút BHXH 1 Lần
                        </h1>
                        <p className="text-lg lg:text-xl text-white/80 mb-8">
                            Hỗ trợ chuẩn bị hồ sơ và nộp thay (ủy quyền). Xử lý nhanh chóng,
                            đúng luật, cam kết hoàn phí 100% nếu không thực hiện được.
                        </p>
                        <CTAButton size="lg" className="bg-white text-[var(--primary)] hover:bg-white/90">
                            Tư vấn miễn phí ngay
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* Điều kiện - Cards so sánh */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-black tracking-tight mb-4">
                            Điều kiện rút BHXH 1 lần theo Luật 2025
                        </h2>
                        <p className="text-[var(--text-secondary)]">
                            Luật BHXH 2024 (hiệu lực từ 1/7/2025) có những thay đổi quan trọng
                            về điều kiện rút BHXH 1 lần.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Card 1 - Trước 1/7/2025 */}
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl border-2 border-green-500 p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-bold rounded-bl-xl">
                                ✓ Được rút
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold mb-4 text-green-600">
                                    Tham gia TRƯỚC 1/7/2025
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-sm">
                                            Vẫn được rút sau <strong>12 tháng</strong> nghỉ việc không
                                            đóng BHXH tiếp
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-sm">
                                            Áp dụng cho người đã có quá trình đóng BHXH trước ngày
                                            1/7/2025
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-sm">
                                            Đây là <strong>tệp khách hàng chính</strong> của dịch vụ
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 2 - Sau 1/7/2025 */}
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl border-2 border-amber-500 p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-amber-500 text-white px-4 py-1 text-sm font-bold rounded-bl-xl">
                                ⚠ Hạn chế
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold mb-4 text-amber-600">
                                    Tham gia SAU 1/7/2025
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                            />
                                        </svg>
                                        <span className="text-sm">
                                            Chỉ được rút nếu <strong>ra nước ngoài định cư</strong>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                            />
                                        </svg>
                                        <span className="text-sm">
                                            Mắc <strong>bệnh hiểm nghèo</strong> (ung thư, bại liệt...)
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                            />
                                        </svg>
                                        <span className="text-sm">
                                            Đủ tuổi hưu trí nhưng <strong>chưa đủ năm đóng</strong>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-[var(--text-secondary)] mb-4">
                            Bạn không chắc mình thuộc nhóm nào?
                        </p>
                        <CTAButton>Gửi thông tin thẩm định hồ sơ</CTAButton>
                    </div>
                </div>
            </section>

            {/* Quy trình */}
            <section className="py-20 bg-white dark:bg-[#0d141b]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-black tracking-tight mb-4">
                            Quy trình thực hiện
                        </h2>
                        <p className="text-[var(--text-secondary)]">
                            Quy trình được tối ưu, đảm bảo bạn đi lại thuận tiện nhất và nhận
                            tiền nhanh nhất.
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
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Biểu phí */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-black tracking-tight mb-4">
                            Biểu phí tham khảo
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-[var(--border)]">
                            <h3 className="text-xl font-bold mb-2">Tư vấn hướng dẫn</h3>
                            <p className="text-4xl font-black text-[var(--primary)] mb-4">
                                Từ 1 triệu
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-2 text-sm">
                                    <svg
                                        className="w-4 h-4 text-green-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    Hướng dẫn điền hồ sơ
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <svg
                                        className="w-4 h-4 text-green-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    Hướng dẫn cách thức, nơi nộp
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <svg
                                        className="w-4 h-4 text-green-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    Nhận hướng dẫn toàn quốc
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <svg
                                        className="w-4 h-4 text-green-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    Bạn tự đi nộp hồ sơ
                                </li>
                            </ul>
                            <CTAButton variant="outline" className="w-full">
                                Chọn gói này
                            </CTAButton>
                        </div>

                        <div className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white rounded-2xl p-8 relative overflow-hidden">
                            <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-xs font-bold">
                                Phổ biến
                            </div>
                            <h3 className="text-xl font-bold mb-2">Ủy quyền trọn gói</h3>
                            <p className="text-4xl font-black mb-4">Từ 12 triệu</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-2 text-sm">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    Chỉ cần ký ủy quyền 1 lần
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    Chúng tôi xử lý toàn bộ
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    Nhận ủy quyền tại TP.HCM
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    Có thể trả phí sau
                                </li>
                            </ul>
                            <CTAButton className="w-full bg-white text-[var(--primary)]">
                                Chọn gói này
                            </CTAButton>
                        </div>
                    </div>

                    <p className="text-center text-sm text-[var(--text-secondary)] mt-8">
                        * Hoàn phí 100% nếu không thực hiện được công việc
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white dark:bg-[#0d141b]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl font-black tracking-tight mb-6">
                        Sẵn sàng rút BHXH 1 lần?
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                        Liên hệ ngay để được tư vấn miễn phí về điều kiện và phương án xử lý
                        phù hợp nhất với bạn.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <CTAButton size="lg">Liên hệ tư vấn ngay</CTAButton>
                        <a
                            href="tel:0973358077"
                            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-[var(--primary)] bg-[var(--primary)]/10 rounded-xl hover:bg-[var(--primary)]/20 transition-colors"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            0973 358 077
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
