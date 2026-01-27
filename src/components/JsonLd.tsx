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

export const organizationSchemaEn = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DichVuBHXH.vn",
    description:
        "Specializing in Social Insurance consulting: One-time withdrawal, Book merging, Voluntary Health Insurance. 15+ years of experience.",
    url: "https://dichvubhxh.vn/en",
    telephone: "+84973358077",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Ho Chi Minh City",
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

// Schema cho FAQ - Rút BHXH
export const faqSchemaBHXH = {
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
                text: "Tư vấn hướng dẫn từ 1 triệu đồng. Ủy quyền trọn gói từ 12 triệu đồng. Cam kết hoàn phí 100% nếu không thực hiện được.",
            },
        },
        {
            "@type": "Question",
            name: "Hồ sơ rút BHXH 1 lần gồm những gì?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Gồm: Sổ bảo hiểm xã hội (bản chính), Căn cước công dân (bản sao), và Đơn đề nghị (Mẫu số 14-HSB).",
            },
        },
    ],
};

// Schema cho FAQ - BHYT
export const faqSchemaBHYT = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Mua BHYT tự nguyện ở đâu?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Bạn có thể mua tại các đại lý thu BHXH, BHYT, UBND xã/phường nơi cư trú hoặc đăng ký online tại muabhyt.vn.",
            },
        },
        {
            "@type": "Question",
            name: "Sau bao lâu thì thẻ BHYT có giá trị?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Thẻ BHYT có giá trị sử dụng sau 30 ngày kể từ ngày đóng tiền đối với người tham gia lần đầu hoặc tham gia lại sau 3 tháng gián đoạn.",
            },
        },
    ],
};

// Schema cho FAQ - Foreigner (EN)
export const faqSchemaForeignerEn = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Can foreigners withdraw Social Insurance in Vietnam?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Foreign workers in Vietnam can withdraw Social Insurance in a one-time payment when their labor contract ends or work permit expires.",
            },
        },
        {
            "@type": "Question",
            name: "What documents are required for foreign worker SI withdrawal?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Required documents include the Social Insurance book, Passport/National ID, and the application form. We assist with translation and notarization.",
            },
        },
    ],
};

// Schema cho FAQ - One-time Withdrawal (EN)
export const faqSchemaBHXHEn = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What are the conditions for one-time SI withdrawal in 2025?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Under the 2024 SI Law (effective 1/7/2025): Those who participated BEFORE 1/7/2025 can still withdraw after 12 months of stopping work. Those who join AFTER 1/7/2025 can only withdraw if settling abroad, suffering from critical illness, or reaching retirement age without enough contribution years.",
            },
        },
        {
            "@type": "Question",
            name: "How much is the service fee for SI withdrawal?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Guidance service from 1 million VND. Full authorization service from 12 million VND. 100% refund guarantee if the task cannot be completed.",
            },
        },
    ],
};

// Schema cho FAQ - BHYT (EN)
export const faqSchemaBHYTEn = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Where can I register for voluntary Health Insurance?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You can register at Social Insurance collection agencies, local ward/commune offices, or online at muabhyt.vn.",
            },
        },
        {
            "@type": "Question",
            name: "When does the Health Insurance card become valid?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The card becomes valid 30 days after payment for first-time participants or those re-joining after a gap of more than 3 months.",
            },
        },
    ],
};

// Common FAQ
export const faqSchema = faqSchemaBHXH;

// Blog Article Schema Generator
export const getArticleSchema = (article: {
    title: string;
    description: string;
    date: string;
    authorName?: string;
    image?: string;
    url: string;
}) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    author: {
        "@type": "Person",
        name: article.authorName || "Nguyễn Hải Đăng",
        url: "https://dichvubhxh.vn",
    },
    datePublished: article.date,
    image: article.image || "https://dichvubhxh.vn/og-image-static.png",
    publisher: {
        "@type": "Organization",
        name: "DichVuBHXH.vn",
        logo: {
            "@type": "ImageObject",
            url: "https://dichvubhxh.vn/logo_dichvubhxh.png",
        },
    },
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": article.url,
    },
});

// Local Service FAQ Generator
export const getLocalFAQSchema = (serviceName: string, locationName: string) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: `Dịch vụ ${serviceName} tại ${locationName} có hỗ trợ tận nơi không?`,
            acceptedAnswer: {
                "@type": "Answer",
                text: `Có, chúng tôi hỗ trợ tư vấn và thu hồ sơ tận nơi tại ${locationName}. Khách hàng chỉ cần ký hồ sơ, chúng tôi sẽ xử lý mọi thủ tục còn lại với cơ quan BHXH địa phương.`,
            },
        },
        {
            "@type": "Question",
            name: `Thời gian xử lý ${serviceName} tại khu vực ${locationName} mất bao lâu?`,
            acceptedAnswer: {
                "@type": "Answer",
                text: `Thông thường thời gian xử lý mất từ 7-10 ngày làm việc sau khi hồ sơ được nộp vào cơ quan BHXH tại ${locationName}. Chúng tôi cam kết theo sát tiến độ để khách hàng nhận kết quả nhanh nhất.`,
            },
        },
    ],
});
