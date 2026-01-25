import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "DichVuBHXH.vn - Dịch vụ Tư vấn BHXH Trọn Gói - Uy Tín & Chuyên Nghiệp";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // Main Container
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0f172a", // Slate 900
                    backgroundImage: "radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)",
                    backgroundSize: "100px 100px",
                    fontFamily: "sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Background Glow Effects */}
                <div
                    style={{
                        position: "absolute",
                        top: "-20%",
                        left: "-10%",
                        width: "600px",
                        height: "600px",
                        background: "radial-gradient(circle, rgba(43,140,238,0.4) 0%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-20%",
                        right: "-10%",
                        width: "600px",
                        height: "600px",
                        background: "radial-gradient(circle, rgba(249,115,22,0.3) 0%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />

                {/* Glass Card */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "90%",
                        height: "80%",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "24px",
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                        padding: "40px",
                        gap: "20px",
                    }}
                >
                    {/* Badge */}
                    <div
                        style={{
                            background: "linear-gradient(90deg, #2b8cee, #3b82f6)",
                            padding: "8px 24px",
                            borderRadius: "100px",
                            color: "white",
                            fontSize: 20,
                            fontWeight: 700,
                            letterSpacing: "1px",
                            boxShadow: "0 4px 12px rgba(43, 140, 238, 0.4)",
                            marginBottom: "10px",
                        }}
                    >
                        CHUYÊN NGHIỆP • TẬN TÂM • ĐÚNG LUẬT
                    </div>

                    {/* Main Title */}
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 900,
                            background: "linear-gradient(to right, #fff, #94a3b8)",
                            backgroundClip: "text",
                            color: "transparent",
                            textAlign: "center",
                            lineHeight: 1.1,
                            letterSpacing: "-2px",
                        }}
                    >
                        Dịch vụ BHXH Online
                    </div>

                    {/* Subtitle */}
                    <div
                        style={{
                            fontSize: 32,
                            color: "#cbd5e1",
                            textAlign: "center",
                            maxWidth: "800px",
                            lineHeight: 1.5,
                        }}
                    >
                        Giải pháp rút BHXH 1 lần, gộp sổ, tư vấn chế độ thai sản nhanh chóng và hợp pháp.
                    </div>

                    {/* Divider */}
                    <div
                        style={{
                            width: "100px",
                            height: "4px",
                            background: "rgba(255,255,255,0.1)",
                            borderRadius: "2px",
                            margin: "20px 0",
                        }}
                    />

                    {/* Footer Info */}
                    <div
                        style={{
                            display: "flex",
                            gap: "40px",
                            alignItems: "center",
                            marginTop: "10px",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", color: "white", fontSize: 24, fontWeight: 600 }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 10 }}>
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Hotline: 0973 358 077
                        </div>
                        <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.2)" }} />
                        <div style={{ display: "flex", alignItems: "center", color: "white", fontSize: 24, fontWeight: 600 }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 10 }}>
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            Hoàn phí 100%
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
