import { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
    title: "Service Pricing - Transparent & Reasonable",
    description:
        "Transparent Social Insurance service pricing. Consultation from 1 million VND, Full Service from 12 million VND. 100% Refund commitment.",
};

const pricingPlans = [
    {
        name: "Consultation & Guidance",
        price: "From 1 Million VND",
        description: "Suitable if you want to submit documents yourself",
        features: [
            { text: "Detailed form filling guidance", included: true },
            { text: "Submission method & location guidance", included: true },
            { text: "Nationwide guidance support", included: true },
            { text: "Support via Zalo/Phone", included: true },
            { text: "You submit application yourself", included: true },
            { text: "We handle submission for you", included: false },
        ],
        popular: false,
    },
    {
        name: "Full Service (Authorized)",
        price: "From 12 Million VND",
        description: "Suitable for busy people needing fast processing",
        features: [
            { text: "Include all consultation services", included: true },
            { text: "Sign authorization just once", included: true },
            { text: "We handle everything", included: true },
            { text: "Authorization in HCMC", included: true },
            { text: "Pay later option available", included: true },
            { text: "Priority urgent processing", included: true },
        ],
        popular: true,
    },
];

const additionalInfo = [
    {
        title: "Pay Upfront",
        description:
            "Authorize work (not authorizing money reception) → SI money transfer directly to your personal account.",
    },
    {
        title: "Pay Later",
        description:
            "Authorize money reception → We deduct fees and transfer the remaining amount to you.",
    },
    {
        title: "Authorize Relative",
        description:
            "Fee same as Consultation (1 million). Note: each person can only accept authorization once in 36 months.",
    },
    {
        title: "Outside HCMC",
        description:
            "For authorization service, if outside HCMC you may need additional travel costs.",
    },
];

export default function PricingPageEn() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                        Service Pricing
                    </h1>
                    <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
                        Transparent, clear costs. No hidden fees beyond quotation.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-5xl mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {pricingPlans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative rounded-3xl p-8 ${plan.popular
                                    ? "bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white"
                                    : "bg-white dark:bg-[#1e293b] border border-[var(--border)]"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-xs font-bold">
                                        Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <p
                                    className={`text-sm mb-4 ${plan.popular ? "text-white/80" : "text-[var(--text-secondary)]"
                                        }`}
                                >
                                    {plan.description}
                                </p>
                                <p className="text-4xl font-black mb-6">{plan.price}</p>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature.text}
                                            className={`flex items-center gap-3 text-sm ${!feature.included && !plan.popular
                                                ? "text-[var(--text-secondary)]"
                                                : ""
                                                }`}
                                        >
                                            <svg
                                                className={`w-5 h-5 flex-shrink-0 ${feature.included
                                                    ? plan.popular
                                                        ? "text-white"
                                                        : "text-green-500"
                                                    : "text-gray-300"
                                                    }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                {feature.included ? (
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                ) : (
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                )}
                                            </svg>
                                            {feature.text}
                                        </li>
                                    ))}
                                </ul>
                                <CTAButton
                                    className={`w-full ${plan.popular ? "bg-white text-[var(--primary)]" : ""
                                        }`}
                                    variant={plan.popular ? "primary" : "outline"}
                                >
                                    Choose Plan
                                </CTAButton>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Info */}
            <section className="py-20 bg-white dark:bg-[#0d141b]">
                <div className="max-w-5xl mx-auto px-4 lg:px-8">
                    <h2 className="text-2xl font-black tracking-tight mb-8 text-center">
                        Additional Information
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {additionalInfo.map((info) => (
                            <div
                                key={info.title}
                                className="bg-[var(--background)] dark:bg-[#1e293b] rounded-2xl p-6 border border-[var(--border)]"
                            >
                                <h3 className="font-bold mb-2 text-[var(--primary)]">
                                    {info.title}
                                </h3>
                                <p className="text-sm text-[var(--text-secondary)]">
                                    {info.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guarantee */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-8 lg:p-12">
                        <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-black text-green-700 dark:text-green-400 mb-4">
                            100% Refund Guarantee
                        </h2>
                        <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
                            If we cannot complete the work, we refund 100% of the paid fees. No risk for you.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white dark:bg-[#0d141b]">
                <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl font-black tracking-tight mb-6">
                        Need exact quote?
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                        Exact fee will be quoted after specialist reviews your actual profile.
                    </p>
                    <CTAButton size="lg">Get Free Quote</CTAButton>
                </div>
            </section>
        </>
    );
}
