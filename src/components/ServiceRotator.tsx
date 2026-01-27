"use client";

import { useEffect, useState } from "react";

const titles = [
    "Rút Bảo Hiểm Xã Hội 1 Lần",
    "Gộp Sổ - Chốt Sổ BHXH",
    "Tư Vấn Chế Độ Thai Sản",
    "Đăng Ký BHYT Tự Nguyện",
    "Tính Toán Lương Hưu 2025",
    "Làm Lại Sổ BHXH Bị Mất",
    "Thay Đổi Thông Tin VssID",
];

export default function ServiceRotator() {
    const [index, setIndex] = useState(0);
    const [status, setStatus] = useState<"entering" | "visible" | "exiting">("entering");

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setStatus("entering");

        // Enter -> Visible (after 0.5s)
        const enterTimer = setTimeout(() => {
            setStatus("visible");
        }, 500);

        // Visible -> Exiting (after 2.5s)
        const exitTimer = setTimeout(() => {
            setStatus("exiting");
        }, 2500);

        // Exiting -> Next Item (after 3s)
        const nextTimer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 3000);

        return () => {
            clearTimeout(enterTimer);
            clearTimeout(exitTimer);
            clearTimeout(nextTimer);
        };
    }, [index]);

    return (
        <div className="h-12 md:h-16 flex items-center justify-center overflow-hidden mb-4 md:mb-8">
            <h2
                className={`
          text-xl md:text-3xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--action)]
          transition-all duration-500 ease-in-out transform
          ${status === "entering" ? "scale-50 opacity-0 translate-y-4" : ""}
          ${status === "visible" ? "scale-100 opacity-100 translate-y-0" : ""}
          ${status === "exiting" ? "scale-110 opacity-0 -translate-y-4" : ""}
        `}
            >
                {titles[index]}
            </h2>
        </div>
    );
}
