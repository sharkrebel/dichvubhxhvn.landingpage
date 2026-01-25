import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
    title: "Quy trình làm việc - Minh bạch & Nhanh chóng",
    description:
        "Quy trình xử lý hồ sơ BHXH minh bạch, nhanh chóng. Chỉ cần cung cấp hồ sơ, chúng tôi sẽ xử lý toàn bộ.",
};

const documents = [
    {
        icon: "🪪",
        title: "CCCD mới nhất",
        description: "Căn cước công dân gắn chip còn hiệu lực",
    },
    {
        icon: "📝",
        title: "Số CMND cũ",
        description: "Để kiểm tra quá trình tham gia BHXH bằng số cũ (nếu có)",
    },
    {
        icon: "📁",
        title: "Hồ sơ BHXH hiện có",
        description: "Sổ BHXH, tờ rời, giấy tờ liên quan đang giữ",
    },
    {
        icon: "📍",
        title: "Thông tin cư trú",
        description: "Nơi ở thực tế hiện tại để xác định quy trình phù hợp",
    },
];

const steps = [
    {
        number: "01",
        title: "Cung cấp hồ sơ",
        description:
            "Gửi thông tin CCCD, CMND cũ, hồ sơ BHXH và thông tin cư trú qua Zalo/Facebook để chúng tôi kiểm tra.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Tư vấn & Báo phí",
        description:
            "Chúng tôi kiểm tra hồ sơ, xác định tình trạng và báo phí chính xác. Không phát sinh chi phí.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Ký ủy quyền (nếu cần)",
        description:
            "Với hình thức ủy quyền: ra văn phòng công chứng 1 lần duy nhất tại TP.HCM.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Xử lý hồ sơ",
        description:
            "Chúng tôi nộp hồ sơ và làm việc với cơ quan BHXH. Bạn chỉ cần chờ kết quả.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
    },
    {
        number: "05",
        title: "Nhận kết quả",
        description:
            "Tiền về tài khoản của bạn. Chúng tôi bàn giao đầy đủ hồ sơ gốc.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

export default function QuyTrinhPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                        Quy trình làm việc
                    </h1>
                    <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
                        Quy trình minh bạch, tối ưu giúp bạn tiết kiệm thời gian và đi lại
                        thuận tiện nhất.
                    </p>
                </div>
            </section>

            {/* Hồ sơ cần thiết */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-black tracking-tight mb-4">
                            Hồ sơ cần cung cấp
                        </h2>
                        <p className="text-[var(--text-secondary)]">
                            Để bắt đầu, bạn cần chuẩn bị các giấy tờ sau:
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {documents.map((doc) => (
                            <div
                                key={doc.title}
                                className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)] text-center"
                            >
                                <div className="text-4xl mb-4">{doc.icon}</div>
                                <h3 className="font-bold mb-2">{doc.title}</h3>
                                <p className="text-sm text-[var(--text-secondary)]">
                                    {doc.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-white dark:bg-[#0d141b]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black tracking-tight mb-4">
                            5 bước đơn giản
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--border)] hidden md:block"></div>

                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <div key={step.number} className="relative flex gap-6">
                                    {/* Number circle */}
                                    <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-black text-xl">
                                        {step.number}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 bg-[var(--background)] dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                                        <div className="flex items-start gap-4">
                                            <div className="text-[var(--primary)]">{step.icon}</div>
                                            <div>
                                                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                                                <p className="text-sm text-[var(--text-secondary)]">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Cam kết */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white rounded-3xl p-8 lg:p-12">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-black mb-4">Cam kết của chúng tôi</h2>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <svg
                                            className="w-6 h-6 flex-shrink-0"
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
                                        <span>Xử lý đúng, đầy đủ và chuẩn xác nhất</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg
                                            className="w-6 h-6 flex-shrink-0"
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
                                        <span>Đảm bảo bạn không bị vướng hồ sơ sau này</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg
                                            className="w-6 h-6 flex-shrink-0"
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
                                        <span>Hỗ trợ các trường hợp cần gấp</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg
                                            className="w-6 h-6 flex-shrink-0"
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
                                        <span className="font-bold">
                                            Hoàn phí 100% nếu không thực hiện được
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <p className="text-lg mb-6">Bạn đã sẵn sàng?</p>
                                <CTAButton
                                    size="lg"
                                    className="bg-white text-[var(--primary)] hover:bg-white/90"
                                >
                                    Liên hệ ngay
                                </CTAButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
