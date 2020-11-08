module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/tickets/edit/[ticketId].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./hooks/use-request.js":
/*!******************************!*\
  !*** ./hooks/use-request.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/mern/ticketing-microservices/view/hooks/use-request.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst useRequest = ({\n  url,\n  method,\n  body,\n  onSuccess\n}) => {\n  const {\n    0: errors,\n    1: setErrors\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null);\n\n  const doRequest = async (props = {}) => {\n    try {\n      setErrors(null);\n      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a[method](url, _objectSpread(_objectSpread({}, body), props), {\n        withCredentials: true,\n        credentials: 'include'\n      });\n\n      if (onSuccess) {\n        onSuccess(response.data);\n      }\n\n      return response.data;\n    } catch (err) {\n      setErrors( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"alert alert-danger\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n          children: \"Oops...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n          className: \"my-0\",\n          children: err.response.data.errors.map(err => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: err.message\n          }, err.message, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 15\n          }, undefined))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, undefined));\n    }\n  };\n\n  return {\n    doRequest,\n    errors\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequest);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2UtcmVxdWVzdC5qcz9hOThjIl0sIm5hbWVzIjpbInVzZVJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJib2R5Iiwib25TdWNjZXNzIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidXNlU3RhdGUiLCJkb1JlcXVlc3QiLCJwcm9wcyIsInJlc3BvbnNlIiwiYXhpb3MiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjcmVkZW50aWFscyIsImRhdGEiLCJlcnIiLCJtYXAiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUksQ0FBQztBQUFFQyxLQUFGO0FBQU9DLFFBQVA7QUFBZUMsTUFBZjtBQUFxQkM7QUFBckIsQ0FBRCxLQUFzQztBQUN4RCxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLENBQUMsSUFBRCxDQUFwQzs7QUFDQSxRQUFNQyxTQUFTLEdBQUcsT0FBT0MsS0FBSyxHQUFHLEVBQWYsS0FBc0I7QUFDdEMsUUFBRztBQUNESCxlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0EsWUFBTUksUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUNULE1BQUQsQ0FBTCxDQUFjRCxHQUFkLGtDQUF3QkUsSUFBeEIsR0FBaUNNLEtBQWpDLEdBQTBDO0FBQUNHLHVCQUFlLEVBQUUsSUFBbEI7QUFBd0JDLG1CQUFXLEVBQUU7QUFBckMsT0FBMUMsQ0FBdkI7O0FBRUEsVUFBR1QsU0FBSCxFQUFhO0FBQ1hBLGlCQUFTLENBQUNNLFFBQVEsQ0FBQ0ksSUFBVixDQUFUO0FBQ0Q7O0FBRUQsYUFBT0osUUFBUSxDQUFDSSxJQUFoQjtBQUNELEtBVEQsQ0FTRSxPQUFPQyxHQUFQLEVBQVk7QUFDWlQsZUFBUyxlQUNQO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBSSxtQkFBUyxFQUFDLE1BQWQ7QUFBQSxvQkFDR1MsR0FBRyxDQUFDTCxRQUFKLENBQWFJLElBQWIsQ0FBa0JULE1BQWxCLENBQXlCVyxHQUF6QixDQUE2QkQsR0FBRyxpQkFDL0I7QUFBQSxzQkFBdUJBLEdBQUcsQ0FBQ0U7QUFBM0IsYUFBU0YsR0FBRyxDQUFDRSxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETyxDQUFUO0FBVUQ7QUFDRixHQXRCRDs7QUF3QkEsU0FBTztBQUFFVCxhQUFGO0FBQWFIO0FBQWIsR0FBUDtBQUNELENBM0JEOztBQTZCZUwseUVBQWYiLCJmaWxlIjoiLi9ob29rcy91c2UtcmVxdWVzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgdXNlUmVxdWVzdCA9ICAoeyB1cmwsIG1ldGhvZCwgYm9keSwgb25TdWNjZXNzIH0pID0+IHtcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBkb1JlcXVlc3QgPSBhc3luYyAocHJvcHMgPSB7fSkgPT4ge1xuICAgIHRyeXtcbiAgICAgIHNldEVycm9ycyhudWxsKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NbbWV0aG9kXSh1cmwsIHsgLi4uYm9keSwgLi4ucHJvcHMgfSwge3dpdGhDcmVkZW50aWFsczogdHJ1ZSwgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ30pO1xuXG4gICAgICBpZihvblN1Y2Nlc3Mpe1xuICAgICAgICBvblN1Y2Nlc3MocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RXJyb3JzKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxuICAgICAgICAgIDxoND5Pb3BzLi4uPC9oND5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXktMFwiPlxuICAgICAgICAgICAge2Vyci5yZXNwb25zZS5kYXRhLmVycm9ycy5tYXAoZXJyID0+IFxuICAgICAgICAgICAgICA8bGkga2V5PXtlcnIubWVzc2FnZX0+e2Vyci5tZXNzYWdlfTwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgZG9SZXF1ZXN0LCBlcnJvcnMgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/use-request.js\n");

/***/ }),

/***/ "./pages/tickets/edit/[ticketId].js":
/*!******************************************!*\
  !*** ./pages/tickets/edit/[ticketId].js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/use-request */ \"./hooks/use-request.js\");\n\nvar _jsxFileName = \"/home/mern/ticketing-microservices/view/pages/tickets/edit/[ticketId].js\";\n\n\n\n\nconst EditTicket = ({\n  ticket\n}) => {\n  const {\n    0: title,\n    1: setTitle\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(ticket.title);\n  const {\n    0: price,\n    1: setPrice\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(ticket.price);\n  const {\n    doRequest,\n    errors\n  } = Object(_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    url: `http://localhost:3002/api/tickets/${ticket.id}`,\n    method: 'put',\n    body: {\n      title,\n      price\n    },\n    onSuccess: () => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/tickets')\n  });\n\n  const onSubmit = async event => {\n    event.preventDefault();\n    await doRequest();\n  };\n\n  const onBlur = () => {\n    const value = parseFloat(price);\n\n    if (isNaN(value)) {\n      return;\n    }\n\n    setPrice(value.toFixed(2));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Edit a Ticket\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: onSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"form-group\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Title\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          value: title,\n          onChange: e => setTitle(e.target.value),\n          className: \"form-control\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"form-group\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Price\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          value: price,\n          onBlur: onBlur,\n          onChange: e => setPrice(e.target.value),\n          className: \"form-control\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, undefined), errors, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"btn btn-primary\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, undefined);\n};\n\nEditTicket.getInitialProps = async (context, client) => {\n  const {\n    ticketId\n  } = context.query;\n  const {\n    data\n  } = await client.get(`http://localhost:3002/api/tickets/${ticketId}`);\n  return {\n    ticket: data\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditTicket);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90aWNrZXRzL2VkaXQvW3RpY2tldElkXS5qcz83ZTg3Il0sIm5hbWVzIjpbIkVkaXRUaWNrZXQiLCJ0aWNrZXQiLCJ0aXRsZSIsInNldFRpdGxlIiwidXNlU3RhdGUiLCJwcmljZSIsInNldFByaWNlIiwiZG9SZXF1ZXN0IiwiZXJyb3JzIiwidXNlUmVxdWVzdCIsInVybCIsImlkIiwibWV0aG9kIiwiYm9keSIsIm9uU3VjY2VzcyIsIlJvdXRlciIsInB1c2giLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvbkJsdXIiLCJ2YWx1ZSIsInBhcnNlRmxvYXQiLCJpc05hTiIsInRvRml4ZWQiLCJlIiwidGFyZ2V0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImNsaWVudCIsInRpY2tldElkIiwicXVlcnkiLCJkYXRhIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFnQjtBQUNqQyxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUNILE1BQU0sQ0FBQ0MsS0FBUixDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDRyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkYsc0RBQVEsQ0FBQ0gsTUFBTSxDQUFDSSxLQUFSLENBQWxDO0FBRUEsUUFBTTtBQUFFRSxhQUFGO0FBQWFDO0FBQWIsTUFBd0JDLGtFQUFVLENBQUM7QUFDdkNDLE9BQUcsRUFBRyxxQ0FBb0NULE1BQU0sQ0FBQ1UsRUFBRyxFQURiO0FBRXZDQyxVQUFNLEVBQUUsS0FGK0I7QUFHdkNDLFFBQUksRUFBRTtBQUNKWCxXQURJO0FBRUpHO0FBRkksS0FIaUM7QUFPdkNTLGFBQVMsRUFBRSxNQUFNQyxrREFBTSxDQUFDQyxJQUFQLENBQVksVUFBWjtBQVBzQixHQUFELENBQXhDOztBQVVBLFFBQU1DLFFBQVEsR0FBRyxNQUFPQyxLQUFQLElBQWlCO0FBQ2hDQSxTQUFLLENBQUNDLGNBQU47QUFFQSxVQUFNWixTQUFTLEVBQWY7QUFDRCxHQUpEOztBQU1BLFFBQU1hLE1BQU0sR0FBRyxNQUFNO0FBQ25CLFVBQU1DLEtBQUssR0FBR0MsVUFBVSxDQUFDakIsS0FBRCxDQUF4Qjs7QUFFQSxRQUFHa0IsS0FBSyxDQUFDRixLQUFELENBQVIsRUFBaUI7QUFDZjtBQUNEOztBQUVEZixZQUFRLENBQUNlLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsQ0FBRCxDQUFSO0FBQ0QsR0FSRDs7QUFVQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBTSxjQUFRLEVBQUVQLFFBQWhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQ0UsZUFBSyxFQUFFZixLQURUO0FBRUUsa0JBQVEsRUFBR3VCLENBQUQsSUFBT3RCLFFBQVEsQ0FBQ3NCLENBQUMsQ0FBQ0MsTUFBRixDQUFTTCxLQUFWLENBRjNCO0FBR0UsbUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBU0U7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQ0UsZUFBSyxFQUFFaEIsS0FEVDtBQUVFLGdCQUFNLEVBQUVlLE1BRlY7QUFHRSxrQkFBUSxFQUFHSyxDQUFELElBQU9uQixRQUFRLENBQUNtQixDQUFDLENBQUNDLE1BQUYsQ0FBU0wsS0FBVixDQUgzQjtBQUlFLG1CQUFTLEVBQUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURixFQWtCR2IsTUFsQkgsZUFtQkU7QUFBUSxpQkFBUyxFQUFDLGlCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBMEJELENBeEREOztBQTBEQVIsVUFBVSxDQUFDMkIsZUFBWCxHQUE2QixPQUFPQyxPQUFQLEVBQWdCQyxNQUFoQixLQUEyQjtBQUN0RCxRQUFNO0FBQUVDO0FBQUYsTUFBZUYsT0FBTyxDQUFDRyxLQUE3QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFXLE1BQU1ILE1BQU0sQ0FBQ0ksR0FBUCxDQUFZLHFDQUFvQ0gsUUFBUyxFQUF6RCxDQUF2QjtBQUVBLFNBQU87QUFBRTdCLFVBQU0sRUFBRStCO0FBQVYsR0FBUDtBQUNELENBTEQ7O0FBT2VoQyx5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3RpY2tldHMvZWRpdC9bdGlja2V0SWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB1c2VSZXF1ZXN0IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZS1yZXF1ZXN0JztcblxuY29uc3QgRWRpdFRpY2tldCA9ICh7IHRpY2tldCB9KSA9PiB7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUodGlja2V0LnRpdGxlKTtcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSh0aWNrZXQucHJpY2UpO1xuXG4gIGNvbnN0IHsgZG9SZXF1ZXN0LCBlcnJvcnMgfSA9IHVzZVJlcXVlc3Qoe1xuICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9hcGkvdGlja2V0cy8ke3RpY2tldC5pZH1gLFxuICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgYm9keToge1xuICAgICAgdGl0bGUsXG4gICAgICBwcmljZVxuICAgIH0sXG4gICAgb25TdWNjZXNzOiAoKSA9PiBSb3V0ZXIucHVzaCgnL3RpY2tldHMnKVxuICB9KTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBhd2FpdCBkb1JlcXVlc3QoKTtcbiAgfVxuXG4gIGNvbnN0IG9uQmx1ciA9ICgpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlRmxvYXQocHJpY2UpO1xuXG4gICAgaWYoaXNOYU4odmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0UHJpY2UodmFsdWUudG9GaXhlZCgyKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+RWRpdCBhIFRpY2tldDwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfSBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPiBcbiAgICAgICAgICA8L2lucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsPlByaWNlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cbiAgICAgICAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZShlLnRhcmdldC52YWx1ZSl9IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgPC9pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtlcnJvcnN9XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkVkaXRUaWNrZXQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQsIGNsaWVudCkgPT4ge1xuICBjb25zdCB7IHRpY2tldElkIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9hcGkvdGlja2V0cy8ke3RpY2tldElkfWApO1xuXG4gIHJldHVybiB7IHRpY2tldDogZGF0YSB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0VGlja2V0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tickets/edit/[ticketId].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });