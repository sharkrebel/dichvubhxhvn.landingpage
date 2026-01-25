"use client";

import { useState, useEffect } from "react";
import CTAButton from "./CTAButton";

const scenes = [
    {
        id: 1,
        bg: "bg-gradient-to-br from-orange-500 to-red-600",
        content: (
            <div className="text-center text-white animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <h3 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
                    Social Insurance <br />
                    <span className="opacity-90">Too Complicated?</span>
                </h3>
                <p className="text-lg md:text-xl opacity-90 max-w-lg mx-auto">
                    Lost book, wrong info, long waiting time...
                </p>
            </div>
        )
    },
    {
        id: 2,
        bg: "bg-gradient-to-br from-blue-500 to-indigo-600",
        content: (
            <div className="text-center text-white animate-in slide-in-from-bottom duration-500">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
                    We Have A Solution <br />
                    <span className="text-yellow-300">ALL-IN-ONE 100%</span>
                </h3>
                <p className="text-lg md:text-xl opacity-90 max-w-lg mx-auto">
                    Fast Processing - Latest Laws 2025 - No Travel Needed
                </p>
            </div>
        )
    },
    {
        id: 3,
        bg: "bg-[#0d141b]",
        content: (
            <div className="text-center text-white animate-in fade-in duration-700">
                <div className="flex justify-center -space-x-4 mb-8">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0d141b] bg-slate-200 flex items-center justify-center text-xs text-slate-900 font-bold">
                            User
                        </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-2 border-[#0d141b] bg-[var(--primary)] flex items-center justify-center text-xs font-bold">
                        +4K
                    </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-6">
                    4,000+ Trusted Clients
                </h3>
                <div className="flex justify-center gap-1 text-yellow-500 mb-6">
                    {[1, 2, 3, 4, 5].map(i => (
                        <svg key={i} className="w-8 h-8 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
                <p className="text-xl">Rated 5/5 stars for quality</p>
            </div>
        )
    },
    {
        id: 4,
        bg: "bg-white",
        textColor: "text-slate-900",
        content: (
            <div className="text-center text-slate-900 animate-in zoom-in duration-500">
                <h3 className="text-2xl md:text-3xl font-black mb-2 text-[var(--primary)] uppercase tracking-wider">
                    Don't Hesitate!
                </h3>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none">
                    CONSULT NOW
                </h2>
                <div className="flex flex-col items-center gap-4">
                    <a
                        href="tel:0973358077"
                        className="flex items-center gap-3 px-8 py-4 text-2xl font-bold text-white rounded-2xl gradient-action hover:scale-105 transition-transform shadow-xl shadow-orange-500/30 animate-pulse"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        0973 358 077
                    </a>
                    <p className="text-slate-500 font-medium">24/7 Support via Zalo & Phone</p>
                </div>
            </div>
        )
    }
];

export default function IntroVideo() {
    const [currentScene, setCurrentScene] = useState(0);
    const [progress, setProgress] = useState(0);

    const SCENE_DURATION = 4000; // 4 seconds per scene

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentScene((prev) => (prev + 1) % scenes.length);
        }, SCENE_DURATION);

        const progressTimer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) return 0;
                return prev + (100 / (SCENE_DURATION / 50));
            });
        }, 50);

        return () => {
            clearInterval(timer);
            clearInterval(progressTimer);
        };
    }, []);

    // Reset progress when scene changes
    useEffect(() => {
        setProgress(0);
    }, [currentScene]);

    return (
        <div className="w-full py-12 bg-white dark:bg-[#0d141b]">
            <div className="w-full px-4 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">Service Intro Video</h2>
                    <div className="h-1 w-12 bg-[var(--primary)] mx-auto rounded-full"></div>
                </div>

                {/* Video Player Container */}
                <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl ring-4 ring-slate-100 dark:ring-slate-800">
                    {/* Scene Backgrounds */}
                    {scenes.map((scene, index) => (
                        <div
                            key={scene.id}
                            className={`absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-700 ease-in-out ${index === currentScene ? "opacity-100 z-10" : "opacity-0 z-0"
                                } ${scene.bg}`}
                        >
                            {/* Content */}
                            <div className="relative z-10 w-full max-w-4xl mx-auto">
                                {scene.content}
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] pointer-events-none"></div>
                        </div>
                    ))}

                    {/* Progress Bar (Timeline) */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/20 z-20 flex">
                        {scenes.map((_, index) => (
                            <div key={index} className="flex-1 bg-black/10 relative overflow-hidden mx-0.5 first:ml-0 last:mr-0">
                                {index === currentScene && (
                                    <div
                                        className="absolute inset-y-0 left-0 bg-white/80 transition-all duration-75 ease-linear"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                )}
                                {index < currentScene && (
                                    <div className="absolute inset-0 bg-white/80"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Play/Pause Overlay Hint (Optional) */}
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/30 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-wider border border-white/20">
                        Auto Playing
                    </div>
                </div>
            </div>
        </div>
    );
}
