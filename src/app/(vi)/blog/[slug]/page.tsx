import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import AuthorBio from "@/components/AuthorBio";
import JsonLd, { getArticleSchema } from "@/components/JsonLd";
import { notFound } from "next/navigation";

interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    category: string;
    image?: string;
    content: React.ReactNode;
}

const articles: Record<string, BlogPost> = {
    "luat-bhxh-moi-2025": {
        slug: "luat-bhxh-moi-2025",
        title: "Tổng hợp điểm mới Luật Bảo hiểm xã hội 2024 áp dụng từ 01/7/2025",
        description: "Phân tích chi tiết những thay đổi quan trọng về rút BHXH 1 lần, chế độ hưu trí và đối tượng tham gia theo Luật BHXH 2024.",
        date: "2025-07-05",
        category: "Pháp luật",
        content: (
            <>
                <p>Luật Bảo hiểm xã hội 2024 được Quốc hội thông qua với nhiều thay đổi mang tính bước ngoặt, ảnh hưởng trực tiếp đến hàng triệu người lao động. Dưới đây là những điểm mới nhất cần lưu ý:</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Điều kiện rút BHXH 1 lần cho người tham gia sau 1/7/2025</h2>
                <p>Đây là nội dung được quan tâm nhất. Theo quy định mới, những người bắt đầu tham gia BHXH từ ngày 1/7/2025 trở đi sẽ không còn được rút BHXH 1 lần sau 12 tháng nghỉ việc như trước đây (trừ một số trường hợp đặc biệt như định cư nước ngoài, bệnh hiểm nghèo...).</p>
                <p>Đối với những người đã tham gia BHXH trước ngày 1/7/2025, quyền lợi rút BHXH 1 lần sau 12 tháng nghỉ việc vẫn được bảo lưu hoàn toàn.</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Giảm số năm đóng BHXH tối thiểu để hưởng lương hưu</h2>
                <p>Từ ngày 1/7/2025, người lao động chỉ cần đóng BHXH từ đủ 15 năm (thay vì 20 năm như hiện nay) là đã có cơ hội hưởng lương hưu khi đủ tuổi. Điều này giúp những người tham gia muộn hoặc có quá trình đóng gián đoạn dễ dàng tiếp cận chế độ hưu trí hơn.</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Bổ sung trợ cấp hưu trí xã hội</h2>
                <p>Luật mới xây dựng hệ thống BHXH đa tầng, trong đó tầng hưu trí xã hội sẽ hỗ trợ cho những người cao tuổi không có lương hưu hoặc trợ cấp BHXH hàng tháng từ ngân sách nhà nước.</p>
                <div className="bg-[var(--primary)]/5 p-6 rounded-2xl border border-[var(--primary)]/10 mt-8">
                    <p className="font-bold mb-2">Bạn cần tư vấn về Luật BHXH 2025?</p>
                    <p className="mb-4">Liên hệ ngay với chúng tôi để được giải đáp thắc mắc về lộ trình rút BHXH 1 lần.</p>
                    <Link href="/dich-vu/rut-bhxh-1-lan" className="text-[var(--primary)] font-bold hover:underline flex items-center gap-2">
                        Xem dịch vụ Rút BHXH 1 lần
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </>
        )
    },
    "huong-dan-rut-bhxh-1-lan-online": {
        slug: "huong-dan-rut-bhxh-1-lan-online",
        title: "Hướng dẫn chi tiết cách rút BHXH 1 lần online qua VssID nhanh nhất",
        description: "Quy trình nộp hồ sơ rút bảo hiểm xã hội một lần trực tuyến qua ứng dụng VssID và Cổng dịch vụ công quốc gia.",
        date: "2025-07-15",
        category: "Hướng dẫn",
        content: (
            <>
                <p>Việc rút BHXH 1 lần hiện nay đã trở nên đơn giản hơn bao giờ hết nhờ các nền tảng số. Bạn có thể thực hiện ngay tại nhà mà không cần xếp hàng chờ đợi.</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Bước 1: Cài đặt và đăng nhập VssID</h2>
                <p>Đảm bảo bạn đã có tài khoản VssID đã được phê duyệt. Nếu chưa có, hãy đăng ký bằng số định danh cá nhân hoặc CCCD.</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Bước 2: Truy cập Cổng dịch vụ công</h2>
                <p>Bạn có thể thực hiện trực tiếp trên app VssID ở mục &apos;Dịch vụ công&apos; hoặc truy cập website dichvucong.baohiemxahoi.gov.vn.</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Bước 3: Chọn dịch vụ Giải quyết hưởng BHXH một lần</h2>
                <p>Điền đầy đủ thông tin vào mẫu đơn điện tử, chú ý số tài khoản ngân hàng chính chủ để nhận tiền.</p>
                <p className="mt-8">Nếu bạn gặp khó khăn trong việc thao tác hoặc hồ sơ bị từ chối, hãy tham khảo <Link href="/dich-vu/hoan-thien-ho-so" className="text-[var(--primary)] hover:underline font-medium">dịch vụ hoàn thiện hồ sơ</Link> của chúng tôi để được hỗ trợ xử lý nhanh nhất.</p>
            </>
        )
    },
    "kinh-nghiem-gop-so-bhxh": {
        slug: "kinh-nghiem-gop-so-bhxh",
        title: "Kinh nghiệm xử lý hồ sơ gộp nhiều sổ BHXH ở các tỉnh khác nhau",
        description: "Quy trình và thủ tục gộp nhiều sổ BHXH thành một sổ duy nhất để đảm bảo quyền lợi khi hưởng các chế độ.",
        date: "2025-07-28",
        category: "Kinh nghiệm",
        content: (
            <>
                <p>Nhiều người lao động khi chuyển công tác qua nhiều công ty thường phát sinh nhiều sổ BHXH. Việc không gộp sổ kịp thời có thể dẫn đến khó khăn khi rút BHXH 1 lần hoặc tính lương hưu.</p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Tại sao phải gộp sổ BHXH?</h2>
                <p>Mỗi cá nhân chỉ được quản lý bởi một mã số BHXH duy nhất. Gộp sổ giúp hệ thống ghi nhận chính xác và liên tục quá trình đóng của bạn.</p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Thủ tục cần chuẩn bị</h2>
                <p>Bạn cần cung cấp tất cả các sổ BHXH hiện có và nộp tại cơ quan BHXH nơi đang tham gia hoặc qua dịch vụ bưu chính.</p>
                <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl">
                    <p className="text-sm font-medium">Lưu ý: Nếu bạn có quá trình đóng trùng nhau hoặc bị thất lạc sổ, hãy sử dụng <Link href="/dich-vu/hoan-thien-ho-so" className="text-[var(--primary)] font-bold hover:underline">Dịch vụ Gộp sổ BHXH</Link> chuyên nghiệp để tránh bị treo hồ sơ.</p>
                </div>
            </>
        )
    },
    "tro-cap-huu-tri-xa-hoi-75-tuoi": {
        slug: "tro-cap-huu-tri-xa-hoi-75-tuoi",
        title: "Trợ cấp hưu trí xã hội: Người từ 75 tuổi được hưởng quyền lợi gì?",
        description: "Luật BHXH 2024 bổ sung tầng trợ cấp mới cho người cao tuổi không có lương hưu. Chi tiết mức hưởng và điều kiện.",
        date: "2025-08-05",
        category: "Chế độ",
        content: (
            <>
                <p>Một trong những điểm nhân văn nhất của Luật BHXH mới là hạ độ tuổi hưởng trợ cấp hưu trí xã hội từ 80 xuống 75 tuổi đối với những người không có lương hưu hay trợ cấp hưu trí hàng tháng.</p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Mức hưởng dự kiến</h2>
                <p>Mức trợ cấp hàng tháng sẽ do Chính phủ quy định tùy theo điều kiện kinh tế xã hội từng thời kỳ, kèm theo bảo hiểm y tế miễn phí.</p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Ý nghĩa của quy định</h2>
                <p>Giúp mở rộng diện bao phủ an sinh xã hội, đảm bảo đời sống cho người cao tuổi không có tích lũy bảo hiểm.</p>
            </>
        )
    },
    "dieu-kien-huong-luong-huu-15-nam": {
        slug: "dieu-kien-huong-luong-huu-15-nam",
        title: "Đóng BHXH 15 năm được hưởng lương hưu: Ai là đối tượng áp dụng?",
        description: "Thay vì 20 năm, giờ đây chỉ cần 15 năm đóng BHXH là có thể nhận lương hưu. Cách tính lương hưu mới nhất.",
        date: "2025-08-18",
        category: "Hưu trí",
        content: (
            <>
                <p>Việc giảm số năm đóng tối thiểu xuống 15 năm giúp nhiều người lao động có cơ hội hưởng lương hưu sớm hơn hoặc những người tham gia muộn vẫn có thể nhận chế độ hưu trí.</p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Tỷ lệ hưởng lương hưu</h2>
                <p>Tỷ lệ hưởng sẽ được tính toán dựa trên mức bình quân tiền lương đóng BHXH và số năm đóng thực tế theo quy định mới.</p>
            </>
        )
    },
    "bhxh-cho-nhan-vien-thu-viec": {
        slug: "bhxh-cho-nhan-vien-thu-viec",
        title: "Thử việc có phải đóng Bảo hiểm xã hội không? Quy định mới 2025",
        description: "Nhiều doanh nghiệp và NLĐ vẫn nhầm lẫn về việc đóng BHXH trong thời gian thử việc. Xem giải đáp pháp lý.",
        date: "2025-09-02",
        category: "Pháp luật",
        content: (
            <>
                <p>Theo Bộ luật Lao động và Luật BHXH, nếu hợp đồng thử việc được giao kết trong hợp đồng lao động có thời hạn từ 1 tháng trở lên thì người sử dụng lao động phải đóng BHXH cho người lao động.</p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Trường hợp ký hợp đồng thử việc riêng</h2>
                <p>Nếu chỉ ký hợp đồng thử việc tách rời thì không thuộc đối tượng tham gia BHXH bắt buộc. NLĐ cần lưu ý để bảo vệ quyền lợi.</p>
            </>
        )
    },
    "cach-tinh-tien-bhxh-1-lan-2026": {
        slug: "cach-tinh-tien-bhxh-1-lan-2026",
        title: "Cách tính tiền BHXH 1 lần 2026: Hướng dẫn công thức chuẩn nhất",
        description: "Tự tính số tiền bạn sẽ nhận được khi rút BHXH 1 lần. Bảng hệ số trượt giá và các lưu ý quan trọng.",
        date: "2025-09-15",
        category: "Hướng dẫn",
        content: (
            <>
                <p>Tiền BHXH 1 lần phụ thuộc vào mức lương đóng và hệ số trượt giá hàng năm do Nhà nước công bố. Công thức chung: (Số năm trước 2014 x 1.5) + (Số năm từ 2014 x 2.0).</p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Lưu ý về hệ số trượt giá</h2>
                <p>Mỗi năm hệ số này sẽ thay đổi để bảo vệ giá trị đồng tiền cho người tham gia bảo hiểm.</p>
            </>
        )
    },
    "dang-ky-bhyt-ho-gia-dinh-online": {
        slug: "dang-ky-bhyt-ho-gia-dinh-online",
        title: "Hướng dẫn đăng ký mua BHYT hộ gia đình online tại nhà nhanh chóng",
        description: "Tiết kiệm thời gian với quy trình đăng ký Bảo hiểm y tế trực tuyến qua Cổng dịch vụ công hoặc muabhyt.vn.",
        date: "2025-09-28",
        category: "Hướng dẫn",
        content: (
            <>
                <p>Bạn không cần phải đến UBND phường hay các bưu cục để mua BHYT nữa. Mọi thủ tục giờ đây có thể làm trực tuyến nhanh gọn.</p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Sử dụng dịch vụ tại muabhyt.vn</h2>
                <p>Chúng tôi cung cấp giải pháp đăng ký BHYT hộ gia đình nhanh chóng, hỗ trợ kiểm tra thông tin và xuất biên lai điện tử ngay.</p>
            </>
        )
    },
    "doi-so-dien-thoai-vssid-online": {
        slug: "doi-so-dien-thoai-vssid-online",
        title: "Mất số điện thoại VssID? Cách thay đổi thông tin online không cần OTP",
        description: "Hướng dẫn xử lý lỗi không đăng nhập được VssID do mất sim hoặc thay đổi số điện thoại liên lạc.",
        date: "2025-10-10",
        category: "Kinh nghiệm",
        content: (
            <>
                <p>Khi thay đổi số điện thoại, bạn cần cập nhật trên hệ thống BHXH để nhận mã OTP khi thực hiện các dịch vụ công. Quy trình này có thể nộp qua Cổng dịch vụ công quốc gia.</p>
            </>
        )
    },
    "rut-bhxh-nguoi-nuoc-ngoai": {
        slug: "rut-bhxh-nguoi-nuoc-ngoai",
        title: "Procedures for Social Insurance Withdrawal for Foreigners in Vietnam",
        description: "Comprehensive guide for Expats on how to claim one-time Social Insurance payment when leaving Vietnam.",
        date: "2025-10-25",
        category: "Foreigners",
        content: (
            <>
                <p>Foreigners working in Vietnam under labor contracts are entitled to social insurance benefits. When the work permit expires or contract ends, you can claim the one-time payment.</p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Required Documents</h2>
                <p>Passport, labor contract termination, and social insurance book are essential.</p>
            </>
        )
    },
    "mat-so-bhxh-va-the-bhyt": {
        slug: "mat-so-bhxh-va-the-bhyt",
        title: "Bị mất sổ BHXH và thẻ BHYT: Quy trình cấp lại mới nhất 2025",
        description: "Thủ tục đơn giản để cấp lại sổ BHXH bị mất hoặc hỏng thông qua ứng dụng VssID hoặc bưu điện.",
        date: "2025-11-05",
        category: "Hướng dẫn",
        content: (
            <>
                <p>Mất sổ BHXH không làm mất đi quá trình đóng của bạn. Bạn chỉ cần làm thủ tục cấp lại để có tờ rời và bìa sổ mới phục vụ việc hưởng chế độ.</p>
            </>
        )
    },
    "bhyt-5-nam-lien-tuc": {
        slug: "bhyt-5-nam-lien-tuc",
        title: "BHYT 5 năm liên tục: Quyền lợi 'khủng' mà nhiều người bỏ lỡ",
        description: "Cách kiểm tra và hưởng quyền lợi không cùng chi trả khi tham gia Bảo hiểm y tế đủ 5 năm liên tục.",
        date: "2025-11-18",
        category: "Chế độ",
        content: (
            <>
                <p>Người tham gia BHYT đủ 5 năm liên tục và có số tiền cùng chi trả chi phí khám chữa bệnh trong năm lớn hơn 6 tháng lương cơ sở sẽ được hưởng 100% chi phí khám chữa bệnh.</p>
            </>
        )
    },
    "bao-hiem-that-nghiep-nhan-nhanh": {
        slug: "bao-hiem-that-nghiep-nhan-nhanh",
        title: "Cách nhận Bảo hiểm thất nghiệp nhanh nhất trong 3 ngày làm việc",
        description: "Quy trình nộp hồ sơ hưởng trợ cấp thất nghiệp online và các mẹo để hồ sơ được duyệt ngay lập tức.",
        date: "2025-12-02",
        category: "Kinh nghiệm",
        content: (
            <>
                <p>Thời hạn nộp hồ sơ hưởng trợ cấp thất nghiệp là trong vòng 3 tháng kể từ ngày chấm dứt HĐLĐ. Nộp qua ứng dụng hoặc Cổng dịch vụ công việc làm sẽ giúp rút ngắn thời gian.</p>
            </>
        )
    },
    "che-do-thai-san-cho-chong": {
        slug: "che-do-thai-san-cho-chong",
        title: "Chế độ thai sản cho chồng: Nghỉ bao nhiêu ngày và nhận bao nhiêu tiền?",
        description: "Không chỉ vợ, chồng cũng có quyền lợi thai sản khi vợ sinh con. Chi tiết mức trợ cấp và số ngày nghỉ.",
        date: "2025-12-15",
        category: "Chế độ",
        content: (
            <>
                <p>Chồng đang đóng BHXH khi vợ sinh con sẽ được nghỉ từ 5 đến 14 ngày làm việc tùy theo hình thức sinh (thường, mổ, sinh đôi). Ngoài ra còn được hưởng trợ cấp một lần nếu vợ không tham gia BHXH.</p>
            </>
        )
    },
    "nghi-huu-som-truoc-tuoi": {
        slug: "nghi-huu-som-truoc-tuoi",
        title: "Nghỉ hưu sớm trước tuổi: Điều kiện và mức giảm trừ lương hưu",
        description: "Nghỉ hưu sớm bị trừ bao nhiêu % lương hưu hàng tháng? Các trường hợp đặc biệt được nghỉ hưu sớm.",
        date: "2025-12-28",
        category: "Hưu trí",
        content: (
            <>
                <p>Nghỉ hưu sớm do suy giảm khả năng lao động hoặc làm công việc nặng nhọc. Mỗi năm nghỉ hưu trước tuổi sẽ bị trừ 2% tỷ lệ hưởng lương hưu.</p>
            </>
        )
    },
    "loi-thuong-gap-ho-so-bhxh-online": {
        slug: "loi-thuong-gap-ho-so-bhxh-online",
        title: "Tại sao hồ sơ BHXH online bị từ chối? 5 lỗi thường gặp và cách sửa",
        description: "Khắc phục các lỗi sai thông tin, ảnh chụp mờ hoặc sai số tài khoản khiến hồ sơ bị trả lại.",
        date: "2026-01-05",
        category: "Kinh nghiệm",
        content: (
            <>
                <p>Hồ sơ bị từ chối thường do: Chụp ảnh CCCD bị lóa, sai thông tin ngân hàng, chưa chốt sổ BHXH tại công ty cũ...</p>
            </>
        )
    },
    "tra-cuu-qua-trinh-dong-bhxh": {
        slug: "tra-cuu-qua-trinh-dong-bhxh",
        title: "4 cách tra cứu quá trình đóng BHXH nhanh nhất không cần mã OTP",
        description: "Tra cứu qua tin nhắn, website, ứng dụng hoặc tổng đài để biết chính xác thời gian tham gia của bạn.",
        date: "2026-01-15",
        category: "Hướng dẫn",
        content: (
            <>
                <p>Tra cứu qua tổng đài 1900 9068 hoặc soạn tin nhắn theo cú pháp quy định để biết số tháng đóng mà không cần đăng nhập VssID.</p>
            </>
        )
    },
    "rut-bhxh-1-lan-tai-buu-dien": {
        slug: "rut-bhxh-1-lan-tai-buu-dien",
        title: "Có được rút BHXH 1 lần tại bưu điện không? Giải đáp từ chuyên gia",
        description: "Phân biệt nộp hồ sơ qua bưu điện và nhận tiền qua thẻ ngân hàng/tiền mặt tại cơ quan BHXH.",
        date: "2026-01-25",
        category: "Hỏi đáp",
        content: (
            <>
                <p>Bưu điện chỉ là nơi tiếp nhận hồ sơ hộ cơ quan BHXH. Việc chi trả tiền hiện nay ưu tiên thực hiện qua tài khoản ngân hàng để đảm bảo an toàn và minh bạch.</p>
            </>
        )
    }
};

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;
    const article = articles[slug];

    if (!article) return constructMetadata({ path: "/blog" });

    return constructMetadata({
        path: `/blog/${slug}`,
        title: `${article.title} - DichVuBHXH.vn`,
        description: article.description,
        image: article.image || "/og-image-static.png",
    });
}

export default async function BlogPostPage({ params }: Props) {
    const slug = (await params).slug;
    const article = articles[slug];

    if (!article) {
        notFound();
    }

    const articleSchema = getArticleSchema({
        title: article.title,
        description: article.description,
        date: article.date,
        url: `https://dichvubhxh.vn/blog/${slug}`,
        image: article.image ? `https://dichvubhxh.vn${article.image}` : undefined,
    });

    return (
        <div className="bg-[var(--background)] py-12 lg:py-20">
            <JsonLd data={articleSchema} />
            <div className="max-w-4xl mx-auto px-4 lg:px-8">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-8">
                    <Link href="/" className="hover:text-[var(--primary)]">Trang chủ</Link>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <Link href="/blog" className="hover:text-[var(--primary)]">Blog</Link>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-[var(--foreground)] truncate max-w-[200px] md:max-w-none">{article.title}</span>
                </nav>

                <article className="prose prose-slate dark:prose-invert max-w-none mb-16">
                    <div className="mb-10">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-bold rounded-full">
                                {article.category}
                            </span>
                            <span className="text-xs text-[var(--text-secondary)]">Ngày đăng: {article.date}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-6">
                            {article.title}
                        </h1>
                        <p className="text-xl text-[var(--text-secondary)] leading-relaxed italic border-l-4 border-[var(--primary)] pl-6">
                            {article.description}
                        </p>
                    </div>

                    <div className="article-content bg-white/50 dark:bg-white/5 backdrop-blur-sm p-6 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm leading-8">
                        {article.content}
                    </div>
                </article>

                <AuthorBio />

                <div className="mt-16 pt-12 border-t border-slate-200 dark:border-white/10 text-center">
                    <h3 className="text-2xl font-bold mb-6">Bạn có thắc mắc về quy định mới?</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <CTAButton size="lg">Hỏi chuyên gia miễn phí</CTAButton>
                        <Link href="/blog" className="inline-flex items-center px-8 py-4 text-lg font-bold text-[var(--primary)] hover:underline">
                            Quay lại danh sách bài viết
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
