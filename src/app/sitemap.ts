import { MetadataRoute } from "next";
import { locations, services } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://dichvubhxh.vn";

    const blogSlugs = [
        "luat-bhxh-moi-2025",
        "huong-dan-rut-bhxh-1-lan-online",
        "kinh-nghiem-gop-so-bhxh",
        "tro-cap-huu-tri-xa-hoi-75-tuoi",
        "dieu-kien-huong-luong-huu-15-nam",
        "bhxh-cho-nhan-vien-thu-viec",
        "cach-tinh-tien-bhxh-1-lan-2026",
        "dang-ky-bhyt-ho-gia-dinh-online",
        "doi-so-dien-thoai-vssid-online",
        "rut-bhxh-nguoi-nuoc-ngoai",
        "mat-so-bhxh-va-the-bhyt",
        "bhyt-5-nam-lien-tuc",
        "bao-hiem-that-nghiep-nhan-nhanh",
        "che-do-thai-san-cho-chong",
        "nghi-huu-som-truoc-tuoi",
        "loi-thuong-gap-ho-so-bhxh-online",
        "tra-cuu-qua-trinh-dong-bhxh",
        "rut-bhxh-1-lan-tai-buu-dien"
    ];

    const staticRoutes = [
        "",
        "/dich-vu",
        "/dich-vu/rut-bhxh-1-lan",
        "/dich-vu/nguoi-nuoc-ngoai",
        "/dich-vu/hoan-thien-ho-so",
        "/dich-vu/bhyt-tu-nguyen",
        "/dich-vu/bhxh-tu-nguyen",
        "/quy-trinh",
        "/bieu-phi",
        "/kinh-nghiem",
        "/blog",
    ];

    const enRoutes = [
        "/en",
        "/en/services",
        "/en/services/one-time-withdrawal",
        "/en/services/foreigner",
        "/en/services/profile-completion",
        "/en/services/voluntary-health-insurance",
        "/en/services/voluntary-social-insurance",
        "/en/process",
        "/en/pricing",
        "/en/experience",
    ];

    // Generate blog routes
    const blogRoutes = blogSlugs.map(slug => `/blog/${slug}`);

    // Generate localized service routes
    const localizedRoutes: string[] = [];
    Object.keys(services).forEach(serviceSlug => {
        Object.keys(locations).forEach(locationSlug => {
            localizedRoutes.push(`/dich-vu/${serviceSlug}/${locationSlug}`);
        });
    });

    const allViRoutes = [...staticRoutes, ...blogRoutes, ...localizedRoutes];

    const sitemapEntries: MetadataRoute.Sitemap = [
        ...allViRoutes.map((route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: route === "" ? 1 : (route.startsWith("/dich-vu/") && route.split("/").length > 3 ? 0.6 : 0.8),
        })),
        ...enRoutes.map((route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: route === "/en" ? 0.9 : 0.7,
        })),
    ];

    return sitemapEntries;
}
