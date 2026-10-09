(()=>{"use strict";module.exports = [
"[project]/birthday-surprise/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$intro$2f$IntroScene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/components/intro/IntroScene.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$hero$2f$HeroScene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/components/hero/HeroScene.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$story$2f$OurStoryScene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/components/story/OurStoryScene.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$reasons$2f$ReasonsScene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Home() {
    const [introFinished, setIntroFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Initialize lenis globally for smooth scrolling
        const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return ()=>{
            lenis.destroy();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-midnight text-warm-ivory",
        children: [
            !introFinished && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$intro$2f$IntroScene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onComplete: ()=>setIntroFinished(true)
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/app/page.tsx",
                lineNumber: 31,
                columnNumber: 26
            }, this),
            introFinished && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$hero$2f$HeroScene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/app/page.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$story$2f$OurStoryScene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/app/page.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$reasons$2f$ReasonsScene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/app/page.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/app/page.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/birthday-surprise/src/app/page.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/birthday-surprise/src/components/hero/HeroScene.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/data/site-config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function HeroScene() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const subRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const captionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            delay: 0.5
        });
        // Ensure initial states
        __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set([
            headingRef.current,
            subRef.current,
            captionRef.current
        ], {
            opacity: 0,
            y: 20
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(imageRef.current, {
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
        return ()=>{
            tl.kill();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden bg-midnight px-6 py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 md:pl-[10%] mb-12 md:mb-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        ref: headingRef,
                        className: "text-4xl md:text-6xl lg:text-7xl font-serif text-warm-ivory leading-tight mb-6",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].hero.heading
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: subRef,
                        className: "text-lg md:text-xl text-warm-ivory/80 font-light max-w-md leading-relaxed mb-10",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].hero.subheading
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: captionRef,
                        className: "text-sm uppercase tracking-[0.2em] text-muted-gold font-serif italic",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].hero.caption
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full md:w-1/2 h-[50vh] md:h-[80vh] flex items-center justify-center px-4 md:pr-[10%]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: imageRef,
                    className: "relative w-full h-full max-w-lg rounded-2xl overflow-hidden border border-warm-ivory/10 shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-tr from-deep-burgundy/30 to-midnight mix-blend-overlay z-10"
                        }, void 0, false, {
                            fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full bg-[#1a1a24] flex items-center justify-center text-warm-ivory/30 text-sm tracking-widest border border-dashed border-warm-ivory/20",
                            children: "[ HERO MEDIA PLACEHOLDER ]"
                        }, void 0, false, {
                            fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/birthday-surprise/src/components/hero/HeroScene.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/birthday-surprise/src/components/intro/IntroScene.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IntroScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/data/site-config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function IntroScene({ onComplete }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const text1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const text2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const text3Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const btnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
        tl.to(text1Ref.current, {
            opacity: 1,
            duration: 2,
            ease: "power2.inOut"
        }).to(text1Ref.current, {
            opacity: 0,
            duration: 1.5,
            ease: "power2.inOut",
            delay: 1
        }).to(text2Ref.current, {
            opacity: 1,
            duration: 2,
            ease: "power2.inOut"
        }).to(text2Ref.current, {
            opacity: 0,
            duration: 1.5,
            ease: "power2.inOut",
            delay: 1
        }).to(text3Ref.current, {
            opacity: 1,
            duration: 2,
            ease: "power2.inOut"
        }).to(btnRef.current, {
            opacity: 1,
            duration: 1.5,
            ease: "power2.inOut"
        }, "-=0.5");
        return ()=>{
            tl.kill();
        };
    }, []);
    const handleFinish = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(containerRef.current, {
            opacity: 0,
            duration: 1,
            onComplete: onComplete
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "fixed inset-0 z-50 flex items-center justify-center bg-midnight text-warm-ivory flex-col text-center px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/intro/IntroScene.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center justify-center min-h-[50vh]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        ref: text1Ref,
                        className: "opacity-0 absolute text-2xl md:text-4xl font-light tracking-wide",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].intro.line1
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/intro/IntroScene.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        ref: text2Ref,
                        className: "opacity-0 absolute text-2xl md:text-4xl font-light tracking-wide text-dusty-rose",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].intro.line2
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/intro/IntroScene.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        ref: text3Ref,
                        className: "opacity-0 absolute text-lg md:text-2xl font-serif italic text-muted-gold",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].intro.line3
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/intro/IntroScene.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/components/intro/IntroScene.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: btnRef,
                onClick: handleFinish,
                className: "opacity-0 absolute bottom-20 mt-12 px-8 py-3 border border-warm-ivory/30 rounded-full hover:bg-warm-ivory/10 transition-colors uppercase tracking-widest text-sm",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].intro.buttonText
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/intro/IntroScene.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/birthday-surprise/src/components/intro/IntroScene.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReasonsScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$reasons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/data/reasons.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function ReasonsScene() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const itemsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mm = __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
        mm.add("(min-width: 768px)", ()=>{
            // Desktop: Staggered reveal as you scroll down
            itemsRef.current.forEach((item, index)=>{
                if (!item) return;
                __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(item, {
                    opacity: 0,
                    y: 50
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%"
                    }
                });
            });
        });
        mm.add("(max-width: 767px)", ()=>{
            // Mobile: simpler fade in
            itemsRef.current.forEach((item)=>{
                if (!item) return;
                __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(item, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%"
                    }
                });
            });
        });
        return ()=>{
            mm.revert(); // Reverts media queries and scroll triggers
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "py-32 px-6 bg-warm-ivory text-deep-burgundy",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto text-center mb-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-6xl font-serif leading-tight",
                    children: [
                        "Little Things",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                            lineNumber: 66,
                            columnNumber: 24
                        }, this),
                        "I Love About You"
                    ]
                }, void 0, true, {
                    fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto flex flex-col gap-16 md:gap-24",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$reasons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reasonsILoveYou"].map((reason, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>{
                            itemsRef.current[index] = el;
                        },
                        className: `flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-1/2 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-gold font-serif text-5xl md:text-7xl opacity-50 mb-4",
                                        children: reason.number
                                    }, void 0, false, {
                                        fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl md:text-4xl font-serif mb-4",
                                        children: reason.title
                                    }, void 0, false, {
                                        fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-deep-burgundy/70 text-lg leading-relaxed font-light",
                                        children: reason.description
                                    }, void 0, false, {
                                        fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-1/2 flex justify-center",
                                children: reason.imagePath ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full max-w-sm aspect-square md:aspect-[3/4] overflow-hidden rounded-sm border border-deep-burgundy/10 shadow-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-deep-burgundy/5 mix-blend-overlay z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                            lineNumber: 94,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full bg-[#e8ddd0] flex items-center justify-center text-deep-burgundy/30 text-sm tracking-widest border border-dashed border-deep-burgundy/20",
                                            children: [
                                                "[ ",
                                                reason.title.toUpperCase(),
                                                " MEDIA ]"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                            lineNumber: 95,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                    lineNumber: 93,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full max-w-sm aspect-video md:aspect-[3/4] flex items-center justify-center opacity-30",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-[1px] bg-deep-burgundy/30"
                                    }, void 0, false, {
                                        fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                        lineNumber: 101,
                                        columnNumber: 20
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        ]
                    }, reason.id, true, {
                        fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/birthday-surprise/src/components/reasons/ReasonsScene.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/birthday-surprise/src/components/story/OurStoryScene.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OurStoryScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$memories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/birthday-surprise/src/data/memories.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function OurStoryScene() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chapterRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Header reveal
        __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(headerRef.current, {
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
        chapterRefs.current.forEach((chapter, index)=>{
            if (!chapter) return;
            const image = chapter.querySelector('.story-image');
            const content = chapter.querySelector('.story-content');
            const isEven = index % 2 === 0;
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    trigger: chapter,
                    start: "top 75%"
                }
            });
            tl.fromTo(image, {
                opacity: 0,
                x: isEven ? -50 : 50
            }, {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: "power3.out"
            }).fromTo(content, {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.8");
        });
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach((t)=>t.kill());
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "py-32 px-6 bg-midnight text-warm-ivory relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: headerRef,
                className: "text-center mb-32 max-w-3xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm tracking-[0.3em] text-muted-gold uppercase mb-4",
                        children: "Our Little Universe"
                    }, void 0, false, {
                        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-3xl md:text-5xl font-serif leading-tight",
                        children: [
                            "Every year, another chapter.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                lineNumber: 69,
                                columnNumber: 39
                            }, this),
                            "Every memory, another reason to smile."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto flex flex-col gap-32 md:gap-48",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$data$2f$memories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storyMemories"].map((memory, index)=>{
                    const isEven = index % 2 === 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>{
                            chapterRefs.current[index] = el;
                        },
                        className: `flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-1/2 story-image",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden border border-warm-ivory/10 shadow-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-tr from-deep-burgundy/20 to-midnight mix-blend-overlay z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full bg-[#1a1a24] flex items-center justify-center text-warm-ivory/30 text-sm tracking-widest border border-dashed border-warm-ivory/20",
                                            children: [
                                                "[ MEDIA: ",
                                                memory.year,
                                                " ]"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this),
                                        memory.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-4 left-4 z-20 bg-midnight/60 backdrop-blur-sm px-4 py-2 rounded-full text-xs tracking-wider border border-warm-ivory/10",
                                            children: [
                                                "📍 ",
                                                memory.location
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                            lineNumber: 91,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-1/2 flex flex-col story-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-dusty-rose text-6xl md:text-8xl font-serif opacity-30 -mb-6 md:-mb-8 z-0",
                                        children: memory.year
                                    }, void 0, false, {
                                        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-3xl md:text-4xl font-serif mb-6 z-10 text-warm-ivory",
                                        children: memory.chapterTitle
                                    }, void 0, false, {
                                        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-warm-ivory/70 text-lg leading-relaxed font-light mb-8 z-10",
                                        children: memory.description
                                    }, void 0, false, {
                                        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this),
                                    memory.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-serif italic text-muted-gold border-l-2 border-muted-gold/30 pl-4",
                                        children: memory.caption
                                    }, void 0, false, {
                                        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                        lineNumber: 110,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this)
                        ]
                    }, memory.id, true, {
                        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                        lineNumber: 78,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/birthday-surprise/src/components/story/OurStoryScene.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}),
"[project]/birthday-surprise/src/data/memories.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        imagePath: "/story/placeholder-2023.jpg",
        location: "Where it all started",
        caption: "Our very first chapter together."
    },
    {
        id: "chapter-2",
        chapterTitle: "Growing Together",
        year: "2024",
        description: "This was the year we truly learned about each other. Through the late-night calls, the spontaneous plans, and all the little arguments we immediately forgot about, we built something beautiful.",
        imagePath: "/story/placeholder-2024.jpg",
        location: "Our favorite spot",
        caption: "Learning to love every part of you."
    },
    {
        id: "chapter-3",
        chapterTitle: "Little Moments, Big Memories",
        year: "2025",
        description: "Sometimes the best memories aren't the grand gestures, but the quiet moments. Watching movies, sharing food, and simply being next to each other.",
        imagePath: "/story/placeholder-2025.jpg",
        caption: "Just us, doing nothing, meaning everything."
    },
    {
        id: "chapter-4",
        chapterTitle: "Still My Favorite Person",
        year: "2026",
        description: "After all this time, looking at you still gives me the same feeling as day one. You are my Cutie, my sweetie, and the person I want to keep making memories with.",
        imagePath: "/story/placeholder-2026.jpg",
        caption: "And many more chapters to come."
    }
];
}),
"[project]/birthday-surprise/src/data/reasons.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        imagePath: "/reasons/placeholder-smile.jpg"
    },
    {
        id: "reason-2",
        number: "02",
        title: "Your Eyes",
        description: "There is something about your eyes that makes me want to keep looking. They hold so much warmth and kindness.",
        imagePath: "/reasons/placeholder-eyes.jpg"
    },
    {
        id: "reason-3",
        number: "03",
        title: "Your Voice",
        description: "Even a few words from you can make my day feel better. Your voice is my favorite sound in the world."
    },
    {
        id: "reason-4",
        number: "04",
        title: "Your Cute Little Ways",
        description: "The little things you do are some of the things I cherish most. The way you laugh, the way you pout, every little habit."
    },
    {
        id: "reason-5",
        number: "05",
        title: "Just Being You",
        description: "I don't love just one thing about you. I love you, exactly as you are. All of you."
    }
];
}),
"[project]/birthday-surprise/src/data/site-config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        line2: "And for me, that person is you, Diya.",
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
}),
];})()

//# sourceMappingURL=birthday-surprise_src_18jkr2-0h4ko_._.js.map