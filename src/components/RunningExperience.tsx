"use client";

import { useEffect, useState } from "react";

const experiences = [
    {
        id: 1,
        title: "Rút BHXH 1 lần thành công",
        desc: "Khách hàng T.V.A (TP.HCM) nhận 85 triệu sau 7 ngày làm hồ sơ.",
        time: "2 giờ trước",
    },
    {
        id: 2,
        title: "Gộp 3 sổ BHXH phức tạp",
        desc: "Xử lý thành công gộp sổ trùng thời gian đóng cho anh H.M.K (Hà Nội).",
        time: "4 giờ trước",
    },
    {
        id: 3,
        title: "Tư vấn chế độ thai sản",
        desc: "Hỗ trợ chị N.T.H nhận đủ tiền thai sản bị công ty cũ nợ.",
        time: "1 ngày trước",
    },
    {
        id: 4,
        title: "Lấy lại mật khẩu VssID",
        desc: "Hỗ trợ 5 khách hàng lấy lại mật khẩu VssID trong ngày.",
        time: "30 phút trước",
    },
    {
        id: 5,
        title: "Chốt sổ BHXH nhanh",
        desc: "Hoàn tất chốt sổ cho khách hàng nghỉ việc công ty phá sản.",
        time: "5 giờ trước",
    },
    {
        id: 6,
        title: "Tư vấn hưu trí 2025",
        desc: "Giải đáp thắc mắc về tuổi nghỉ hưu theo lộ trình mới cho cô L.",
        time: "3 giờ trước",
    },
];

export default function RunningExperience() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false); // Fade out
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % Math.ceil(experiences.length / 3));
                setIsVisible(true); // Fade in
            }, 500); // Wait for fade out animation
        }, 6000); // 6 seconds

        return () => clearInterval(interval);
    }, []);

    const visibleItems = [
        experiences[currentIndex * 3 % experiences.length],
        experiences[(currentIndex * 3 + 1) % experiences.length],
        experiences[(currentIndex * 3 + 2) % experiences.length],
    ].filter(Boolean); // Ensure valid items

    return (
        <div className="mt-8 bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-2xl p-4 overflow-hidden shadow-sm dark:shadow-none">
            <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <h3 className="text-sm font-bold text-slate-700 dark:text-gray-200 uppercase tracking-wider">
                    Hoạt động mới nhất
                </h3>
            </div>

            <div
                className={`bg-transparent space-y-3 transition-opacity duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
            >
                {visibleItems.map((item, idx) => (
                    item && (
                        <div
                            key={`${item.id}-${idx}`}
                            className="flex items-start gap-3 bg-white dark:bg-white/5 p-3 rounded-xl border border-slate-100 dark:border-white/5 hover:border-slate-200 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none"
                        >
                            <div className="mt-1 w-8 h-8 rounded-full bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20 flex items-center justify-center shrink-0 text-[var(--primary)]">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                                <p className="text-xs text-slate-600 dark:text-gray-400 mt-0.5 line-clamp-1">{item.desc}</p>
                            </div>
                            <span className="text-[10px] text-slate-500 dark:text-gray-500 whitespace-nowrap ml-auto pt-0.5">
                                {item.time}
                            </span>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}
