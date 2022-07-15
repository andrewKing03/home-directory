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
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "(api)/./functions/exec.js":
/*!***************************!*\
  !*** ./functions/exec.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"execute\": () => (/* binding */ execute)\n/* harmony export */ });\nconst childProcess = __webpack_require__(/*! child_process */ \"child_process\");\n/**\n * @param {string} command A shell command to execute\n * @return {Promise<string>} A promise that resolve to the output of the shell command, or an error\n * @example const output = await execute(\"ls -alh\");\n */ function execute(command) {\n    /**\n   * @param {Function} resolve A function that resolves the promise\n   * @param {Function} reject A function that fails the promise\n   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise\n   */ return new Promise(function(resolve, reject) {\n        /**\n     * @param {Error} error An error triggered during the execution of the childProcess.exec command\n     * @param {string|Buffer} standardOutput The result of the shell command execution\n     * @param {string|Buffer} standardError The error resulting of the shell command execution\n     * @see https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback\n     */ childProcess.exec(command, function(error, standardOutput, standardError) {\n            if (error) {\n                reject();\n                return;\n            }\n            if (standardError) {\n                reject(standardError);\n                return;\n            }\n            resolve(standardOutput);\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9mdW5jdGlvbnMvZXhlYy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHQyxtQkFBTyxDQUFDLG9DQUFlLENBQUM7QUFFN0M7Ozs7R0FJRyxDQUNJLFNBQVNDLE9BQU8sQ0FBQ0MsT0FBTyxFQUFFO0lBQy9COzs7O0tBSUcsQ0FDSCxPQUFPLElBQUlDLE9BQU8sQ0FBQyxTQUFTQyxPQUFPLEVBQUVDLE1BQU0sRUFBRTtRQUMzQzs7Ozs7T0FLRyxDQUNITixZQUFZLENBQUNPLElBQUksQ0FBQ0osT0FBTyxFQUFFLFNBQVNLLEtBQUssRUFBRUMsY0FBYyxFQUFFQyxhQUFhLEVBQUU7WUFDeEUsSUFBSUYsS0FBSyxFQUFFO2dCQUNURixNQUFNLEVBQUUsQ0FBQztnQkFFVCxPQUFPO2FBQ1I7WUFFRCxJQUFJSSxhQUFhLEVBQUU7Z0JBQ2pCSixNQUFNLENBQUNJLGFBQWEsQ0FBQyxDQUFDO2dCQUV0QixPQUFPO2FBQ1I7WUFFREwsT0FBTyxDQUFDSSxjQUFjLENBQUMsQ0FBQztTQUN6QixDQUFDLENBQUM7S0FDSixDQUFDLENBQUM7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtZGlyZWN0b3J5Ly4vZnVuY3Rpb25zL2V4ZWMuanM/MWVkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjaGlsZFByb2Nlc3MgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tbWFuZCBBIHNoZWxsIGNvbW1hbmQgdG8gZXhlY3V0ZVxuICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBBIHByb21pc2UgdGhhdCByZXNvbHZlIHRvIHRoZSBvdXRwdXQgb2YgdGhlIHNoZWxsIGNvbW1hbmQsIG9yIGFuIGVycm9yXG4gKiBAZXhhbXBsZSBjb25zdCBvdXRwdXQgPSBhd2FpdCBleGVjdXRlKFwibHMgLWFsaFwiKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGUoY29tbWFuZCkge1xuICAvKipcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2VcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCBmYWlscyB0aGUgcHJvbWlzZVxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1Byb21pc2VcbiAgICovXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBBbiBlcnJvciB0cmlnZ2VyZWQgZHVyaW5nIHRoZSBleGVjdXRpb24gb2YgdGhlIGNoaWxkUHJvY2Vzcy5leGVjIGNvbW1hbmRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xCdWZmZXJ9IHN0YW5kYXJkT3V0cHV0IFRoZSByZXN1bHQgb2YgdGhlIHNoZWxsIGNvbW1hbmQgZXhlY3V0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd8QnVmZmVyfSBzdGFuZGFyZEVycm9yIFRoZSBlcnJvciByZXN1bHRpbmcgb2YgdGhlIHNoZWxsIGNvbW1hbmQgZXhlY3V0aW9uXG4gICAgICogQHNlZSBodHRwczovL25vZGVqcy5vcmcvYXBpL2NoaWxkX3Byb2Nlc3MuaHRtbCNjaGlsZF9wcm9jZXNzX2NoaWxkX3Byb2Nlc3NfZXhlY19jb21tYW5kX29wdGlvbnNfY2FsbGJhY2tcbiAgICAgKi9cbiAgICBjaGlsZFByb2Nlc3MuZXhlYyhjb21tYW5kLCBmdW5jdGlvbihlcnJvciwgc3RhbmRhcmRPdXRwdXQsIHN0YW5kYXJkRXJyb3IpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZWplY3QoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFuZGFyZEVycm9yKSB7XG4gICAgICAgIHJlamVjdChzdGFuZGFyZEVycm9yKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlc29sdmUoc3RhbmRhcmRPdXRwdXQpO1xuICAgIH0pO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjaGlsZFByb2Nlc3MiLCJyZXF1aXJlIiwiZXhlY3V0ZSIsImNvbW1hbmQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImV4ZWMiLCJlcnJvciIsInN0YW5kYXJkT3V0cHV0Iiwic3RhbmRhcmRFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./functions/exec.js\n");

/***/ }),

/***/ "(api)/./pages/api/hello.js":
/*!****************************!*\
  !*** ./pages/api/hello.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _functions_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions/exec */ \"(api)/./functions/exec.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n    try {\n        let result = await (0,_functions_exec__WEBPACK_IMPORTED_MODULE_0__.execute)(\"goal nodestatus\");\n        // let result = await execute('pwd')\n        console.log(result);\n        res.status(200).json(JSON.stringify(result));\n    } catch (error) {\n        console.log(error);\n        res.status(200).send();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGVsbG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2RUFBNkU7QUFDaEM7QUFDOUIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJO1FBQ0YsSUFBSUMsTUFBTSxHQUFHLE1BQU1KLHdEQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDN0Msb0NBQW9DO1FBQ3RDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDO1FBQ25CRCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sTUFBTSxDQUFDLENBQUM7S0FDM0MsQ0FBQyxPQUFPTyxLQUFLLEVBQUU7UUFDZE4sT0FBTyxDQUFDQyxHQUFHLENBQUNLLEtBQUssQ0FBQztRQUNsQlIsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNLLElBQUksRUFBRTtLQUN2QjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1kaXJlY3RvcnkvLi9wYWdlcy9hcGkvaGVsbG8uanM/MWY3NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHtleGVjdXRlfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZXhlYyc7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGV4ZWN1dGUoJ2dvYWwgbm9kZXN0YXR1cycpXG4gICAgLy8gbGV0IHJlc3VsdCA9IGF3YWl0IGV4ZWN1dGUoJ3B3ZCcpXG4gIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oSlNPTi5zdHJpbmdpZnkocmVzdWx0KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCgpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJleGVjdXRlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/hello.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/hello.js"));
module.exports = __webpack_exports__;

})();