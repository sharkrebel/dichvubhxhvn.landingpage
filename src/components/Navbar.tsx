"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

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
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[var(--border)] glassmorphism">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-[var(--primary)] flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-white"
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
                        <span className="text-xl font-bold text-[var(--primary)]">
                            DichVuBHXH.vn
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
                                    className="px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors rounded-lg hover:bg-[var(--primary)]/5"
                                >
                                    {item.name}
                                    {item.submenu && (
                                        <svg
                                            className="w-4 h-4 ml-1 inline-block"
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
                                    )}
                                </Link>

                                {/* Dropdown */}
                                {item.submenu && activeDropdown === item.name && (
                                    <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-[#1e293b] rounded-xl shadow-xl border border-[var(--border)] py-2 z-50">
                                        {item.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="block px-4 py-2.5 text-sm text-[var(--foreground)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-colors"
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
                            href="https://muabhyt.vn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors rounded-lg hover:bg-[var(--primary)]/5 flex items-center gap-1"
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
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>
                    </div>

                    {/* CTA Button + Theme Toggle */}
                    <div className="hidden lg:flex items-center gap-3">
                        <ThemeToggle />
                        <a
                            href="https://congdichvubhxh.vn/contact/"
                            className="px-6 py-2.5 text-sm font-bold text-white rounded-xl gradient-action hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/25"
                        >
                            Tư vấn miễn phí
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
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden border-t border-[var(--border)] bg-white dark:bg-[#101922]">
                    <div className="px-4 py-4 space-y-1">
                        {menuItems.map((item) => (
                            <div key={item.name}>
                                <Link
                                    href={item.href}
                                    onClick={() => !item.submenu && setIsOpen(false)}
                                    className="block px-4 py-3 text-base font-medium text-[var(--foreground)] hover:bg-[var(--primary)]/10 rounded-lg transition-colors"
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
                            href="https://muabhyt.vn"
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
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>

                        {/* CTA Mobile */}
                        <div className="pt-4">
                            <a
                                href="https://congdichvubhxh.vn/contact/"
                                className="block w-full px-6 py-3 text-center text-base font-bold text-white rounded-xl gradient-action shadow-lg"
                            >
                                Tư vấn miễn phí
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
