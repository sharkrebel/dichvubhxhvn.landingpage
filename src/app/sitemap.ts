import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://dichvubhxh.vn";

    const localRoutes = [
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

    const allRoutes = [
        ...localRoutes.map((route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: route === "" ? 1 : 0.8,
        })),
        ...enRoutes.map((route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: route === "/en" ? 0.9 : 0.7,
        })),
    ];

    return allRoutes;
}
