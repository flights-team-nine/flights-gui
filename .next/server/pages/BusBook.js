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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hFHt");


/***/ }),

/***/ "3PpT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "6gYj":
/***/ (function(module, exports) {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "Jro0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionDetails");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "VuiC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Accordion");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cVsR":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionSummary");

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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("VuiC");
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cVsR");
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Jro0");
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("UVoM");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("3PpT");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__);











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  heading: {
    //fontSize: theme.typography.pxToRem(15),
    //fontWeight: theme.typography.fontWeightRegular,
    color: 'white',
    backgroundColor: '#272838'
  }
}));

function BusBook() {
  const classes = useStyles();
  return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    class: "busbook",
    children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("header", {
      children: Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Bus Book"
      })
    }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_6___default.a, {
        expandIcon: Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default.a, {}),
        "aria-controls": "panel1a-content",
        id: "panel1a-header",
        style: {
          backgroundColor: '#272838'
        },
        children: Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
          className: classes.heading,
          children: "Bus 1"
        })
      }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_7___default.a, {
        children: Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
          children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            class: "row",
            children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              class: "column",
              style: {
                marginLeft: "5px"
              },
              children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                class: "dot",
                style: {
                  backgroundColor: "green",
                  marginLeft: "15px"
                }
              }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: "Green"
              })]
            }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              class: "column",
              children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                class: "dot",
                style: {
                  backgroundColor: "orange",
                  marginLeft: "20px"
                }
              }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: "Orange"
              })]
            }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              class: "column",
              children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                class: "dot",
                style: {
                  backgroundColor: "purple",
                  marginLeft: "15px"
                }
              }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: "Purple"
              })]
            })]
          }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            style: {
              fontWeight: "bold"
            },
            children: "Priority Information"
          }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            class: "white",
            children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              class: "column2",
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
              class: "column2",
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
            style: {
              fontWeight: "bold"
            },
            children: "Team Members"
          }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            class: "white",
            children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              class: "column2",
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
              class: "column2",
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
        })
      })]
    }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_6___default.a, {
        expandIcon: Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default.a, {}),
        "aria-controls": "panel1a-content",
        id: "panel1a-header",
        style: {
          backgroundColor: '#272838'
        },
        children: Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
          className: classes.heading,
          children: "Bus 2"
        })
      }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_7___default.a, {
        children: Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
          children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            class: "row",
            children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              class: "column",
              style: {
                marginLeft: "5px"
              },
              children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                class: "dot",
                style: {
                  backgroundColor: "gold",
                  marginLeft: "10px"
                }
              }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: "Gold"
              })]
            }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              class: "column",
              children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                class: "dot",
                style: {
                  backgroundColor: "silver",
                  marginLeft: "12px"
                }
              }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: "Silver"
              })]
            }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              class: "column",
              children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                class: "dot",
                style: {
                  backgroundColor: "teal",
                  marginLeft: "8px"
                }
              }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: "Teal"
              })]
            })]
          }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            style: {
              fontWeight: "bold"
            },
            children: "Priority Information"
          }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            class: "white",
            children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              class: "column2",
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
              class: "column2",
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
            style: {
              fontWeight: "bold"
            },
            children: "Team Members"
          }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            class: "white",
            children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              class: "column2",
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
              class: "column2",
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
        })
      })]
    }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_6___default.a, {
        expandIcon: Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default.a, {}),
        "aria-controls": "panel1a-content",
        id: "panel1a-header",
        style: {
          backgroundColor: '#272838'
        },
        children: Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
          className: classes.heading,
          children: "Bus 3"
        })
      }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_7___default.a, {
        children: Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
          children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            class: "row",
            children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              class: "column",
              style: {
                marginLeft: "5px"
              },
              children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                class: "dot",
                style: {
                  backgroundColor: "red",
                  marginLeft: "7px"
                }
              }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: "Red"
              })]
            }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              class: "column",
              children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                class: "dot",
                style: {
                  backgroundColor: "yellow",
                  marginLeft: "16px"
                }
              }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: "Yellow"
              })]
            }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              class: "column",
              children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                class: "dot",
                style: {
                  backgroundColor: "blue",
                  marginLeft: "8px"
                }
              }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: "Blue"
              })]
            })]
          }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            style: {
              fontWeight: "bold"
            },
            children: "Priority Information"
          }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            class: "white",
            children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              class: "column2",
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
              class: "column2",
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
            style: {
              fontWeight: "bold"
            },
            children: "Team Members"
          }), Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            class: "white",
            children: [Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              class: "column2",
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
              class: "column2",
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
        })
      })]
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (BusBook);

/***/ }),

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });