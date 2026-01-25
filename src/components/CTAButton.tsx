import Link from "next/link";

interface CTAButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    className?: string;
    href?: string;
    external?: boolean;
}

export default function CTAButton({
    children,
    variant = "primary",
    size = "md",
    className = "",
    href = "https://congdichvubhxh.vn/contact/",
    external = true,
}: CTAButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300";

    const variants = {
        primary:
            "gradient-action text-white shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-[1.02]",
        secondary:
            "bg-white dark:bg-white/5 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-white/20 hover:border-[var(--primary)] hover:text-[var(--primary)] dark:hover:bg-white/10",
        outline:
            "bg-transparent text-[var(--primary)] border-2 border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={combinedStyles}
            >
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={combinedStyles}>
            {children}
        </Link>
    );
}
