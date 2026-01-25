import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "DichVuBHXH.vn - Dịch vụ Tư vấn BHXH Trọn Gói";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 60,
                    background: "linear-gradient(135deg, #1e3a8a 0%, #2b8cee 100%)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontFamily: "sans-serif",
                    position: "relative",
                }}
            >
                {/* Background Pattern */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: 0.1,
                        backgroundImage:
                            "radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)",
                        backgroundSize: "100px 100px",
                    }}
                />

                {/* Logo/Brand */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 20,
                        background: "white",
                        padding: "10px 30px",
                        borderRadius: 20,
                        color: "#2b8cee",
                        fontWeight: 900,
                        fontSize: 48,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                    }}
                >
                    DichVuBHXH.vn
                </div>

                {/* Title */}
                <div
                    style={{
                        fontSize: 72,
                        fontWeight: 900,
                        marginBottom: 10,
                        textAlign: "center",
                        textShadow: "0 4px 10px rgba(0,0,0,0.3)",
                        padding: "0 40px",
                    }}
                >
                    Dịch vụ BHXH Trọn Gói
                </div>

                {/* Subtitle */}
                <div
                    style={{
                        fontSize: 36,
                        opacity: 0.9,
                        fontWeight: 500,
                        marginBottom: 40,
                        textAlign: "center",
                    }}
                >
                    Rút BHXH 1 lần • Gộp sổ • Tư vấn Luật 2025
                </div>

                {/* CTA Badge */}
                <div
                    style={{
                        background: "#f97316",
                        color: "white",
                        padding: "15px 40px",
                        borderRadius: 50,
                        fontSize: 32,
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        boxShadow: "0 8px 20px rgba(249, 115, 22, 0.4)",
                    }}
                >
                    Hotline: 0973.358.077
                </div>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image
            // size config to also set the ImageResponse's width and height.
            ...size,
        }
    );
}
