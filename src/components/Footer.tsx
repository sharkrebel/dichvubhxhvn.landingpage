import Link from "next/link";

const quickLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Dịch vụ", href: "/dich-vu" },
    { name: "Quy trình", href: "/quy-trinh" },
    { name: "Biểu phí", href: "/bieu-phi" },
    { name: "Kinh nghiệm", href: "/kinh-nghiem" },
    { name: "Blog - Chia sẻ", href: "/blog" },
    {
        name: "Tính BHXH 1 lần 2026",
        href: "https://muabhyt.vn/tinh-bhxh-1-lan",
        external: true
    },
    {
        name: "Tính Lương hưu dự kiến",
        href: "https://muabhyt.vn/du-kien-luong-huu",
        external: true
    },
];

const services = [
    { name: "Rút BHXH 1 lần", href: "/dich-vu/rut-bhxh-1-lan" },
    { name: "Hồ sơ người nước ngoài", href: "/dich-vu/nguoi-nuoc-ngoai" },
    { name: "Gộp sổ - Chốt sổ BHXH", href: "/dich-vu/hoan-thien-ho-so" },
    { name: "Cấp lại sổ BHXH bị mất", href: "/dich-vu/hoan-thien-ho-so" },
    { name: "Điều chỉnh thông tin", href: "/dich-vu/hoan-thien-ho-so" },
    { name: "Chế độ Thai sản", href: "/dich-vu/bhxh-tu-nguyen" },
    { name: "Tư vấn Hưu trí", href: "/dich-vu/bhxh-tu-nguyen" },
    { name: "BHYT tự nguyện", href: "/dich-vu/bhyt-tu-nguyen" },
    { name: "BHXH tự nguyện", href: "/dich-vu/bhxh-tu-nguyen" },
];

export default function Footer() {
    return (
        <footer className="bg-[#0d141b] text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <img
                                src="/logo_dichvubhxh.png"
                                alt="DichVuBHXH.vn Logo"
                                className="h-10 w-auto object-contain bg-white rounded-lg p-1"
                            />
                            <span className="text-xl font-bold">DichVuBHXH.vn</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Chuyên tư vấn và hỗ trợ thủ tục BHXH với 15+ năm kinh nghiệm. Xử lý
                            mọi ca hồ sơ từ đơn giản đến phức tạp.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            <a
                                href="https://www.facebook.com/congdichvubhxh.vn/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--primary)] transition-colors"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.tiktok.com/@congdichvubhxhvn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--primary)] transition-colors"
                                aria-label="TikTok"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                </svg>
                            </a>
                            <a
                                href="https://zalo.me/0973358077"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--primary)] transition-colors"
                                aria-label="Zalo"
                            >
                                <span className="text-xs font-bold">Zalo</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
                            Liên kết nhanh
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        target={link.external ? "_blank" : undefined}
                                        rel={link.external ? "noopener noreferrer" : undefined}
                                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
                                    >
                                        {link.name}
                                        {link.external && (
                                            <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
                            Dịch vụ
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
                            Liên hệ
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <svg
                                    className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0"
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
                                <div>
                                    <p className="text-sm text-gray-400">Hotline / Zalo</p>
                                    <a
                                        href="tel:0973358077"
                                        className="text-white font-bold hover:text-[var(--primary)] transition-colors"
                                    >
                                        0973 358 077
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                    className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div>
                                    <p className="text-sm text-gray-400">Địa điểm</p>
                                    <a
                                        href="https://maps.app.goo.gl/mZvuu4wi9fwA7mh88"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-[var(--primary)] transition-colors"
                                    >
                                        TP.HCM, Việt Nam
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                    className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                    />
                                </svg>
                                <div>
                                    <p className="text-sm text-gray-400">Website liên kết</p>
                                    <a
                                        href="https://congdichvubhxh.vn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-[var(--primary)] transition-colors"
                                    >
                                        congdichvubhxh.vn
                                    </a> <br />
                                    <a
                                        href="https://muabhyt.vn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-[var(--primary)] transition-colors"
                                    >
                                        muabhyt.vn
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} DichVuBHXH.vn. Chịu trách nhiệm nội
                            dung:{" "}
                            <a
                                href="https://tamgiangcapital.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-[var(--primary)] transition-colors"
                            >
                                Tam Giang Co., Ltd
                            </a>
                        </p>
                        <div className="flex gap-6">
                            <a
                                href="https://muabhyt.vn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 text-sm hover:text-white transition-colors"
                            >
                                muabhyt.vn
                            </a>
                            <a
                                href="https://congdichvubhxh.vn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 text-sm hover:text-white transition-colors"
                            >
                                congdichvubhxh.vn
                            </a>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <p className="mt-6 text-xs text-gray-500 text-center leading-relaxed max-w-4xl mx-auto">
                        Dichvubhxh.vn là đơn vị tư vấn dịch vụ độc lập, hỗ trợ khách hàng
                        thực hiện các thủ tục hành chính theo ủy quyền dân sự. Chúng tôi
                        không phải là cơ quan Bảo hiểm xã hội Nhà nước và không mạo danh cơ
                        quan nhà nước. Mọi quyết định hưởng chế độ đều do cơ quan BHXH có
                        thẩm quyền phê duyệt.
                    </p>
                </div>
            </div>
        </footer>
    );
}
