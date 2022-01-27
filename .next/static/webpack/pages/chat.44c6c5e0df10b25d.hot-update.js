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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var novaMensagem = function novaMensagem(newMensage) {\n        var mensagem = {\n            id: chat.length + 1,\n            de: 'joao-vitor-dev-jr',\n            texto: newMensage\n        };\n        setChat(_toConsumableArray(chat).concat([\n            mensagem, \n        ]));\n        setMensage('');\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), mensage = ref[0], setMensage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), chat = ref1[0], setChat = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'center',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n                backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/blue-screen-of-death-in-windows-xp-1536x864.jpg)\",\n                backgroundRepeat: 'no-repeat',\n                backgroundSize: 'cover',\n                backgroundBlendMode: 'multiply',\n                color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    flexDirection: 'column',\n                    flex: 1,\n                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                    borderRadius: '5px',\n                    border: 'solid',\n                    borderColor: '#00C3DA',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                    height: '100%',\n                    maxWidth: '95%',\n                    maxHeight: '95vh',\n                    padding: '32px'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            position: 'relative',\n                            display: 'flex',\n                            flex: 1,\n                            height: '80%',\n                            border: 'solid',\n                            borderColor: '#00A0FA',\n                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                            flexDirection: 'column',\n                            borderRadius: '5px',\n                            padding: '16px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                                mensagens: chat\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                                as: \"form\",\n                                onSubmit: function(event) {\n                                    event.preventDefault();\n                                    novaMensagem('');\n                                },\n                                styleSheet: {\n                                    display: 'flex',\n                                    alignItems: 'center'\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                        value: mensage,\n                                        onChange: function(event) {\n                                            var valor = event.target.value;\n                                            setMensage(valor);\n                                        },\n                                        onKeyPress: function(event) {\n                                            if (event.key === 'Enter') {\n                                                event.preventDefault();\n                                                novaMensagem(mensage);\n                                            }\n                                        },\n                                        placeholder: \"Insira sua mensagem aqui...\",\n                                        type: \"textarea\",\n                                        styleSheet: {\n                                            width: '100%',\n                                            border: '0',\n                                            resize: 'none',\n                                            borderRadius: '5px',\n                                            padding: '6px 8px',\n                                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                            marginRight: '12px',\n                                            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        type: \"submit\",\n                                        styleSheet: {\n                                            color: '#ffff',\n                                            alignItems: 'center',\n                                            justifyContent: 'center'\n                                        },\n                                        colorVariant: \"neutral\",\n                                        label: \"Enviar\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                                        lineNumber: 116,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n};\n_s(ChatPage, \"/CBmIaiZPH8FVbq8GBNpEEz7dh4=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: '100%',\n                marginBottom: '16px',\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'space-between'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 140,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 143,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n            lineNumber: 139,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    var _this = this;\n    console.log(props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflowY: 'scroll',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: '16px'\n        },\n        children: props.mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: '5px',\n                    padding: '6px',\n                    marginBottom: '12px',\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: '8px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: '20px',\n                                    height: '20px',\n                                    borderRadius: '50%',\n                                    display: 'inline-block',\n                                    marginRight: '8px'\n                                },\n                                src: \"https://github.com/vanessametonini.png\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 190,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 200,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: '10px',\n                                    marginLeft: '8px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                                lineNumber: 203,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                        lineNumber: 185,\n                        columnNumber: 17\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n                lineNumber: 173,\n                columnNumber: 13\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\aluracord\\\\pages\\\\chat.js\",\n        lineNumber: 158,\n        columnNumber: 9\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FFQVAscURBQUc7d0JBQ0FvQixVQUFVLEVBQUUsQ0FBQzs0QkFDVDZDLFlBQVksRUFBRSxDQUFLO3dCQUN2QixDQUFDOzt3R0FFQTdELHVEQUFLO2dDQUNGZ0IsVUFBVSxFQUFFLENBQUM7b0NBQ1R3QyxLQUFLLEVBQUUsQ0FBTTtvQ0FDYnBCLE1BQU0sRUFBRSxDQUFNO29DQUNkSCxZQUFZLEVBQUUsQ0FBSztvQ0FDbkJoQixPQUFPLEVBQUUsQ0FBYztvQ0FDdkJ5QyxXQUFXLEVBQUUsQ0FBSztnQ0FDdEIsQ0FBQztnQ0FDRGEsR0FBRyxFQUFHLENBQXNDOzs7Ozs7d0dBRS9DekUsc0RBQUk7Z0NBQUNxRSxHQUFHLEVBQUMsQ0FBUTswQ0FDYjVELFFBQVEsQ0FBQ0ksRUFBRTs7Ozs7O3dHQUVmYixzREFBSTtnQ0FDRGtCLFVBQVUsRUFBRSxDQUFDO29DQUNUd0QsUUFBUSxFQUFFLENBQU07b0NBQ2hCQyxVQUFVLEVBQUUsQ0FBSztvQ0FDakI3QyxLQUFLLEVBQUV6QixvRUFBb0M7Z0NBQy9DLENBQUM7Z0NBQ0RnRSxHQUFHLEVBQUMsQ0FBTTswQ0FFUixHQUFHLENBQUNPLElBQUksR0FBR0Msa0JBQWtCOzs7Ozs7Ozs7Ozs7b0JBR3RDcEUsUUFBUSxDQUFDSyxLQUFLOztlQXhDVkwsUUFBUSxDQUFDQyxFQUFFOzs7OztRQTJDdEIsQ0FBQzs7Ozs7O0FBSVgsQ0FBQztNQWxFUWtDLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcz80Y2M5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBUZXh0RmllbGQsIEltYWdlIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0UGFnZSgpe1xyXG5cclxuICBjb25zdCBbbWVuc2FnZSwgc2V0TWVuc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NoYXQsIHNldENoYXRdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBmdW5jdGlvbiBub3ZhTWVuc2FnZW0obmV3TWVuc2FnZSl7XHJcbiAgICBjb25zdCBtZW5zYWdlbSA9IHtcclxuICAgICAgaWQ6IGNoYXQubGVuZ3RoICsgMSxcclxuICAgICAgZGU6ICdqb2FvLXZpdG9yLWRldi1qcicsXHJcbiAgICAgIHRleHRvOiBuZXdNZW5zYWdlLFxyXG4gICAgICAgXHJcbiAgICB9O1xyXG4gICAgc2V0Q2hhdChbXHJcbiAgICAgIC4uLmNoYXQsbWVuc2FnZW0sIFxyXG4gICAgICBcclxuICAgIF0pO1xyXG4gICAgc2V0TWVuc2FnZSgnJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC9ibHVlLXNjcmVlbi1vZi1kZWF0aC1pbi13aW5kb3dzLXhwLTE1MzZ4ODY0LmpwZylgLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnbXVsdGlwbHknLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzAwMCddXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSknLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnc29saWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzAwQzNEQScsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc5NSUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzk1dmgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczMnB4JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ3NvbGlkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDBBMEZBJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzYwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZUxpc3QgbWVuc2FnZW5zPXtjaGF0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKntjaGF0Lm1hcCgodmFsb3IpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3ZhbG9yLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsb3IuZGV9IDoge3ZhbG9yLnRleHRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfSovfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoZXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBub3ZhTWVuc2FnZW0oJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZW5zYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lbnNhZ2UodmFsb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhldmVudCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXZlbnQua2V5ID09PSAnRW50ZXInKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdmFNZW5zYWdlbShtZW5zYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBzdWEgbWVuc2FnZW0gYXF1aS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4IDhweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6JyNmZmZmJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yVmFyaWFudD0nbmV1dHJhbCdcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRW52aWFyJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC8+ICBcclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJveCBzdHlsZVNoZWV0PXt7IHdpZHRoOiAnMTAwJScsIG1hcmdpbkJvdHRvbTogJzE2cHgnLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19ID5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9J2hlYWRpbmc1Jz5cclxuICAgICAgICAgICAgICAgICAgICBDaGF0XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0ndGVydGlhcnknXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JWYXJpYW50PSduZXV0cmFsJ1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdMb2dvdXQnXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2VMaXN0KHByb3BzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcyk7ICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgICAgdGFnPVwidWxcIlxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcclxuICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwcm9wcy5tZW5zYWdlbnMubWFwKChtZW5zYWdlbSk9PntcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICBrZXk9e21lbnNhZ2VtLmlkfVxyXG4gICAgICAgICAgICAgICAgdGFnPVwibGlcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzhweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS92YW5lc3NhbWV0b25pbmkucG5nYH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IHRhZz1cInN0cm9uZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVuc2FnZW0uZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZz1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIHttZW5zYWdlbS50ZXh0b31cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICBcclxuICApXHJcbn0iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFwcENvbmZpZyIsIkNoYXRQYWdlIiwibm92YU1lbnNhZ2VtIiwibmV3TWVuc2FnZSIsIm1lbnNhZ2VtIiwiaWQiLCJjaGF0IiwibGVuZ3RoIiwiZGUiLCJ0ZXh0byIsInNldENoYXQiLCJzZXRNZW5zYWdlIiwibWVuc2FnZSIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImNvbG9yIiwibmV1dHJhbHMiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwiSGVhZGVyIiwicG9zaXRpb24iLCJNZXNzYWdlTGlzdCIsIm1lbnNhZ2VucyIsImFzIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJvbkNoYW5nZSIsInZhbG9yIiwidGFyZ2V0Iiwib25LZXlQcmVzcyIsImtleSIsInBsYWNlaG9sZGVyIiwidHlwZSIsIndpZHRoIiwicmVzaXplIiwibWFyZ2luUmlnaHQiLCJjb2xvclZhcmlhbnQiLCJsYWJlbCIsIm1hcmdpbkJvdHRvbSIsInZhcmlhbnQiLCJocmVmIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwidGFnIiwib3ZlcmZsb3dZIiwibWFwIiwiaG92ZXIiLCJzcmMiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});