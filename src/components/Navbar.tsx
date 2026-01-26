"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const menuItems = [
    { name: "Trang chủ", href: "/" },
    {
        name: "Dịch vụ",
        href: "/dich-vu",
        submenu: [
            { name: "Rút BHXH 1 lần", href: "/dich-vu/rut-bhxh-1-lan" },
            { name: "Người nước ngoài", href: "/dich-vu/nguoi-nuoc-ngoai" },
            { name: "Hoàn thiện hồ sơ", href: "/dich-vu/hoan-thien-ho-so" },
            { name: "BHYT tự nguyện", href: "/dich-vu/bhyt-tu-nguyen" },
            { name: "BHXH tự nguyện", href: "/dich-vu/bhxh-tu-nguyen" },
        ],
    },
    { name: "Quy trình", href: "/quy-trinh" },
    { name: "Biểu phí", href: "/bieu-phi" },
    { name: "Kinh nghiệm", href: "/kinh-nghiem" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
        <nav className="fixed top-0 left-0 right-0 z-[9999] w-full border-b border-slate-200 dark:border-[var(--border)] bg-white/95 dark:bg-[#101922]/80 backdrop-blur-md shadow-sm dark:shadow-none transition-all">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        {/* <div className="w-10 h-10 rounded-xl bg-[var(--primary)] flex items-center justify-center">
                            <svg ... />
                        </div> */}
                        <img
                            src="/logo_dichvubhxh.png"
                            alt="DichVuBHXH.vn Logo"
                            className="h-10 w-auto object-contain"
                        />
                        <span className="text-xl font-bold text-[var(--primary)] hidden sm:block">
                            Dịch vụ BHXH
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-1">
                        {menuItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() =>
                                    item.submenu && setActiveDropdown(item.name)
                                }
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={`px-4 py-2 text-sm font-bold transition-colors rounded-lg flex items-center gap-1 ${pathname === item.href || (item.submenu && item.submenu.some(sub => sub.href === pathname))
                                        ? "text-[var(--primary)] bg-[var(--primary)]/10"
                                        : "text-[#0f172a] dark:text-white hover:text-[var(--primary)] hover:bg-[var(--primary)]/5"
                                        }`}
                                >
                                    {item.name}
                                    {item.submenu && (
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    )}
                                </Link>

                                {/* Dropdown */}
                                {item.submenu && activeDropdown === item.name && (
                                    <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-[#1e293b] rounded-xl shadow-xl border border-[var(--border)] py-2 z-50 animate-enter origin-top-left">
                                        {item.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className={`block px-4 py-2.5 text-sm transition-colors ${pathname === subItem.href
                                                    ? "text-[var(--primary)] bg-[var(--primary)]/5 font-bold"
                                                    : "text-[var(--foreground)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
                                                    }`}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* External Link - Công cụ online */}
                        <a
                            href="https://muabhyt.vn/tinh-bhxh-1-lan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-bold text-[#0f172a] dark:text-white hover:text-[var(--primary)] transition-colors rounded-lg hover:bg-[var(--primary)]/5 flex items-center gap-1"
                        >
                            Công cụ online
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>
                    </div>

                    <div className="hidden lg:flex items-center gap-3">
                        <LanguageSwitcher />
                        <ThemeToggle />
                        <a
                            href="tel:0973358077"
                            className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-white rounded-xl gradient-action hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/25"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            0973 358 077
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-[var(--primary)]/10 transition-colors"
                        aria-label="Menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden border-t border-[var(--border)] bg-white dark:bg-[#101922] animate-enter origin-top">
                    <div className="px-4 py-4 space-y-1">
                        {menuItems.map((item) => (
                            <div key={item.name}>
                                <Link
                                    href={item.href}
                                    onClick={() => !item.submenu && setIsOpen(false)}
                                    className="block px-4 py-3 text-base font-medium text-[#0f172a] dark:text-white hover:bg-[var(--primary)]/10 rounded-lg transition-colors"
                                >
                                    {item.name}
                                </Link>
                                {item.submenu && (
                                    <div className="pl-4 space-y-1">
                                        {item.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/5 rounded-lg transition-colors"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* External Link Mobile */}
                        <a
                            href="https://muabhyt.vn/tinh-bhxh-1-lan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-3 text-base font-medium text-[var(--foreground)] hover:bg-[var(--primary)]/10 rounded-lg transition-colors"
                        >
                            Công cụ online
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>

                        {/* CTA Mobile */}
                        <div className="pt-4">
                            <a
                                href="tel:0973358077"
                                className="flex items-center justify-center gap-2 w-full px-6 py-3 text-center text-base font-bold text-white rounded-xl gradient-action shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                0973 358 077
                            </a>
                        </div>

                        {/* Theme & Language Mobile */}
                        <div className="flex items-center justify-between pt-4 border-t border-[var(--border)] mt-4">
                            <span className="text-sm font-medium text-[var(--text-secondary)]">Giao diện & Ngôn ngữ</span>
                            <div className="flex items-center gap-3">
                                <LanguageSwitcher />
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
