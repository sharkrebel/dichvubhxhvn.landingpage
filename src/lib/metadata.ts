import { Metadata } from "next";

const baseUrl = "https://dichvubhxh.vn";

export function constructMetadata({
    title,
    description,
    image = "/og-image-static.png",
    path = "",
    noIndex = false,
}: {
    title?: string;
    description?: string;
    image?: string;
    path?: string;
    noIndex?: boolean;
} = {}): Metadata {
    const isEn = path.startsWith("/en");
    const cleanPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;

    // Calculate the path for the alternative language
    let altPath = "";
    if (isEn) {
        // e.g., /en/services -> /dich-vu
        altPath = cleanPath.replace(/^\/en/, "");
        if (altPath === "") altPath = "/"; // root mapping
        // Specific mappings if needed could go here
    } else {
        // e.g., /dich-vu -> /en/services
        // For now, assume English structure mirrors Vietnamese or uses translated segments
        // In this project, VI is /dich-vu/... and EN is /en/services/...
        if (cleanPath === "/" || cleanPath === "") altPath = "/en";
        else if (cleanPath.startsWith("/dich-vu")) altPath = cleanPath.replace("/dich-vu", "/en/services");
        else altPath = `/en${cleanPath}`;
    }

    const fullUrl = `${baseUrl}${cleanPath}`;

    return {
        title: title ? `${title} | DichVuBHXH.vn` : "DichVuBHXH.vn - Dịch vụ Tư vấn BHXH Trọn Gói",
        description: description || "Chuyên xử lý hồ sơ rút BHXH 1 lần, gộp sổ, BHYT tự nguyện. 15+ năm kinh nghiệm, tư vấn đúng luật mới nhất 2025.",
        openGraph: {
            title: title || "Dịch vụ BHXH Online Trọn Gói - Uy Tín & Chuyên Nghiệp",
            description: description || "Chuyên xử lý hồ sơ rút BHXH 1 lần, gộp sổ, BHYT tự nguyện. 15+ năm kinh nghiệm, tư vấn đúng luật mới nhất 2025.",
            url: fullUrl,
            siteName: "DichVuBHXH.vn",
            images: [
                {
                    url: image.startsWith("http") ? image : `${baseUrl}${image}`,
                },
            ],
            type: "website",
            locale: isEn ? "en_US" : "vi_VN",
        },
        alternates: {
            canonical: fullUrl,
            languages: {
                "vi-VN": `${baseUrl}${!isEn ? cleanPath : altPath}`,
                "en-US": `${baseUrl}${isEn ? cleanPath : altPath}`,
            },
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
            },
        },
    };
}
