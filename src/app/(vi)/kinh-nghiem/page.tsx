import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import ExperienceContent from "@/components/ExperienceContent";

export const metadata: Metadata = constructMetadata({
    path: "/kinh-nghiem",
    title: "Kinh nghiệm xử lý hồ sơ BHXH khó - 15+ năm thực chiến",
    description: "Tổng hợp kinh nghiệm xử lý các ca BHXH khó: mất sổ, gộp sổ, công ty nợ BHXH, người nước ngoài rút BHXH. Giải pháp tối ưu nhất.",
});

const experiences = [
    {
        problem: "Không thể tạo tài khoản VssID hoặc không đăng nhập được",
        solution:
            "Chúng tôi hỗ trợ xử lý các vấn đề liên quan đến tài khoản VssID, bao gồm lỗi xác thực, xung đột thông tin, hoặc tài khoản bị khóa.",
        category: "VssID",
    },
    {
        problem: "Không có thông tin cư trú phù hợp với nơi xử lý hồ sơ BHXH",
        solution:
            "Chúng tôi hỗ trợ xử lý hồ sơ BHXH ở nơi thuận tiện nhất cho bạn, không phụ thuộc vào thông tin cư trú hiện tại.",
        category: "Cư trú",
    },
    {
        problem: "Không có lịch hẹn khi địa phương yêu cầu đặt lịch",
        solution:
            "Chúng tôi có thể hỗ trợ bạn trong việc đặt lịch hẹn hoặc xử lý hồ sơ mà không cần qua hệ thống lịch hẹn.",
        category: "Lịch hẹn",
    },
    {
        problem: "Thiếu hồ sơ BHXH: nghỉ ngang, công ty không chốt sổ",
        solution:
            "Hướng dẫn hoàn thiện hồ sơ BHXH để làm thủ tục rút BHXH 1 lần hoặc nộp BHTN trong thời gian sớm nhất, kể cả khi công ty cũ không hợp tác.",
        category: "Hồ sơ",
    },
    {
        problem: "Trùng thời gian đóng, có nhiều mã số BHXH",
        solution:
            "Chúng tôi xử lý gộp sổ, điều chỉnh thời gian đóng để thống nhất toàn bộ quá trình tham gia BHXH của bạn.",
        category: "Gộp sổ",
    },
    {
        problem: "Sai sót thông tin cá nhân trên sổ BHXH",
        solution:
            "Thực hiện thủ tục điều chỉnh thông tin (Mẫu TK1-TS) đồng thời với việc gộp sổ hoặc giải quyết chế độ, tiết kiệm thời gian.",
        category: "Thông tin",
    },
    {
        problem: "Công ty phá sản, nợ BHXH không thể chốt sổ",
        solution:
            "Tư vấn thủ tục chốt sổ đến thời điểm đã đóng đủ (chốt bảo lưu), tách rời trách nhiệm nợ của doanh nghiệp.",
        category: "Nợ BHXH",
    },
    {
        problem: "Tham gia BHXH không đúng quy định trong lần rút trước",
        solution:
            "Xử lý hoàn chỉnh các sai sót từ lần rút BHXH trước, đảm bảo hồ sơ sạch cho lần rút tiếp theo.",
        category: "Lịch sử",
    },
    {
        problem: "Đi định cư nước ngoài, thời gian eo hẹp",
        solution:
            "Tối ưu quy trình đảm bảo bạn nhận được tiền BHXH sớm nhất trước thời gian bay. Hỗ trợ các ca gấp.",
        category: "Định cư",
    },
    {
        problem: "Đang ở nước ngoài muốn rút BHXH 1 lần",
        solution:
            "Chúng tôi có nhiều phương án cho bạn: ủy quyền từ xa, về VN ký ủy quyền nhanh, hoặc nhờ người thân.",
        category: "Ở nước ngoài",
    },
    {
        problem: "Người nước ngoài không rành thủ tục hành chính VN",
        solution:
            "Đội ngũ thông thạo ngoại ngữ, hỗ trợ dịch thuật công chứng và làm việc trực tiếp với cơ quan BHXH thay mặt bạn.",
        category: "Người NN",
    },
    {
        problem: "Người có nhiều quốc tịch với thời gian đóng phức tạp",
        solution:
            "Hoàn chỉnh thống nhất hồ sơ, xử lý các trường hợp đóng BHXH ở nhiều thời điểm và nhiều quốc gia.",
        category: "Đa quốc tịch",
    },
    {
        problem: "Đơn vị du học, visa định cư cần hợp tác",
        solution:
            "Liên hệ hợp tác để hoàn thiện quá trình BHXH hoặc rút BHXH 1 lần cho khách hàng của bạn một cách nhanh nhất và chuẩn nhất.",
        category: "Đối tác",
    },
    {
        problem: "Không rành thủ tục, không muốn mất thời gian nghiên cứu",
        solution:
            "Chúng tôi có phương án tối ưu nhất, tiết kiệm thời gian cho bạn. Chỉ cần cung cấp hồ sơ, còn lại để chúng tôi lo.",
        category: "Tiện lợi",
    },
];

export default function KinhNghiemPage() {
    return (
        <ExperienceContent
            experiences={experiences}
            title="Kinh nghiệm xử lý hồ sơ khó"
            description="Chúng tôi đã xử lý thành công hàng nghìn ca hồ sơ từ đơn giản đến phức tạp nhất. Dưới đây là một số tình huống thường gặp."
            badge="15+ năm kinh nghiệm"
            ctaTitle="Bất kỳ vấn đề gì về BHXH?"
            ctaDesc="Chúng tôi đều có thể lên phương án cùng bạn xử lý được. Liên hệ ngay để được tư vấn miễn phí."
            phone="0973 358 077"
            solutionLabel="Giải pháp"
            issueButtonLabel="Tôi gặp vấn đề này"
        />
    );
}
