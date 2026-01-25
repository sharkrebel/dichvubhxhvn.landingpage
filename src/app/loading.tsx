export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="w-12 h-12 rounded-full border-4 border-[var(--primary)]/20 border-t-[var(--primary)] animate-spin"></div>
                <p className="text-sm text-[var(--text-secondary)]">Đang tải...</p>
            </div>
        </div>
    );
}
