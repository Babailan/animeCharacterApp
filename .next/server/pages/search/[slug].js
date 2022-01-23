"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/search/[slug]";
exports.ids = ["pages/search/[slug]"];
exports.modules = {

/***/ "./src/pages/search/[slug].js":
/*!************************************!*\
  !*** ./src/pages/search/[slug].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Slug({ res  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: res.data.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"No result found\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Web development\\\\mangayawa\\\\src\\\\pages\\\\search\\\\[slug].js\",\n            lineNumber: 7,\n            columnNumber: 9\n        }, this) : res.data.map(({ about , images , name  }, index)=>{\n            if (about === null) {\n                about = \"No description available\";\n            }\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"character\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: images.jpg.image_url,\n                        className: \"imageCharac\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Web development\\\\mangayawa\\\\src\\\\pages\\\\search\\\\[slug].js\",\n                        lineNumber: 15,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Web development\\\\mangayawa\\\\src\\\\pages\\\\search\\\\[slug].js\",\n                        lineNumber: 16,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: about\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Web development\\\\mangayawa\\\\src\\\\pages\\\\search\\\\[slug].js\",\n                        lineNumber: 17,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Web development\\\\mangayawa\\\\src\\\\pages\\\\search\\\\[slug].js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Web development\\\\mangayawa\\\\src\\\\pages\\\\search\\\\[slug].js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slug);\nasync function getServerSideProps(context) {\n    const { slug  } = context.query;\n    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().request({\n        method: \"get\",\n        url: \"https://api.jikan.moe/v4/characters\",\n        params: {\n            q: slug\n        }\n    });\n    return {\n        props: {\n            res: res.data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2VhcmNoL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO1NBRWhCQyxJQUFJLENBQUMsQ0FBQyxDQUFDQyxHQUFHLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEIsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBVztrQkFDdkJGLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQyxNQUFNLEtBQUssQ0FBQywrRUFDbkJDLENBQUU7c0JBQUMsQ0FBZTs7Ozs7bUJBRW5CTCxHQUFHLENBQUNHLElBQUksQ0FBQ0csR0FBRyxFQUFFLENBQUMsQ0FBQ0MsS0FBSyxHQUFFQyxNQUFNLEdBQUVDLElBQUksRUFBQyxDQUFDLEVBQUVDLEtBQUssR0FBSyxDQUFDO1lBQ2hELEVBQUUsRUFBRUgsS0FBSyxLQUFLLElBQUksRUFBRSxDQUFDO2dCQUNuQkEsS0FBSyxHQUFHLENBQTBCO1lBQ3BDLENBQUM7WUFDRCxNQUFNLDZFQUNITixDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBVzs7Z0dBQ3ZCUyxDQUFHO3dCQUFDQyxHQUFHLEVBQUVKLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDQyxTQUFTO3dCQUFFWixTQUFTLEVBQUMsQ0FBYTs7Ozs7O2dHQUN0REcsQ0FBRTtrQ0FBRUksSUFBSTs7Ozs7O2dHQUNSTSxDQUFDO2tDQUFFUixLQUFLOzs7Ozs7O2VBSHFCRyxLQUFLOzs7OztRQU16QyxDQUFDOzs7Ozs7QUFJVCxDQUFDO0FBRUQsaUVBQWVYLElBQUksRUFBQztBQUViLGVBQWVpQixrQkFBa0IsQ0FBQ0MsT0FBTyxFQUFFLENBQUM7SUFDakQsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFDLENBQUMsR0FBR0QsT0FBTyxDQUFDRSxLQUFLO0lBQzlCLEtBQUssQ0FBQ25CLEdBQUcsR0FBRyxLQUFLLENBQUNGLG9EQUFhLENBQUMsQ0FBQztRQUMvQnVCLE1BQU0sRUFBRSxDQUFLO1FBQ2JDLEdBQUcsRUFBRSxDQUFxQztRQUMxQ0MsTUFBTSxFQUFFLENBQUM7WUFBQ0MsQ0FBQyxFQUFFTixJQUFJO1FBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QsTUFBTSxDQUFDLENBQUM7UUFDTk8sS0FBSyxFQUFFLENBQUM7WUFDTnpCLEdBQUcsRUFBRUEsR0FBRyxDQUFDRyxJQUFJO1FBQ2YsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFuZ2F5YXdhLy4vc3JjL3BhZ2VzL3NlYXJjaC9bc2x1Z10uanM/YjZhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiBTbHVnKHsgcmVzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAge3Jlcy5kYXRhLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICA8aDE+Tm8gcmVzdWx0IGZvdW5kPC9oMT5cclxuICAgICAgKSA6IChcclxuICAgICAgICByZXMuZGF0YS5tYXAoKHsgYWJvdXQsIGltYWdlcywgbmFtZSB9LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGFib3V0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGFib3V0ID0gXCJObyBkZXNjcmlwdGlvbiBhdmFpbGFibGVcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlcy5qcGcuaW1hZ2VfdXJsfSBjbGFzc05hbWU9XCJpbWFnZUNoYXJhY1wiIC8+XHJcbiAgICAgICAgICAgICAgPGgxPntuYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgPHA+e2Fib3V0fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbHVnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyBzbHVnIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnJlcXVlc3Qoe1xyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92NC9jaGFyYWN0ZXJzXCIsXHJcbiAgICBwYXJhbXM6IHsgcTogc2x1ZyB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICByZXM6IHJlcy5kYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIlNsdWciLCJyZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhIiwibGVuZ3RoIiwiaDEiLCJtYXAiLCJhYm91dCIsImltYWdlcyIsIm5hbWUiLCJpbmRleCIsImltZyIsInNyYyIsImpwZyIsImltYWdlX3VybCIsInAiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0Iiwic2x1ZyIsInF1ZXJ5IiwicmVxdWVzdCIsIm1ldGhvZCIsInVybCIsInBhcmFtcyIsInEiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/search/[slug].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/search/[slug].js"));
module.exports = __webpack_exports__;

})();