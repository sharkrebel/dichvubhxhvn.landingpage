"use client";

import { useState } from "react";
import CTAButton from "@/components/CTAButton";

interface Experience {
    problem: string;
    solution: string;
    category: string;
}

interface ExperienceContentProps {
    experiences: Experience[];
    title: string;
    description: string;
    badge: string;
    ctaTitle: string;
    ctaDesc: string;
    phone: string;
    solutionLabel: string;
    issueButtonLabel: string;
}

export default function ExperienceContent({
    experiences,
    title,
    description,
    badge,
    ctaTitle,
    ctaDesc,
    phone,
    solutionLabel,
    issueButtonLabel,
}: ExperienceContentProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                        {badge}
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                        {title}
                    </h1>
                    <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
            </section>

            {/* Accordion */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8">
                    <div className="space-y-4">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-[#1e293b] rounded-2xl border border-[var(--border)] overflow-hidden"
                            >
                                <button
                                    onClick={() =>
                                        setOpenIndex(openIndex === index ? null : index)
                                    }
                                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[var(--primary)]/5 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-bold rounded-full">
                                            {exp.category}
                                        </span>
                                        <span className="font-bold text-sm lg:text-base">
                                            {exp.problem}
                                        </span>
                                    </div>
                                    <svg
                                        className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-5 border-t border-[var(--border)]">
                                        <div className="pt-4">
                                            <p className="text-sm text-[var(--text-secondary)] mb-4">
                                                <strong className="text-green-600">{solutionLabel}:</strong>{" "}
                                                {exp.solution}
                                            </p>
                                            <CTAButton size="sm">{issueButtonLabel}</CTAButton>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white dark:bg-[#0d141b]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl font-black tracking-tight mb-6">
                        {ctaTitle}
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                        {ctaDesc}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <CTAButton size="lg">{issueButtonLabel}</CTAButton>
                        <a
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-[var(--primary)] bg-[var(--primary)]/10 rounded-xl hover:bg-[var(--primary)]/20 transition-colors"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            {phone}
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
