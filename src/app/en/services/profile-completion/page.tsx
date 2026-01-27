import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = constructMetadata({
    path: "/en/services/profile-completion",
    title: "Profile Completion - Merge Books, Close Book, Fix Info",
    description: "Social Insurance profile completion service: merge books, close books, correct information errors, handle company debt.",
});

const services = [
    {
        icon: "📚",
        title: "Merge Multiple Books",
        description:
            "Have multiple SI numbers from different companies? We merge them into a single book.",
    },
    {
        icon: "✅",
        title: "Close SI Book",
        description:
            "Old company didn't close book, quit without notice? We assist in completing it to continue benefits.",
    },
    {
        icon: "✏️",
        title: "Correct Personal Info",
        description:
            "ID on book differs from Chip ID, wrong dob, wrong name? Quick adjustment.",
    },
    {
        icon: "🏢",
        title: "Company Debt Issues",
        description:
            "Bankrupt enterprise, debt? We advise on plan to close up to paid period (reservation).",
    },
    {
        icon: "📱",
        title: "VssID Issues",
        description:
            "Cannot create account, login error? We can handle it.",
    },
    {
        icon: "⏰",
        title: "Overlapping Time",
        description:
            "Have overlapping contribution time? We adjust to unify.",
    },
];

export default function ProfileCompletionPageEn() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                            SI Profile Completion
                        </h1>
                        <p className="text-lg lg:text-xl text-white/80 mb-8">
                            Handling all SI profile issues: merging books, closing books, correcting info,
                            company debt... We complete it for you.
                        </p>
                        <CTAButton size="lg" className="bg-white text-[var(--primary)] hover:bg-white/90">
                            Free Consultation
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <div
                                key={service.title}
                                className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="font-bold mb-2">{service.title}</h3>
                                <p className="text-sm text-[var(--text-secondary)]">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white dark:bg-[#0d141b]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl font-black tracking-tight mb-6">
                        Is your profile stuck?
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                        Send info so we can check and advise on the most optimal solution.
                    </p>
                    <CTAButton size="lg">Send Profile for Check</CTAButton>
                </div>
            </section>
        </>
    );
}
