"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), mensagem = ref[0], setMensagem = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'center',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n                backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/blue-screen-of-death-in-windows-xp-1536x864.jpg)\",\n                backgroundRepeat: 'no-repeat',\n                backgroundSize: 'cover',\n                backgroundBlendMode: 'multiply',\n                color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    flexDirection: 'column',\n                    flex: 1,\n                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                    borderRadius: '5px',\n                    border: 'solid',\n                    borderColor: '#00C3DA',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                    height: '100%',\n                    maxWidth: '95%',\n                    maxHeight: '95vh',\n                    padding: '32px'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            position: 'relative',\n                            display: 'flex',\n                            flex: 1,\n                            height: '80%',\n                            border: 'solid',\n                            borderColor: '#00A0FA',\n                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                            flexDirection: 'column',\n                            borderRadius: '5px',\n                            padding: '16px'\n                        },\n                        children: [\n                            \"ta mudando: \",\n                            mensagem,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                                as: \"form\",\n                                styleSheet: {\n                                    display: 'flex',\n                                    alignItems: 'center'\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                        value: mensagem,\n                                        onChange: function(event) {\n                                            var valor = event.target.value;\n                                            setMensagem(valor);\n                                        },\n                                        onKeyPress: function(event) {\n                                            if (event == 'Enter') console.log(event);\n                                        },\n                                        placeholder: \"Insira sua mensagem aqui...\",\n                                        type: \"textarea\",\n                                        styleSheet: {\n                                            width: '100%',\n                                            border: '0',\n                                            resize: 'none',\n                                            borderRadius: '5px',\n                                            padding: '6px 8px',\n                                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                            marginRight: '12px',\n                                            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        type: \"submit\",\n                                        styleSheet: {\n                                            color: '#ffff',\n                                            alignItems: 'center',\n                                            justifyContent: 'center'\n                                        },\n                                        colorVariant: \"neutral\",\n                                        label: \"Enviar\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n};\n_s(ChatPage, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: '100%',\n                marginBottom: '16px',\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'space-between'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 112,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 115,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n            lineNumber: 111,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    console.log('MessageList', props);\n    var mensagem;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: 'scroll',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: '16px'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n            tag: \"li\",\n            styleSheet: {\n                borderRadius: '5px',\n                padding: '6px',\n                marginBottom: '12px',\n                hover: {\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                }\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        marginBottom: '8px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                            styleSheet: {\n                                width: '20px',\n                                height: '20px',\n                                borderRadius: '50%',\n                                display: 'inline-block',\n                                marginRight: '8px'\n                            },\n                            src: \"https://github.com/vanessametonini.png\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                            lineNumber: 160,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            tag: \"strong\",\n                            children: mensagem.de\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                            lineNumber: 170,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            styleSheet: {\n                                fontSize: '10px',\n                                marginLeft: '8px',\n                                color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                            },\n                            tag: \"span\",\n                            children: new Date().toLocaleDateString()\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                            lineNumber: 173,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 155,\n                    columnNumber: 17\n                }, this),\n                mensagem.texto\n            ]\n        }, mensagem.id, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n            lineNumber: 143,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n        lineNumber: 131,\n        columnNumber: 9\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcz80Y2M5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBUZXh0RmllbGQsIEltYWdlIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0UGFnZSgpe1xyXG5cclxuICBjb25zdCBbbWVuc2FnZW0sIHNldE1lbnNhZ2VtXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblxyXG4gIHJldHVybihcclxuICAgIDw+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L2JsdWUtc2NyZWVuLW9mLWRlYXRoLWluLXdpbmRvd3MteHAtMTUzNng4NjQuanBnKWAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JywgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsIGJhY2tncm91bmRCbGVuZE1vZGU6ICdtdWx0aXBseScsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1snMDAwJ11cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDBDM0RBJyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzk1JScsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnOTV2aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzMycHgnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnc29saWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMwMEEwRkEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNjAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHRhIG11ZGFuZG86IHttZW5zYWdlbX1cclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZUxpc3QgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lbnNhZ2VtKHZhbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXsoZXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGV2ZW50ID09ICdFbnRlcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHggOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjonI2ZmZmYnLCBcclxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLCBcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JWYXJpYW50PSduZXV0cmFsJ1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFbnZpYXInXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8Lz4gIFxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Qm94IHN0eWxlU2hlZXQ9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luQm90dG9tOiAnMTZweCcsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0gPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD0naGVhZGluZzUnPlxyXG4gICAgICAgICAgICAgICAgICAgIENoYXRcclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSd0ZXJ0aWFyeSdcclxuICAgICAgICAgICAgICAgICAgICBjb2xvclZhcmlhbnQ9J25ldXRyYWwnXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0xvZ291dCdcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZUxpc3QocHJvcHMpIHtcclxuICAgIGNvbnNvbGUubG9nKCdNZXNzYWdlTGlzdCcsIHByb3BzKTtcclxuICAgIGNvbnN0IG1lbnNhZ2VtO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHRhZz1cInVsXCJcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcclxuICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICBrZXk9e21lbnNhZ2VtLmlkfVxyXG4gICAgICAgICAgICAgICAgdGFnPVwibGlcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzhweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS92YW5lc3NhbWV0b25pbmkucG5nYH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IHRhZz1cInN0cm9uZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVuc2FnZW0uZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZz1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIHttZW5zYWdlbS50ZXh0b31cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgXHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJhcHBDb25maWciLCJDaGF0UGFnZSIsIm1lbnNhZ2VtIiwic2V0TWVuc2FnZW0iLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJjb2xvciIsIm5ldXRyYWxzIiwiZmxleERpcmVjdGlvbiIsImZsZXgiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsIkhlYWRlciIsInBvc2l0aW9uIiwiTWVzc2FnZUxpc3QiLCJhcyIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInZhbG9yIiwidGFyZ2V0Iiwib25LZXlQcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ3aWR0aCIsInJlc2l6ZSIsIm1hcmdpblJpZ2h0IiwiY29sb3JWYXJpYW50IiwibGFiZWwiLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiaHJlZiIsInByb3BzIiwidGFnIiwib3ZlcmZsb3ciLCJob3ZlciIsInNyYyIsImRlIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInRleHRvIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});