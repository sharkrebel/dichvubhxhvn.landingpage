import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://dichvubhxh.vn";

    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/dich-vu`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/dich-vu/rut-bhxh-1-lan`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/dich-vu/nguoi-nuoc-ngoai`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/dich-vu/hoan-thien-ho-so`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/dich-vu/bhyt-tu-nguyen`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/dich-vu/bhxh-tu-nguyen`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/quy-trinh`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/bieu-phi`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/kinh-nghiem`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.7,
        },
    ];

    return routes;
}
