"use client";
import Link from "next/link";

interface AuthorBioProps {
    name?: string;
    role?: string;
    description?: string;
    avatarUrl?: string;
}

export default function AuthorBio({
    name = "Tác giả",
    role = "Chuyên gia tư vấn Bảo hiểm xã hội",
    description = "Với hơn 15 năm kinh nghiệm trong lĩnh vực pháp lý và bảo hiểm xã hội, Tác giả đã hỗ trợ hàng nghìn khách hàng giải quyết các hồ sơ rút BHXH 1 lần, gộp sổ và các vướng mắc về chế độ thai sản, hưu trí.",
    avatarUrl = "/images/author-avatar.png",
}: AuthorBioProps) {
    return (
        <div className="my-12 p-6 md:p-8 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-md border border-[var(--primary)]/10 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-[var(--primary)]/10 transition-colors duration-500"></div>

            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start relative z-10">
                <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[var(--primary)]/20 shadow-xl">
                        <img
                            src={avatarUrl}
                            alt={`Chuyên gia ${name} - ${role}`}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-110"
                            title={`Tư vấn bởi ${name}`}
                            onError={(e) => {
                                e.currentTarget.src = "https://ui-avatars.com/api/?name=Nguyen+Hai+Dang&background=2b8cee&color=fff&size=128";
                            }}
                        />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 border-4 border-white dark:border-[#0d141b] w-6 h-6 rounded-full shadow-lg"></div>
                </div>

                <div className="flex-1 text-center md:text-left space-y-3">
                    <div className="space-y-1">
                        <h4 className="text-xl md:text-2xl font-black tracking-tight text-[var(--foreground)]">
                            {name}
                        </h4>
                        <p className="text-[var(--primary)] font-bold text-sm uppercase tracking-widest">
                            {role}
                        </p>
                    </div>

                    <p className="text-[var(--text-secondary)] leading-relaxed italic border-l-2 border-[var(--primary)]/20 pl-4 py-1">
                        &quot;{description}&quot;
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                        <Link
                            href="https://zalo.me/0973358077"
                            className="text-xs font-bold px-4 py-2 bg-[var(--primary)] text-white rounded-full hover:shadow-lg hover:translate-y-[-2px] transition-all"
                        >
                            Liên hệ trực tiếp
                        </Link>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10 text-xs font-medium text-[var(--text-secondary)]">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Đang trực tuyến
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
