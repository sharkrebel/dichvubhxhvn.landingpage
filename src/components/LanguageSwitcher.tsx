"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const isEnglish = pathname.startsWith("/en");

    return (
        <div className="flex items-center gap-2 bg-white/10 dark:bg-white/5 rounded-full p-1 border border-white/20">
            <Link
                href="/"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${!isEnglish
                        ? "bg-white shadow-md scale-110"
                        : "opacity-50 hover:opacity-100 hover:scale-105"
                    }`}
                title="Tiếng Việt"
            >
                <img
                    src="https://flagcdn.com/w40/vn.png"
                    alt="Vietnam Flag"
                    className="w-5 h-auto object-cover rounded-sm"
                />
            </Link>
            <Link
                href="/en"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isEnglish
                        ? "bg-white shadow-md scale-110"
                        : "opacity-50 hover:opacity-100 hover:scale-105"
                    }`}
                title="English"
            >
                <img
                    src="https://flagcdn.com/w40/gb.png"
                    alt="UK Flag"
                    className="w-5 h-auto object-cover rounded-sm"
                />
            </Link>
        </div>
    );
}
