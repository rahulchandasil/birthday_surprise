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
"use client";
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
                lineNumber: 29,
                columnNumber: 26
            }, this),
            introFinished && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$birthday$2d$surprise$2f$src$2f$components$2f$hero$2f$HeroScene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/birthday-surprise/src/app/page.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/birthday-surprise/src/app/page.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/birthday-surprise/src/app/page.tsx",
        lineNumber: 28,
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

//# sourceMappingURL=birthday-surprise_src_03fziexxoypfk._.js.map