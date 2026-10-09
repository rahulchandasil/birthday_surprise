(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/birthday-surprise/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$intro$2f$IntroScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/components/intro/IntroScene.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$hero$2f$HeroScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/components/hero/HeroScene.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$story$2f$OurStoryScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/components/story/OurStoryScene.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$reasons$2f$ReasonsScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$gallery$2f$GalleryScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$video$2f$VideoScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/components/video/VideoScene.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$letter$2f$LoveLetterScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$birthday$2f$BirthdayScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$audio$2f$GlobalAudioPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/components/audio/GlobalAudioPlayer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [introFinished, setIntroFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // Initialize lenis globally for smooth scrolling
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
            return ({
                "Home.useEffect": ()=>{
                    lenis.destroy();
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-midnight text-warm-ivory overflow-hidden",
        children: [
            !introFinished && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$intro$2f$IntroScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onComplete: ()=>setIntroFinished(true)
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/app/page.tsx",
                lineNumber: 37,
                columnNumber: 26
            }, this),
            introFinished && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$hero$2f$HeroScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/app/page.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$story$2f$OurStoryScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/app/page.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$reasons$2f$ReasonsScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/app/page.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$gallery$2f$GalleryScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/app/page.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$video$2f$VideoScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/app/page.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$letter$2f$LoveLetterScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/app/page.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$birthday$2f$BirthdayScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/app/page.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$audio$2f$GlobalAudioPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/app/page.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/app/page.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/birthday-surprise/src/app/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(Home, "GTBYKyHZpFZX80AlO327ZGHmsE4=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BirthdayScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/canvas-confetti/dist/confetti.module.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function BirthdayScene() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isCandleBlown, setIsCandleBlown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFinalMessage, setShowFinalMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const flameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const finalMessageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BirthdayScene.useEffect": ()=>{
            setIsMounted(true);
        }
    }["BirthdayScene.useEffect"], []);
    // Scroll animation for the section entering
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BirthdayScene.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(containerRef.current, {
                opacity: 0
            }, {
                opacity: 1,
                duration: 1.5,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 50%"
                }
            });
        }
    }["BirthdayScene.useEffect"], []);
    const handleBlowCandle = ()=>{
        if (isCandleBlown) return;
        setIsCandleBlown(true);
        // Animate flame going out
        if (flameRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(flameRef.current, {
                opacity: 0,
                scale: 0,
                duration: 0.5,
                ease: "power2.in",
                onComplete: ()=>{
                    // Trigger confetti
                    const duration = 3 * 1000;
                    const end = Date.now() + duration;
                    const frame = ()=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                            particleCount: 5,
                            angle: 60,
                            spread: 55,
                            origin: {
                                x: 0
                            },
                            colors: [
                                '#ff0a54',
                                '#ff477e',
                                '#ff7096',
                                '#ff85a1',
                                '#fbb1bd'
                            ]
                        });
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                            particleCount: 5,
                            angle: 120,
                            spread: 55,
                            origin: {
                                x: 1
                            },
                            colors: [
                                '#ff0a54',
                                '#ff477e',
                                '#ff7096',
                                '#ff85a1',
                                '#fbb1bd'
                            ]
                        });
                        if (Date.now() < end) {
                            requestAnimationFrame(frame);
                        }
                    };
                    frame();
                    // Trigger final message sequence
                    setShowFinalMessage(true);
                }
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BirthdayScene.useEffect": ()=>{
            if (showFinalMessage && finalMessageRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(finalMessageRef.current, {
                    opacity: 0,
                    y: 30
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power2.out",
                    delay: 0.5
                });
            }
        }
    }["BirthdayScene.useEffect"], [
        showFinalMessage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "py-32 px-6 min-h-screen bg-deep-burgundy text-warm-ivory relative flex flex-col items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,192,203,0.1)_0%,transparent_70%)] mix-blend-screen"
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this),
                    isMounted && [
                        ...Array(40)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bg-pink-200 rounded-full blur-[1px]",
                            style: {
                                width: Math.random() * 5 + 1 + 'px',
                                height: Math.random() * 5 + 1 + 'px',
                                top: Math.random() * 100 + '%',
                                left: Math.random() * 100 + '%',
                                opacity: Math.random() * 0.7,
                                animation: `twinkle ${Math.random() * 4 + 2}s infinite alternate`
                            }
                        }, i, false, {
                            fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10 text-center flex flex-col items-center w-full max-w-6xl",
                children: !isCandleBlown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center mt-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 to-amber-400 drop-shadow-[0_0_30px_rgba(251,191,36,0.5)] mb-20 animate-pulse",
                            children: "Make a Wish..."
                        }, void 0, false, {
                            fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                            lineNumber: 118,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative cursor-pointer group",
                            onClick: handleBlowCandle,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -inset-20 bg-amber-500/20 rounded-full blur-[80px] opacity-70 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                    lineNumber: 125,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-56 bg-gradient-to-b from-yellow-50 via-warm-ivory to-rose-100 rounded-t-3xl rounded-b-xl mx-auto shadow-[inset_-8px_0_20px_rgba(0,0,0,0.15),0_10px_30px_rgba(0,0,0,0.3)] relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-2 left-2 w-3 h-14 bg-gradient-to-b from-yellow-50 to-warm-ivory rounded-full shadow-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-1 right-3 w-4 h-20 bg-gradient-to-b from-yellow-50 to-warm-ivory rounded-full shadow-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                            lineNumber: 130,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 left-7 w-2 h-10 bg-warm-ivory rounded-full shadow-sm opacity-80"
                                        }, void 0, false, {
                                            fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                            lineNumber: 131,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-1/2 left-0 right-0 h-8 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 transform -skew-y-3 flex items-center justify-center shadow-lg border-y border-pink-200/50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                className: "text-white fill-white w-4 h-4 opacity-80"
                                            }, void 0, false, {
                                                fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                                lineNumber: 135,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -top-4 left-1/2 -translate-x-1/2 w-1.5 h-5 bg-gradient-to-t from-gray-700 to-black rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: flameRef,
                                            className: "absolute -top-24 left-1/2 -translate-x-1/2 w-12 h-20 origin-bottom flex justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-full bg-gradient-to-t from-amber-500 via-yellow-300 to-yellow-50 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] animate-flicker filter drop-shadow-[0_0_50px_rgba(251,191,36,0.9)] opacity-90"
                                                }, void 0, false, {
                                                    fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-2 w-5 h-8 bg-gradient-to-t from-blue-400 to-white rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] opacity-80 blur-[1px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                            lineNumber: 142,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-20 text-sm md:text-base text-pink-200 uppercase tracking-[0.3em] font-light opacity-60 group-hover:opacity-100 transition-opacity duration-500",
                                    children: "( Tap the candle to blow it out )"
                                }, void 0, false, {
                                    fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                    lineNumber: 149,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                            lineNumber: 123,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                    lineNumber: 117,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: finalMessageRef,
                    className: "flex flex-col items-center opacity-0 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-5xl md:text-7xl lg:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 mb-6 drop-shadow-[0_0_20px_rgba(244,114,182,0.4)]",
                            children: [
                                "Happy Birthday, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                    className: "md:hidden"
                                }, void 0, false, {
                                    fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                    lineNumber: 157,
                                    columnNumber: 33
                                }, this),
                                " Kuchu Puchu! 🎉"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                            lineNumber: 156,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl md:text-3xl font-light text-rose-100 mb-16 max-w-3xl leading-relaxed italic",
                            children: "Here's to you, to us, and to a lifetime of beautiful memories together. I love you more than words could ever say. You are my greatest blessing."
                        }, void 0, false, {
                            fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                            lineNumber: 159,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full max-w-5xl flex flex-col items-center justify-center mt-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-pink-500/20 via-rose-500/10 to-pink-500/20 rounded-full blur-[100px] pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                    lineNumber: 165,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 overflow-hidden pointer-events-none z-10",
                                    children: [
                                        ...Array(25)
                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bg-pink-300 rounded-full blur-[2px] animate-sparkle-float",
                                            style: {
                                                width: `${2 + Math.random() * 4}px`,
                                                height: `${2 + Math.random() * 4}px`,
                                                left: `${Math.random() * 100}%`,
                                                top: `${Math.random() * 100}%`,
                                                animationDelay: `${Math.random() * 5}s`,
                                                animationDuration: `${4 + Math.random() * 6}s`
                                            }
                                        }, i, false, {
                                            fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                            lineNumber: 170,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                    lineNumber: 168,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full max-w-2xl z-30 animate-fade-in-up",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full animate-float-slow",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full rounded-xl p-3 bg-white/10 backdrop-blur-md animate-glow-pulse border border-pink-200/30 transform transition-all duration-1000 hover:scale-[1.03]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative rounded-lg overflow-hidden shadow-inner",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/images/propose pose.JPG",
                                                        alt: "Our Special Moment",
                                                        className: "w-full h-auto object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 26
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 pt-20 flex flex-col items-center justify-end",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                className: "w-10 h-10 text-pink-400 fill-pink-400 mb-3 animate-pulse filter drop-shadow-[0_0_10px_rgba(244,114,182,0.8)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-3xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-rose-100 shadow-black drop-shadow-xl italic font-medium tracking-wide",
                                                                children: "My Forever Love"
                                                            }, void 0, false, {
                                                                fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 26
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                                lineNumber: 189,
                                                columnNumber: 24
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                            lineNumber: 188,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                        lineNumber: 187,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                    lineNumber: 186,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full mt-12 md:mt-0 md:absolute md:inset-0 pointer-events-none z-20 flex flex-wrap justify-center gap-6 md:block",
                                    children: [
                                        {
                                            src: "/images/amar bou.jpeg",
                                            label: "My Beautiful Wife",
                                            delay: "delay-100",
                                            rotation: "-rotate-6",
                                            pos: "md:top-10 md:-left-12 lg:-left-24",
                                            floatAnim: "animate-float-slow"
                                        },
                                        {
                                            src: "/images/beauty.jpeg",
                                            label: "Gorgeous",
                                            delay: "delay-300",
                                            rotation: "rotate-6",
                                            pos: "md:-bottom-10 md:left-10 lg:left-0",
                                            floatAnim: "animate-float-medium"
                                        },
                                        {
                                            src: "/images/swag pic.jpeg",
                                            label: "My Swag",
                                            delay: "delay-500",
                                            rotation: "-rotate-3",
                                            pos: "md:-bottom-16 md:right-10 lg:right-0",
                                            floatAnim: "animate-float-fast"
                                        },
                                        {
                                            src: "/images/my wife.jpeg",
                                            label: "Forever Mine",
                                            delay: "delay-700",
                                            rotation: "rotate-6",
                                            pos: "md:top-20 md:-right-12 lg:-right-24",
                                            floatAnim: "animate-float-medium"
                                        }
                                    ].map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `relative md:absolute ${img.pos} animate-fade-in-up ${img.delay} z-20 flex-shrink-0 w-40 md:w-48 lg:w-56`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-full h-full ${img.floatAnim}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `relative w-full pointer-events-auto bg-warm-ivory p-3 pb-10 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.4)] border border-warm-ivory transform transition-all duration-700 hover:scale-110 hover:z-50 cursor-pointer ${img.rotation}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-3 bg-white/40 shadow-sm backdrop-blur-sm -rotate-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 27
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative w-full aspect-[4/5] overflow-hidden rounded shadow-inner",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: img.src,
                                                                alt: img.label,
                                                                className: "w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                                                            }, void 0, false, {
                                                                fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "absolute bottom-3 left-0 right-0 text-center font-serif text-pink-700 text-sm md:text-lg font-bold italic tracking-wide",
                                                            children: img.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                                lineNumber: 216,
                                                columnNumber: 23
                                            }, this)
                                        }, idx, false, {
                                            fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                            lineNumber: 215,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                                    lineNumber: 208,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                            lineNumber: 163,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                    lineNumber: 155,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
          @keyframes flicker {
            0%, 100% { transform: rotate(-1deg) scaleY(1.02); filter: drop-shadow(0 0 40px rgba(251,191,36,0.9)); }
            25% { transform: rotate(1deg) scaleY(0.98); filter: drop-shadow(0 0 50px rgba(251,191,36,1)); }
            50% { transform: rotate(-1deg) scaleY(1.05); filter: drop-shadow(0 0 30px rgba(251,191,36,0.8)); }
            75% { transform: rotate(1deg) scaleY(0.95); filter: drop-shadow(0 0 60px rgba(251,191,36,1)); }
          }
          @keyframes twinkle {
            0% { opacity: 0.2; transform: scale(0.8); }
            100% { opacity: 0.9; transform: scale(1.3); filter: drop-shadow(0 0 5px rgba(255,192,203,0.8)); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes float-medium {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes float-fast {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-25px); }
          }
          @keyframes glow-pulse {
            0%, 100% { box-shadow: 0 0 50px rgba(255,192,203,0.3); }
            50% { box-shadow: 0 0 80px rgba(255,192,203,0.7); }
          }
          @keyframes sparkle-float {
            0% { transform: translateY(0) scale(0); opacity: 0; }
            20% { transform: translateY(-20px) scale(1); opacity: 0.8; }
            80% { transform: translateY(-80px) scale(1); opacity: 0.8; }
            100% { transform: translateY(-100px) scale(0); opacity: 0; }
          }
          .animate-fade-in-up { animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
          .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
          .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
          .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
          .animate-glow-pulse { animation: glow-pulse 4s ease-in-out infinite; }
          .animate-sparkle-float { animation: sparkle-float linear infinite forwards; }
          .delay-100 { animation-delay: 100ms; }
          .delay-300 { animation-delay: 300ms; }
          .delay-500 { animation-delay: 500ms; }
          .delay-700 { animation-delay: 700ms; }
        `
                }
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
                lineNumber: 233,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/birthday-surprise/src/components/birthday/BirthdayScene.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(BirthdayScene, "/UHNni84TbYcF0CP7K4tNCh9cPI=");
_c = BirthdayScene;
var _c;
__turbopack_context__.k.register(_c, "BirthdayScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GalleryScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/data/gallery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkle$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/lucide-react/dist/esm/icons/sparkle.mjs [app-client] (ecmascript) <export default as Sparkle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function GalleryScene() {
    _s();
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const galleryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const itemsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GalleryScene.useEffect": ()=>{
            setMounted(true);
            // Header reveal
            __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(headerRef.current, {
                opacity: 0,
                y: 30,
                filter: 'blur(5px)'
            }, {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 80%"
                }
            });
            // Parallax or subtle reveal effect on gallery items
            itemsRef.current.forEach({
                "GalleryScene.useEffect": (item, index)=>{
                    if (!item) return;
                    __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(item, {
                        opacity: 0,
                        y: 50,
                        scale: 0.9
                    }, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: "back.out(1.2)",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%"
                        }
                    });
                }
            }["GalleryScene.useEffect"]);
            return ({
                "GalleryScene.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach({
                        "GalleryScene.useEffect": (t)=>t.kill()
                    }["GalleryScene.useEffect"]);
                }
            })["GalleryScene.useEffect"];
        }
    }["GalleryScene.useEffect"], []);
    // Use a simple escape key listener for lightbox
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GalleryScene.useEffect": ()=>{
            const handleKeyDown = {
                "GalleryScene.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'Escape') {
                        setSelectedImage(null);
                    }
                }
            }["GalleryScene.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "GalleryScene.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["GalleryScene.useEffect"];
        }
    }["GalleryScene.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: galleryRef,
        className: "py-32 px-4 md:px-8 bg-midnight text-warm-ivory min-h-screen relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[150px]"
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                        lineNumber: 67,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]"
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                        lineNumber: 68,
                        columnNumber: 10
                    }, this),
                    mounted && [
                        ...Array(15)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute animate-float-slow opacity-20",
                            style: {
                                left: Math.random() * 100 + '%',
                                top: Math.random() * 100 + '%',
                                animationDelay: Math.random() * 5 + 's'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkle$3e$__["Sparkle"], {
                                className: "text-pink-300 w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        }, i, false, {
                            fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: headerRef,
                className: "relative max-w-7xl mx-auto mb-20 text-center z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-5xl md:text-7xl font-serif mb-4 text-transparent bg-clip-text bg-gradient-to-r from-warm-ivory via-pink-200 to-warm-ivory drop-shadow-[0_0_15px_rgba(255,192,203,0.3)]",
                        children: "Fragments of Us"
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center gap-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-[1px] bg-gradient-to-r from-transparent to-pink-400"
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                                lineNumber: 89,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: "w-4 h-4 text-pink-400 fill-pink-400 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                                lineNumber: 90,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-[1px] bg-gradient-to-l from-transparent to-pink-400"
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                                lineNumber: 91,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-pink-100/70 max-w-2xl mx-auto font-light text-lg md:text-xl italic",
                        children: "A magical collection of our frozen memories."
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-7xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 z-10",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["galleryImages"].map((image, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>{
                            itemsRef.current[i] = el;
                        },
                        className: "break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl border border-warm-ivory/5 bg-warm-ivory/5 p-2 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)] transform-gpu transition-all duration-500 hover:scale-[1.02] hover:z-20 hover:border-pink-300/30 hover:bg-pink-900/20",
                        onClick: ()=>setSelectedImage(image),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full overflow-hidden shadow-2xl rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: image.url,
                                    alt: image.alt,
                                    className: "w-full h-auto object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                }, void 0, false, {
                                    fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-pink-950/90 via-pink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6",
                                    children: image.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-pink-100 text-lg md:text-xl font-serif transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-md",
                                        children: image.caption
                                    }, void 0, false, {
                                        fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                                        lineNumber: 116,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)
                    }, image.id, false, {
                        fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-2xl p-4 md:p-12 animate-fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/40 via-transparent to-transparent pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedImage(null),
                        className: "absolute top-6 right-6 text-pink-300 hover:text-pink-100 hover:scale-110 transition-all z-50 p-2 bg-pink-900/30 rounded-full border border-pink-400/30",
                        "aria-label": "Close",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "18",
                                    y1: "6",
                                    x2: "6",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "6",
                                    y1: "6",
                                    x2: "18",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-6xl w-full max-h-[85vh] h-full flex flex-col items-center justify-center animate-zoom-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full h-full max-h-[80vh] rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(255,105,180,0.3)] border border-pink-500/20 bg-black/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: selectedImage.url,
                                    alt: selectedImage.alt,
                                    className: "w-full h-full object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            selectedImage.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-4 md:-bottom-12 bg-pink-950/80 border border-pink-400/30 backdrop-blur-md px-8 py-3 rounded-full shadow-[0_10px_30px_rgba(255,105,180,0.3)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-pink-100 font-serif italic text-lg md:text-xl drop-shadow-md",
                                    children: selectedImage.caption
                                }, void 0, false, {
                                    fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                                    lineNumber: 154,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                                lineNumber: 153,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); filter: blur(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); filter: blur(0px); }
        }
        .animate-zoom-in {
          animation: zoomIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `
                }
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/birthday-surprise/src/components/gallery/GalleryScene.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(GalleryScene, "nTKvFK9Bvr9dC05JRrzlprJiJfA=");
_c = GalleryScene;
var _c;
__turbopack_context__.k.register(_c, "GalleryScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/birthday-surprise/src/components/hero/HeroScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/data/site-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function HeroScene() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const subRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const captionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroScene.useEffect": ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                delay: 0.5
            });
            // Ensure initial states
            __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set([
                headingRef.current,
                subRef.current,
                captionRef.current
            ], {
                opacity: 0,
                y: 20
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(imageRef.current, {
                opacity: 0,
                scale: 1.05
            });
            // Cinematic Reveal
            tl.to(imageRef.current, {
                opacity: 1,
                scale: 1,
                duration: 2.5,
                ease: "power3.out"
            }).to(headingRef.current, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power2.out"
            }, "-=1.5").to(subRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.8").to(captionRef.current, {
                opacity: 0.6,
                y: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.6");
            return ({
                "HeroScene.useEffect": ()=>{
                    tl.kill();
                }
            })["HeroScene.useEffect"];
        }
    }["HeroScene.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden bg-midnight px-6 py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                children: [
                    ...Array(15)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute animate-float-heart opacity-20",
                        style: {
                            left: Math.random() * 100 + '%',
                            animationDuration: Math.random() * 10 + 10 + 's',
                            animationDelay: Math.random() * 5 + 's',
                            transform: `scale(${Math.random() * 0.5 + 0.5})`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: "text-pink-500 fill-pink-500 w-8 h-8"
                        }, void 0, false, {
                            fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 md:pl-[10%] mb-12 md:mb-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        ref: headingRef,
                        className: "text-4xl md:text-6xl lg:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-warm-ivory via-pink-200 to-warm-ivory leading-tight mb-6 drop-shadow-[0_0_15px_rgba(255,192,203,0.3)]",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].hero.heading
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: subRef,
                        className: "text-lg md:text-xl text-pink-100/90 font-light max-w-md leading-relaxed mb-10",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].hero.subheading
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: captionRef,
                        className: "text-sm uppercase tracking-[0.2em] text-pink-300 font-serif italic",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].hero.caption
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full md:w-1/2 flex items-center justify-center px-4 md:pr-[10%] relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-pink-500/20 blur-[100px] rounded-full transform -translate-y-1/4 translate-x-1/4 w-[120%] h-[120%] animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: imageRef,
                        className: "relative w-full max-w-lg rounded-2xl overflow-hidden border-2 border-pink-200/20 shadow-[0_0_50px_rgba(255,105,180,0.3)] animate-float-slow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/best pic.jpeg",
                                alt: "My Love",
                                className: "w-full h-auto object-cover transition-transform duration-[3000ms] hover:scale-110"
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-tr from-pink-500/30 via-transparent to-transparent mix-blend-overlay z-10 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        @keyframes floatHeart {
          0% { transform: translateY(100vh) rotate(0deg) scale(0.5); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-20vh) rotate(360deg) scale(1); opacity: 0; }
        }
        .animate-float-heart {
          animation: floatHeart linear infinite;
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
      `
                }
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(HeroScene, "l0nQVCsKrc8VpO/CsY5DL+EAZUM=");
_c = HeroScene;
var _c;
__turbopack_context__.k.register(_c, "HeroScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/birthday-surprise/src/components/intro/IntroScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IntroScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/data/site-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function IntroScene({ onComplete }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const text1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const text2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const text3Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const btnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IntroScene.useEffect": ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
            // Initial states
            __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set([
                text1Ref.current,
                text2Ref.current,
                text3Ref.current
            ], {
                opacity: 0,
                scale: 1.1,
                filter: 'blur(10px)'
            });
            // Line 1
            tl.to(text1Ref.current, {
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
                duration: 2.5,
                ease: "power2.out"
            }).to(text1Ref.current, {
                opacity: 0,
                scale: 0.95,
                filter: 'blur(10px)',
                duration: 1.5,
                ease: "power2.inOut",
                delay: 1
            })// Line 2
            .to(text2Ref.current, {
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
                duration: 2.5,
                ease: "power2.out"
            }).to(text2Ref.current, {
                opacity: 0,
                scale: 0.95,
                filter: 'blur(10px)',
                duration: 1.5,
                ease: "power2.inOut",
                delay: 1
            })// Line 3
            .to(text3Ref.current, {
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
                duration: 2.5,
                ease: "power2.out"
            }).to(btnRef.current, {
                opacity: 1,
                y: -20,
                duration: 1.5,
                ease: "back.out(1.5)"
            }, "-=0.5");
            return ({
                "IntroScene.useEffect": ()=>{
                    tl.kill();
                }
            })["IntroScene.useEffect"];
        }
    }["IntroScene.useEffect"], []);
    const handleFinish = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(containerRef.current, {
            opacity: 0,
            scale: 1.1,
            filter: 'blur(20px)',
            duration: 1.5,
            ease: "power3.inOut",
            onComplete: onComplete
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black text-warm-ivory flex-col text-center px-4 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-black to-black"
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/intro/IntroScene.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    [
                        ...Array(30)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute rounded-full bg-white animate-twinkle",
                            style: {
                                left: Math.random() * 100 + '%',
                                top: Math.random() * 100 + '%',
                                width: Math.random() * 3 + 'px',
                                height: Math.random() * 3 + 'px',
                                animationDelay: Math.random() * 5 + 's',
                                animationDuration: Math.random() * 3 + 2 + 's',
                                opacity: Math.random() * 0.7 + 0.3
                            }
                        }, i, false, {
                            fileName: "[project]/birthday-surprise/src/components/intro/IntroScene.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/components/intro/IntroScene.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center justify-center min-h-[50vh] w-full max-w-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        ref: text1Ref,
                        className: "absolute text-2xl md:text-5xl font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-white to-pink-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].intro.line1
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/intro/IntroScene.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        ref: text2Ref,
                        className: "absolute text-2xl md:text-5xl font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-300 to-pink-400 drop-shadow-[0_0_20px_rgba(255,105,180,0.6)]",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].intro.line2
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/intro/IntroScene.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        ref: text3Ref,
                        className: "absolute text-xl md:text-4xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 drop-shadow-[0_0_20px_rgba(250,214,165,0.8)]",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].intro.line3
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/intro/IntroScene.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/components/intro/IntroScene.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: btnRef,
                onClick: handleFinish,
                className: "opacity-0 absolute bottom-10 md:bottom-20 flex items-center gap-3 px-8 py-4 border border-pink-300/40 rounded-full bg-pink-500/10 hover:bg-pink-500/30 hover:border-pink-300/80 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,105,180,0.4)] transition-all duration-300 uppercase tracking-widest text-sm text-pink-100 backdrop-blur-sm group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "w-5 h-5 text-pink-300 group-hover:animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/intro/IntroScene.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].intro.buttonText
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/components/intro/IntroScene.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.5); box-shadow: 0 0 10px rgba(255,255,255,0.8); }
        }
        .animate-twinkle {
          animation: twinkle linear infinite;
        }
      `
                }
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/intro/IntroScene.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/birthday-surprise/src/components/intro/IntroScene.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(IntroScene, "ndM0TKW1lUuIixCvTmhG7OJTbIo=");
_c = IntroScene;
var _c;
__turbopack_context__.k.register(_c, "IntroScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoveLetterScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function LoveLetterScene() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const letterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const flapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoveLetterScene.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(containerRef.current, {
                opacity: 0,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                ease: "power2.out",
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%"
                }
            });
        }
    }["LoveLetterScene.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoveLetterScene.useEffect": ()=>{
            if (isOpen && letterRef.current && flapRef.current) {
                // 1. Open the top flap
                __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(flapRef.current, {
                    rotateX: 180,
                    duration: 1,
                    ease: "power2.inOut",
                    onUpdate: {
                        "LoveLetterScene.useEffect": function() {
                            // Send flap to back once it's open
                            if (this.progress() > 0.5) {
                                flapRef.current.style.zIndex = '5';
                            }
                        }
                    }["LoveLetterScene.useEffect"]
                });
                // 2. Fade out the envelope completely
                __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to('.envelope-part', {
                    opacity: 0,
                    duration: 1.5,
                    delay: 0.8,
                    ease: "power2.out"
                });
                // 3. Slide the letter to the center of the screen
                const slideDistance = window.innerWidth < 768 ? -50 : -80;
                __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(letterRef.current, {
                    y: slideDistance,
                    scale: 1.05,
                    opacity: 1,
                    duration: 1.5,
                    delay: 0.8,
                    ease: "power3.out"
                });
            }
        }
    }["LoveLetterScene.useEffect"], [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "py-20 md:py-32 px-6 md:px-12 bg-midnight text-warm-ivory relative flex flex-col justify-center items-center min-h-screen z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-pink-500/15 rounded-full blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-red-500/15 rounded-full blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-4 md:mb-16 relative z-20 transition-opacity duration-1000",
                style: {
                    opacity: isOpen ? 0 : 1,
                    pointerEvents: isOpen ? 'none' : 'auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-5xl font-serif text-pink-300 drop-shadow-[0_0_15px_rgba(244,114,182,0.4)] mb-4",
                        children: "A Special Message..."
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-warm-ivory/80 text-lg animate-pulse tracking-wide",
                        children: "Tap the heart to open"
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-3xl mt-24 md:mt-32 flex justify-center perspective-[1000px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-[280px] md:h-[380px] max-w-2xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "envelope-part absolute inset-0 bg-gradient-to-br from-rose-200 to-pink-300 rounded-b-xl shadow-2xl z-0 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 mix-blend-multiply"
                                }, void 0, false, {
                                    fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.2)]"
                                }, void 0, false, {
                                    fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                            lineNumber: 89,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: letterRef,
                            className: "absolute bottom-4 left-[4%] right-[4%] md:left-[6%] md:right-[6%] h-[550px] md:h-[650px] bg-gradient-to-br from-orange-50 via-warm-ivory to-rose-50 text-midnight p-8 md:p-12 rounded-t-xl shadow-[0_0_50px_rgba(255,192,203,0.7)] z-10 transform translate-y-20 opacity-0 border border-pink-200/60",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-70 mix-blend-multiply rounded-t-xl pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                    lineNumber: 99,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 h-full flex flex-col justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-3xl md:text-5xl font-serif mb-6 md:mb-8 italic text-pink-600 drop-shadow-sm leading-tight",
                                                    children: "My Dearest Kuchu Puchu,"
                                                }, void 0, false, {
                                                    fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 md:space-y-6 text-sm md:text-xl font-light leading-relaxed text-midnight/90 font-serif relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute -left-4 md:-left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-rose-200 to-transparent rounded-full opacity-60"
                                                        }, void 0, false, {
                                                            fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "When I started building this, I realized that no amount of code, animations, or words could truly capture what you mean to me."
                                                        }, void 0, false, {
                                                            fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "You are the quiet peace at the end of a long day and the sudden burst of laughter that catches me off guard. You are my favorite thought and my most beautiful reality."
                                                        }, void 0, false, {
                                                            fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "As you celebrate another year of life, I want to celebrate another year of having you in mine. I promise to keep choosing you, every single day."
                                                        }, void 0, false, {
                                                            fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 md:mt-12 text-right border-t border-pink-200/80 pt-6 relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    className: "absolute left-1/2 -top-5 -translate-x-1/2 text-pink-400 fill-pink-300 w-10 h-10 opacity-90 shadow-sm filter drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg md:text-2xl italic font-serif text-pink-600/90 mb-1",
                                                    children: "Yours always & forever,"
                                                }, void 0, false, {
                                                    fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl md:text-5xl font-serif text-rose-500 font-bold drop-shadow-md",
                                                    children: "Your Love ❤️"
                                                }, void 0, false, {
                                                    fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                    lineNumber: 101,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                            lineNumber: 95,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "envelope-part absolute inset-0 z-20 pointer-events-none filter drop-shadow-[0_-5px_20px_rgba(0,0,0,0.25)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-br from-pink-300 to-rose-400",
                                    style: {
                                        clipPath: 'polygon(0 0, 50% 50%, 0 100%)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 mix-blend-multiply"
                                        }, void 0, false, {
                                            fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 border-r-2 border-white/20"
                                        }, void 0, false, {
                                            fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-bl from-pink-300 to-rose-400",
                                    style: {
                                        clipPath: 'polygon(100% 0, 50% 50%, 100% 100%)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 mix-blend-multiply"
                                        }, void 0, false, {
                                            fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 border-l-2 border-white/20"
                                        }, void 0, false, {
                                            fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-pink-400 to-rose-300 shadow-inner",
                                    style: {
                                        clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 mix-blend-multiply"
                                    }, void 0, false, {
                                        fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                        lineNumber: 157,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                            lineNumber: 133,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: flapRef,
                            className: "envelope-part absolute top-0 left-0 w-full h-[180px] md:h-[260px] z-30 origin-top filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)] transform-gpu",
                            style: {
                                transformStyle: 'preserve-3d'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-b from-pink-400 to-rose-400",
                                    style: {
                                        clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                                        backfaceVisibility: 'hidden'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 mix-blend-multiply"
                                        }, void 0, false, {
                                            fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-white/30 to-transparent",
                                            style: {
                                                clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-pink-300 to-rose-300",
                                    style: {
                                        clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                                        transform: 'rotateX(180deg)',
                                        backfaceVisibility: 'hidden'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 mix-blend-multiply"
                                    }, void 0, false, {
                                        fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                        lineNumber: 182,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                            lineNumber: 162,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsOpen(true),
                            className: `absolute z-40 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 hover:scale-125 ${isOpen ? 'opacity-0 pointer-events-none scale-150' : 'opacity-100 animate-bounce'}`,
                            style: {
                                left: '50%',
                                top: '50%'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.8)] border-[3px] border-red-300/60 cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    className: "text-white fill-white w-8 h-8 md:w-10 md:h-10 animate-pulse filter drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                                }, void 0, false, {
                                    fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                    lineNumber: 196,
                                    columnNumber: 16
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                lineNumber: 195,
                                columnNumber: 14
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                            lineNumber: 187,
                            columnNumber: 12
                        }, this),
                        isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",
                            children: [
                                ...Array(30)
                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute w-3 h-3 rounded-full animate-particle shadow-[0_0_10px_rgba(255,192,203,0.8)]",
                                    style: {
                                        '--tx': `${(Math.random() - 0.5) * 600}px`,
                                        '--ty': `${(Math.random() - 0.5) * 600}px`,
                                        animationDelay: `${Math.random() * 0.1}s`,
                                        backgroundColor: [
                                            '#ec4899',
                                            '#f43f5e',
                                            '#fbbf24',
                                            '#ffffff'
                                        ][Math.floor(Math.random() * 4)]
                                    }
                                }, i, false, {
                                    fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                                    lineNumber: 204,
                                    columnNumber: 18
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                            lineNumber: 202,
                            columnNumber: 14
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        @keyframes particleExplosion {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }
        .animate-particle {
          animation: particleExplosion 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `
                }
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/birthday-surprise/src/components/letter/LoveLetterScene.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(LoveLetterScene, "INUUf42uBHNWBxZqwLCqxslhWHU=");
_c = LoveLetterScene;
var _c;
__turbopack_context__.k.register(_c, "LoveLetterScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReasonsScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$reasons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/data/reasons.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkle$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/lucide-react/dist/esm/icons/sparkle.mjs [app-client] (ecmascript) <export default as Sparkle>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function ReasonsScene() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const itemsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReasonsScene.useEffect": ()=>{
            const mm = __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
            // Header animation
            __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(headerRef.current, {
                opacity: 0,
                scale: 0.9,
                filter: 'blur(5px)'
            }, {
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 80%"
                }
            });
            mm.add("(min-width: 768px)", {
                "ReasonsScene.useEffect": ()=>{
                    // Desktop: Staggered reveal as you scroll down
                    itemsRef.current.forEach({
                        "ReasonsScene.useEffect": (item, index)=>{
                            if (!item) return;
                            __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(item, {
                                opacity: 0,
                                y: 80,
                                rotationX: 10
                            }, {
                                opacity: 1,
                                y: 0,
                                rotationX: 0,
                                duration: 1.2,
                                ease: "back.out(1.2)",
                                scrollTrigger: {
                                    trigger: item,
                                    start: "top 85%"
                                }
                            });
                        }
                    }["ReasonsScene.useEffect"]);
                }
            }["ReasonsScene.useEffect"]);
            mm.add("(max-width: 767px)", {
                "ReasonsScene.useEffect": ()=>{
                    // Mobile: simpler fade in
                    itemsRef.current.forEach({
                        "ReasonsScene.useEffect": (item)=>{
                            if (!item) return;
                            __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(item, {
                                opacity: 0,
                                y: 30
                            }, {
                                opacity: 1,
                                y: 0,
                                duration: 1,
                                scrollTrigger: {
                                    trigger: item,
                                    start: "top 85%"
                                }
                            });
                        }
                    }["ReasonsScene.useEffect"]);
                }
            }["ReasonsScene.useEffect"]);
            return ({
                "ReasonsScene.useEffect": ()=>{
                    mm.revert(); // Reverts media queries and scroll triggers
                }
            })["ReasonsScene.useEffect"];
        }
    }["ReasonsScene.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "py-32 px-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-100 via-warm-ivory to-warm-ivory text-deep-burgundy relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 left-[10%] w-[400px] h-[400px] bg-pink-300/20 rounded-full blur-[100px] animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                        lineNumber: 76,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-40 right-[10%] w-[500px] h-[500px] bg-red-300/10 rounded-full blur-[120px] animate-pulse",
                        style: {
                            animationDelay: '2s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                        lineNumber: 77,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: headerRef,
                className: "relative max-w-4xl mx-auto text-center mb-24 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-10 left-1/2 -translate-x-1/2 flex justify-center gap-12 w-full opacity-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkle$3e$__["Sparkle"], {
                                className: "text-pink-400 w-6 h-6 animate-spin-slow"
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                lineNumber: 82,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkle$3e$__["Sparkle"], {
                                className: "text-pink-300 w-8 h-8 animate-spin-slow",
                                style: {
                                    animationDirection: 'reverse',
                                    animationDuration: '4s'
                                }
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                lineNumber: 83,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkle$3e$__["Sparkle"], {
                                className: "text-pink-400 w-5 h-5 animate-spin-slow",
                                style: {
                                    animationDelay: '1s'
                                }
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                lineNumber: 84,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-7xl font-serif leading-tight text-transparent bg-clip-text bg-gradient-to-r from-deep-burgundy via-pink-600 to-deep-burgundy drop-shadow-sm pb-2",
                        children: [
                            "Little Things",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                lineNumber: 87,
                                columnNumber: 24
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-pink-500 italic",
                                children: "I Love About You"
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                lineNumber: 87,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-5xl mx-auto flex flex-col gap-24 md:gap-32 z-10",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$reasons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reasonsILoveYou"].map((reason, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>{
                            itemsRef.current[index] = el;
                        },
                        className: `flex flex-col md:flex-row gap-8 md:gap-16 items-center group ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-1/2 flex flex-col relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -left-4 md:-left-10 -top-12 md:-top-16 text-pink-200/40 font-serif text-8xl md:text-[12rem] font-bold z-0 pointer-events-none select-none drop-shadow-lg transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4",
                                        children: reason.number
                                    }, void 0, false, {
                                        fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 pl-4 md:pl-0 border-l-4 border-pink-300 md:border-l-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-3xl md:text-4xl font-serif mb-4 text-deep-burgundy group-hover:text-pink-600 transition-colors duration-500",
                                                children: reason.title
                                            }, void 0, false, {
                                                fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                                lineNumber: 106,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-deep-burgundy/80 text-lg md:text-xl leading-relaxed font-light",
                                                children: reason.description
                                            }, void 0, false, {
                                                fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                                lineNumber: 109,
                                                columnNumber: 18
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-1/2 flex justify-center perspective-[1000px]",
                                children: reason.imagePath && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full max-w-sm cursor-pointer animate-float-slow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-pink-400/30 rounded-2xl blur-[30px] transform group-hover:scale-110 group-hover:bg-pink-500/50 transition-all duration-700"
                                        }, void 0, false, {
                                            fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                            lineNumber: 120,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full h-auto rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)] border-2 border-white/50 transform-gpu transition-all duration-700 ease-out group-hover:scale-105 group-hover:shadow-[0_20px_50px_rgba(255,105,180,0.4)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-full h-full transform-gpu transition-transform duration-700 ease-out ${index % 2 === 0 ? 'group-hover:rotate-y-12 group-hover:-rotate-x-6' : 'group-hover:-rotate-y-12 group-hover:rotate-x-6'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: reason.imagePath,
                                                        alt: reason.title,
                                                        className: "w-full h-auto object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                                    }, void 0, false, {
                                                        fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-t from-pink-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay"
                                                    }, void 0, false, {
                                                        fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                                lineNumber: 124,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                            lineNumber: 122,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, reason.id, true, {
                        fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `
                }
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(ReasonsScene, "SFFHLmXnrBiwhQ0YIBax1Zvpda4=");
_c = ReasonsScene;
var _c;
__turbopack_context__.k.register(_c, "ReasonsScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/birthday-surprise/src/components/story/OurStoryScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OurStoryScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$memories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/data/memories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function OurStoryScene() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chapterRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OurStoryScene.useEffect": ()=>{
            // Header reveal
            __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(headerRef.current, {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 80%"
                }
            });
            // Chapters reveal
            chapterRefs.current.forEach({
                "OurStoryScene.useEffect": (chapter, index)=>{
                    if (!chapter) return;
                    const image = chapter.querySelector('.story-image');
                    const content = chapter.querySelector('.story-content');
                    const isEven = index % 2 === 0;
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        scrollTrigger: {
                            trigger: chapter,
                            start: "top 75%"
                        }
                    });
                    tl.fromTo(image, {
                        opacity: 0,
                        x: isEven ? -50 : 50,
                        rotation: isEven ? -10 : 10
                    }, {
                        opacity: 1,
                        x: 0,
                        rotation: isEven ? -2 : 2,
                        duration: 1.2,
                        ease: "back.out(1.5)"
                    }).fromTo(content, {
                        opacity: 0,
                        y: 30
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out"
                    }, "-=0.8");
                }
            }["OurStoryScene.useEffect"]);
            return ({
                "OurStoryScene.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach({
                        "OurStoryScene.useEffect": (t)=>t.kill()
                    }["OurStoryScene.useEffect"]);
                }
            })["OurStoryScene.useEffect"];
        }
    }["OurStoryScene.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "py-32 px-6 bg-midnight text-warm-ivory relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden opacity-20",
                children: [
                    ...Array(10)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute animate-float-slow",
                        style: {
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            animationDelay: Math.random() * 5 + 's'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: "text-pink-500/30 w-12 h-12"
                        }, void 0, false, {
                            fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-pink-400 to-transparent shadow-[0_0_15px_rgba(255,105,180,0.8)] opacity-30 hidden md:block -translate-x-1/2 rounded-full"
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: headerRef,
                className: "text-center mb-32 max-w-3xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm tracking-[0.3em] text-pink-300 uppercase mb-4 animate-pulse",
                        children: "Our Little Universe"
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-3xl md:text-5xl font-serif leading-tight text-transparent bg-clip-text bg-gradient-to-r from-warm-ivory via-pink-200 to-warm-ivory drop-shadow-[0_0_10px_rgba(255,192,203,0.3)]",
                        children: [
                            "Every year, another chapter.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                lineNumber: 90,
                                columnNumber: 39
                            }, this),
                            "Every memory, another reason to smile."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto flex flex-col gap-32 md:gap-48 relative z-10",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$memories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storyMemories"].map((memory, index)=>{
                    const isEven = index % 2 === 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>{
                            chapterRefs.current[index] = el;
                        },
                        className: `flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-1/2 story-image perspective-1000 flex justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative bg-white p-3 md:p-4 pb-12 md:pb-16 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu hover:scale-[1.05] hover:z-20 transition-all duration-500 group max-w-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm shadow-sm rotate-2 z-20"
                                            }, void 0, false, {
                                                fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative overflow-hidden border border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: memory.imagePath,
                                                        alt: memory.chapterTitle,
                                                        className: "w-full h-auto object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                                    }, void 0, false, {
                                                        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-pink-500/10 mix-blend-overlay pointer-events-none transition-opacity group-hover:opacity-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 w-full text-center py-3 md:py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-serif text-gray-800 text-lg md:text-xl handwriting-font -rotate-2",
                                                    children: memory.year
                                                }, void 0, false, {
                                                    fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                                lineNumber: 121,
                                                columnNumber: 19
                                            }, this),
                                            memory.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -bottom-5 -right-5 z-20 bg-pink-100/90 backdrop-blur-md px-4 py-2 rounded-full text-xs text-pink-900 tracking-wider shadow-lg font-serif rotate-6",
                                                children: [
                                                    "📍 ",
                                                    memory.location
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                                lineNumber: 126,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-midnight border-4 border-pink-400 rounded-full shadow-[0_0_15px_rgba(255,105,180,0.8)] z-20 items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: "w-3 h-3 text-pink-400 fill-pink-400"
                                        }, void 0, false, {
                                            fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                            lineNumber: 134,
                                            columnNumber: 20
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-1/2 flex flex-col story-content px-4 md:px-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-transparent bg-clip-text bg-gradient-to-b from-pink-300 to-transparent text-7xl md:text-9xl font-serif opacity-40 -mb-8 md:-mb-10 z-0 drop-shadow-xl",
                                        children: memory.year
                                    }, void 0, false, {
                                        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-3xl md:text-5xl font-serif mb-6 z-10 text-warm-ivory drop-shadow-md",
                                        children: memory.chapterTitle
                                    }, void 0, false, {
                                        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-1 bg-pink-400 rounded-full mb-6 shadow-[0_0_10px_rgba(255,105,180,0.8)]"
                                    }, void 0, false, {
                                        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-warm-ivory/80 text-lg md:text-xl leading-relaxed font-light mb-8 z-10",
                                        children: memory.description
                                    }, void 0, false, {
                                        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this),
                                    memory.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base md:text-lg font-serif italic text-pink-200 border-l-4 border-pink-400/50 pl-6 bg-pink-900/10 py-2 pr-2 rounded-r-lg",
                                        children: [
                                            '"',
                                            memory.caption,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                        lineNumber: 151,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this)
                        ]
                    }, memory.id, true, {
                        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                        lineNumber: 99,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap');
        .handwriting-font {
           font-family: 'Caveat', cursive;
        }
      `
                }
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(OurStoryScene, "IeQzxUPl4e8uRu2qGpEpX2R6HQg=");
_c = OurStoryScene;
var _c;
__turbopack_context__.k.register(_c, "OurStoryScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/birthday-surprise/src/components/video/VideoScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$videos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/data/videos.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/lucide-react/dist/esm/icons/film.mjs [app-client] (ecmascript) <export default as Film>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function VideoScene() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoScene.useEffect": ()=>{
            setMounted(true);
            // Horizontal scroll effect on desktop
            const mm = __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
            mm.add("(min-width: 1024px)", {
                "VideoScene.useEffect": ()=>{
                    if (scrollWrapperRef.current && containerRef.current) {
                        const sections = __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('.video-panel');
                        __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(sections, {
                            xPercent: -100 * (sections.length - 1),
                            ease: "none",
                            scrollTrigger: {
                                trigger: containerRef.current,
                                pin: true,
                                scrub: 1,
                                snap: 1 / (sections.length - 1),
                                end: {
                                    "VideoScene.useEffect": ()=>"+=" + scrollWrapperRef.current?.offsetWidth
                                }["VideoScene.useEffect"]
                            }
                        });
                    }
                }
            }["VideoScene.useEffect"]);
            return ({
                "VideoScene.useEffect": ()=>{
                    mm.revert();
                }
            })["VideoScene.useEffect"];
        }
    }["VideoScene.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "bg-midnight text-warm-ivory overflow-hidden relative min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] mix-blend-screen"
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen"
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    mounted && [
                        ...Array(20)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute animate-float-slow opacity-30",
                            style: {
                                left: Math.random() * 100 + '%',
                                top: Math.random() * 100 + '%',
                                animationDelay: Math.random() * 5 + 's'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: "text-pink-400 w-3 h-3 fill-pink-400/50"
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, i, false, {
                            fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-12 lg:top-20 left-0 right-0 text-center z-20 pointer-events-none px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center gap-3 mb-2 animate-fade-in-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "w-5 h-5 text-pink-300"
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-pink-100 to-warm-ivory drop-shadow-[0_0_15px_rgba(255,105,180,0.5)]",
                                children: "Moments in Motion"
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "w-5 h-5 text-pink-300"
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-pink-200/60 font-light italic text-lg animate-fade-in-up",
                        style: {
                            animationDelay: '0.2s'
                        },
                        children: "Replaying our sweetest memories"
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollWrapperRef,
                className: "flex flex-col lg:flex-row w-full lg:h-screen pt-40 lg:pt-0",
                style: {
                    width: ("TURBOPACK compile-time value", "object") !== 'undefined' && window.innerWidth >= 1024 ? `${__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$videos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["videoMemories"].length * 100}vw` : '100%'
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$videos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["videoMemories"].map((video, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "video-panel w-full lg:w-screen h-[60vh] lg:h-screen flex flex-col lg:flex-row items-center justify-center p-6 lg:p-24 shrink-0 relative gap-8 lg:gap-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full lg:w-2/3 max-w-5xl aspect-video bg-black rounded-2xl relative overflow-hidden group shadow-[0_0_50px_rgba(255,105,180,0.15)] ring-1 ring-pink-500/20 z-10 transition-transform duration-700 hover:scale-[1.02]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-transparent pointer-events-none z-10"
                                    }, void 0, false, {
                                        fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        src: video.url,
                                        controls: true,
                                        autoPlay: true,
                                        muted: true,
                                        loop: true,
                                        playsInline: true,
                                        preload: "metadata",
                                        className: "w-full h-full object-contain relative z-0",
                                        poster: video.thumbnail
                                    }, void 0, false, {
                                        fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full lg:w-1/3 lg:max-w-sm z-20 transform transition-all duration-500 hover:-translate-y-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-pink-950/40 backdrop-blur-md border border-pink-500/20 p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -top-10 -right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-[30px]"
                                        }, void 0, false, {
                                            fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-pink-300 font-serif text-4xl opacity-50",
                                                    children: [
                                                        "0",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-[1px] flex-grow bg-gradient-to-r from-pink-400/50 to-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 20
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-3xl font-serif text-warm-ivory mb-3 drop-shadow-md",
                                            children: video.title
                                        }, void 0, false, {
                                            fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this),
                                        video.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-pink-100/80 leading-relaxed font-light text-lg",
                                            children: video.caption
                                        }, void 0, false, {
                                            fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                                            lineNumber: 120,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 flex items-center justify-between text-pink-300/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    className: "w-5 h-5 animate-pulse fill-pink-500/20"
                                                }, void 0, false, {
                                                    fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                                            lineNumber: 125,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        ]
                    }, video.id, true, {
                        fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/birthday-surprise/src/components/video/VideoScene.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(VideoScene, "3jAaNa2oF1rgHXuM7wzA6RIltUA=");
_c = VideoScene;
var _c;
__turbopack_context__.k.register(_c, "VideoScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/birthday-surprise/src/data/gallery.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "galleryImages",
    ()=>galleryImages
]);
const galleryImages = [
    {
        id: "gal-1",
        url: "/images/2nd durga puja.jpeg",
        alt: "2nd durga puja",
        caption: "Our 2nd Durga Puja together.",
        width: 600,
        height: 800
    },
    {
        id: "gal-2",
        url: "/images/WhatsApp Image 2026-10-09 at 9.53.31 PM (2).jpeg",
        alt: "Memory",
        width: 800,
        height: 600
    },
    {
        id: "gal-3",
        url: "/images/amar bou.jpeg",
        alt: "Amar bou",
        caption: "Amar bou ❤️",
        width: 600,
        height: 750,
        isFeatured: true
    },
    {
        id: "gal-4",
        url: "/images/amar khape.jpeg",
        alt: "Amar khape",
        width: 600,
        height: 800
    },
    {
        id: "gal-5",
        url: "/images/beauty.jpeg",
        alt: "Beauty",
        caption: "True beauty.",
        width: 800,
        height: 1000
    },
    {
        id: "gal-6",
        url: "/images/best pic.jpeg",
        alt: "Best pic",
        caption: "One of my absolute favorites.",
        width: 800,
        height: 600,
        isFeatured: true
    },
    {
        id: "gal-7",
        url: "/images/cute.jpeg",
        alt: "Cute",
        caption: "So cute!",
        width: 600,
        height: 600
    },
    {
        id: "gal-8",
        url: "/images/cuteness overload.jpeg",
        alt: "Cuteness overload",
        width: 600,
        height: 800
    },
    {
        id: "gal-9",
        url: "/images/cutie.jpeg",
        alt: "Cutie",
        width: 500,
        height: 700
    },
    {
        id: "gal-10",
        url: "/images/dilwali.jpeg",
        alt: "Diwali",
        caption: "Happy Diwali memory.",
        width: 800,
        height: 600
    },
    {
        id: "gal-11",
        url: "/images/funny and most valuable memory.jpeg",
        alt: "Funny and valuable memory",
        caption: "Funny and most valuable memory.",
        width: 600,
        height: 800
    },
    {
        id: "gal-12",
        url: "/images/jsut one cute pic.jpeg",
        alt: "Cute pic",
        width: 500,
        height: 500
    },
    {
        id: "gal-13",
        url: "/images/kuchu puchu.jpeg",
        alt: "Kuchu puchu",
        caption: "My kuchu puchu.",
        width: 600,
        height: 800,
        isFeatured: true
    },
    {
        id: "gal-14",
        url: "/images/most beautifull girl.jpeg",
        alt: "Most beautiful girl",
        width: 800,
        height: 1000
    },
    {
        id: "gal-15",
        url: "/images/most cute.jpeg",
        alt: "Most cute",
        width: 600,
        height: 600
    },
    {
        id: "gal-16",
        url: "/images/most sweet girl.jpeg",
        alt: "Most sweet girl",
        caption: "The sweetest girl.",
        width: 800,
        height: 800
    },
    {
        id: "gal-17",
        url: "/images/my beatiful love.jpeg",
        alt: "My beautiful love",
        caption: "My beautiful love.",
        width: 600,
        height: 800,
        isFeatured: true
    },
    {
        id: "gal-18",
        url: "/images/my love.jpeg",
        alt: "My love",
        width: 800,
        height: 600
    },
    {
        id: "gal-19",
        url: "/images/my sweetheart.jpeg",
        alt: "My sweetheart",
        caption: "Sweetheart 💕",
        width: 500,
        height: 700
    },
    {
        id: "gal-20",
        url: "/images/my wife.jpeg",
        alt: "My wife",
        caption: "My future wife.",
        width: 600,
        height: 800,
        isFeatured: true
    },
    {
        id: "gal-21",
        url: "/images/our 3rd durga puja.jpeg",
        alt: "Our 3rd durga puja",
        caption: "Our 3rd Durga Puja.",
        width: 800,
        height: 600
    },
    {
        id: "gal-22",
        url: "/images/our first durga puja.jpeg",
        alt: "Our first durga puja",
        caption: "Our first Durga Puja.",
        width: 600,
        height: 600
    },
    {
        id: "gal-23",
        url: "/images/our first pic.jpeg",
        alt: "Our first pic",
        caption: "Our very first picture together.",
        width: 800,
        height: 800,
        isFeatured: true
    },
    {
        id: "gal-24",
        url: "/images/our pic.jpeg",
        alt: "Our pic",
        width: 600,
        height: 800
    },
    {
        id: "gal-25",
        url: "/images/propose pose.JPG",
        alt: "Propose pose",
        caption: "The propose pose 💍",
        width: 1000,
        height: 800,
        isFeatured: true
    },
    {
        id: "gal-26",
        url: "/images/raining memory.jpeg",
        alt: "Raining memory",
        width: 600,
        height: 800
    },
    {
        id: "gal-27",
        url: "/images/saraswati pujo.jpeg",
        alt: "Saraswati pujo",
        caption: "Saraswati Pujo.",
        width: 800,
        height: 600
    },
    {
        id: "gal-28",
        url: "/images/saree beauty.jpeg",
        alt: "Saree beauty",
        caption: "Beautiful in Saree.",
        width: 600,
        height: 900
    },
    {
        id: "gal-29",
        url: "/images/smile beauty.jpeg",
        alt: "Smile beauty",
        caption: "That beautiful smile.",
        width: 600,
        height: 600
    },
    {
        id: "gal-30",
        url: "/images/sona ma.jpeg",
        alt: "Sona ma",
        caption: "Sona ma ❤️",
        width: 500,
        height: 700
    },
    {
        id: "gal-31",
        url: "/images/swag pic.jpeg",
        alt: "Swag pic",
        width: 800,
        height: 600
    },
    {
        id: "gal-32",
        url: "/images/sweetie.jpeg",
        alt: "Sweetie",
        width: 600,
        height: 600
    },
    {
        id: "gal-33",
        url: "/images/western beauty.jpeg",
        alt: "Western beauty",
        width: 600,
        height: 800
    },
    {
        id: "gal-34",
        url: "/images/wimnter memory.jpeg",
        alt: "Winter memory",
        caption: "A beautiful winter memory.",
        width: 800,
        height: 800
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/birthday-surprise/src/data/memories.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "storyMemories",
    ()=>storyMemories
]);
const storyMemories = [
    {
        id: "chapter-1",
        chapterTitle: "The Beginning",
        year: "2023",
        description: "The moment everything changed. It didn't take long for me to realize how special you are. Every conversation felt effortless, and every moment spent together made me want more.",
        imagePath: "/images/our first pic.jpeg",
        location: "Where it all started",
        caption: "Our very first chapter together."
    },
    {
        id: "chapter-2",
        chapterTitle: "Growing Together",
        year: "2024",
        description: "This was the year we truly learned about each other. Through the late-night calls, the spontaneous plans, and all the little arguments we immediately forgot about, we built something beautiful.",
        imagePath: "/images/2nd durga puja.jpeg",
        location: "Our favorite spot",
        caption: "Learning to love every part of you."
    },
    {
        id: "chapter-3",
        chapterTitle: "Little Moments, Big Memories",
        year: "2025",
        description: "Sometimes the best memories aren't the grand gestures, but the quiet moments. Watching movies, sharing food, and simply being next to each other.",
        imagePath: "/images/our 3rd durga puja.jpeg",
        caption: "Just us, doing nothing, meaning everything."
    },
    {
        id: "chapter-4",
        chapterTitle: "Still My Favorite Person",
        year: "2026",
        description: "After all this time, looking at you still gives me the same feeling as day one. You are my Cutie, my sweetie, and the person I want to keep making memories with.",
        imagePath: "/images/my sweetheart.jpeg",
        caption: "And many more chapters to come."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/birthday-surprise/src/data/reasons.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reasonsILoveYou",
    ()=>reasonsILoveYou
]);
const reasonsILoveYou = [
    {
        id: "reason-1",
        number: "01",
        title: "Your Smile",
        description: "Your smile has a way of making even an ordinary day feel special. It's the first thing I look for when I see you.",
        imagePath: "/images/smile beauty.jpeg"
    },
    {
        id: "reason-2",
        number: "02",
        title: "Your Eyes",
        description: "There is something about your eyes that makes me want to keep looking. They hold so much warmth and kindness.",
        imagePath: "/images/cutie.jpeg"
    },
    {
        id: "reason-3",
        number: "03",
        title: "Your Voice",
        description: "Even a few words from you can make my day feel better. Your voice is my favorite sound in the world.",
        imagePath: "/images/my sweetheart.jpeg"
    },
    {
        id: "reason-4",
        number: "04",
        title: "Your Cute Little Ways",
        description: "The little things you do are some of the things I cherish most. The way you laugh, the way you pout, every little habit.",
        imagePath: "/images/cuteness overload.jpeg"
    },
    {
        id: "reason-5",
        number: "05",
        title: "Just Being You",
        description: "I don't love just one thing about you. I love you, exactly as you are. All of you.",
        imagePath: "/images/most beautifull girl.jpeg"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/birthday-surprise/src/data/site-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    // Personal Details
    names: {
        her: "Diya",
        him: "[Your Name]"
    },
    nicknames: {
        hers: [
            "Cutie",
            "Sweetie",
            "Kuchu Puchu"
        ],
        his: [
            "Baby",
            "Kuchu Puchu"
        ]
    },
    dates: {
        birthday: "October 10, 2026",
        timeline: "2023 - 2026"
    },
    // Scene One: Introduction
    intro: {
        line1: "Some people make the world beautiful just by being in it.",
        line2: "And for me, that person is you, Diya, my love.",
        line3: "Made with love, just for you.",
        buttonText: "Open Your Surprise ♡"
    },
    // Scene Two: Hero
    hero: {
        heading: "Happy Birthday, My Cutie! ❤️",
        subheading: "To the girl who makes my world brighter, my days happier, and my heart fuller.",
        caption: "Made with love, from me to you.",
        // Replace with the actual image path you add to the public folder
        imagePath: "/hero-placeholder.jpg"
    },
    // Media (Music, etc.)
    media: {
        favoriteSong: "/music/our-song.mp3",
        finalImage: "/final/our-best-photo.jpg"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/birthday-surprise/src/data/videos.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "videoMemories",
    ()=>videoMemories
]);
const videoMemories = [
    {
        id: "vid-1",
        title: "Our First Video",
        url: "/videos/our%20first%20video.mp4",
        caption: "The start of everything."
    },
    {
        id: "vid-2",
        title: "Her Eyes",
        url: "/videos/her%20eyes.mp4",
        caption: "Getting lost in those eyes."
    },
    {
        id: "vid-3",
        title: "Cute Smiles",
        url: "/videos/cute%20smiles%20(1).mp4",
        caption: "Your smile is my favorite."
    },
    {
        id: "vid-4",
        title: "Random Vlog",
        url: "/videos/random%20vlog.mp4",
        caption: "Just us being us."
    },
    {
        id: "vid-5",
        title: "Cute Vlog",
        url: "/videos/cute%20vlog.mp4",
        caption: "Our beautiful days."
    },
    {
        id: "vid-6",
        title: "Most Lovely Moments",
        url: "/videos/most%20lovely%20videos.mp4",
        caption: "Every moment is precious."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=birthday-surprise_src_0-h_akhydl5l4._.js.map