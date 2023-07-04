"use strict";
exports.id = 567;
exports.ids = [567];
exports.modules = {

/***/ 8464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_d": () => (/* binding */ apiEndpoint),
/* harmony export */   "k7": () => (/* binding */ siteEndpoint),
/* harmony export */   "ns": () => (/* binding */ storageEndpoint)
/* harmony export */ });
/* unused harmony export apiClient */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

let mode = "production";
const apiEndpoint = mode == "development" ? "http://localhost:8000/api" : "http://dash.mutengabamboo.co.zw/api";
const siteEndpoint = mode == "development" ? "http://localhost:3000/" : "http://admin.mutengabamboo.co.zw/";
const storageEndpoint = mode == "development" ? "http://localhost:8000/storage" : "http://dash.mutengabamboo.co.zw/storage";
const apiClient = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: siteEndpoint,
    withCredentials: true,
    xsrfHeaderName: "XSRF-TOKEN"
});


/***/ }),

/***/ 567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Base)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/global.ts
var global = __webpack_require__(8464);
// EXTERNAL MODULE: ./src/components/appLogo.tsx
var appLogo = __webpack_require__(9522);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(2247);
;// CONCATENATED MODULE: ./src/components/footer.tsx







const pageLinks = [
    {
        link: "/",
        title: "Home"
    },
    {
        link: "/shop",
        title: "Shop"
    },
    {
        link: "/stories",
        title: "Stories"
    },
    {
        link: "/about",
        title: "About"
    },
    {
        link: "/contact",
        title: "Contact"
    },
    {
        link: "/terms",
        title: "Terms and Conditions"
    },
    {
        link: "/privacy",
        title: "Privacy Policy"
    }, 
];
let shopLinks = [
    {
        "link": "/shop",
        "title": "Charcoal"
    },
    {
        "link": "/shop",
        "title": "Seedlings"
    },
    {
        "link": "/shop",
        "title": "Paper"
    },
    {
        "link": "/shop",
        "title": "Shoots"
    },
    {
        "link": "/shop",
        "title": "Toothpicks"
    }
];
const useStyles = (0,core_.createStyles)((theme, { floating  })=>({
        root: {
            position: "relative"
        },
        label: {
            position: "absolute",
            zIndex: 2,
            top: (0,core_.rem)(7),
            left: theme.spacing.sm,
            pointerEvents: "none",
            color: floating ? theme.colorScheme === "dark" ? theme.white : theme.black : theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5],
            transition: "transform 150ms ease, color 150ms ease, font-size 150ms ease",
            transform: floating ? `translate(-${theme.spacing.sm}, ${(0,core_.rem)(-28)})` : "none",
            fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
            fontWeight: floating ? 500 : 400
        },
        required: {
            transition: "opacity 150ms ease",
            opacity: floating ? 1 : 0
        },
        input: {
            "&::placeholder": {
                transition: "color 150ms ease",
                color: !floating ? "transparent" : undefined
            }
        }
    }));
function Footer() {
    const { 0: focused , 1: setFocused  } = (0,external_react_.useState)(false);
    const { 0: value , 1: setValue  } = (0,external_react_.useState)("");
    const { classes  } = useStyles({
        floating: value.trim().length !== 0 || focused
    });
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        (external_axios_default()).defaults.withCredentials = true;
    });
    const handleSubscribe = ()=>{
        external_axios_default().get(global/* siteEndpoint */.k7 + "sanctum/csrf-cookie").then((res)=>{
            external_axios_default().post(global/* siteEndpoint */.k7 + "api/subscribe", {
                email: email
            }).then((res)=>{
                let respData = res.data;
                if (respData.status === "success") {
                // openSnackbar(respData.message)   
                // TODO: Snackbar here
                }
            });
        });
    };
    let currentYear = new Date().getFullYear();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "text-gray-600 bg-green-50 body-font",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container px-5 py-24 mx-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-wrap md:text-left text-center order-first",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "lg:w-1/4 md:w-1/2 w-full px-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "title-font font-medium text-gray-900 tracking-widest text-sm mb-3",
                                        children: "LINKS"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                        className: "list-none mb-10",
                                        children: pageLinks.map((pageLink, index)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: pageLink.link,
                                                    className: "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-gray-600 hover:text-gray-800",
                                                        children: pageLink.title
                                                    })
                                                })
                                            }, index);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "lg:w-1/4 md:w-1/2 w-full px-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "title-font font-medium text-gray-900 tracking-widest text-sm mb-3",
                                        children: "PRODUCTS"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                        className: "list-none mb-10",
                                        children: shopLinks.map((shopLink, index)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: shopLink.link,
                                                    className: "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-gray-600 hover:text-gray-800",
                                                        children: shopLink.title
                                                    })
                                                })
                                            }, index);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "lg:w-2/4 md:w-1/2 w-full px-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "title-font font-medium text-gray-900 tracking-widest text-sm mb-3",
                                        children: "SUBSCRIBE"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.TextInput, {
                                                    label: "Email",
                                                    placeholder: "Your email here",
                                                    required: true,
                                                    classNames: classes,
                                                    value: value,
                                                    onChange: (event)=>setValue(event.currentTarget.value),
                                                    onFocus: ()=>setFocused(true),
                                                    onBlur: ()=>setFocused(false),
                                                    mt: "md",
                                                    autoComplete: "nope"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                                className: "lg:mt-2 lg:ml-3 xl:mt-0 mt-3 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded",
                                                radius: "lg",
                                                onClick: handleSubscribe,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Subscribe"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "text-gray-500 text-sm mt-2 md:text-left text-center",
                                        children: [
                                            "Recieve offers, news and tips",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                className: "lg:block hidden"
                                            }),
                                            "in your inbox"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-gray-100",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "flex title-font font-medium items-center md:justify-start justify-center text-gray-900",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(appLogo/* default */.Z, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "ml-3 text-green-500 text-xl",
                                        children: "Mutenga Bamboo"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4",
                                children: [
                                    "\xa9 ",
                                    currentYear,
                                    " Mutenga Bamboo —",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://takucoder.dev",
                                        rel: "noopener noreferrer",
                                        className: "text-gray-600 ml-1",
                                        target: "_blank",
                                        children: "Takucoder"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "text-gray-500",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            fill: "currentColor",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            className: "w-5 h-5",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://twitter.com/Bamboopreneur",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "ml-3 text-gray-500",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            fill: "currentColor",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            className: "w-5 h-5",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "ml-3 text-gray-500",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            className: "w-5 h-5",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                    width: "20",
                                                    height: "20",
                                                    x: "2",
                                                    y: "2",
                                                    rx: "5",
                                                    ry: "5"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "ml-3 text-gray-500",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            fill: "currentColor",
                                            stroke: "currentColor",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "0",
                                            className: "w-5 h-5",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    stroke: "none",
                                                    d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                    cx: "4",
                                                    cy: "4",
                                                    r: "2",
                                                    stroke: "none"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/pages/base.tsx



function Base(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            props.children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}


/***/ })

};
;