"use client";

import { useState } from "react";
import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

const experiences = [
    {
        problem: "Không thể tạo tài khoản VssID hoặc không đăng nhập được",
        solution:
            "Chúng tôi hỗ trợ xử lý các vấn đề liên quan đến tài khoản VssID, bao gồm lỗi xác thực, xung đột thông tin, hoặc tài khoản bị khóa.",
        category: "VssID",
    },
    {
        problem: "Không có thông tin cư trú phù hợp với nơi xử lý hồ sơ BHXH",
        solution:
            "Chúng tôi hỗ trợ xử lý hồ sơ BHXH ở nơi thuận tiện nhất cho bạn, không phụ thuộc vào thông tin cư trú hiện tại.",
        category: "Cư trú",
    },
    {
        problem: "Không có lịch hẹn khi địa phương yêu cầu đặt lịch",
        solution:
            "Chúng tôi có thể hỗ trợ bạn trong việc đặt lịch hẹn hoặc xử lý hồ sơ mà không cần qua hệ thống lịch hẹn.",
        category: "Lịch hẹn",
    },
    {
        problem: "Thiếu hồ sơ BHXH: nghỉ ngang, công ty không chốt sổ",
        solution:
            "Hướng dẫn hoàn thiện hồ sơ BHXH để làm thủ tục rút BHXH 1 lần hoặc nộp BHTN trong thời gian sớm nhất, kể cả khi công ty cũ không hợp tác.",
        category: "Hồ sơ",
    },
    {
        problem: "Trùng thời gian đóng, có nhiều mã số BHXH",
        solution:
            "Chúng tôi xử lý gộp sổ, điều chỉnh thời gian đóng để thống nhất toàn bộ quá trình tham gia BHXH của bạn.",
        category: "Gộp sổ",
    },
    {
        problem: "Sai sót thông tin cá nhân trên sổ BHXH",
        solution:
            "Thực hiện thủ tục điều chỉnh thông tin (Mẫu TK1-TS) đồng thời với việc gộp sổ hoặc giải quyết chế độ, tiết kiệm thời gian.",
        category: "Thông tin",
    },
    {
        problem: "Công ty phá sản, nợ BHXH không thể chốt sổ",
        solution:
            "Tư vấn thủ tục chốt sổ đến thời điểm đã đóng đủ (chốt bảo lưu), tách rời trách nhiệm nợ của doanh nghiệp.",
        category: "Nợ BHXH",
    },
    {
        problem: "Tham gia BHXH không đúng quy định trong lần rút trước",
        solution:
            "Xử lý hoàn chỉnh các sai sót từ lần rút BHXH trước, đảm bảo hồ sơ sạch cho lần rút tiếp theo.",
        category: "Lịch sử",
    },
    {
        problem: "Đi định cư nước ngoài, thời gian eo hẹp",
        solution:
            "Tối ưu quy trình đảm bảo bạn nhận được tiền BHXH sớm nhất trước thời gian bay. Hỗ trợ các ca gấp.",
        category: "Định cư",
    },
    {
        problem: "Đang ở nước ngoài muốn rút BHXH 1 lần",
        solution:
            "Chúng tôi có nhiều phương án cho bạn: ủy quyền từ xa, về VN ký ủy quyền nhanh, hoặc nhờ người thân.",
        category: "Ở nước ngoài",
    },
    {
        problem: "Người nước ngoài không rành thủ tục hành chính VN",
        solution:
            "Đội ngũ thông thạo ngoại ngữ, hỗ trợ dịch thuật công chứng và làm việc trực tiếp với cơ quan BHXH thay mặt bạn.",
        category: "Người NN",
    },
    {
        problem: "Người có nhiều quốc tịch với thời gian đóng phức tạp",
        solution:
            "Hoàn chỉnh thống nhất hồ sơ, xử lý các trường hợp đóng BHXH ở nhiều thời điểm và nhiều quốc gia.",
        category: "Đa quốc tịch",
    },
    {
        problem: "Đơn vị du học, visa định cư cần hợp tác",
        solution:
            "Liên hệ hợp tác để hoàn thiện quá trình BHXH hoặc rút BHXH 1 lần cho khách hàng của bạn một cách nhanh nhất và chuẩn nhất.",
        category: "Đối tác",
    },
    {
        problem: "Không rành thủ tục, không muốn mất thời gian nghiên cứu",
        solution:
            "Chúng tôi có phương án tối ưu nhất, tiết kiệm thời gian cho bạn. Chỉ cần cung cấp hồ sơ, còn lại để chúng tôi lo.",
        category: "Tiện lợi",
    },
];

export default function KinhNghiemPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                        15+ năm kinh nghiệm
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                        Kinh nghiệm xử lý hồ sơ khó
                    </h1>
                    <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
                        Chúng tôi đã xử lý thành công hàng nghìn ca hồ sơ từ đơn giản đến
                        phức tạp nhất. Dưới đây là một số tình huống thường gặp.
                    </p>
                </div>
            </section>

            {/* Accordion */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8">
                    <div className="space-y-4">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-[#1e293b] rounded-2xl border border-[var(--border)] overflow-hidden"
                            >
                                <button
                                    onClick={() =>
                                        setOpenIndex(openIndex === index ? null : index)
                                    }
                                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[var(--primary)]/5 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-bold rounded-full">
                                            {exp.category}
                                        </span>
                                        <span className="font-bold text-sm lg:text-base">
                                            {exp.problem}
                                        </span>
                                    </div>
                                    <svg
                                        className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-5 border-t border-[var(--border)]">
                                        <div className="pt-4">
                                            <p className="text-sm text-[var(--text-secondary)] mb-4">
                                                <strong className="text-green-600">Giải pháp:</strong>{" "}
                                                {exp.solution}
                                            </p>
                                            <CTAButton size="sm">Tôi gặp vấn đề này</CTAButton>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white dark:bg-[#0d141b]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl font-black tracking-tight mb-6">
                        Bất kỳ vấn đề gì về BHXH?
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                        Chúng tôi đều có thể lên phương án cùng bạn xử lý được. Liên hệ ngay
                        để được tư vấn miễn phí.
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
