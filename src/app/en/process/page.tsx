import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = constructMetadata({
    path: "/en/process",
    title: "Working Process - Transparent & Fast",
    description: "Transparent and fast Social Insurance processing workflow. Just provide your documents, we handle everything else.",
});

const documents = [
    {
        icon: "🪪",
        title: "Latest ID Card",
        description: "Valid Chip-embedded Citizen ID (CCCD)",
    },
    {
        icon: "📝",
        title: "Old ID Number",
        description: "Old 9-digit CMND number to check insurance history (if any)",
    },
    {
        icon: "📁",
        title: "Existing Documents",
        description: "Social Insurance book, loose leaves, related papers you currently hold",
    },
    {
        icon: "📍",
        title: "Residence Info",
        description: "Current actual residence to determine appropriate processing location",
    },
];

const steps = [
    {
        number: "01",
        title: "Provide Documents",
        description:
            "Send ID photos, old ID number, SI book, and residence info via Zalo/Facebook for our check.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Consulting & Quote",
        description:
            "We check your profile, determine status and provide exact quote. No hidden fees.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Sign Authorization",
        description:
            "For full-service authorization: visit notary office once in HCMC.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Processing",
        description:
            "We submit documents and work with Social Insurance Agency. You just wait for results.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
    },
    {
        number: "05",
        title: "Receive Result",
        description:
            "Money transferred to your account. We handover all original documents.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

export default function ProcessPageEn() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                        Working Process
                    </h1>
                    <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
                        Transparent, optimized process helps you save time and travel conveniently.
                    </p>
                </div>
            </section>

            {/* Documents Needed */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-black tracking-tight mb-4">
                            Required Documents
                        </h2>
                        <p className="text-[var(--text-secondary)]">
                            To start, please prepare the following documents:
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {documents.map((doc) => (
                            <div
                                key={doc.title}
                                className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)] text-center"
                            >
                                <div className="text-4xl mb-4">{doc.icon}</div>
                                <h3 className="font-bold mb-2">{doc.title}</h3>
                                <p className="text-sm text-[var(--text-secondary)]">
                                    {doc.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-white dark:bg-[#0d141b]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black tracking-tight mb-4">
                            5 Simple Steps
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--border)] hidden md:block"></div>

                        <div className="space-y-8">
                            {steps.map((step) => (
                                <div key={step.number} className="relative flex gap-6">
                                    {/* Number circle */}
                                    <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-black text-xl">
                                        {step.number}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 bg-[var(--background)] dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]">
                                        <div className="flex items-start gap-4">
                                            <div className="text-[var(--primary)]">{step.icon}</div>
                                            <div>
                                                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                                                <p className="text-sm text-[var(--text-secondary)]">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Guarantee */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white rounded-3xl p-8 lg:p-12">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-black mb-4">Our Commitment</h2>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Correct, complete, and most accurate handling</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Ensure no future profile issues</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Support urgent cases</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="font-bold">
                                            100% Refund if task cannot be done
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <p className="text-lg mb-6">Are you ready?</p>
                                <CTAButton
                                    size="lg"
                                    className="bg-white text-[var(--primary)] hover:bg-white/90"
                                >
                                    Contact Now
                                </CTAButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
