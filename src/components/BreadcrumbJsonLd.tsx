import React from "react";

interface BreadcrumbItem {
    name: string;
    path: string; // Relative path, e.g., "/dich-vu"
}

interface BreadcrumbJsonLdProps {
    items: BreadcrumbItem[];
}

export default function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
    const baseUrl = "https://dichvubhxh.vn";

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${baseUrl}${item.path}`,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
