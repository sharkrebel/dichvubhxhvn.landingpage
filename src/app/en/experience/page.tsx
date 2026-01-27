import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import ExperienceContent from "@/components/ExperienceContent";

export const metadata: Metadata = constructMetadata({
    path: "/en/experience",
    title: "Experience in Handling Complex SI Cases - 15+ Years",
    description: "Summary of experience in handling difficult social insurance cases: lost books, merging books, company debt, foreigners withdrawal. Optimal solutions.",
});

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
    return (
        <ExperienceContent
            experiences={experiences}
            title="Experience in Complex Cases"
            description="We have successfully handled thousands of cases from simple to extremely complex. Here are some common situations."
            badge="15+ years experience"
            ctaTitle="Any Social Insurance issue?"
            ctaDesc="We can plan and resolve it with you. Contact immediately for free consultation."
            phone="0973 358 077"
            solutionLabel="Solution"
            issueButtonLabel="I have this issue"
        />
    );
}
