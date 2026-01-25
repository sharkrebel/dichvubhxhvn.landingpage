import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
    title: "Biểu phí dịch vụ BHXH - Minh bạch & Hợp lý",
    description:
        "Bảng giá dịch vụ tư vấn BHXH minh bạch. Tư vấn từ 1 triệu, ủy quyền từ 12 triệu. Cam kết hoàn phí 100% nếu không thực hiện được.",
};

const pricingPlans = [
    {
        name: "Tư vấn hướng dẫn",
        price: "Từ 1 triệu",
        description: "Phù hợp cho người muốn tự nộp hồ sơ",
        features: [
            { text: "Hướng dẫn điền hồ sơ chi tiết", included: true },
            { text: "Hướng dẫn cách thức, nơi nộp", included: true },
            { text: "Nhận hướng dẫn toàn quốc", included: true },
            { text: "Hỗ trợ qua Zalo/Điện thoại", included: true },
            { text: "Bạn tự đi nộp hồ sơ", included: true },
            { text: "Chúng tôi xử lý thay", included: false },
        ],
        popular: false,
    },
    {
        name: "Ủy quyền trọn gói",
        price: "Từ 12 triệu",
        description: "Phù hợp cho người bận rộn, cần xử lý nhanh",
        features: [
            { text: "Bao gồm tất cả dịch vụ tư vấn", included: true },
            { text: "Chỉ cần ký ủy quyền 1 lần", included: true },
            { text: "Chúng tôi xử lý toàn bộ", included: true },
            { text: "Nhận ủy quyền tại TP.HCM", included: true },
            { text: "Có thể trả phí sau", included: true },
            { text: "Ưu tiên xử lý gấp", included: true },
        ],
        popular: true,
    },
];

const additionalInfo = [
    {
        title: "Trả phí trước",
        description:
            "Ủy quyền công việc (không ủy quyền nhận tiền) → Tiền BHXH về trực tiếp tài khoản chính chủ của bạn.",
    },
    {
        title: "Trả phí sau",
        description:
            "Ủy quyền nhận tiền thay → Chúng tôi cấn trừ chi phí và chuyển trả bạn phần còn lại.",
    },
    {
        title: "Ủy quyền người thân",
        description:
            "Phí như gói Tư vấn (1 triệu). Lưu ý: mỗi người chỉ nhận ủy quyền 1 lần trong 36 tháng.",
    },
    {
        title: "Khu vực khác TP.HCM",
        description:
            "Với hình thức ủy quyền, nếu khu vực khác TP.HCM bạn cần tốn thêm chi phí đi lại.",
    },
];

export default function BieuPhiPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                        Biểu phí dịch vụ
                    </h1>
                    <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
                        Chi phí minh bạch, rõ ràng. Không phát sinh chi phí ngoài báo giá.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-5xl mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {pricingPlans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative rounded-3xl p-8 ${plan.popular
                                    ? "bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white"
                                    : "bg-white dark:bg-[#1e293b] border border-[var(--border)]"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-xs font-bold">
                                        Phổ biến
                                    </div>
                                )}
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <p
                                    className={`text-sm mb-4 ${plan.popular ? "text-white/80" : "text-[var(--text-secondary)]"
                                        }`}
                                >
                                    {plan.description}
                                </p>
                                <p className="text-4xl font-black mb-6">{plan.price}</p>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature.text}
                                            className={`flex items-center gap-3 text-sm ${!feature.included && !plan.popular
                                                ? "text-[var(--text-secondary)]"
                                                : ""
                                                }`}
                                        >
                                            <svg
                                                className={`w-5 h-5 flex-shrink-0 ${feature.included
                                                    ? plan.popular
                                                        ? "text-white"
                                                        : "text-green-500"
                                                    : "text-gray-300"
                                                    }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                {feature.included ? (
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                ) : (
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                )}
                                            </svg>
                                            {feature.text}
                                        </li>
                                    ))}
                                </ul>
                                <CTAButton
                                    className={`w-full ${plan.popular ? "bg-white text-[var(--primary)]" : ""
                                        }`}
                                    variant={plan.popular ? "primary" : "outline"}
                                >
                                    Chọn gói này
                                </CTAButton>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Info */}
            <section className="py-20 bg-white dark:bg-[#0d141b]">
                <div className="max-w-5xl mx-auto px-4 lg:px-8">
                    <h2 className="text-2xl font-black tracking-tight mb-8 text-center">
                        Thông tin bổ sung
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {additionalInfo.map((info) => (
                            <div
                                key={info.title}
                                className="bg-[var(--background)] dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]"
                            >
                                <h3 className="font-bold mb-2 text-[var(--primary)]">
                                    {info.title}
                                </h3>
                                <p className="text-sm text-[var(--text-secondary)]">
                                    {info.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guarantee */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-8 lg:p-12">
                        <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto mb-6">
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-black text-green-700 dark:text-green-400 mb-4">
                            Cam kết hoàn phí 100%
                        </h2>
                        <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
                            Nếu không thực hiện được công việc, chúng tôi hoàn lại 100% chi phí
                            đã thanh toán. Không rủi ro cho bạn.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white dark:bg-[#0d141b]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl font-black tracking-tight mb-6">
                        Cần báo giá chính xác?
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                        Phí chính xác sẽ được báo sau khi chuyên viên xem xét hồ sơ thực tế
                        của bạn.
                    </p>
                    <CTAButton size="lg">Nhận báo giá miễn phí</CTAButton>
                </div>
            </section>
        </>
    );
}
