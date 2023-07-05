"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(2247);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/appLogo.tsx
var appLogo = __webpack_require__(9522);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "@mantine/hooks"
const hooks_namespaceObject = require("@mantine/hooks");
;// CONCATENATED MODULE: external "@tabler/icons-react"
const icons_react_namespaceObject = require("@tabler/icons-react");
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./src/components/header.tsx
//import liraries








const useStyles = (0,core_.createStyles)((theme)=>({
        header: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%"
        },
        links: {
            [theme.fn.smallerThan("xs")]: {
                display: "none"
            }
        },
        burger: {
            [theme.fn.largerThan("xs")]: {
                display: "none"
            }
        },
        link: {
            display: "block",
            lineHeight: 1,
            padding: `${(0,core_.rem)(8)} ${(0,core_.rem)(12)}`,
            borderRadius: theme.radius.sm,
            textDecoration: "none",
            color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
            fontSize: theme.fontSizes.md,
            fontWeight: 500,
            "&:hover": {
                backgroundColor: theme.colors.green[1]
            }
        },
        linkActive: {
            "&, &:hover": {
                backgroundColor: theme.colors.green[2]
            }
        }
    }));
const linksList = [
    {
        link: "/",
        label: "Home"
    },
    {
        link: "/shop",
        label: "Shop"
    },
    {
        link: "/stories",
        label: "Stories"
    },
    {
        link: "/about",
        label: "About"
    },
    {
        link: "/contact",
        label: "Contact"
    },
    {
        link: "/celebrations",
        label: "World Bamboo Day"
    }, 
];
// create a component
const Header = ()=>{
    const router = (0,router_namespaceObject.useRouter)();
    const { classes , cx  } = useStyles();
    const { 0: active , 1: setActive  } = (0,external_react_.useState)("Home");
    const [opened, { toggle  }] = (0,hooks_namespaceObject.useDisclosure)(false);
    const links = linksList.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: cx(classes.link, {
                [classes.linkActive]: active === item.label
            }),
            // className="mr-5 hover:border-b-2 hover:text-green- border-green-500 px-3"
            href: item.link,
            onClick: (event)=>{
                event.preventDefault();
                router.push(item.link);
                setActive(item.label);
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: item.label
            })
        }, item.label));
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "Header bg-gray-50",
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: "text-gray-600 body-font",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        className: "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(appLogo/* default */.Z, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "ml-3 text-xl text-green-500",
                                children: "Mutenga Bamboo"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Group, {
                            spacing: 5,
                            className: classes.links,
                            children: links
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/contact",
                        className: "inline-flex items-center bg-green-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 hover:text-white rounded text-base mt-4 md:mt-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                variant: "light",
                                rightIcon: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_namespaceObject.IconArrowRight, {
                                    size: "1.2rem",
                                    stroke: 1.5
                                }),
                                className: "inline-flex items-center bg-green-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 hover:text-white rounded text-base mt-4 md:mt-0",
                                radius: "xl",
                                size: "md",
                                color: "dark",
                                styles: {
                                    root: {
                                        paddingRight: (0,core_.rem)(14),
                                        height: (0,core_.rem)(48)
                                    },
                                    rightIcon: {
                                        marginLeft: (0,core_.rem)(22)
                                    }
                                },
                                children: "Get In Touch"
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: ./src/pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.MantineProvider, {
            withGlobalStyles: true,
            withNormalizeCSS: true,
            theme: {
                /** Put your mantine theme override here */ colorScheme: "light"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2247:
/***/ ((module) => {

module.exports = require("@mantine/core");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,522], () => (__webpack_exec__(1549)));
module.exports = __webpack_exports__;

})();