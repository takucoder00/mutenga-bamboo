"use strict";
(() => {
var exports = {};
exports.id = 368;
exports.ids = [368,698];
exports.modules = {

/***/ 4485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CustomPageTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function CustomPageTitle({ title  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center",
        children: title
    });
}


/***/ }),

/***/ 5769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Stories),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/pages/base.tsx + 1 modules
var base = __webpack_require__(567);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(2247);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/stories/storyCard.tsx



const useStyles = (0,core_.createStyles)((theme)=>({
        card: {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
        },
        section: {
            borderBottom: `${(0,core_.rem)(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
            paddingLeft: theme.spacing.md,
            paddingRight: theme.spacing.md,
            paddingBottom: theme.spacing.md
        },
        like: {
            color: theme.colors.red[6]
        },
        label: {
            textTransform: "uppercase",
            fontSize: theme.fontSizes.xs,
            fontWeight: 700
        }
    }));
function StoryCard({ id , slug , image , title  }) {
    const { classes , theme  } = useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/stories/${slug}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
            withBorder: true,
            radius: "md",
            p: "md",
            className: classes.card,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Card.Section, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Image, {
                        src: image,
                        alt: title,
                        height: 180
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Card.Section, {
                    className: classes.section,
                    mt: "md",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Group, {
                        position: "apart",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Title, {
                            order: 4,
                            children: title
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Group, {
                    mt: "xs",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                        variant: "subtle",
                        className: "w-full lg:mt-2 lg:ml-3 xl:mt-0 mt-3 text-green-500 border-0 py-2 px-6 focus:outline-none hover:text-green-600 rounded",
                        radius: "lg",
                        children: "Read More..."
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/components/general/CustomPageTitle.tsx
var CustomPageTitle = __webpack_require__(4485);
// EXTERNAL MODULE: ./src/global.ts
var global = __webpack_require__(8464);
;// CONCATENATED MODULE: ./src/components/stories/MutengaStories.tsx





function MutengaStories({ posts  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-gray-50",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: " px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(CustomPageTitle/* default */.Z, {
                            title: "Stories"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-base text-gray-700 md:text-lg",
                            children: "Read our stories"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "grid max-w-screen-lg gap-8 lg:grid-cols-4 sm:mx-auto",
                    children: posts && posts.map((post)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(StoryCard, {
                            id: post.id,
                            slug: post.slug,
                            image: global/* storageEndpoint */.ns + "/" + post.image,
                            title: post.title
                        });
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/pages/stories/index.tsx





function Stories(props) {
    const { posts  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(base["default"], {
        className: "Stories",
        children: /*#__PURE__*/ jsx_runtime_.jsx(MutengaStories, {
            posts: posts
        })
    });
}
async function getStaticProps({ params  }) {
    const res = await fetch(`${global/* apiEndpoint */._d}/posts`);
    const posts = await res.json();
    return {
        props: {
            posts: posts.data
        }
    };
}


/***/ }),

/***/ 2247:
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,522,567], () => (__webpack_exec__(5769)));
module.exports = __webpack_exports__;

})();