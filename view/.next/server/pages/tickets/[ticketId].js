module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/tickets/[ticketId].js");
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

/***/ "./pages/tickets/[ticketId].js":
/*!*************************************!*\
  !*** ./pages/tickets/[ticketId].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.js\");\n\nvar _jsxFileName = \"/home/mern/ticketing-microservices/view/pages/tickets/[ticketId].js\";\n\n\n\nconst TicketShow = ({\n  ticket\n}) => {\n  const {\n    doRequest,\n    errors\n  } = Object(_hooks_use_request__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n    url: 'http://localhost:3003/api/orders',\n    method: 'post',\n    body: {\n      ticketId: ticket.id\n    },\n    onSuccess: order => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/orders/[orderId]', `/orders/${order.id}`)\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: ticket.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n      children: [\"Price: \", ticket.price]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, undefined), errors, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: () => doRequest(),\n      className: \"btn btn-primary\",\n      children: \"Purchase\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 10\n  }, undefined);\n};\n\nTicketShow.getInitialProps = async (context, client) => {\n  const {\n    ticketId\n  } = context.query;\n  const {\n    data\n  } = await client.get(`http://localhost:3002/api/tickets/${ticketId}`);\n  return {\n    ticket: data\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TicketShow);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90aWNrZXRzL1t0aWNrZXRJZF0uanM/NDFmOCJdLCJuYW1lcyI6WyJUaWNrZXRTaG93IiwidGlja2V0IiwiZG9SZXF1ZXN0IiwiZXJyb3JzIiwidXNlUmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJ0aWNrZXRJZCIsImlkIiwib25TdWNjZXNzIiwib3JkZXIiLCJSb3V0ZXIiLCJwdXNoIiwidGl0bGUiLCJwcmljZSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJjbGllbnQiLCJxdWVyeSIsImRhdGEiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZ0I7QUFDakMsUUFBTTtBQUFFQyxhQUFGO0FBQWFDO0FBQWIsTUFBd0JDLGtFQUFVLENBQUM7QUFDdkNDLE9BQUcsRUFBRSxrQ0FEa0M7QUFFdkNDLFVBQU0sRUFBRSxNQUYrQjtBQUd2Q0MsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRVAsTUFBTSxDQUFDUTtBQURiLEtBSGlDO0FBTXZDQyxhQUFTLEVBQUdDLEtBQUQsSUFBV0Msa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLG1CQUFaLEVBQWtDLFdBQVVGLEtBQUssQ0FBQ0YsRUFBRyxFQUFyRDtBQU5pQixHQUFELENBQXhDO0FBU0Esc0JBQU87QUFBQSw0QkFDTDtBQUFBLGdCQUFLUixNQUFNLENBQUNhO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESyxlQUVMO0FBQUEsNEJBQVliLE1BQU0sQ0FBQ2MsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZLLEVBR0paLE1BSEksZUFJTDtBQUFRLGFBQU8sRUFBRSxNQUFNRCxTQUFTLEVBQWhDO0FBQW9DLGVBQVMsRUFBQyxpQkFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFNRCxDQWhCRDs7QUFrQkFGLFVBQVUsQ0FBQ2dCLGVBQVgsR0FBNkIsT0FBT0MsT0FBUCxFQUFnQkMsTUFBaEIsS0FBMkI7QUFDdEQsUUFBTTtBQUFFVjtBQUFGLE1BQWVTLE9BQU8sQ0FBQ0UsS0FBN0I7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBVyxNQUFNRixNQUFNLENBQUNHLEdBQVAsQ0FBWSxxQ0FBb0NiLFFBQVMsRUFBekQsQ0FBdkI7QUFFQSxTQUFPO0FBQUVQLFVBQU0sRUFBRW1CO0FBQVYsR0FBUDtBQUNELENBTEQ7O0FBT2VwQix5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3RpY2tldHMvW3RpY2tldElkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHVzZVJlcXVlc3QgZnJvbSAnLi4vLi4vaG9va3MvdXNlLXJlcXVlc3QnO1xuXG5jb25zdCBUaWNrZXRTaG93ID0gKHsgdGlja2V0IH0pID0+IHtcbiAgY29uc3QgeyBkb1JlcXVlc3QsIGVycm9ycyB9ID0gdXNlUmVxdWVzdCh7XG4gICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAzL2FwaS9vcmRlcnMnLFxuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGJvZHk6IHtcbiAgICAgIHRpY2tldElkOiB0aWNrZXQuaWRcbiAgICB9LFxuICAgIG9uU3VjY2VzczogKG9yZGVyKSA9PiBSb3V0ZXIucHVzaCgnL29yZGVycy9bb3JkZXJJZF0nLCBgL29yZGVycy8ke29yZGVyLmlkfWApXG4gIH0pXG5cbiAgcmV0dXJuIDxkaXY+XG4gICAgPGgxPnt0aWNrZXQudGl0bGV9PC9oMT5cbiAgICA8aDQ+UHJpY2U6IHt0aWNrZXQucHJpY2V9PC9oND5cbiAgICB7ZXJyb3JzfVxuICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZG9SZXF1ZXN0KCl9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlB1cmNoYXNlPC9idXR0b24+XG4gIDwvZGl2PlxufTtcblxuVGlja2V0U2hvdy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCwgY2xpZW50KSA9PiB7XG4gIGNvbnN0IHsgdGlja2V0SWQgfSA9IGNvbnRleHQucXVlcnk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAyL2FwaS90aWNrZXRzLyR7dGlja2V0SWR9YCk7XG5cbiAgcmV0dXJuIHsgdGlja2V0OiBkYXRhIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpY2tldFNob3c7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tickets/[ticketId].js\n");

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