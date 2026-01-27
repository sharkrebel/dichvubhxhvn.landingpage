import { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations, services } from "@/lib/locations";
import { constructMetadata } from "@/lib/metadata";
import CTAButton from "@/components/CTAButton";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import JsonLd, { getLocalFAQSchema } from "@/components/JsonLd";
import AuthorBio from "@/components/AuthorBio";

interface Props {
    params: Promise<{
        service: string;
        location: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { service, location } = await params;

    const serviceData = services[service as keyof typeof services];
    const locationData = locations[location as keyof typeof locations];

    if (!serviceData || !locationData) {
        return constructMetadata({ path: "/dich-vu" });
    }

    return constructMetadata({
        path: `/dich-vu/${service}/${location}`,
        title: `${serviceData.name} tại ${locationData.name} - Tư vấn & Hỗ trợ uy tín 2025`,
        description: `Dịch vụ ${serviceData.name} tại ${locationData.name}. Hỗ trợ chuẩn bị hồ sơ nhanh chóng, đúng quy định ${locationData.name} 2025. Liên hệ ngay để được tư vấn miễn phí.`,
    });
}

export default async function LocalServicePage({ params }: Props) {
    const { service, location } = await params;

    const serviceData = services[service as keyof typeof services];
    const locationData = locations[location as keyof typeof locations];

    if (!serviceData || !locationData) {
        notFound();
    }

    const breadcrumbItems = [
        { name: "Trang chủ", path: "/" },
        { name: "Dịch vụ", path: "/dich-vu" },
        { name: serviceData.name, path: `/dich-vu/${service}` },
        { name: locationData.name, path: `/dich-vu/${service}/${location}` },
    ];

    const localFAQSchema = getLocalFAQSchema(serviceData.name, locationData.name);

    return (
        <div className="bg-[var(--background)]">
            <BreadcrumbJsonLd items={breadcrumbItems} />
            <JsonLd data={localFAQSchema} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                            📍 Khu vực: {locationData.name}
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black tracking-tight mb-6">
                            {serviceData.name} <br />
                            <span className="text-white/90">tại {locationData.name}</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-white/80 mb-8 leading-relaxed">
                            {serviceData.description} Chúng tôi cung cấp giải pháp chuyên nghiệp, hỗ trợ trực tiếp tại {locationData.name} và các khu vực lân cận, đảm bảo hồ sơ của bạn được xử lý nhanh nhất theo đúng quy định mới 2025.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <CTAButton size="lg" className="bg-white text-[var(--primary)] hover:bg-white/90 shadow-xl">
                                Liên hệ tại {locationData.name}
                            </CTAButton>
                            <a
                                href="tel:0973358077"
                                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold bg-white/10 rounded-xl hover:bg-white/20 transition-all border border-white/30"
                            >
                                0973 358 077
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Info Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-black tracking-tight mb-6">
                                    Thông tin Bảo hiểm xã hội {locationData.name}
                                </h2>
                                <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                                    Nếu bạn có nhu cầu tự nộp hồ sơ hoặc cần tra cứu thông tin trực tiếp, dưới đây là địa chỉ trụ sở cơ quan Bảo hiểm xã hội tại {locationData.name}:
                                </p>

                                <div className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                                                <svg className="w-6 h-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-[var(--text-secondary)] mb-1">Địa chỉ</p>
                                                <p className="font-medium">{locationData.officeAddress}</p>
                                            </div>
                                        </div>

                                        {locationData.officePhone && (
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                                                    <svg className="w-6 h-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-[var(--text-secondary)] mb-1">Số điện thoại</p>
                                                    <p className="font-medium">{locationData.officePhone}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-900/30">
                                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-200 mb-3">Lưu ý khi tự nộp hồ sơ:</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-2 text-sm text-blue-800 dark:text-blue-300">
                                        <span className="text-blue-500 font-bold">•</span>
                                        Nên có mặt sớm từ 7:30 để lấy số thứ tự.
                                    </li>
                                    <li className="flex gap-2 text-sm text-blue-800 dark:text-blue-300">
                                        <span className="text-blue-500 font-bold">•</span>
                                        Chuẩn bị đầy đủ CCCD bản gốc và sổ BHXH đã được chốt.
                                    </li>
                                    <li className="flex gap-2 text-sm text-blue-800 dark:text-blue-300">
                                        <span className="text-blue-500 font-bold">•</span>
                                        Kiểm tra kỹ thông tin số tài khoản ngân hàng chính chủ.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-white/5 p-10 rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)] opacity-[0.03] rounded-bl-full group-hover:scale-150 transition-transform"></div>
                            <span className="inline-block px-4 py-1.5 bg-[var(--primary)] text-white text-xs font-bold rounded-full mb-6">Dịch vụ đặc biệt</span>
                            <h3 className="text-2xl font-black mb-6">Bạn muốn tiết kiệm thời gian?</h3>
                            <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                                Thay vì phải xếp hàng chờ đợi và làm các thủ tục hành chính phức tạp tại BHXH {locationData.name}, hãy để đội ngũ chuyên gia của chúng tôi hỗ trợ bạn trọn gói:
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Tư vấn đúng điều kiện hưởng ưu đãi nhất 2025",
                                    "Chuẩn bị mọi biểu mẫu, hồ sơ theo quy định",
                                    "Xử lý các ca khó, gộp sổ, mất sổ nhanh chóng",
                                    "Bàn giao kết quả tận nơi tại " + locationData.name
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                                            <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <CTAButton className="w-full h-16 text-lg rounded-2xl shadow-lg shadow-[var(--primary)]/20">
                                Đăng ký hỗ trợ ngay
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Author Bio */}
            <section className="py-20 bg-white dark:bg-[#0d141b]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <AuthorBio />
                </div>
            </section>
        </div>
    );
}
