/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/2.png":
/*!*******************!*\
  !*** ./src/2.png ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAXCAYAAABj7u2bAAAFN0lEQVRIiU1XC5JjJwwUAo/3DLlFzpL7nyJVqR0bRPoDnnWNy/YD9Gm1Wkz76+9/dmbGjoi1Kya+7L0ia0aLCr8qWtsxsukzW8OeHWutmG/sqcKzHr0/9E6cbGvGfL1lc/cMbIDtwtYZHeu0AVMxYJ2/72vIKN4bzwpvuAuuTyzKMA4yYPyFlngWljoDD2UREzHlZlwLoScCT/qPHP3YawqotC+VTG8/+woLjIPPB9HYCrDLOZ0tGqdD7O480RHYSHvFIQYykWnheT6GjDdmA+fAMt4w/qAj7KQTJljb3zec6xNnCiZ7Z7LNgIQRU/SJDQsbPgewcREMlgmZLELclgItJLHmG4ZGDASUD5zDYWZZxVJ0nN04Zxj5XX+wW87ZPkkVlh8/VVasDcIcWpB7lWYh3N67DWB9qxSk0hR0G1xwvezgZk4UEueIWJI72wm2gw4T662bh6ppCJmFPbPeQKwhoFDxgR2h6yoTaVn4Ln4RMQZdNBgKhmV+jgeCafGN52uifO9SyZ99xBdQw0OVl1krWEJLPu4hiGYcXuDzBT/rUGHsVkKIG9omA9wRm6EjqBxPHHip05KcyaeIiNaM32900fs3U1TXkKTM9L/vKQ75lbLDyIR46KuC/xZyS3yaXEN3DLBRsO2zCLKYuHhe6hAEhVZmFB0BEUGafU/zKfoXwEV3sEwsRdEwkG3bXHFt9WrioZtHZA8jSH9NUC7Y4SZFH4btlIRb0HgiXidrmzWIwZTKaI3i+iA67DTxbGFfiXtXw/Ta+ZEPNspm4ArKZGay0qGrNYuf+2SjbnCL176IueaiN4XwGtrmFYlJ7CQ5QvRTsEN6+7mvOt0swen9szYulNISqu9u4sdSICku8VzJ2Wlfu5Y6J8pVJP808XsaicfzywoPG3Z+y5TCrLVUIu3wKY+AOqAdIiVTluZIzK2ybn0JkrrMmaSCEFH57CN+bzmfRK5uibeSuTokyQj7Y+BHi7VvoznMoT+gvO3d2wC/HZANX1IO8+KQUqVgfnjeHp5P3L/Y9vGDDPuF39upZR9Hk8NnhBZHx620HIsmaSf9OiI/UkQ9cGh/h0qL4Evw4TcEMVyuRhEpy4j5ElLA21m3y2SKYsoxbhWF8j8eOjApbuVJnifMGT/Eu2QX36TGlJ8JFNGR6wggEzsD89cTAa8Bu3UshYMGkupc11itnrpqlIXRZTjVIi2yfrptuTTUNZFQJO1/BNhOYzdDzomuMpJD5osm+W6HoyKPkhKyZVTyUJ2drdGxz31Ed5xwHalFtzXzjJU6asvIq6ec1w3+rEvr4OT1nnKmoPPwhzyLq9rrCKL9tsOnwVJ5U3ie8dC5PG2URAEhxNx0aHWm2t7s79D01aV9WtwOUlzUsD08IMLiqpAqXgVkNxkgPgeHp41xbpnIQgGl625GT2tixyBOe15kfGdKTXl101H9ulMdz2+S6ri1NREU0HbP1W3ayyFPS2yoc+UgPbFLlzNPmc81wlcOl8r8y49s7Hbfnnm+gTZdhfdqZ7SYO/2o+r4SQu3i9aPda0dx4p8pL9G5ARFSdwCn/Ue14wib7lK+j6+TpjjHoUQeLiu59ejoFINoZ7qo0qXBzESG50iqZbuUlKJcCoJtSr7wStokmF2i+a6zJn76xle6oFk8C5u+nk/fINvUtaIcg2WlScF87eXooc6pG6jUvDCpEo6ymsnK2j/6mVXbt0ZNIWmADerSFR6m4/EUAt+42r7w38a/8YoBNe79V3AYzRcCY9eRcw/MOf1jURpJRJxcLmja/+Wj28h39FiZAAAAAElFTkSuQmCC\");\n\n//# sourceURL=webpack:///./src/2.png?");

/***/ }),

/***/ "./src/lover.jpg":
/*!***********************!*\
  !*** ./src/lover.jpg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"34a66.jpg\");\n\n//# sourceURL=webpack:///./src/lover.jpg?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const a = __webpack_require__(/*! ./lover.jpg */ \"./src/lover.jpg\")\r\nconst b = __webpack_require__(/*! ./2.png */ \"./src/2.png\")\r\nconsole.log(1)\r\nconsole.log(1)\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });