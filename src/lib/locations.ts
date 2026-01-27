export interface LocationData {
    slug: string;
    name: string;
    parent?: string;
    type: "city" | "district";
    officeAddress: string;
    officePhone?: string;
}

export const locations: Record<string, LocationData> = {
    // Cities
    "tp-ho-chi-minh": {
        slug: "tp-ho-chi-minh",
        name: "TP. Hồ Chí Minh",
        type: "city",
        officeAddress: "117C Nguyễn Đình Chính, Phường 15, Quận Phú Nhuận, TP.HCM",
        officePhone: "028 3997 9039",
    },
    "ha-noi": {
        slug: "ha-noi",
        name: "Hà Nội",
        type: "city",
        officeAddress: "142A Đội Cấn, Quận Ba Đình, Hà Nội",
        officePhone: "024 3722 1450",
    },
    "da-nang": {
        slug: "da-nang",
        name: "Đà Nẵng",
        type: "city",
        officeAddress: "09 Phan Bội Châu, Phường Thạch Thang, Quận Hải Châu, Đà Nẵng",
        officePhone: "0236 382 2337",
    },
    "binh-duong": {
        slug: "binh-duong",
        name: "Bình Dương",
        type: "city",
        officeAddress: "Số 17, Đường số 2, Khu phố 2, Phường Hòa Phú, TP. Thủ Dầu Một, Bình Dương",
        officePhone: "0274 382 2510",
    },
    "dong-nai": {
        slug: "dong-nai",
        name: "Đồng Nai",
        type: "city",
        officeAddress: "Số 219, Hà Huy Giáp, Phường Quyết Thắng, TP. Biên Hòa, Đồng Nai",
        officePhone: "0251 382 2490",
    },

    // Districts HCMC
    "quan-1": {
        slug: "quan-1",
        name: "Quận 1",
        parent: "TP. Hồ Chí Minh",
        type: "district",
        officeAddress: "24-26 Lý Tự Trọng, Phường Bến Nghé, Quận 1, TP.HCM",
        officePhone: "028 3820 3747",
    },
    "quan-7": {
        slug: "quan-7",
        name: "Quận 7",
        parent: "TP. Hồ Chí Minh",
        type: "district",
        officeAddress: "136 Huỳnh Tấn Phát, Phường Tân Thuận Tây, Quận 7, TP.HCM",
        officePhone: "028 3785 0108",
    },
    "tp-thu-duc": {
        slug: "tp-thu-duc",
        name: "TP. Thủ Đức",
        parent: "TP. Hồ Chí Minh",
        type: "district",
        officeAddress: "Số 400 Lê Văn Việt, Phường Tăng Nhơn Phú A, TP. Thủ Đức, TP.HCM",
        officePhone: "028 3730 5165",
    },
    "binh-chanh": {
        slug: "binh-chanh",
        name: "Bình Chánh",
        parent: "TP. Hồ Chí Minh",
        type: "district",
        officeAddress: "Số 1 Đường số 4, Khu hành chính Huyện, Thị trấn Tân Túc, Huyện Bình Chánh, TP.HCM",
        officePhone: "028 3760 2303",
    },

    // Districts Hanoi
    "ha-dong": {
        slug: "ha-dong",
        name: "Hà Đông",
        parent: "Hà Nội",
        type: "district",
        officeAddress: "Số 1 Phố Phúc La, Phường Phúc La, Quận Hà Đông, Hà Nội",
        officePhone: "024 3354 0055",
    },
    "cau-giay": {
        slug: "cau-giay",
        name: "Cầu Giấy",
        parent: "Hà Nội",
        type: "district",
        officeAddress: "Số 6 Trần Quý Kiên, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội",
        officePhone: "024 3764 8820",
    },
    "hoan-kiem": {
        slug: "hoan-kiem",
        name: "Hoàn Kiếm",
        parent: "Hà Nội",
        type: "district",
        officeAddress: "Số 2A Cửa Đông, Phường Cửa Đông, Quận Hoàn Kiếm, Hà Nội",
        officePhone: "024 3828 4125",
    },
};

export const services = {
    "rut-bhxh-1-lan": {
        slug: "rut-bhxh-1-lan",
        name: "Rút BHXH 1 lần",
        description: "Dịch vụ tư vấn và hỗ trợ thủ tục rút BHXH 1 lần trọn gói, nhanh chóng.",
    },
    "bhyt-tu-nguyen": {
        slug: "bhyt-tu-nguyen",
        name: "BHYT tự nguyện",
        description: "Hướng dẫn và hỗ trợ đăng ký mua Bảo hiểm y tế tự nguyện hộ gia đình.",
    },
    "bhxh-tu-nguyen": {
        slug: "bhxh-tu-nguyen",
        name: "BHXH tự nguyện",
        description: "Tư vấn tham gia Bảo hiểm xã hội tự nguyện để hưởng lương hưu.",
    },
    "nguoi-nuoc-ngoai": {
        slug: "nguoi-nuoc-ngoai",
        name: "BHXH cho người nước ngoài",
        description: "Hỗ trợ thủ tục BHXH cho người lao động nước ngoài làm việc tại Việt Nam.",
    },
    "hoan-thien-ho-so": {
        slug: "hoan-thien-ho-so",
        name: "Hoàn thiện hồ sơ BHXH",
        description: "Dịch vụ gộp sổ, chốt sổ và xử lý các vướng mắc hồ sơ bảo hiểm.",
    },
};
