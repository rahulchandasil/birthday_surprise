(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/birthday-surprise/src/components/audio/GlobalAudioPlayer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalAudioPlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/lucide-react/dist/esm/icons/pause.mjs [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/lucide-react/dist/esm/icons/volume-2.mjs [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/lucide-react/dist/esm/icons/volume-x.mjs [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function GlobalAudioPlayer() {
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Try to play automatically after interaction if possible, or wait for user click
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalAudioPlayer.useEffect": ()=>{
            // Reveal player after a short delay
            __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(playerRef.current, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 2,
                ease: "power2.out"
            });
            const handleFirstInteraction = {
                "GlobalAudioPlayer.useEffect.handleFirstInteraction": ()=>{
                    if (audioRef.current && !isPlaying) {
                        const playPromise = audioRef.current.play();
                        if (playPromise !== undefined) {
                            playPromise.then({
                                "GlobalAudioPlayer.useEffect.handleFirstInteraction": ()=>{
                                    setIsPlaying(true);
                                }
                            }["GlobalAudioPlayer.useEffect.handleFirstInteraction"]).catch({
                                "GlobalAudioPlayer.useEffect.handleFirstInteraction": (e)=>{
                                    console.log("Auto-play prevented:", e);
                                }
                            }["GlobalAudioPlayer.useEffect.handleFirstInteraction"]);
                        }
                    }
                    window.removeEventListener('click', handleFirstInteraction);
                    window.removeEventListener('scroll', handleFirstInteraction);
                    window.removeEventListener('touchstart', handleFirstInteraction);
                }
            }["GlobalAudioPlayer.useEffect.handleFirstInteraction"];
            window.addEventListener('click', handleFirstInteraction);
            window.addEventListener('scroll', handleFirstInteraction, {
                once: true
            });
            window.addEventListener('touchstart', handleFirstInteraction, {
                once: true
            });
            return ({
                "GlobalAudioPlayer.useEffect": ()=>{
                    window.removeEventListener('click', handleFirstInteraction);
                    window.removeEventListener('scroll', handleFirstInteraction);
                    window.removeEventListener('touchstart', handleFirstInteraction);
                }
            })["GlobalAudioPlayer.useEffect"];
        }
    }["GlobalAudioPlayer.useEffect"], [
        isPlaying
    ]);
    const togglePlay = ()=>{
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch((e)=>console.log("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };
    const toggleMute = ()=>{
        if (!audioRef.current) return;
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: playerRef,
        className: "fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-midnight/80 backdrop-blur-md border border-muted-gold/20 p-3 rounded-full shadow-2xl opacity-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                src: "/music/Tum Se Hi Jab We Met 320 Kbps.mp3",
                loop: true,
                onEnded: ()=>setIsPlaying(false)
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/audio/GlobalAudioPlayer.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: togglePlay,
                className: "w-10 h-10 flex items-center justify-center bg-warm-ivory text-deep-burgundy rounded-full hover:bg-muted-gold transition-colors",
                "aria-label": isPlaying ? "Pause music" : "Play music",
                children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                    size: 18,
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/birthday-surprise/src/components/audio/GlobalAudioPlayer.tsx",
                    lineNumber: 80,
                    columnNumber: 22
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                    size: 18,
                    fill: "currentColor",
                    className: "ml-1"
                }, void 0, false, {
                    fileName: "[project]/birthday-surprise/src/components/audio/GlobalAudioPlayer.tsx",
                    lineNumber: 80,
                    columnNumber: 64
                }, this)
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/audio/GlobalAudioPlayer.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex flex-col mx-2 overflow-hidden w-32",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-serif text-muted-gold whitespace-nowrap animate-marquee",
                        children: "Tum Se Hi - Jab We Met"
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/audio/GlobalAudioPlayer.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 mt-1 h-2",
                        children: [
                            1,
                            2,
                            3,
                            4,
                            5
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-1 bg-muted-gold rounded-full transition-all duration-300 ${isPlaying ? 'animate-pulse' : 'h-[2px]'}`,
                                style: {
                                    height: isPlaying ? `${Math.random() * 8 + 4}px` : '2px',
                                    animationDelay: `${i * 0.1}s`
                                }
                            }, i, false, {
                                fileName: "[project]/birthday-surprise/src/components/audio/GlobalAudioPlayer.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/audio/GlobalAudioPlayer.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/components/audio/GlobalAudioPlayer.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleMute,
                className: "w-8 h-8 flex items-center justify-center text-warm-ivory hover:text-muted-gold transition-colors",
                "aria-label": isMuted ? "Unmute" : "Mute",
                children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/birthday-surprise/src/components/audio/GlobalAudioPlayer.tsx",
                    lineNumber: 104,
                    columnNumber: 20
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/birthday-surprise/src/components/audio/GlobalAudioPlayer.tsx",
                    lineNumber: 104,
                    columnNumber: 44
                }, this)
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/audio/GlobalAudioPlayer.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 10s linear infinite;
        }
      `
                }
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/audio/GlobalAudioPlayer.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/birthday-surprise/src/components/audio/GlobalAudioPlayer.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(GlobalAudioPlayer, "JbDcM8OLIw58FjkSPj3jM/lcmeY=");
_c = GlobalAudioPlayer;
var _c;
__turbopack_context__.k.register(_c, "GlobalAudioPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=birthday-surprise_src_components_audio_GlobalAudioPlayer_tsx_1ilytzhw8k7mm._.js.map