import RunningExperience from "@/components/RunningExperience";
import ServiceRotator from "@/components/ServiceRotator";
import IntroVideo from "@/components/IntroVideo";
import Link from "next/link";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = constructMetadata({
  path: "/",
  image: "/ogimgtgv.png",
});

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Rút BHXH 1 lần",
    description: "Hỗ trợ thủ tục rút BHXH 1 lần cho người lao động VN, đúng luật mới nhất 2025",
    href: "/dich-vu/rut-bhxh-1-lan",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Người nước ngoài",
    description: "Dịch vụ rút BHXH cho lao động nước ngoài làm việc tại Việt Nam",
    href: "/dich-vu/nguoi-nuoc-ngoai",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Hoàn thiện hồ sơ",
    description: "Gộp sổ, chốt sổ, xử lý sai lệch thông tin, công ty nợ BHXH",
    href: "/dich-vu/hoan-thien-ho-so",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "BHYT tự nguyện",
    description: "Đăng ký đơn giản, chi phí thấp, hỗ trợ dễ tiếp cận nhất",
    href: "/dich-vu/bhyt-tu-nguyen",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "BHXH tự nguyện",
    description: "Đóng hàng tháng hoặc đóng bù để lãnh hưu trí, tử tuất",
    href: "/dich-vu/bhxh-tu-nguyen",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Công cụ tính toán",
    description: "Tính tiền rút BHXH 1 lần, ước tính lương hưu dự kiến online 2026",
    href: "https://muabhyt.vn/du-kien-luong-huu",
    external: true,
  },
];

const reasons = [
  {
    number: "15+",
    label: "Năm kinh nghiệm",
    description: "Xử lý mọi ca từ đơn giản đến phức tạp",
  },
  {
    number: "100%",
    label: "Hoàn phí",
    description: "Nếu không thực hiện được công việc",
  },
  {
    number: "Miễn phí",
    label: "Tư vấn",
    description: "Hỗ trợ Tư vấn qua Zalo, điện thoại",
  },
  {
    number: "Toàn quốc",
    label: "Phạm vi",
    description: "Hướng dẫn hồ sơ trên toàn quốc",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-4 pb-20 lg:pt-12 lg:pb-32">
          <ServiceRotator />
          {/* Hero Grip: items-stretch to equal height */}
          <div className="grid lg:grid-cols-2 gap-12 items-stretch mt-4 md:mt-8 relative z-10">
            <div className="space-y-8 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-bold border border-[var(--primary)]/20 shadow-[0_0_15px_rgba(43,140,238,0.1)] w-fit hover:bg-[var(--primary)]/20 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                15+ năm kinh nghiệm xử lý BHXH
              </div>
              <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                Dịch vụ Tư vấn{" "}
                <span className="text-gradient">BHXH</span> Trọn Gói
              </h1>
              <p className="text-lg lg:text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed">
                Chúng tôi hiểu khó khăn của bạn và có giải pháp{" "}
                <strong className="text-[var(--foreground)]">hợp pháp, nhanh chóng</strong>.
                Xử lý mọi hồ sơ từ đơn giản đến phức tạp.
              </p>
              <div className="flex flex-wrap gap-4">
                <CTAButton size="lg">
                  Tư vấn miễn phí ngay
                </CTAButton>
                <CTAButton variant="secondary" size="lg" href="/dich-vu" external={false}>
                  Xem dịch vụ
                </CTAButton>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {i}K+
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong className="text-[var(--foreground)]">4,000+</strong> khách hàng đã tin tưởng
                </p>
              </div>
            </div>
            <div className="relative h-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--action)]/20 rounded-3xl blur-3xl opacity-50"></div>
              {/* Feature Cards moved to Video Section */}
              <div className="h-full flex flex-col justify-center">
                <RunningExperience />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Intro Video & Features Section */}
      <section className="py-12 bg-white/80 dark:bg-[#0d141b]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 h-full flex flex-col justify-center">
              <IntroVideo />
            </div>

            <div className="lg:col-span-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--action)]/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-slate-200 dark:border-white/10 flex flex-col justify-center ring-1 ring-black/5">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">Xử lý nhanh chóng</p>
                      <p className="text-sm text-[var(--text-secondary)]">Quy trình tối ưu, tiết kiệm thời gian</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">Đúng luật mới nhất 2025</p>
                      <p className="text-sm text-[var(--text-secondary)]">Tuân thủ Luật BHXH 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--action)]/10 flex items-center justify-center text-[var(--action)]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">Hoàn phí 100%</p>
                      <p className="text-sm text-[var(--text-secondary)]">Nếu không thực hiện được</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Preview Section */}
      <section className="py-12 bg-white/80 dark:bg-[#0d141b]/80 backdrop-blur-sm border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-black tracking-tight mb-2">
                Kinh nghiệm xử lý hồ sơ
              </h2>
              <p className="text-[var(--text-secondary)]">
                Các trường hợp thực tế chúng tôi đã hỗ trợ thành công
              </p>
            </div>
            <CTAButton href="/kinh-nghiem" variant="outline">
              Xem tất cả kinh nghiệm
            </CTAButton>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Manual Experience Cards (Preview) */}
            <div className="p-6 rounded-2xl bg-[var(--background)] dark:bg-[#1e293b] border border-[var(--border)]">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Thành công</span>
                <span className="text-xs text-[var(--text-secondary)]">2 ngày trước</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Gộp sổ BHXH khác tỉnh</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Khách hàng N.V.A có 3 sổ tại Bình Dương, Đồng Nai và TP.HCM. Đã gộp thành công về 1 sổ duy nhất.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--background)] dark:bg-[#1e293b] border border-[var(--border)]">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Thành công</span>
                <span className="text-xs text-[var(--text-secondary)]">Hôm qua</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Rút BHXH 1 lần online</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Hướng dẫn chị T.T.H nộp hồ sơ qua VssID, tiền về tài khoản sau 7 ngày làm việc.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--background)] dark:bg-[#1e293b] border border-[var(--border)]">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Thành công</span>
                <span className="text-xs text-[var(--text-secondary)]">Hôm nay</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Tư vấn chế độ thai sản</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Hỗ trợ thủ tục truy thu BHXH để đủ điều kiện hưởng chế độ thai sản cho chị L.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-white/80 dark:bg-[#0d141b]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-4">
              Dịch vụ của chúng tôi
            </h2>
            <div className="h-1 w-20 bg-[var(--primary)] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-[var(--text-secondary)]">
              Chúng tôi cung cấp đầy đủ các dịch vụ liên quan đến BHXH, BHYT với quy trình
              đơn giản và chi phí hợp lý nhất.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                target={service.external ? "_blank" : undefined}
                rel={service.external ? "noopener noreferrer" : undefined}
                className="group p-6 bg-[var(--background)] dark:bg-[#1e293b] rounded-2xl border border-[var(--border)] card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-4 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--primary)] transition-colors flex items-center gap-2">
                  {service.title}
                  {service.external && (
                    <svg className="w-4 h-4 text-[var(--text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[var(--primary)] to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-4">
              Tại sao chọn chúng tôi?
            </h2>
            <div className="h-1 w-20 bg-white/50 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-white/80">
              Với 15+ năm kinh nghiệm, chúng tôi đã xử lý thành công hàng nghìn ca hồ sơ
              từ đơn giản đến phức tạp nhất.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason) => (
              <div
                key={reason.label}
                className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm"
              >
                <p className="text-4xl lg:text-5xl font-black mb-2">{reason.number}</p>
                <p className="text-lg font-bold mb-1">{reason.label}</p>
                <p className="text-sm text-white/70">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-white/80 dark:bg-[#0d141b]/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-6">
            Bạn cần hỗ trợ về BHXH?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Liên hệ ngay với chúng tôi để được tư vấn miễn phí. Chúng tôi sẽ lắng nghe
            và đưa ra phương án tối ưu nhất cho bạn.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton size="lg">
              Liên hệ tư vấn ngay
            </CTAButton>
            <a
              href="tel:0973358077"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-[var(--primary)] bg-[var(--primary)]/10 rounded-xl hover:bg-[var(--primary)]/20 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0973 358 077
            </a>
          </div>
        </div>
      </section>

      {/* Intro Video Generated */}
    </>
  );
}
