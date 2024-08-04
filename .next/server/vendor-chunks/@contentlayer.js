"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@contentlayer";
exports.ids = ["vendor-chunks/@contentlayer"];
exports.modules = {

/***/ "(rsc)/./node_modules/@contentlayer/client/dist/guards.js":
/*!**********************************************************!*\
  !*** ./node_modules/@contentlayer/client/dist/guards.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   guards: () => (/* binding */ guards),\n/* harmony export */   isType: () => (/* binding */ isType)\n/* harmony export */ });\nfunction is(typeName, _) {\n    if (_) {\n        if (Array.isArray(typeName)) {\n            // TODO make type field name dynamic (probably will require to code-gen the guard function)\n            return typeName.some((typeName_)=>_?.type === typeName_);\n        } else {\n            return typeName === _?.type;\n        }\n    } else {\n        return (_)=>is(typeName, _);\n    }\n}\nconst isType = is;\nconst guards = {\n    is,\n    // isType,\n    // hasAllFields,\n    // allFields,\n    hasField\n};\nfunction hasField(_, property) {\n    return _.hasOwnProperty(property);\n} //# sourceMappingURL=guards.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQGNvbnRlbnRsYXllci9jbGllbnQvZGlzdC9ndWFyZHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxTQUFTQSxHQUFHQyxRQUFRLEVBQUVDLENBQUM7SUFDbkIsSUFBSUEsR0FBRztRQUNILElBQUlDLE1BQU1DLE9BQU8sQ0FBQ0gsV0FBVztZQUN6QiwyRkFBMkY7WUFDM0YsT0FBT0EsU0FBU0ksSUFBSSxDQUFDLENBQUNDLFlBQWNKLEdBQUdLLFNBQVNEO1FBQ3BELE9BQ0s7WUFDRCxPQUFPTCxhQUFhQyxHQUFHSztRQUMzQjtJQUNKLE9BQ0s7UUFDRCxPQUFPLENBQUNMLElBQU1GLEdBQUdDLFVBQVVDO0lBQy9CO0FBQ0o7QUFDTyxNQUFNTSxTQUFTUixHQUFHO0FBQ2xCLE1BQU1TLFNBQVM7SUFDbEJUO0lBQ0EsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2JVO0FBRUosRUFBRTtBQUNGLFNBQVNBLFNBQVNSLENBQUMsRUFBRVMsUUFBUTtJQUN6QixPQUFPVCxFQUFFVSxjQUFjLENBQUNEO0FBQzVCLEVBQ0Esa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWdnaWVzcG9ydHNhbmFseXRpY3MuY29tLy4vbm9kZV9tb2R1bGVzL0Bjb250ZW50bGF5ZXIvY2xpZW50L2Rpc3QvZ3VhcmRzLmpzPzk1MjMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaXModHlwZU5hbWUsIF8pIHtcbiAgICBpZiAoXykge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0eXBlTmFtZSkpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gbWFrZSB0eXBlIGZpZWxkIG5hbWUgZHluYW1pYyAocHJvYmFibHkgd2lsbCByZXF1aXJlIHRvIGNvZGUtZ2VuIHRoZSBndWFyZCBmdW5jdGlvbilcbiAgICAgICAgICAgIHJldHVybiB0eXBlTmFtZS5zb21lKCh0eXBlTmFtZV8pID0+IF8/LnR5cGUgPT09IHR5cGVOYW1lXyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZU5hbWUgPT09IF8/LnR5cGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoXykgPT4gaXModHlwZU5hbWUsIF8pO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBpc1R5cGUgPSBpcztcbmV4cG9ydCBjb25zdCBndWFyZHMgPSB7XG4gICAgaXMsXG4gICAgLy8gaXNUeXBlLFxuICAgIC8vIGhhc0FsbEZpZWxkcyxcbiAgICAvLyBhbGxGaWVsZHMsXG4gICAgaGFzRmllbGQsXG4gICAgLy8gd2l0aEZpZWxkLFxufTtcbmZ1bmN0aW9uIGhhc0ZpZWxkKF8sIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIF8uaGFzT3duUHJvcGVydHkocHJvcGVydHkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3VhcmRzLmpzLm1hcCJdLCJuYW1lcyI6WyJpcyIsInR5cGVOYW1lIiwiXyIsIkFycmF5IiwiaXNBcnJheSIsInNvbWUiLCJ0eXBlTmFtZV8iLCJ0eXBlIiwiaXNUeXBlIiwiZ3VhcmRzIiwiaGFzRmllbGQiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@contentlayer/client/dist/guards.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/@contentlayer/client/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@contentlayer/client/dist/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   guards: () => (/* reexport safe */ _guards_js__WEBPACK_IMPORTED_MODULE_0__.guards),\n/* harmony export */   isType: () => (/* reexport safe */ _guards_js__WEBPACK_IMPORTED_MODULE_0__.isType),\n/* harmony export */   pick: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.pick)\n/* harmony export */ });\n/* harmony import */ var _guards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards.js */ \"(rsc)/./node_modules/@contentlayer/client/dist/guards.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"(rsc)/./node_modules/@contentlayer/client/dist/utils.js\");\n\n //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQGNvbnRlbnRsYXllci9jbGllbnQvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QjtBQUNELENBQzNCLGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FnZ2llc3BvcnRzYW5hbHl0aWNzLmNvbS8uL25vZGVfbW9kdWxlcy9AY29udGVudGxheWVyL2NsaWVudC9kaXN0L2luZGV4LmpzPzA4ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9ndWFyZHMuanMnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscy5qcyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@contentlayer/client/dist/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/@contentlayer/client/dist/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/@contentlayer/client/dist/utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pick: () => (/* binding */ pick)\n/* harmony export */ });\nconst pick = (obj, keys)=>{\n    return keys.reduce((acc, key)=>{\n        acc[key] = obj[key];\n        return acc;\n    }, {});\n}; //# sourceMappingURL=utils.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQGNvbnRlbnRsYXllci9jbGllbnQvZGlzdC91dGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsT0FBTyxDQUFDQyxLQUFLQztJQUN0QixPQUFPQSxLQUFLQyxNQUFNLENBQUMsQ0FBQ0MsS0FBS0M7UUFDckJELEdBQUcsQ0FBQ0MsSUFBSSxHQUFHSixHQUFHLENBQUNJLElBQUk7UUFDbkIsT0FBT0Q7SUFDWCxHQUFHLENBQUM7QUFDUixFQUFFLENBQ0YsaUNBQWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWdnaWVzcG9ydHNhbmFseXRpY3MuY29tLy4vbm9kZV9tb2R1bGVzL0Bjb250ZW50bGF5ZXIvY2xpZW50L2Rpc3QvdXRpbHMuanM/MzkxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcGljayA9IChvYmosIGtleXMpID0+IHtcbiAgICByZXR1cm4ga2V5cy5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICAgIGFjY1trZXldID0gb2JqW2tleV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCJdLCJuYW1lcyI6WyJwaWNrIiwib2JqIiwia2V5cyIsInJlZHVjZSIsImFjYyIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@contentlayer/client/dist/utils.js\n");

/***/ })

};
;