interface JsonLdProps {
    data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// Schema cho Organization/LocalBusiness
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DichVuBHXH.vn",
    description:
        "Chuyên tư vấn và hỗ trợ thủ tục BHXH: rút BHXH 1 lần, gộp sổ, BHYT tự nguyện. 15+ năm kinh nghiệm.",
    url: "https://dichvubhxh.vn",
    telephone: "+84973358077",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Hồ Chí Minh",
        addressCountry: "VN",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: "10.8231",
        longitude: "106.6297",
    },
    priceRange: "$$",
    openingHours: "Mo-Su 08:00-20:00",
    sameAs: [
        "https://www.facebook.com/congdichvubhxh.vn/",
        "https://www.tiktok.com/@congdichvubhxhvn",
        "https://congdichvubhxh.vn",
        "https://muabhyt.vn",
    ],
    areaServed: [
        {
            "@type": "Country",
            name: "Vietnam",
        },
    ],
    founder: {
        "@type": "Organization",
        name: "Tam Giang Co., Ltd",
        url: "https://tamgiangcapital.com",
    },
};

// Schema cho Service - Rút BHXH 1 lần
export const rutBHXHServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dịch vụ Rút BHXH 1 Lần",
    serviceType: "Social Insurance Withdrawal Assistance",
    description:
        "Hỗ trợ thủ tục rút bảo hiểm xã hội 1 lần, gộp sổ, mất sổ. Tư vấn đúng luật BHXH 2025, thủ tục ủy quyền hợp pháp.",
    provider: {
        "@type": "ProfessionalService",
        name: "DichVuBHXH.vn",
        url: "https://dichvubhxh.vn",
    },
    areaServed: [
        { "@type": "City", name: "Ho Chi Minh City" },
        { "@type": "City", name: "Hanoi" },
        { "@type": "Country", name: "Vietnam" },
    ],
    offers: [
        {
            "@type": "Offer",
            name: "Tư vấn hướng dẫn",
            price: "1000000",
            priceCurrency: "VND",
            description: "Hướng dẫn điền hồ sơ, cách thức, nơi nộp. Bạn tự đi nộp.",
        },
        {
            "@type": "Offer",
            name: "Ủy quyền trọn gói",
            price: "12000000",
            priceCurrency: "VND",
            description: "Chỉ cần ký ủy quyền 1 lần, chúng tôi xử lý toàn bộ.",
        },
    ],
};

// Schema cho FAQ
export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Điều kiện rút BHXH 1 lần năm 2025 là gì?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Theo Luật BHXH 2024 (hiệu lực 1/7/2025): Người tham gia TRƯỚC 1/7/2025 vẫn được rút sau 12 tháng nghỉ việc. Người tham gia SAU 1/7/2025 chỉ được rút nếu ra nước ngoài định cư, mắc bệnh hiểm nghèo, hoặc đủ tuổi hưu trí nhưng chưa đủ năm đóng.",
            },
        },
        {
            "@type": "Question",
            name: "Phí dịch vụ rút BHXH 1 lần là bao nhiêu?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Tư vấn hướng dẫn từ 1 triệu đồng (bạn tự nộp hồ sơ). Ủy quyền trọn gói từ 12 triệu đồng (chúng tôi xử lý toàn bộ). Cam kết hoàn phí 100% nếu không thực hiện được.",
            },
        },
        {
            "@type": "Question",
            name: "Người nước ngoài có thể rút BHXH tại Việt Nam không?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Có. Lao động nước ngoài làm việc tại Việt Nam khi kết thúc hợp đồng hoặc hết hạn giấy phép lao động có thể rút BHXH 1 lần. Chúng tôi hỗ trợ đa ngôn ngữ và dịch thuật công chứng.",
            },
        },
    ],
};
