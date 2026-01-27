import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = constructMetadata({
    path: "/blog",
    title: "Tin tức & Kiến thức Bảo hiểm xã hội mới nhất 2025",
    description: "Cập nhật các quy định mới nhất về Luật BHXH 2024, hướng dẫn thủ tục rút BHXH 1 lần, gộp sổ và các chế độ bảo hiểm xã hội.",
});

const articles = [
    {
        slug: "luat-bhxh-moi-2025",
        title: "Tổng hợp điểm mới Luật Bảo hiểm xã hội 2024 áp dụng từ 01/7/2025",
        excerpt: "Những thay đổi quan trọng về điều kiện rút BHXH 1 lần, mở rộng đối tượng tham gia và các chế độ thai sản, hưu trí mới.",
        date: "2025-07-05",
        category: "Pháp luật",
        image: "/images/blog-1.jpg"
    },
    {
        slug: "huong-dan-rut-bhxh-1-lan-online",
        title: "Hướng dẫn chi tiết cách rút BHXH 1 lần online qua VssID nhanh nhất",
        excerpt: "Không cần đến cơ quan BHXH, bạn có thể nộp hồ sơ trực tuyến ngay tại nhà. Xem ngay hướng dẫn từng bước.",
        date: "2025-07-15",
        category: "Hướng dẫn",
        image: "/images/blog-2.jpg"
    },
    {
        slug: "kinh-nghiem-gop-so-bhxh",
        title: "Kinh nghiệm xử lý hồ sơ gộp nhiều sổ BHXH ở các tỉnh khác nhau",
        excerpt: "Bạn có 2-3 sổ BHXH ở nhiều công ty, nhiều tỉnh? Đây là quy trình gộp sổ nhanh nhất để hưởng quyền lợi.",
        date: "2025-07-28",
        category: "Kinh nghiệm",
        image: "/images/blog-3.jpg"
    },
    {
        slug: "tro-cap-huu-tri-xa-hoi-75-tuoi",
        title: "Trợ cấp hưu trí xã hội: Người từ 75 tuổi được hưởng quyền lợi gì?",
        excerpt: "Luật BHXH 2024 bổ sung tầng trợ cấp mới cho người cao tuổi không có lương hưu. Chi tiết mức hưởng và điều kiện.",
        date: "2025-08-05",
        category: "Chế độ",
        image: "/images/blog-4.jpg"
    },
    {
        slug: "dieu-kien-huong-luong-huu-15-nam",
        title: "Đóng BHXH 15 năm được hưởng lương hưu: Ai là đối tượng áp dụng?",
        excerpt: "Thay vì 20 năm, giờ đây chỉ cần 15 năm đóng BHXH là có thể nhận lương hưu. Cách tính lương hưu mới nhất.",
        date: "2025-08-18",
        category: "Hưu trí",
        image: "/images/blog-5.jpg"
    },
    {
        slug: "bhxh-cho-nhan-vien-thu-viec",
        title: "Thử việc có phải đóng Bảo hiểm xã hội không? Quy định mới 2025",
        excerpt: "Nhiều doanh nghiệp và NLĐ vẫn nhầm lẫn về việc đóng BHXH trong thời gian thử việc. Xem giải đáp pháp lý.",
        date: "2025-09-02",
        category: "Pháp luật",
        image: "/images/blog-6.jpg"
    },
    {
        slug: "cach-tinh-tien-bhxh-1-lan-2026",
        title: "Cách tính tiền BHXH 1 lần 2026: Hướng dẫn công thức chuẩn nhất",
        excerpt: "Tự tính số tiền bạn sẽ nhận được khi rút BHXH 1 lần. Bảng hệ số trượt giá và các lưu ý quan trọng.",
        date: "2025-09-15",
        category: "Hướng dẫn",
        image: "/images/blog-7.jpg"
    },
    {
        slug: "dang-ky-bhyt-ho-gia-dinh-online",
        title: "Hướng dẫn đăng ký mua BHYT hộ gia đình online tại nhà nhanh chóng",
        excerpt: "Tiết kiệm thời gian với quy trình đăng ký Bảo hiểm y tế trực tuyến qua Cổng dịch vụ công hoặc muabhyt.vn.",
        date: "2025-09-28",
        category: "Hướng dẫn",
        image: "/images/blog-8.jpg"
    },
    {
        slug: "doi-so-dien-thoai-vssid-online",
        title: "Mất số điện thoại VssID? Cách thay đổi thông tin online không cần OTP",
        excerpt: "Hướng dẫn xử lý lỗi không đăng nhập được VssID do mất sim hoặc thay đổi số điện thoại liên lạc.",
        date: "2025-10-10",
        category: "Kinh nghiệm",
        image: "/images/blog-9.jpg"
    },
    {
        slug: "rut-bhxh-nguoi-nuoc-ngoai",
        title: "Procedures for Social Insurance Withdrawal for Foreigners in Vietnam",
        excerpt: "Comprehensive guide for Expats on how to claim one-time Social Insurance payment when leaving Vietnam.",
        date: "2025-10-25",
        category: "Foreigners",
        image: "/images/blog-10.jpg"
    },
    {
        slug: "mat-so-bhxh-va-the-bhyt",
        title: "Bị mất sổ BHXH và thẻ BHYT: Quy trình cấp lại mới nhất 2025",
        excerpt: "Thủ tục đơn giản để cấp lại sổ BHXH bị mất hoặc hỏng thông qua ứng dụng VssID hoặc bưu điện.",
        date: "2025-11-05",
        category: "Hướng dẫn",
        image: "/images/blog-11.jpg"
    },
    {
        slug: "bhyt-5-nam-lien-tuc",
        title: "BHYT 5 năm liên tục: Quyền lợi 'khủng' mà nhiều người bỏ lỡ",
        excerpt: "Cách kiểm tra và hưởng quyền lợi không cùng chi trả khi tham gia Bảo hiểm y tế đủ 5 năm liên tục.",
        date: "2025-11-18",
        category: "Chế độ",
        image: "/images/blog-12.jpg"
    },
    {
        slug: "bao-hiem-that-nghiep-nhan-nhanh",
        title: "Cách nhận Bảo hiểm thất nghiệp nhanh nhất trong 3 ngày làm việc",
        excerpt: "Quy trình nộp hồ sơ hưởng trợ cấp thất nghiệp online và các mẹo để hồ sơ được duyệt ngay lập tức.",
        date: "2025-12-02",
        category: "Kinh nghiệm",
        image: "/images/blog-13.jpg"
    },
    {
        slug: "che-do-thai-san-cho-chong",
        title: "Chế độ thai sản cho chồng: Nghỉ bao nhiêu ngày và nhận bao nhiêu tiền?",
        excerpt: "Không chỉ vợ, chồng cũng có quyền lợi thai sản khi vợ sinh con. Chi tiết mức trợ cấp và số ngày nghỉ.",
        date: "2025-12-15",
        category: "Chế độ",
        image: "/images/blog-14.jpg"
    },
    {
        slug: "nghi-huu-som-truoc-tuoi",
        title: "Nghỉ hưu sớm trước tuổi: Điều kiện và mức giảm trừ lương hưu",
        excerpt: "Nghỉ hưu sớm bị trừ bao nhiêu % lương hưu hàng tháng? Các trường hợp đặc biệt được nghỉ hưu sớm.",
        date: "2025-12-28",
        category: "Hưu trí",
        image: "/images/blog-15.jpg"
    },
    {
        slug: "loi-thuong-gap-ho-so-bhxh-online",
        title: "Tại sao hồ sơ BHXH online bị từ chối? 5 lỗi thường gặp và cách sửa",
        excerpt: "Khắc phục các lỗi sai thông tin, ảnh chụp mờ hoặc sai số tài khoản khiến hồ sơ bị trả lại.",
        date: "2026-01-05",
        category: "Kinh nghiệm",
        image: "/images/blog-16.jpg"
    },
    {
        slug: "tra-cuu-qua-trinh-dong-bhxh",
        title: "4 cách tra cứu quá trình đóng BHXH nhanh nhất không cần mã OTP",
        excerpt: "Tra cứu qua tin nhắn, website, ứng dụng hoặc tổng đài để biết chính xác thời gian tham gia của bạn.",
        date: "2026-01-15",
        category: "Hướng dẫn",
        image: "/images/blog-17.jpg"
    },
    {
        slug: "rut-bhxh-1-lan-tai-buu-dien",
        title: "Có được rút BHXH 1 lần tại bưu điện không? Giải đáp từ chuyên gia",
        excerpt: "Phân biệt nộp hồ sơ qua bưu điện và nhận tiền qua thẻ ngân hàng/tiền mặt tại cơ quan BHXH.",
        date: "2026-01-25",
        category: "Hỏi đáp",
        image: "/images/blog-18.jpg"
    }
];

export default function BlogPage() {
    return (
        <div className="py-20 lg:py-32 bg-[var(--background)]">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
                        Tin tức & Kiến thức <span className="text-gradient">BHXH</span>
                    </h1>
                    <p className="text-lg text-[var(--text-secondary)]">
                        Hệ thống bài viết chuyên sâu về luật, thủ tục và kinh nghiệm xử lý hồ sơ bảo hiểm xã hội mới nhất.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/blog/${article.slug}`}
                            className="group bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-[var(--primary)] text-white text-xs font-bold rounded-full shadow-lg">
                                        {article.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <p className="text-xs text-[var(--text-secondary)] mb-2">{article.date}</p>
                                <h2 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                                    {article.title}
                                </h2>
                                <p className="text-sm text-[var(--text-secondary)] mb-6 line-clamp-3 leading-relaxed">
                                    {article.excerpt}
                                </p>
                                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-[var(--primary)]">
                                    Xem chi tiết
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    <div className="relative z-10 grid lg:grid-cols-2 items-center gap-12">
                        <div>
                            <h2 className="text-3xl font-black mb-4">Bạn cần tư vấn riêng?</h2>
                            <p className="text-lg text-white/80 mb-0">
                                Để lại thông tin hoặc gọi ngay cho chúng tôi để được giải đáp mọi thắc mắc về trường hợp cụ thể của bạn.
                            </p>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <CTAButton className="bg-white text-[var(--primary)] hover:bg-white/90 shadow-xl">
                                Liên hệ tư vấn miễn phí
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
