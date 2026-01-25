/** @type {import('next').NextConfig} */
const nextConfig = {
    // Tối ưu hóa dung lượng build
    output: "standalone",

    // Tắt kiểm tra TypeScript khi build
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
