module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3moH");


/***/ }),

/***/ "3moH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6gYj");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oncg");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LandingPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wsTC");
/* harmony import */ var _Login_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("kLz0");
/* harmony import */ var _BusBook_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("hFHt");








class App extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  /*const history = useHistory();
  	const routeChange = () =>{ 
  	let path = `Login`;
      history.push(path);
  }*/
  render() {
    return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
      children: Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
        children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          exact: true,
          path: "/",
          component: _LandingPage_js__WEBPACK_IMPORTED_MODULE_3__["default"]
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          exact: true,
          path: "/login",
          component: _Login_js__WEBPACK_IMPORTED_MODULE_4__["default"]
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          exact: true,
          path: "/busbook",
          component: _BusBook_js__WEBPACK_IMPORTED_MODULE_5__["default"]
        })]
      })
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "6gYj":
/***/ (function(module, exports) {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hFHt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6gYj");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oncg");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);





function BusBook() {
  return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    class: "busbook",
    children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("header", {
      children: Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Bus Book"
      })
    }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
      children: "Bus 1"
    }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
      children: "Bus 2"
    }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
      children: "Bus 3"
    }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      class: "row",
      children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        class: "column",
        style: {
          marginLeft: "15px"
        },
        children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          class: "dot",
          style: {
            backgroundColor: "red"
          }
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "Red"
        })]
      }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        class: "column",
        children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          class: "dot",
          style: {
            backgroundColor: "yellow"
          }
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "Yellow"
        })]
      }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        class: "column",
        children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          class: "dot",
          style: {
            backgroundColor: "blue"
          }
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "Blue"
        })]
      })]
    }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
      children: "Priority Information"
    }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      class: "white",
      children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        class: "column",
        children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "Driver"
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "Destination"
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "Arrival"
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "Departure"
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "Chairs"
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "Open Seats"
        })]
      }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        class: "column",
        children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "John Doe"
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "Lincoln Park"
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "4:30PM"
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "4:45PM"
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "5"
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "0"
        })]
      })]
    }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
      children: "Team Members"
    }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      class: "white",
      children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        class: "column",
        children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          style: {
            marginBottom: "0px"
          },
          children: "Name"
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "Role"
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          style: {
            marginBottom: "0px"
          },
          children: "Name"
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "Role"
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          style: {
            marginBottom: "0px"
          },
          children: "Name"
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "Role"
        })]
      }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        class: "column",
        children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          style: {
            marginBottom: "0px"
          },
          children: "John Doe"
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "Team Role"
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          style: {
            marginBottom: "0px"
          },
          children: "Jane Doe"
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "Team Role"
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          style: {
            marginBottom: "0px"
          },
          children: "John Doe"
        }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "Team Role"
        })]
      })]
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (BusBook);

/***/ }),

/***/ "kLz0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6gYj");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oncg");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);





const user = {
  username: "username",
  password: "password"
};

function Login() {
  return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    class: "login",
    children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
      class: "",
      children: "HF"
    }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
      children: "Rochester"
    }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("form", {
      action: "post",
      children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
        type: "text",
        placeholder: "Username",
        name: "username",
        required: true
      }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
        type: "password",
        placeholder: "Password",
        name: "password",
        required: true
      }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
        type: "checkbox",
        name: "rememberme",
        id: "rememberme"
      }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
        children: "Rememer Me"
      }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/BusBook",
        children: Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          color: "primary",
          children: "Login"
        })
      })]
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "wsTC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6gYj");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oncg");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);





const LandingPage = () => {
  /*const history = useHistory();
  	const routeChange = () =>{ 
  	let path = `Login`;
      history.push(path);
  }*/
  return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    class: "landingpage",
    children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
      class: "",
      children: "HF"
    }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
      children: "Rochester"
    }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
      children: "Mission 66"
    }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/Login",
      class: "btn btn-primary",
      children: "Go"
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

/***/ })

/******/ });