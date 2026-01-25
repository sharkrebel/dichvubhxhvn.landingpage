"use client";

import { useState } from "react";
// import { Metadata } from "next"; // Can't export Metadata from client component
import CTAButton from "@/components/CTAButton";

const experiences = [
    {
        problem: "Cannot create VssID account or login failed",
        solution:
            "We solve VssID account issues, including authentication errors, information conflicts, or locked accounts.",
        category: "VssID",
    },
    {
        problem: "Residence info does not match processing location",
        solution:
            "We handle documents at the most convenient location for you, regardless of your current residence info.",
        category: "Residence",
    },
    {
        problem: "No appointment available when required",
        solution:
            "We can assist you in booking appointments or processing documents without going through the appointment system.",
        category: "Appointment",
    },
    {
        problem: "Missing documents: quit job without closing book",
        solution:
            "Guide to complete Social Insurance profile for one-time withdrawal or unemployment insurance as soon as possible, even if ex-company doesn't cooperate.",
        category: "Documents",
    },
    {
        problem: "Overlapping time, multiple SI numbers",
        solution:
            "We handle merging books and adjusting contribution time to unify your entire Social Insurance history.",
        category: "Merging",
    },
    {
        problem: "Incorrect personal info on SI book",
        solution:
            "Perform information adjustment procedure (Form TK1-TS) simultaneously with book merging or benefit settlement, saving time.",
        category: "Info",
    },
    {
        problem: "Company bankrupt, debt, cannot close book",
        solution:
            "Consult on procedure to close book up to the paid period (notify reservation), separating enterprise debt liability.",
        category: "Company Debt",
    },
    {
        problem: "Incorrect participation in previous withdrawal",
        solution:
            "Fix errors from previous withdrawal, ensuring clean profile for the next withdrawal.",
        category: "History",
    },
    {
        problem: "Moving abroad, tight schedule",
        solution:
            "Optimize process to ensure you receive SI money earliest before flight time. Support urgent cases.",
        category: "Migration",
    },
    {
        problem: "Living abroad, want to withdraw SI",
        solution:
            "We have many options: remote authorization, quick authorization trip to VN, or authorizing relative.",
        category: "Abroad",
    },
    {
        problem: "Foreigner unfamiliar with VN administrative procedures",
        solution:
            "Team fluent in foreign languages, supporting notarized translation and working directly with SI agency on your behalf.",
        category: "Foreigner",
    },
    {
        problem: "Multiple nationalities with complex contribution time",
        solution:
            "Unify profile, handle cases of SI contribution at multiple times and multiple countries.",
        category: "Multi-national",
    },
    {
        problem: "Study abroad/Immigration agency collaboration",
        solution:
            "Contact for partnership to complete SI process or one-time withdrawal for your clients fastest and standardest.",
        category: "Partner",
    },
    {
        problem: "Unfamiliar with procedure, don't want to research",
        solution:
            "We have the most optimal solution, saving your time. Just provide documents, leave the rest to us.",
        category: "Convenience",
    },
];

export default function ExperiencePageEn() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                        15+ years experience
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                        Experience in Complex Cases
                    </h1>
                    <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
                        We have successfully handled thousands of cases from simple to extremely complex.
                        Here are some common situations.
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
                                                <strong className="text-green-600">Solution:</strong>{" "}
                                                {exp.solution}
                                            </p>
                                            <CTAButton size="sm">I have this issue</CTAButton>
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
                        Any Social Insurance issue?
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                        We can plan and resolve it with you. Contact immediately for free consultation.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <CTAButton size="lg">Contact Consulting Now</CTAButton>
                        <a
                            href="tel:0973358077"
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
                            0973 358 077
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
