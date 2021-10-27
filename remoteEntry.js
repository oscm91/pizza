var main;
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ 51954:
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 92645:
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 92543:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(31553);


/***/ }),

/***/ 20451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stepform_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3048);
/* harmony import */ var _stepform_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71061);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71392);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52322);






function Dashboard() {
  var paymentsFacade = _stepform_store__WEBPACK_IMPORTED_MODULE_2__.facade.paymentsFacade();
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();
  var historyFacade = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return {
      goTo: function goTo(location) {
        return history.push(location);
      },
      getPathname: history.location.pathname || ''
    };
  }, [history]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_stepform_ui__WEBPACK_IMPORTED_MODULE_1__.Pages.Dashboard, {
    facade: paymentsFacade,
    history: historyFacade()
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ 75610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stepform_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3048);
/* harmony import */ var _stepform_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71061);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71392);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52322);






function Home() {
  var paymentsFacade = _stepform_store__WEBPACK_IMPORTED_MODULE_2__.facade.productsFacade();
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();
  var historyFacade = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return {
      goTo: function goTo(location) {
        return history.push(location);
      },
      getPathname: history.location.pathname || ''
    };
  }, [history]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_stepform_ui__WEBPACK_IMPORTED_MODULE_1__.Pages.Home, {
    facade: paymentsFacade,
    history: historyFacade()
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ 65526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10765);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17540);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stepform_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71061);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71392);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_localstorage_simple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88641);
/* harmony import */ var redux_localstorage_simple__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_localstorage_simple__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75610);
/* harmony import */ var _app_dashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20451);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52322);










var store = (0,_stepform_store__WEBPACK_IMPORTED_MODULE_3__.getStore)((0,redux_localstorage_simple__WEBPACK_IMPORTED_MODULE_5__.load)());
react_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: store,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Switch, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
          path: "/dashboard",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_app_dashboard__WEBPACK_IMPORTED_MODULE_7__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
          path: "/",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_app_home__WEBPACK_IMPORTED_MODULE_6__["default"], {})
        })]
      })
    })
  })
}), document.getElementById('root'));

/***/ }),

/***/ 71061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actions": () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.actions),
/* harmony export */   "facade": () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.facade),
/* harmony export */   "getStore": () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getStore)
/* harmony export */ });
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87881);


/***/ }),

/***/ 59163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PAYMENTS_TABLE_FORMAT": () => (/* binding */ PAYMENTS_TABLE_FORMAT),
/* harmony export */   "PAYMENTS_TABLE_FILTER": () => (/* binding */ PAYMENTS_TABLE_FILTER),
/* harmony export */   "PAYMENTS_TABLE_UPDATE": () => (/* binding */ PAYMENTS_TABLE_UPDATE),
/* harmony export */   "PRODUCTS_ADD_INGREDIENT": () => (/* binding */ PRODUCTS_ADD_INGREDIENT),
/* harmony export */   "PRODUCTS_REMOVE_INGREDIENT": () => (/* binding */ PRODUCTS_REMOVE_INGREDIENT),
/* harmony export */   "PRODUCTS_ADD_MASS": () => (/* binding */ PRODUCTS_ADD_MASS),
/* harmony export */   "PRODUCTS_REMOVE_MASS": () => (/* binding */ PRODUCTS_REMOVE_MASS),
/* harmony export */   "PRODUCTS_SET_NAME": () => (/* binding */ PRODUCTS_SET_NAME),
/* harmony export */   "PRODUCTS_UPDATE": () => (/* binding */ PRODUCTS_UPDATE),
/* harmony export */   "PRODUCTS_SAVE": () => (/* binding */ PRODUCTS_SAVE)
/* harmony export */ });
// payments Actions
var PAYMENTS_TABLE_FORMAT = '@@PAYMENTS/TABLE/FORMAT';
var PAYMENTS_TABLE_FILTER = '@@PAYMENTS/TABLE/FILTER';
var PAYMENTS_TABLE_UPDATE = '@@PAYMENTS/TABLE/UPDATE'; // product Actions

var PRODUCTS_ADD_INGREDIENT = '@@PRODUCTS/ADD/INGREDIENT';
var PRODUCTS_REMOVE_INGREDIENT = '@@PRODUCTS/REMOVE/INGREDIENT';
var PRODUCTS_ADD_MASS = '@@PRODUCTS/ADD/MASS';
var PRODUCTS_REMOVE_MASS = '@@PRODUCTS/REMOVE/MASS';
var PRODUCTS_SET_NAME = '@@PRODUCTS/SET/NAME';
var PRODUCTS_UPDATE = '@@PRODUCTS/UPDATE';
var PRODUCTS_SAVE = '@@PRODUCTS/SAVE';

/***/ }),

/***/ 65183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ workerMiddleware),
/* harmony export */   "withAsyncReducer": () => (/* binding */ createWorkerMiddleware)
/* harmony export */ });
function createWorkerMiddleware(getAsyncReducer) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function' && action.worker) {
          return action(dispatch, getState, getAsyncReducer);
        }

        return next(action);
      };
    };
  };
}

var workerMiddleware = createWorkerMiddleware(function () {
  return undefined;
});


/***/ }),

/***/ 57448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addpayments": () => (/* binding */ addpayments),
/* harmony export */   "getpayments": () => (/* binding */ getpayments),
/* harmony export */   "paymentsTableFormat": () => (/* binding */ paymentsTableFormat),
/* harmony export */   "paymentsTableFilter": () => (/* binding */ paymentsTableFilter)
/* harmony export */ });
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51954);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92543);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59163);



var addpayments = function addpayments(payment, filters) {
  var action = /*#__PURE__*/function () {
    var _ref = _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch, getState) {
      var state, paymentsData;
      return _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = getState();
              paymentsData = [].concat(state.payments.data, payment);
              dispatch({
                type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__.PAYMENTS_TABLE_UPDATE,
                payload: {
                  data: paymentsData,
                  normalized: [],
                  filtered: []
                }
              });
              dispatch(paymentsTableFormat(paymentsData, filters));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function action(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return action;
};
var getpayments = function getpayments(search, filters) {
  var action = /*#__PURE__*/function () {
    var _ref2 = _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(dispatch, getState) {
      var state, paymentsData, response, payments;
      return _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              state = getState();
              paymentsData = state.payments.data;
              dispatch({
                type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__.PAYMENTS_TABLE_UPDATE,
                payload: {
                  data: [],
                  normalized: [],
                  filtered: []
                }
              });
              _context2.next = 5;
              return new Promise(function (resolve) {
                setTimeout(function () {
                  if (search === 'today') {
                    resolve(paymentsData);
                  }

                  if (search === 'week') {
                    resolve(paymentsData);
                  }

                  if (search === 'september') {
                    resolve(paymentsData);
                  }
                }, 100);
              });

            case 5:
              response = _context2.sent;
              dispatch({
                type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__.PAYMENTS_TABLE_UPDATE,
                payload: {
                  data: response,
                  normalized: [],
                  filtered: []
                }
              });
              payments = getState().payments.data;
              dispatch(paymentsTableFormat(payments, filters));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function action(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  return action;
};
var paymentsTableFormat = function paymentsTableFormat(payments, filters) {
  var action = /*#__PURE__*/function () {
    var _ref3 = _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(dispatch, getState, getAsyncReducer) {
      var asyncReducer, tempState, newState;
      return _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch({
                type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__.PAYMENTS_TABLE_UPDATE,
                payload: {
                  data: [],
                  normalized: [],
                  filtered: []
                }
              });
              _context3.next = 3;
              return getAsyncReducer();

            case 3:
              asyncReducer = _context3.sent;
              _context3.next = 6;
              return asyncReducer(getState(), {
                type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__.PAYMENTS_TABLE_FORMAT,
                payload: {
                  payments: payments
                }
              });

            case 6:
              tempState = _context3.sent;
              _context3.next = 9;
              return asyncReducer(tempState, {
                type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__.PAYMENTS_TABLE_FILTER,
                payload: {
                  payments: tempState.payments.normalized,
                  filters: filters
                }
              });

            case 9:
              newState = _context3.sent;
              dispatch({
                type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__.PAYMENTS_TABLE_UPDATE,
                payload: newState.payments
              });

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function action(_x5, _x6, _x7) {
      return _ref3.apply(this, arguments);
    };
  }();

  action.worker = true;
  return action;
};
var paymentsTableFilter = function paymentsTableFilter(payments, filters) {
  var action = /*#__PURE__*/function () {
    var _ref4 = _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(dispatch, getState, getAsyncReducer) {
      var asyncReducer, result;
      return _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch({
                type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__.PAYMENTS_TABLE_UPDATE,
                payload: Object.assign({}, payments, {
                  filtered: []
                })
              });
              _context4.next = 3;
              return getAsyncReducer();

            case 3:
              asyncReducer = _context4.sent;
              _context4.next = 6;
              return asyncReducer(getState(), {
                type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__.PAYMENTS_TABLE_FILTER,
                payload: {
                  payments: payments,
                  filters: filters
                }
              });

            case 6:
              result = _context4.sent;
              dispatch({
                type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__.PAYMENTS_TABLE_UPDATE,
                payload: result.payments
              });

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function action(_x8, _x9, _x10) {
      return _ref4.apply(this, arguments);
    };
  }();

  action.worker = true;
  return action;
};

/***/ }),

/***/ 10456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17540);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57448);




function UUID() {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var payments = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return Object.assign({}, state['payments'], {
      list: state['products'].list
    });
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('today'),
      search = _useState[0],
      _setSearch = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      filters = _useState2[0],
      _setFilters = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      total = _useState3[0],
      _setTotal = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      buyer = _useState4[0],
      setBuyer = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      product = _useState5[0],
      setProduct = _useState5[1];

  return {
    getSearch: function getSearch() {
      return search;
    },
    setSearch: function setSearch(value) {
      return _setSearch(value);
    },
    checkFilter: function checkFilter(nameFilter) {
      return filters.includes(nameFilter);
    },
    setFilters: function setFilters(nameFilter, value) {
      if (value) {
        _setFilters(Array.from(new Set([].concat(nameFilter, filters))));
      } else {
        _setFilters(Array.from(new Set([].concat(nameFilter, filters))).filter(function (filter) {
          return filter !== nameFilter;
        }));
      }
    },
    getData: function getData(search) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.getpayments)(search, filters));
    },
    filter: function filter() {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.paymentsTableFilter)(payments.normalized, filters));
    },
    getState: function getState() {
      return payments;
    },
    getTotal: function getTotal() {
      return total;
    },
    setTotal: function setTotal() {
      return _setTotal;
    },
    buyer: buyer,
    product: product,
    setBuyer: setBuyer,
    setProduct: setProduct,
    total: (payments.data || []).reduce(function (total, payment) {
      return total + (payment.payment_value || 0);
    }, 0),
    sellProduct: function sellProduct() {
      if (!buyer || !product) {
        return;
      }

      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.addpayments)({
        id: 'fake-id-' + UUID(),
        created_date: new Date().toISOString(),
        transaction_name: buyer,
        transaction_id: UUID(),
        payment_status: 'started',
        payment_type: product,
        payment_method: '**** **** **** 7711',
        payment_value: payments.list[product].price,
        payment_due: 0
      }, filters));
      setBuyer('');
      setProduct('');
    }
  };
});

/***/ }),

/***/ 9771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "suma": () => (/* binding */ suma)
/* harmony export */ });
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59163);

var initialState = {
  data: [],
  normalized: [],
  filtered: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (state, _ref) {
  if (state === void 0) {
    state = initialState;
  }

  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PAYMENTS_TABLE_FORMAT:
      {
        var normalized = Object.values(payload.payments).map(function (payments) {
          return Object.assign({}, payments, {
            date: payments.created_date,
            amount: "$" + payments.payment_value,
            deductions: "-$" + payments.payment_due
          });
        });
        return Object.assign({}, state, {
          data: payload.payments,
          normalized: normalized
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PAYMENTS_TABLE_FILTER:
      {
        if (!payload.filters.length || payload.filters.includes('all')) {
          return Object.assign({}, state, {
            filtered: payload.payments
          });
        }

        return Object.assign({}, state, {
          filtered: payload.payments.filter(function (payments) {
            return payload.filters.includes(payments.payment_type);
          })
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PAYMENTS_TABLE_UPDATE:
      {
        return Object.assign({}, state, payload);
      }

    default:
      {
        return state;
      }
  }
});
var suma = function suma(a, b) {
  return a + b;
};

/***/ }),

/***/ 41396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setName": () => (/* binding */ setName),
/* harmony export */   "saveProduct": () => (/* binding */ saveProduct),
/* harmony export */   "addMass": () => (/* binding */ addMass),
/* harmony export */   "removeMass": () => (/* binding */ removeMass),
/* harmony export */   "addIngredient": () => (/* binding */ addIngredient),
/* harmony export */   "removeIngredient": () => (/* binding */ removeIngredient)
/* harmony export */ });
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51954);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92543);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59163);



var setName = function setName(name) {
  var action = /*#__PURE__*/function () {
    var _ref = _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch, getState) {
      return _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__.PRODUCTS_SET_NAME,
                payload: name
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function action(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return action;
};
var saveProduct = function saveProduct() {
  var action = /*#__PURE__*/function () {
    var _ref2 = _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(dispatch, getState) {
      return _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({
                type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__.PRODUCTS_SAVE,
                payload: undefined
              });

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function action(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  return action;
};
var addMass = function addMass(nameMass) {
  var action = /*#__PURE__*/function () {
    var _ref3 = _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(dispatch, getState, getAsyncReducer) {
      var asyncReducer, tempState;
      return _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return getAsyncReducer();

            case 2:
              asyncReducer = _context3.sent;
              _context3.next = 5;
              return asyncReducer(getState(), {
                type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__.PRODUCTS_ADD_MASS,
                payload: nameMass
              });

            case 5:
              tempState = _context3.sent;
              dispatch({
                type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__.PRODUCTS_UPDATE,
                payload: tempState.products
              });

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function action(_x5, _x6, _x7) {
      return _ref3.apply(this, arguments);
    };
  }();

  action.worker = true;
  return action;
};
var removeMass = function removeMass(nameMass) {
  var action = /*#__PURE__*/function () {
    var _ref4 = _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(dispatch, getState, getAsyncReducer) {
      var asyncReducer, tempState;
      return _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return getAsyncReducer();

            case 2:
              asyncReducer = _context4.sent;
              _context4.next = 5;
              return asyncReducer(getState(), {
                type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__.PRODUCTS_REMOVE_MASS,
                payload: nameMass
              });

            case 5:
              tempState = _context4.sent;
              dispatch({
                type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__.PRODUCTS_UPDATE,
                payload: tempState.products
              });

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function action(_x8, _x9, _x10) {
      return _ref4.apply(this, arguments);
    };
  }();

  action.worker = true;
  return action;
};
var addIngredient = function addIngredient(nameIngredient) {
  var action = /*#__PURE__*/function () {
    var _ref5 = _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5(dispatch, getState, getAsyncReducer) {
      var asyncReducer, tempState;
      return _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return getAsyncReducer();

            case 2:
              asyncReducer = _context5.sent;
              _context5.next = 5;
              return asyncReducer(getState(), {
                type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__.PRODUCTS_ADD_INGREDIENT,
                payload: nameIngredient
              });

            case 5:
              tempState = _context5.sent;
              dispatch({
                type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__.PRODUCTS_UPDATE,
                payload: tempState.products
              });

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function action(_x11, _x12, _x13) {
      return _ref5.apply(this, arguments);
    };
  }();

  action.worker = true;
  return action;
};
var removeIngredient = function removeIngredient(nameIngredient) {
  var action = /*#__PURE__*/function () {
    var _ref6 = _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee6(dispatch, getState, getAsyncReducer) {
      var asyncReducer, tempState;
      return _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return getAsyncReducer();

            case 2:
              asyncReducer = _context6.sent;
              _context6.next = 5;
              return asyncReducer(getState(), {
                type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__.PRODUCTS_REMOVE_INGREDIENT,
                payload: nameIngredient
              });

            case 5:
              tempState = _context6.sent;
              dispatch({
                type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__.PRODUCTS_UPDATE,
                payload: tempState.products
              });

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function action(_x14, _x15, _x16) {
      return _ref6.apply(this, arguments);
    };
  }();

  action.worker = true;
  return action;
};

/***/ }),

/***/ 8111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17540);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41396);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var products = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state['products'];
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  return {
    removeIngredient: function removeIngredient(name) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.removeIngredient)(name));
    },
    addIngredient: function addIngredient(name) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.addIngredient)(name));
    },
    removeMass: function removeMass(name) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.removeMass)(name));
    },
    addMass: function addMass(name) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.addMass)(name));
    },
    setName: function setName(name) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.setName)(name));
    },
    saveProduct: function saveProduct() {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.saveProduct)());
    },
    getState: function getState() {
      return products;
    }
  };
});

/***/ }),

/***/ 5639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59163);

var initialState = {
  ingredients: [{
    name: 'Pollo',
    price: 5000
  }, {
    name: 'Peperoni',
    price: 4500
  }, {
    name: 'Maiz',
    price: 3000
  }, {
    name: 'Tomate',
    price: 3000
  }, {
    name: 'Ají',
    price: 3000
  }, {
    name: 'Maduro',
    price: 3000
  }, {
    name: 'Champiñones',
    price: 3000
  }, {
    name: 'Carne de res',
    price: 3000
  }, {
    name: 'Aguacate',
    price: 3000
  }, {
    name: 'Cebolla',
    price: 3000
  }, {
    name: 'Jamón',
    price: 3000
  }, {
    name: 'Queso',
    price: 3000
  }, {
    name: 'Anchoas',
    price: 3000
  }, {
    name: 'Salmón',
    price: 3000
  }, {
    name: 'Espárragos',
    price: 3000
  }, {
    name: 'habichuela',
    price: 3000
  }],
  mass: [{
    name: 'Base de harina',
    price: 10000
  }, {
    name: 'Base de avena',
    price: 15000
  }],
  product: {
    name: '',
    ingredients: [],
    mass: undefined,
    price: 0,
    resume: [],
    isCompleted: false
  },
  list: []
};

var getPrice = function getPrice(mass, ingredients) {
  var massPrice = mass && mass.price || 0;
  var ingredientsPrice = ingredients && ingredients.length ? ingredients.reduce(function (total, ingredient) {
    return total + (ingredient.price || 0);
  }, 0) : 0;
  return massPrice + ingredientsPrice;
};

var getResume = function getResume(mass, ingredients) {
  var resume = [];

  if (mass) {
    resume.push(Object.assign({}, mass, {
      type: 'mass',
      quantity: 1
    }));
  }

  if (ingredients && ingredients.length) {
    var resumeIngredients = ingredients.reduce(function (resume, ingredient) {
      var _Object$assign;

      var resumeIngredient = resume[ingredient.name] || {};
      return Object.assign({}, resume, (_Object$assign = {}, _Object$assign[ingredient.name] = Object.assign({}, ingredient, {
        price: (resumeIngredient.price || 0) + ingredient.price,
        type: 'ingredient',
        quantity: (resumeIngredient.quantity || 0) + 1
      }), _Object$assign));
    }, {});
    resume.push.apply(resume, Object.values(resumeIngredients));
  }

  return resume;
};

var isComplete = function isComplete(name, mass, ingredients) {
  return !!(name && mass && ingredients && ingredients.length);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (state, _ref) {
  if (state === void 0) {
    state = initialState;
  }

  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_SET_NAME:
      {
        return Object.assign({}, state, {
          product: Object.assign({}, state.product, {
            name: payload,
            isCompleted: isComplete(payload, state.product.mass, state.product.ingredients)
          })
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_ADD_MASS:
      {
        var nameBase = payload;
        var mass = state.mass.find(function (mass) {
          return mass.name === nameBase;
        });
        return Object.assign({}, state, {
          product: Object.assign({}, state.product, {
            mass: mass,
            price: getPrice(mass, state.product.ingredients),
            resume: getResume(mass, state.product.ingredients),
            isCompleted: isComplete(state.product.name, mass, state.product.ingredients)
          })
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_REMOVE_MASS:
      {
        var _mass = undefined;
        return Object.assign({}, state, {
          product: Object.assign({}, state.product, {
            mass: _mass,
            price: getPrice(_mass, state.product.ingredients),
            resume: getResume(_mass, state.product.ingredients),
            isCompleted: isComplete(state.product.name, _mass, state.product.ingredients)
          })
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_ADD_INGREDIENT:
      {
        var _nameBase = payload;
        var ingredient = state.ingredients.find(function (ingredient) {
          return ingredient.name === _nameBase;
        });
        var ingredients = [].concat(state.product.ingredients, ingredient);
        return Object.assign({}, state, {
          product: Object.assign({}, state.product, {
            ingredients: ingredients,
            price: getPrice(state.product.mass, ingredients),
            resume: getResume(state.product.mass, ingredients),
            isCompleted: isComplete(state.product.name, state.product.mass, ingredients)
          })
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_REMOVE_INGREDIENT:
      {
        var _nameBase2 = payload;

        var _ingredient = state.ingredients.find(function (ingredient) {
          return ingredient.name === _nameBase2;
        });

        var isRemoved = false;

        var _ingredients = state.product.ingredients.filter(function (item) {
          if (item.name === _ingredient.name && !isRemoved) {
            isRemoved = true;
            return false;
          }

          return true;
        });

        return Object.assign({}, state, {
          product: Object.assign({}, state.product, {
            ingredients: _ingredients,
            price: getPrice(state.product.mass, _ingredients),
            resume: getResume(state.product.mass, _ingredients),
            isCompleted: isComplete(state.product.name, state.product.mass, _ingredients)
          })
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_SAVE:
      {
        var _Object$assign2;

        return Object.assign({}, state, {
          list: Object.assign({}, state.list, (_Object$assign2 = {}, _Object$assign2[state.product.name] = state.product, _Object$assign2)),
          product: initialState.product
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_UPDATE:
      {
        return Object.assign({}, payload);
      }

    default:
      {
        return state;
      }
  }
});

/***/ }),

/***/ 99883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18717);
/* harmony import */ var _payments_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9771);
/* harmony import */ var _products_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5639);



var appReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  payments: _payments_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  products: _products_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});

var rootReducer = function rootReducer(state, action) {
  return appReducer(state, action);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ }),

/***/ 87881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStore": () => (/* binding */ getStore),
/* harmony export */   "actions": () => (/* binding */ actions),
/* harmony export */   "facade": () => (/* binding */ facade)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18717);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10941);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_localstorage_simple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88641);
/* harmony import */ var redux_localstorage_simple__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_localstorage_simple__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _middleware_workerMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65183);
/* harmony import */ var _worker_rootAsyncReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17096);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99883);
/* harmony import */ var _reducers_payments_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10456);
/* harmony import */ var _reducers_products_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8111);
/* harmony import */ var _reducers_payments_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57448);









var composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || redux__WEBPACK_IMPORTED_MODULE_0__.compose;

function getStore(initialState) {
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_5__["default"], initialState, composeEnhancers((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((0,redux_localstorage_simple__WEBPACK_IMPORTED_MODULE_2__.save)(), (0,_middleware_workerMiddleware__WEBPACK_IMPORTED_MODULE_3__.withAsyncReducer)(_worker_rootAsyncReducer__WEBPACK_IMPORTED_MODULE_4__["default"]), (redux_thunk__WEBPACK_IMPORTED_MODULE_1___default()))));
}

var actions = {
  paymentsTableFormat: _reducers_payments_actions__WEBPACK_IMPORTED_MODULE_8__.paymentsTableFormat,
  paymentsTableFilter: _reducers_payments_actions__WEBPACK_IMPORTED_MODULE_8__.paymentsTableFilter
};
var facade = {
  paymentsFacade: _reducers_payments_facade__WEBPACK_IMPORTED_MODULE_6__["default"],
  productsFacade: _reducers_products_facade__WEBPACK_IMPORTED_MODULE_7__["default"]
};


/***/ }),

/***/ 17096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51954);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92543);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45418);
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(comlink__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_workerReducer_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56584);


 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore


var worker = new _reducers_workerReducer_worker__WEBPACK_IMPORTED_MODULE_3__["default"]();
var singletonWorker = null;
var singletonBlocker = false;

function getAsyncReducer() {
  return _getAsyncReducer.apply(this, arguments);
}

function _getAsyncReducer() {
  _getAsyncReducer = _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    return _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!singletonWorker && !singletonBlocker)) {
              _context.next = 5;
              break;
            }

            singletonBlocker = true;
            _context.next = 4;
            return (0,comlink__WEBPACK_IMPORTED_MODULE_2__.wrap)(worker);

          case 4:
            singletonWorker = _context.sent;

          case 5:
            return _context.abrupt("return", new Promise(function (resolve) {
              setTimeout(function () {
                resolve(singletonWorker);
              }, 0);
            }));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAsyncReducer.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAsyncReducer);

/***/ }),

/***/ 3048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logo": () => (/* reexport safe */ _lib_logo__WEBPACK_IMPORTED_MODULE_0__.Logo),
/* harmony export */   "Header": () => (/* reexport safe */ _lib_header__WEBPACK_IMPORTED_MODULE_1__.Header),
/* harmony export */   "AngleDownSolid": () => (/* reexport safe */ _lib_images__WEBPACK_IMPORTED_MODULE_2__.AngleDownSolid),
/* harmony export */   "BellRegular": () => (/* reexport safe */ _lib_images__WEBPACK_IMPORTED_MODULE_2__.BellRegular),
/* harmony export */   "CalculatorImage": () => (/* reexport safe */ _lib_images__WEBPACK_IMPORTED_MODULE_2__.CalculatorImage),
/* harmony export */   "CloseImage": () => (/* reexport safe */ _lib_images__WEBPACK_IMPORTED_MODULE_2__.CloseImage),
/* harmony export */   "ColumnsSolid": () => (/* reexport safe */ _lib_images__WEBPACK_IMPORTED_MODULE_2__.ColumnsSolid),
/* harmony export */   "HelpImage": () => (/* reexport safe */ _lib_images__WEBPACK_IMPORTED_MODULE_2__.HelpImage),
/* harmony export */   "HomeSolid": () => (/* reexport safe */ _lib_images__WEBPACK_IMPORTED_MODULE_2__.HomeSolid),
/* harmony export */   "InfoImage": () => (/* reexport safe */ _lib_images__WEBPACK_IMPORTED_MODULE_2__.InfoImage),
/* harmony export */   "LinkImage": () => (/* reexport safe */ _lib_images__WEBPACK_IMPORTED_MODULE_2__.LinkImage),
/* harmony export */   "LogoImage": () => (/* reexport safe */ _lib_images__WEBPACK_IMPORTED_MODULE_2__.LogoImage),
/* harmony export */   "MoneyCheckAltSolid": () => (/* reexport safe */ _lib_images__WEBPACK_IMPORTED_MODULE_2__.MoneyCheckAltSolid),
/* harmony export */   "PepperHotSolid": () => (/* reexport safe */ _lib_images__WEBPACK_IMPORTED_MODULE_2__.PepperHotSolid),
/* harmony export */   "PizzaSliceSolid": () => (/* reexport safe */ _lib_images__WEBPACK_IMPORTED_MODULE_2__.PizzaSliceSolid),
/* harmony export */   "PlusSolid": () => (/* reexport safe */ _lib_images__WEBPACK_IMPORTED_MODULE_2__.PlusSolid),
/* harmony export */   "SearchSolid": () => (/* reexport safe */ _lib_images__WEBPACK_IMPORTED_MODULE_2__.SearchSolid),
/* harmony export */   "SignOutAltSolid": () => (/* reexport safe */ _lib_images__WEBPACK_IMPORTED_MODULE_2__.SignOutAltSolid),
/* harmony export */   "SoundMixImage": () => (/* reexport safe */ _lib_images__WEBPACK_IMPORTED_MODULE_2__.SoundMixImage),
/* harmony export */   "ToolsSolid": () => (/* reexport safe */ _lib_images__WEBPACK_IMPORTED_MODULE_2__.ToolsSolid),
/* harmony export */   "Head": () => (/* reexport safe */ _lib_table__WEBPACK_IMPORTED_MODULE_3__.Head),
/* harmony export */   "Row": () => (/* reexport safe */ _lib_table__WEBPACK_IMPORTED_MODULE_3__.Row),
/* harmony export */   "Table": () => (/* reexport safe */ _lib_table__WEBPACK_IMPORTED_MODULE_3__.Table),
/* harmony export */   "Tabs": () => (/* reexport safe */ _lib_tabs__WEBPACK_IMPORTED_MODULE_4__.Tabs),
/* harmony export */   "Card": () => (/* reexport safe */ _lib_card__WEBPACK_IMPORTED_MODULE_5__.Card),
/* harmony export */   "Filter": () => (/* reexport safe */ _lib_filter__WEBPACK_IMPORTED_MODULE_6__.Filter),
/* harmony export */   "Pages": () => (/* reexport safe */ _lib_pages__WEBPACK_IMPORTED_MODULE_7__.Pages),
/* harmony export */   "Menu": () => (/* reexport safe */ _lib_menu__WEBPACK_IMPORTED_MODULE_8__.Menu),
/* harmony export */   "MenuItem": () => (/* reexport safe */ _lib_menu__WEBPACK_IMPORTED_MODULE_8__.MenuItem),
/* harmony export */   "Ingredient": () => (/* reexport safe */ _lib_ingredient__WEBPACK_IMPORTED_MODULE_9__.Ingredient),
/* harmony export */   "IngredientItem": () => (/* reexport safe */ _lib_ingredient__WEBPACK_IMPORTED_MODULE_9__.IngredientItem),
/* harmony export */   "Mass": () => (/* reexport safe */ _lib_mass__WEBPACK_IMPORTED_MODULE_10__.Mass),
/* harmony export */   "MassItem": () => (/* reexport safe */ _lib_mass__WEBPACK_IMPORTED_MODULE_10__.MassItem),
/* harmony export */   "Order": () => (/* reexport safe */ _lib_order__WEBPACK_IMPORTED_MODULE_11__.Order),
/* harmony export */   "OrderItem": () => (/* reexport safe */ _lib_order__WEBPACK_IMPORTED_MODULE_11__.OrderItem)
/* harmony export */ });
/* harmony import */ var _lib_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19712);
/* harmony import */ var _lib_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66093);
/* harmony import */ var _lib_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96289);
/* harmony import */ var _lib_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78076);
/* harmony import */ var _lib_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46058);
/* harmony import */ var _lib_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54681);
/* harmony import */ var _lib_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61099);
/* harmony import */ var _lib_pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63205);
/* harmony import */ var _lib_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82901);
/* harmony import */ var _lib_ingredient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75608);
/* harmony import */ var _lib_mass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72984);
/* harmony import */ var _lib_order__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71223);













/***/ }),

/***/ 54681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96289);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52322);




function Card(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "flex flex-col shadow-md rounded-b-lg bg-white overflow-hidden rounded-t-xl",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
      className: "flex text-white justify-between px-5 py-4 bg-primary",
      children: [title, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_images__WEBPACK_IMPORTED_MODULE_1__.InfoImage, {
        width: "10px"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "flex items-center flex-col p-6",
      children: children
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ 61099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Filter": () => (/* binding */ Filter),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96289);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52322);





function Filter(_ref) {
  var children = _ref.children,
      _onClick = _ref.onClick,
      open = _ref.open;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "flex relative w-full bg-white " + (open ? 'rounded-t-lg' : 'rounded-lg') + " shadow",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "relative min-w-full",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
        className: "flex relative justify-center py-2 px-6",
        onClick: function onClick() {
          return _onClick(!open);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          className: "text-primary",
          onClick: function onClick() {
            return _onClick(!open);
          },
          children: "Modulo de venta"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "absolute top-0 right-0 p-2",
          children: open ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_images__WEBPACK_IMPORTED_MODULE_1__.CloseImage, {
            width: "20px"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_images__WEBPACK_IMPORTED_MODULE_1__.SoundMixImage, {
            width: "20px"
          })
        })]
      }), open ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "flex absolute top-full z-10 flex-col px-6 w-full bg-white rounded-b-lg shadow",
        children: children
      }) : null]
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);

/***/ }),

/***/ 66093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19712);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52322);




function Header(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header", {
    className: "flex justify-between items-center px-8 py-6 bg-primary",
    onClick: onClick,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_logo__WEBPACK_IMPORTED_MODULE_1__.Logo, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      children: children
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ 96289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculatorImage": () => (/* reexport safe */ _calculator_svg__WEBPACK_IMPORTED_MODULE_0__.ReactComponent),
/* harmony export */   "HelpImage": () => (/* reexport safe */ _help_svg__WEBPACK_IMPORTED_MODULE_1__.ReactComponent),
/* harmony export */   "InfoImage": () => (/* reexport safe */ _info_svg__WEBPACK_IMPORTED_MODULE_2__.ReactComponent),
/* harmony export */   "LinkImage": () => (/* reexport safe */ _link_svg__WEBPACK_IMPORTED_MODULE_3__.ReactComponent),
/* harmony export */   "LogoImage": () => (/* reexport safe */ _logo_svg__WEBPACK_IMPORTED_MODULE_4__.ReactComponent),
/* harmony export */   "SoundMixImage": () => (/* reexport safe */ _sound_mix_svg__WEBPACK_IMPORTED_MODULE_5__.ReactComponent),
/* harmony export */   "CloseImage": () => (/* reexport safe */ _close_svg__WEBPACK_IMPORTED_MODULE_6__.ReactComponent),
/* harmony export */   "AngleDownSolid": () => (/* reexport safe */ _angle_down_solid_svg__WEBPACK_IMPORTED_MODULE_7__.ReactComponent),
/* harmony export */   "BellRegular": () => (/* reexport safe */ _bell_regular_svg__WEBPACK_IMPORTED_MODULE_8__.ReactComponent),
/* harmony export */   "ColumnsSolid": () => (/* reexport safe */ _columns_solid_svg__WEBPACK_IMPORTED_MODULE_9__.ReactComponent),
/* harmony export */   "HomeSolid": () => (/* reexport safe */ _home_solid_svg__WEBPACK_IMPORTED_MODULE_10__.ReactComponent),
/* harmony export */   "MoneyCheckAltSolid": () => (/* reexport safe */ _money_check_alt_solid_svg__WEBPACK_IMPORTED_MODULE_11__.ReactComponent),
/* harmony export */   "PepperHotSolid": () => (/* reexport safe */ _pepper_hot_solid_svg__WEBPACK_IMPORTED_MODULE_12__.ReactComponent),
/* harmony export */   "PizzaSliceSolid": () => (/* reexport safe */ _pizza_slice_solid_svg__WEBPACK_IMPORTED_MODULE_13__.ReactComponent),
/* harmony export */   "PlusSolid": () => (/* reexport safe */ _plus_solid_svg__WEBPACK_IMPORTED_MODULE_14__.ReactComponent),
/* harmony export */   "SearchSolid": () => (/* reexport safe */ _search_solid_svg__WEBPACK_IMPORTED_MODULE_15__.ReactComponent),
/* harmony export */   "SignOutAltSolid": () => (/* reexport safe */ _sign_out_alt_solid_svg__WEBPACK_IMPORTED_MODULE_16__.ReactComponent),
/* harmony export */   "ToolsSolid": () => (/* reexport safe */ _tools_solid_svg__WEBPACK_IMPORTED_MODULE_17__.ReactComponent)
/* harmony export */ });
/* harmony import */ var _calculator_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38031);
/* harmony import */ var _help_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80768);
/* harmony import */ var _info_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68053);
/* harmony import */ var _link_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13572);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31582);
/* harmony import */ var _sound_mix_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10173);
/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74635);
/* harmony import */ var _angle_down_solid_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16182);
/* harmony import */ var _bell_regular_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34688);
/* harmony import */ var _columns_solid_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17754);
/* harmony import */ var _home_solid_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96898);
/* harmony import */ var _money_check_alt_solid_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93435);
/* harmony import */ var _pepper_hot_solid_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(53650);
/* harmony import */ var _pizza_slice_solid_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36661);
/* harmony import */ var _plus_solid_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(25674);
/* harmony import */ var _search_solid_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32544);
/* harmony import */ var _sign_out_alt_solid_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(22142);
/* harmony import */ var _tools_solid_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(52583);




















/***/ }),

/***/ 75608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ingredient": () => (/* binding */ Ingredient),
/* harmony export */   "IngredientItem": () => (/* binding */ IngredientItem),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92645);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96289);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52322);

var _excluded = ["children"];




function Ingredient(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "grid grid-cols-6 gap-4 w-max",
    children: children
  });
}
function IngredientItem(_ref2) {
  var children = _ref2.children,
      props = _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, _excluded);

  var Icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children[0], {
    className: 'fill-current text-primary group-hover:text-white w-6 h-6'
  });
  var Text = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children[1], {
    className: 'text-primary group-hover:text-white'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", Object.assign({}, props, {
    className: "flex flex-col group py-4 px-10 whitespace-nowrap bg-white hover:text-white text-center hover:bg-primary overflow-hidden rounded-xl cursor-pointer hover:shadow-md text-secondary text-md text items-center space-y-2 w-28",
    children: [Icon, Text, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: "p-2 rounded-full bg-primary group-hover:bg-white",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_images__WEBPACK_IMPORTED_MODULE_2__.PlusSolid, {
        className: "fill-current text-white group-hover:text-primary w-3 h-3"
      })
    })]
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ingredient);

/***/ }),

/***/ 19712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logo": () => (/* binding */ Logo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96289);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52322);



function Logo(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    onClick: onClick,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_images__WEBPACK_IMPORTED_MODULE_1__.LogoImage, {})
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

/***/ }),

/***/ 72984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mass": () => (/* binding */ Mass),
/* harmony export */   "MassItem": () => (/* binding */ MassItem),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92645);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96289);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52322);

var _excluded = ["children"];




function Mass(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "flex flex-row gap-4 overflow-scroll p-2",
    children: children
  });
}
function MassItem(_ref2) {
  var children = _ref2.children,
      props = _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, _excluded);

  var Icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children[0], {
    className: 'fill-current text-white w-6 h-6'
  });
  var Text = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children[1], {
    className: 'text-primary group-hover:text-white'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", Object.assign({}, props, {
    className: "relative flex flex-col items-center mt-8 pt-8 pb-4 px-10 space-y-2 text-center whitespace-nowrap bg-white rounded-xl cursor-pointer hover:shadow-md text-secondary text-md",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: "p-6 rounded-full bg-primary absolute -top-1/3",
      children: Icon
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex items-center space-x-2 pt-4 text-left",
      children: [Text, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "p-2 rounded-full bg-primary",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_images__WEBPACK_IMPORTED_MODULE_2__.PlusSolid, {
          className: "w-3 h-3 text-white fill-current"
        })
      })]
    })]
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mass);

/***/ }),

/***/ 82901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* binding */ Menu),
/* harmony export */   "MenuItem": () => (/* binding */ MenuItem),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92645);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52322);

var _excluded = ["children"];


function Menu(_ref) {
  var children = _ref.children;
  var childrenWithProps = react__WEBPACK_IMPORTED_MODULE_1___default().Children.map(children, function (child) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(child)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(child, {
        className: child.props['data-active'] ? 'flex-1 group py-4 px-4 space-x-2 whitespace-nowrap text-center rounded-full cursor-pointer bg-primary text-white text-md shadow-md' : 'flex-1 group py-4 px-4 space-x-2 whitespace-nowrap text-center bg-white rounded-full cursor-pointer hover:bg-primary hover:text-white hover:shadow-md text-secondary text-md text',
        'data-active': child.props['data-active']
      });
    }

    return child;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "inline-flex flex-col bg-white py-2 px-2 space-y-2",
    children: childrenWithProps
  });
}
function MenuItem(_ref2) {
  var children = _ref2.children,
      props = _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, _excluded);

  var Icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
    className: props['data-active'] ? 'fill-current text-white w-6 h-6' : 'fill-current text-secondary w-6 h-6 group-hover:text-white'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", Object.assign({}, props, {
    children: Icon
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ 71223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Order": () => (/* binding */ Order),
/* harmony export */   "OrderItem": () => (/* binding */ OrderItem),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92645);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96289);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52322);

var _excluded = ["children"];




function Order(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "flex flex-col gap-4 overflow-scroll py-2 bg-white",
    children: children
  });
}
function OrderItem(_ref2) {
  var children = _ref2.children,
      props = _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, _excluded);

  var Icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children[0], {
    className: 'fill-current text-white w-6 h-6'
  });
  var Text = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children[1], {
    className: 'text-primary group-hover:text-white'
  });
  var Price = children[2] || '';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", Object.assign({}, props, {
    className: "relative flex flex-row items-center px-10 space-x-2 text-center whitespace-nowrap rounded-xl cursor-pointer text-secondary text-md w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: "p-6 rounded-lg bg-secondary",
      children: Icon
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "flex items-center text-left",
      children: Text
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex items-center whitespace-nowrap text-left",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "flex text-primary block text-xs",
        children: "$\xA0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
        className: "text-secondary block text-xs",
        children: [" ", Price]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_images__WEBPACK_IMPORTED_MODULE_2__.CloseImage, {
      width: "20px"
    })]
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);

/***/ }),

/***/ 29817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dashboard": () => (/* binding */ Dashboard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51954);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92543);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96289);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54681);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61099);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78076);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46058);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82901);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52322);











function Dashboard(_ref) {
  var facade = _ref.facade,
      history = _ref.history;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      openFilter = _useState[0],
      setOpenFilter = _useState[1];

  var _ref2 = facade.getState() || {
    filtered: []
  },
      filtered = _ref2.filtered,
      list = _ref2.list;

  var dataTitle = {
    today: 'de hoy',
    week: 'de esta semana',
    september: 'de septiembre'
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(function () {
    facade.getData(facade.getSearch());
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: "flex overflow-y-auto relative flex-row h-screen bg-backcontent",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "sticky top-0 flex-none",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "inline-flex overflow-hidden flex-col justify-between px-2 h-screen bg-white rounded-l-xl",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_menu__WEBPACK_IMPORTED_MODULE_8__.Menu, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_menu__WEBPACK_IMPORTED_MODULE_8__.MenuItem, {
            "data-active": '/' === history.getPathname,
            onClick: function onClick() {
              history.goTo('/');
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_images__WEBPACK_IMPORTED_MODULE_3__.HomeSolid, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_menu__WEBPACK_IMPORTED_MODULE_8__.MenuItem, {
            "data-active": '/dashboard' === history.getPathname,
            onClick: function onClick() {
              history.goTo('/dashboard');
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_images__WEBPACK_IMPORTED_MODULE_3__.ToolsSolid, {})
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_menu__WEBPACK_IMPORTED_MODULE_8__.Menu, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_menu__WEBPACK_IMPORTED_MODULE_8__.MenuItem, {
            onClick: function onClick() {
              console.log('logout');
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_images__WEBPACK_IMPORTED_MODULE_3__.SignOutAltSolid, {})
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "flex flex-grow bg-backcontent",
      style: {
        height: 'max-content'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("main", {
        className: "flex-col flex-grow px-4 pt-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "flex flex-row justify-between space-x-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "w-5/12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_card__WEBPACK_IMPORTED_MODULE_4__.Card, {
              title: "Total de ventas de septiembre",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("h4", {
                className: "bg-clip-text text-transparent bg-primary text-4xl font-bold",
                children: ["$", new Intl.NumberFormat('es-ES').format(facade.total || 0)]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
                className: "text-primary text-xs",
                children: "Pesos Colombianos"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "w-7/12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tabs__WEBPACK_IMPORTED_MODULE_7__.Tabs, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                onClick: function onClick() {
                  console.log('today');
                },
                children: "Hoy"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                "data-active": true,
                onClick: function onClick() {
                  console.log('week');
                },
                children: "Esta semana"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                onClick: function onClick() {
                  console.log('september');
                },
                children: "Septiembre"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "flex justify-end mt-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "w-1/2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_filter__WEBPACK_IMPORTED_MODULE_5__.Filter, {
                  open: openFilter,
                  onClick: setOpenFilter,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                    className: "flex flex-col py-4",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
                      className: "text-secondary flex flex-col whitespace-nowrap items-center space-x-3",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("label", {
                        htmlFor: "product",
                        className: "font-bold text-lg text-secondary cursor-pointer",
                        children: "Seleccione pizza"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("select", {
                        id: "product",
                        className: "appearance-none py-2 px-14 font-bold text-secondary rounded-full border-2 border-primary bg-white hover:opacity-20 focus:opacity-100 focus:outline-none",
                        value: facade.product,
                        onChange: function onChange(e) {
                          facade.setProduct(e.target.value);
                        },
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {}), Object.keys(list).map(function (productName) {
                          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
                            value: productName,
                            children: productName
                          });
                        })]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
                      className: "text-secondary flex flex-col whitespace-nowrap items-center space-x-3",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("label", {
                        htmlFor: "name",
                        className: "font-bold text-lg text-secondary cursor-pointer",
                        children: "Nombre de usuario"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", {
                        id: "name",
                        value: facade.buyer,
                        className: "py-2 px-14 font-bold text-secondary rounded-full border-2 border-primary bg-white hover:opacity-20 focus:opacity-100 focus:outline-none",
                        onChange: function onChange(e) {
                          facade.setBuyer(e.target.value);
                        },
                        type: "text"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                      className: "text-center w-full",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
                        className: "mt-4 px-14 py-2 bg-primary hover:opacity-20 rounded-full font-bold text-white",
                        onClick: /*#__PURE__*/_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
                          return _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return facade.sellProduct();

                                case 2:
                                  setOpenFilter(false);

                                case 3:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        })),
                        children: "Vender"
                      })
                    })]
                  })
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "mt-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_table__WEBPACK_IMPORTED_MODULE_6__.Table, {
            title: "Total de ventas",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_table__WEBPACK_IMPORTED_MODULE_6__.Head, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                children: "Comprador"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                children: "Fecha y hora"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                children: "M\xE9todo de pago"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                children: "ID transacci\xF3n"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                children: "Monto"
              })]
            }), filtered.map(function (item, i) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_table__WEBPACK_IMPORTED_MODULE_6__.Row, {
                index: i,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
                    className: "flex",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_images__WEBPACK_IMPORTED_MODULE_3__.CalculatorImage, {
                      width: "15px"
                    }), " ", item.transaction_name]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
                    className: "whitespace-nowrap text-grisclaro",
                    children: item.date
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
                    className: "whitespace-nowrap text-grisclaro",
                    children: item.payment_method
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
                    className: "whitespace-nowrap text-grisclaro truncate",
                    children: item.transaction_id
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                    className: "text-azul",
                    children: item.amount
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                    className: "text-grisclaro",
                    children: "Descuento"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                    className: "text-rojo",
                    children: item.deductions
                  })]
                })]
              }, item.id);
            })]
          })
        })]
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ 99367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51954);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92543);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96289);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54681);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82901);
/* harmony import */ var _ingredient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75608);
/* harmony import */ var _mass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72984);
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71223);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52322);











function Home(_ref) {
  var facade = _ref.facade,
      history = _ref.history;

  var _ref2 = facade.getState() || {
    ingredients: [],
    mass: [],
    product: {
      name: '',
      ingredients: [],
      mass: undefined,
      price: 0,
      resume: [],
      isCompleted: false
    }
  },
      ingredients = _ref2.ingredients,
      mass = _ref2.mass,
      product = _ref2.product;

  var addIngredient = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (ingredientName) {
    facade.addIngredient(ingredientName);
  }, [facade.addIngredient]);
  var removeIngredient = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (ingredientName) {
    facade.removeIngredient(ingredientName);
  }, [facade.removeIngredient]);
  var addMass = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (massName) {
    facade.addMass(massName);
  }, [facade.addMass]);
  var removeMass = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (massName) {
    facade.removeMass(massName);
  }, [facade.removeMass]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: "flex overflow-y-auto relative flex-row h-screen bg-backcontent",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "sticky top-0 flex-none",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "inline-flex overflow-hidden flex-col justify-between px-2 h-screen bg-white rounded-l-xl",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_menu__WEBPACK_IMPORTED_MODULE_5__.Menu, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_menu__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
            "data-active": '/' === history.getPathname,
            onClick: function onClick() {
              history.goTo('/');
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_images__WEBPACK_IMPORTED_MODULE_3__.HomeSolid, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_menu__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
            "data-active": '/dashboard' === history.getPathname,
            onClick: function onClick() {
              history.goTo('/dashboard');
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_images__WEBPACK_IMPORTED_MODULE_3__.ToolsSolid, {})
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_menu__WEBPACK_IMPORTED_MODULE_5__.Menu, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_menu__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
            onClick: function onClick() {
              console.log('logout');
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_images__WEBPACK_IMPORTED_MODULE_3__.SignOutAltSolid, {})
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "flex flex-grow bg-backcontent",
      style: {
        height: 'max-content'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("main", {
        className: "flex-col flex-grow px-4 pt-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
          className: "font-bold text-lg text-primary pb-8",
          children: "Crear nueva pizza"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "flex justify-start space-x-2 items-center mb-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
            className: "font-bold text-lg text-secondary",
            children: "Nombre de la pizza"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", {
            value: product.name,
            onChange: function onChange(e) {
              return facade.setName(e.target.value);
            },
            className: "py-2 px-14 font-bold text-secondary rounded-full border-2 border-primary bg-white hover:opacity-20 focus:opacity-100 focus:outline-none",
            type: "text"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "flex flex-col mb-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
            className: "font-bold text-lg text-secondary mb-2",
            children: "Ingredientes"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ingredient__WEBPACK_IMPORTED_MODULE_6__.Ingredient, {
            children: ingredients.map(function (_ref3, i) {
              var name = _ref3.name;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_ingredient__WEBPACK_IMPORTED_MODULE_6__.IngredientItem, {
                onClick: function onClick() {
                  addIngredient(name);
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_images__WEBPACK_IMPORTED_MODULE_3__.PepperHotSolid, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
                  children: name
                })]
              }, name + i);
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
            className: "font-bold text-lg text-secondary mb-2",
            children: "Base"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mass__WEBPACK_IMPORTED_MODULE_7__.Mass, {
            children: mass.map(function (_ref4, i) {
              var name = _ref4.name,
                  price = _ref4.price;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mass__WEBPACK_IMPORTED_MODULE_7__.MassItem, {
                onClick: function onClick() {
                  addMass(name);
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_images__WEBPACK_IMPORTED_MODULE_3__.PizzaSliceSolid, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
                  children: [name, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
                    className: "block text-xs text-secondary",
                    children: ["$ ", new Intl.NumberFormat('es-ES').format(price)]
                  })]
                })]
              }, name + i);
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "flex-col flex-none space-y-4 pb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_card__WEBPACK_IMPORTED_MODULE_4__.Card, {
          title: "Total de la pizza",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("h4", {
            className: "text-4xl font-bold text-transparent bg-clip-text bg-primary",
            children: ["$ ", new Intl.NumberFormat('es-ES').format(product.price)]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
            className: "text-xs text-primary",
            children: "Pesos Colombianos"
          })]
        }), product.resume && product.resume.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_order__WEBPACK_IMPORTED_MODULE_8__.Order, {
          children: product.resume.map(function (_ref5, i) {
            var name = _ref5.name,
                price = _ref5.price,
                quantity = _ref5.quantity,
                type = _ref5.type;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_order__WEBPACK_IMPORTED_MODULE_8__.OrderItem, {
              onClick: function onClick() {
                if (type === 'ingredient') {
                  removeIngredient(name);
                } else {
                  removeMass(name);
                }
              },
              children: [type === 'ingredient' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_images__WEBPACK_IMPORTED_MODULE_3__.PepperHotSolid, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_images__WEBPACK_IMPORTED_MODULE_3__.PizzaSliceSolid, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
                children: [name, type === 'ingredient' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
                  className: "block text-xs text-secondary",
                  children: ["x ", quantity]
                })]
              }), new Intl.NumberFormat('es-ES').format(price)]
            }, name + i);
          })
        }) || null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
          className: "w-full text-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
            disabled: !product.isCompleted,
            className: "py-2 px-14 mt-4 font-bold text-white rounded-full bg-primary hover:opacity-20 " + (product.isCompleted ? '' : 'opacity-20'),
            onClick: /*#__PURE__*/_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
              return _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return facade.saveProduct();

                    case 2:
                      window.alert('Se a creado la pizza, puedes ir a la opción de ventas en el menú, para continuar la venta');

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })),
            children: "Crear Pizza"
          })
        })]
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ 63205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pages": () => (/* binding */ Pages)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99367);
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29817);


var Pages = {
  Home: _home__WEBPACK_IMPORTED_MODULE_0__["default"],
  Dashboard: _dashboard__WEBPACK_IMPORTED_MODULE_1__["default"]
};

/***/ }),

/***/ 78076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "Row": () => (/* binding */ Row),
/* harmony export */   "Table": () => (/* binding */ Table),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52322);




function Head(_ref) {
  var children = _ref.children;
  var childrenWithProps = react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, function (child) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(child)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
        className: 'flex py-2 px-5 font-light font-medium text-left text-grisoscuro border-b border-grisclaro'
      });
    }

    return child;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: childrenWithProps
  });
}
function Row(_ref2) {
  var children = _ref2.children,
      index = _ref2.index;
  var childrenWithProps = react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, function (child, i) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(child)) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "flex flex-col border-b border-b-grisclaro",
        children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
          className: "flex flex-col py-4 px-5 h-full font-light font-medium text-left text-grisoscuro " + (index % 2 === 0 && i === 0 ? 'border-l-4 border-azul' : '') + " " + (index % 2 === 1 && i === 0 ? 'border-l-4 border-grisclaro' : '')
        })
      });
    }

    return child;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: childrenWithProps
  });
}
function Table(_ref3) {
  var children = _ref3.children,
      title = _ref3.title;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "flex flex-col shadow-md rounded-b-lg rounded-t-xl bg-white overflow-hidden",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "flex font-light rounded-t-xl text-white justify-between px-5 py-2 bg-primary overflow-hidden",
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "flex overflow-y-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "grid grid-cols-5 gap-0",
        children: children
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

/***/ }),

/***/ 46058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tabs": () => (/* binding */ Tabs),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52322);


function Tabs(_ref) {
  var children = _ref.children;
  var childrenWithProps = react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, function (child) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(child)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
        className: child.props['data-active'] ? 'w-full py-2 px-10 space-x-2 whitespace-nowrap text-center rounded-full cursor-pointer bg-grisclaro text-white text-md' : 'w-full py-2 px-10 space-x-2 whitespace-nowrap text-center bg-white rounded-full cursor-pointer hover:bg-grisclaro text-primary text-md'
      });
    }

    return child;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "flex bg-white py-1 px-2 space-x-2",
    children: childrenWithProps
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);

/***/ }),

/***/ 56584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Worker_fn)
/* harmony export */ });
function Worker_fn() {
  return new Worker(__webpack_require__.p + "workerReducer.worker.75ee06d7365287f6.es5.worker.js");
}

/***/ }),

/***/ 16182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ReactComponent": () => (/* binding */ ForwardRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgAngleDownSolid(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "angle-down",
    className: "svg-inline--fa fa-angle-down fa-w-10",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgAngleDownSolid);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJhbmdsZS1kb3duIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtYW5nbGUtZG93biBmYS13LTEwIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyMCA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE0MyAzNTIuM0w3IDIxNi4zYy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWwyMi42LTIyLjZjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsOTYuNCA5Ni40IDk2LjQtOTYuNGM5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwyMi42IDIyLjZjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlsLTEzNiAxMzZjLTkuMiA5LjQtMjQuNCA5LjQtMzMuOCAweiI+PC9wYXRoPjwvc3ZnPg==");


/***/ }),

/***/ 34688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ReactComponent": () => (/* binding */ ForwardRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgBellRegular(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "far",
    "data-icon": "bell",
    className: "svg-inline--fa fa-bell fa-w-14",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgBellRegular);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhciIgZGF0YS1pY29uPSJiZWxsIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtYmVsbCBmYS13LTE0IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQzOS4zOSAzNjIuMjljLTE5LjMyLTIwLjc2LTU1LjQ3LTUxLjk5LTU1LjQ3LTE1NC4yOSAwLTc3LjctNTQuNDgtMTM5LjktMTI3Ljk0LTE1NS4xNlYzMmMwLTE3LjY3LTE0LjMyLTMyLTMxLjk4LTMycy0zMS45OCAxNC4zMy0zMS45OCAzMnYyMC44NEMxMTguNTYgNjguMSA2NC4wOCAxMzAuMyA2NC4wOCAyMDhjMCAxMDIuMy0zNi4xNSAxMzMuNTMtNTUuNDcgMTU0LjI5LTYgNi40NS04LjY2IDE0LjE2LTguNjEgMjEuNzEuMTEgMTYuNCAxMi45OCAzMiAzMi4xIDMyaDM4My44YzE5LjEyIDAgMzItMTUuNiAzMi4xLTMyIC4wNS03LjU1LTIuNjEtMTUuMjctOC42MS0yMS43MXpNNjcuNTMgMzY4YzIxLjIyLTI3Ljk3IDQ0LjQyLTc0LjMzIDQ0LjUzLTE1OS40MiAwLS4yLS4wNi0uMzgtLjA2LS41OCAwLTYxLjg2IDUwLjE0LTExMiAxMTItMTEyczExMiA1MC4xNCAxMTIgMTEyYzAgLjItLjA2LjM4LS4wNi41OC4xMSA4NS4xIDIzLjMxIDEzMS40NiA0NC41MyAxNTkuNDJINjcuNTN6TTIyNCA1MTJjMzUuMzIgMCA2My45Ny0yOC42NSA2My45Ny02NEgxNjAuMDNjMCAzNS4zNSAyOC42NSA2NCA2My45NyA2NHoiPjwvcGF0aD48L3N2Zz4=");


/***/ }),

/***/ 38031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ReactComponent": () => (/* binding */ ForwardRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgCalculator(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    id: "Calculator",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 20 20",
    enableBackground: "new 0 0 20 20",
    xmlSpace: "preserve",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#111e6c",
    d: "M14.6,1H5.398C4.629,1,4,1.629,4,2.4v15.2C4,18.37,4.629,19,5.398,19H14.6c0.769,0,1.4-0.631,1.4-1.4V2.4 C16,1.629,15.369,1,14.6,1z M7,12c0.689,0,1.25,0.447,1.25,1S7.689,14,7,14c-0.69,0-1.25-0.447-1.25-1S6.31,12,7,12z M5.75,10 c0-0.553,0.56-1,1.25-1c0.689,0,1.25,0.447,1.25,1c0,0.553-0.561,1-1.25,1C6.31,11,5.75,10.553,5.75,10z M7,15 c0.689,0,1.25,0.447,1.25,1c0,0.553-0.561,1-1.25,1c-0.69,0-1.25-0.447-1.25-1S6.31,15,7,15z M10,12c0.689,0,1.25,0.447,1.25,1 s-0.561,1-1.25,1c-0.69,0-1.25-0.447-1.25-1S9.31,12,10,12z M8.75,10c0-0.553,0.56-1,1.25-1c0.689,0,1.25,0.447,1.25,1 c0,0.553-0.561,1-1.25,1C9.31,11,8.75,10.553,8.75,10z M10,15c0.689,0,1.25,0.447,1.25,1c0,0.553-0.561,1-1.25,1 c-0.69,0-1.25-0.447-1.25-1S9.31,15,10,15z M13,12c0.689,0,1.25,0.447,1.25,1s-0.561,1-1.25,1c-0.69,0-1.25-0.447-1.25-1 S12.31,12,13,12z M11.75,10c0-0.553,0.56-1,1.25-1c0.689,0,1.25,0.447,1.25,1c0,0.553-0.561,1-1.25,1 C12.31,11,11.75,10.553,11.75,10z M13,15c0.689,0,1.25,0.447,1.25,1c0,0.553-0.561,1-1.25,1c-0.69,0-1.25-0.447-1.25-1 S12.31,15,13,15z M5,7V4h10v3H5z"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgCalculator);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYWxjdWxhdG9yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKICAgICB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0iIzExMWU2YyIgZD0iTTE0LjYsMUg1LjM5OEM0LjYyOSwxLDQsMS42MjksNCwyLjR2MTUuMkM0LDE4LjM3LDQuNjI5LDE5LDUuMzk4LDE5SDE0LjZjMC43NjksMCwxLjQtMC42MzEsMS40LTEuNFYyLjQKCUMxNiwxLjYyOSwxNS4zNjksMSwxNC42LDF6IE03LDEyYzAuNjg5LDAsMS4yNSwwLjQ0NywxLjI1LDFTNy42ODksMTQsNywxNGMtMC42OSwwLTEuMjUtMC40NDctMS4yNS0xUzYuMzEsMTIsNywxMnogTTUuNzUsMTAKCWMwLTAuNTUzLDAuNTYtMSwxLjI1LTFjMC42ODksMCwxLjI1LDAuNDQ3LDEuMjUsMWMwLDAuNTUzLTAuNTYxLDEtMS4yNSwxQzYuMzEsMTEsNS43NSwxMC41NTMsNS43NSwxMHogTTcsMTUKCWMwLjY4OSwwLDEuMjUsMC40NDcsMS4yNSwxYzAsMC41NTMtMC41NjEsMS0xLjI1LDFjLTAuNjksMC0xLjI1LTAuNDQ3LTEuMjUtMVM2LjMxLDE1LDcsMTV6IE0xMCwxMmMwLjY4OSwwLDEuMjUsMC40NDcsMS4yNSwxCglzLTAuNTYxLDEtMS4yNSwxYy0wLjY5LDAtMS4yNS0wLjQ0Ny0xLjI1LTFTOS4zMSwxMiwxMCwxMnogTTguNzUsMTBjMC0wLjU1MywwLjU2LTEsMS4yNS0xYzAuNjg5LDAsMS4yNSwwLjQ0NywxLjI1LDEKCWMwLDAuNTUzLTAuNTYxLDEtMS4yNSwxQzkuMzEsMTEsOC43NSwxMC41NTMsOC43NSwxMHogTTEwLDE1YzAuNjg5LDAsMS4yNSwwLjQ0NywxLjI1LDFjMCwwLjU1My0wLjU2MSwxLTEuMjUsMQoJYy0wLjY5LDAtMS4yNS0wLjQ0Ny0xLjI1LTFTOS4zMSwxNSwxMCwxNXogTTEzLDEyYzAuNjg5LDAsMS4yNSwwLjQ0NywxLjI1LDFzLTAuNTYxLDEtMS4yNSwxYy0wLjY5LDAtMS4yNS0wLjQ0Ny0xLjI1LTEKCVMxMi4zMSwxMiwxMywxMnogTTExLjc1LDEwYzAtMC41NTMsMC41Ni0xLDEuMjUtMWMwLjY4OSwwLDEuMjUsMC40NDcsMS4yNSwxYzAsMC41NTMtMC41NjEsMS0xLjI1LDEKCUMxMi4zMSwxMSwxMS43NSwxMC41NTMsMTEuNzUsMTB6IE0xMywxNWMwLjY4OSwwLDEuMjUsMC40NDcsMS4yNSwxYzAsMC41NTMtMC41NjEsMS0xLjI1LDFjLTAuNjksMC0xLjI1LTAuNDQ3LTEuMjUtMQoJUzEyLjMxLDE1LDEzLDE1eiBNNSw3VjRoMTB2M0g1eiIvPgo8L3N2Zz4K");


/***/ }),

/***/ 74635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ReactComponent": () => (/* binding */ ForwardRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgClose(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    id: "Cross",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 20 20",
    enableBackground: "new 0 0 20 20",
    xmlSpace: "preserve",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#111e6c",
    d: "M14.348,14.849c-0.469,0.469-1.229,0.469-1.697,0L10,11.819l-2.651,3.029c-0.469,0.469-1.229,0.469-1.697,0 c-0.469-0.469-0.469-1.229,0-1.697l2.758-3.15L5.651,6.849c-0.469-0.469-0.469-1.228,0-1.697s1.228-0.469,1.697,0L10,8.183 l2.651-3.031c0.469-0.469,1.228-0.469,1.697,0s0.469,1.229,0,1.697l-2.758,3.152l2.758,3.15 C14.817,13.62,14.817,14.38,14.348,14.849z"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgClose);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDcm9zcyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgICAgdmlld0JveD0iMCAwIDIwIDIwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMCAyMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxwYXRoIGZpbGw9IiMxMTFlNmMiIGQ9Ik0xNC4zNDgsMTQuODQ5Yy0wLjQ2OSwwLjQ2OS0xLjIyOSwwLjQ2OS0xLjY5NywwTDEwLDExLjgxOWwtMi42NTEsMy4wMjljLTAuNDY5LDAuNDY5LTEuMjI5LDAuNDY5LTEuNjk3LDAKCWMtMC40NjktMC40NjktMC40NjktMS4yMjksMC0xLjY5N2wyLjc1OC0zLjE1TDUuNjUxLDYuODQ5Yy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCwwLTEuNjk3czEuMjI4LTAuNDY5LDEuNjk3LDBMMTAsOC4xODMKCWwyLjY1MS0zLjAzMWMwLjQ2OS0wLjQ2OSwxLjIyOC0wLjQ2OSwxLjY5NywwczAuNDY5LDEuMjI5LDAsMS42OTdsLTIuNzU4LDMuMTUybDIuNzU4LDMuMTUKCUMxNC44MTcsMTMuNjIsMTQuODE3LDE0LjM4LDE0LjM0OCwxNC44NDl6Ii8+Cjwvc3ZnPgo=");


/***/ }),

/***/ 17754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ReactComponent": () => (/* binding */ ForwardRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgColumnsSolid(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "columns",
    className: "svg-inline--fa fa-columns fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgColumnsSolid);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjb2x1bW5zIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtY29sdW1ucyBmYS13LTE2IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQ2NCAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5IDAgODB2MzUyYzAgMjYuNTEgMjEuNDkgNDggNDggNDhoNDE2YzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWODBjMC0yNi41MS0yMS40OS00OC00OC00OHpNMjI0IDQxNkg2NFYxNjBoMTYwdjI1NnptMjI0IDBIMjg4VjE2MGgxNjB2MjU2eiI+PC9wYXRoPjwvc3ZnPg==");


/***/ }),

/***/ 80768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ReactComponent": () => (/* binding */ ForwardRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgHelp(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    id: "Help",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 20 20",
    enableBackground: "new 0 0 20 20",
    xmlSpace: "preserve",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#FFFFFF",
    d: "M14.09,2.233C12.95,1.411,11.518,1,9.794,1C8.483,1,7.376,1.289,6.477,1.868 C5.05,2.774,4.292,4.313,4.2,6.483h3.307c0-0.633,0.185-1.24,0.553-1.828c0.369-0.586,0.995-0.879,1.878-0.879 c0.898,0,1.517,0.238,1.854,0.713C12.131,4.966,12.3,5.493,12.3,6.071c0,0.504-0.252,0.965-0.557,1.383 c-0.167,0.244-0.387,0.469-0.661,0.674c0,0-1.793,1.15-2.58,2.074c-0.456,0.535-0.497,1.338-0.538,2.488 c-0.002,0.082,0.029,0.252,0.315,0.252c0.287,0,2.316,0,2.571,0c0.256,0,0.309-0.189,0.312-0.274 c0.018-0.418,0.064-0.633,0.141-0.875c0.144-0.457,0.538-0.855,0.979-1.199l0.91-0.627c0.822-0.641,1.477-1.166,1.767-1.578 c0.494-0.676,0.842-1.51,0.842-2.5C15.8,4.274,15.23,3.057,14.09,2.233z M9.741,14.924c-1.139-0.035-2.079,0.754-2.115,1.99 c-0.035,1.234,0.858,2.051,1.998,2.084c1.189,0.035,2.104-0.727,2.141-1.963C11.799,15.799,10.931,14.959,9.741,14.924z"
  }))));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgHelp);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJIZWxwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKICAgICB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTQuMDksMi4yMzNDMTIuOTUsMS40MTEsMTEuNTE4LDEsOS43OTQsMUM4LjQ4MywxLDcuMzc2LDEuMjg5LDYuNDc3LDEuODY4CgkJQzUuMDUsMi43NzQsNC4yOTIsNC4zMTMsNC4yLDYuNDgzaDMuMzA3YzAtMC42MzMsMC4xODUtMS4yNCwwLjU1My0xLjgyOGMwLjM2OS0wLjU4NiwwLjk5NS0wLjg3OSwxLjg3OC0wLjg3OQoJCWMwLjg5OCwwLDEuNTE3LDAuMjM4LDEuODU0LDAuNzEzQzEyLjEzMSw0Ljk2NiwxMi4zLDUuNDkzLDEyLjMsNi4wNzFjMCwwLjUwNC0wLjI1MiwwLjk2NS0wLjU1NywxLjM4MwoJCWMtMC4xNjcsMC4yNDQtMC4zODcsMC40NjktMC42NjEsMC42NzRjMCwwLTEuNzkzLDEuMTUtMi41OCwyLjA3NGMtMC40NTYsMC41MzUtMC40OTcsMS4zMzgtMC41MzgsMi40ODgKCQljLTAuMDAyLDAuMDgyLDAuMDI5LDAuMjUyLDAuMzE1LDAuMjUyYzAuMjg3LDAsMi4zMTYsMCwyLjU3MSwwYzAuMjU2LDAsMC4zMDktMC4xODksMC4zMTItMC4yNzQKCQljMC4wMTgtMC40MTgsMC4wNjQtMC42MzMsMC4xNDEtMC44NzVjMC4xNDQtMC40NTcsMC41MzgtMC44NTUsMC45NzktMS4xOTlsMC45MS0wLjYyN2MwLjgyMi0wLjY0MSwxLjQ3Ny0xLjE2NiwxLjc2Ny0xLjU3OAoJCWMwLjQ5NC0wLjY3NiwwLjg0Mi0xLjUxLDAuODQyLTIuNUMxNS44LDQuMjc0LDE1LjIzLDMuMDU3LDE0LjA5LDIuMjMzeiBNOS43NDEsMTQuOTI0Yy0xLjEzOS0wLjAzNS0yLjA3OSwwLjc1NC0yLjExNSwxLjk5CgkJYy0wLjAzNSwxLjIzNCwwLjg1OCwyLjA1MSwxLjk5OCwyLjA4NGMxLjE4OSwwLjAzNSwyLjEwNC0wLjcyNywyLjE0MS0xLjk2M0MxMS43OTksMTUuNzk5LDEwLjkzMSwxNC45NTksOS43NDEsMTQuOTI0eiIvPgo8L2c+Cjwvc3ZnPgo=");


/***/ }),

/***/ 96898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ReactComponent": () => (/* binding */ ForwardRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgHomeSolid(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "home",
    className: "svg-inline--fa fa-home fa-w-18",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgHomeSolid);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJob21lIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtaG9tZSBmYS13LTE4IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDU3NiA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTI4MC4zNyAxNDguMjZMOTYgMzAwLjExVjQ2NGExNiAxNiAwIDAgMCAxNiAxNmwxMTIuMDYtLjI5YTE2IDE2IDAgMCAwIDE1LjkyLTE2VjM2OGExNiAxNiAwIDAgMSAxNi0xNmg2NGExNiAxNiAwIDAgMSAxNiAxNnY5NS42NGExNiAxNiAwIDAgMCAxNiAxNi4wNUw0NjQgNDgwYTE2IDE2IDAgMCAwIDE2LTE2VjMwMEwyOTUuNjcgMTQ4LjI2YTEyLjE5IDEyLjE5IDAgMCAwLTE1LjMgMHpNNTcxLjYgMjUxLjQ3TDQ4OCAxODIuNTZWNDQuMDVhMTIgMTIgMCAwIDAtMTItMTJoLTU2YTEyIDEyIDAgMCAwLTEyIDEydjcyLjYxTDMxOC40NyA0M2E0OCA0OCAwIDAgMC02MSAwTDQuMzQgMjUxLjQ3YTEyIDEyIDAgMCAwLTEuNiAxNi45bDI1LjUgMzFBMTIgMTIgMCAwIDAgNDUuMTUgMzAxbDIzNS4yMi0xOTMuNzRhMTIuMTkgMTIuMTkgMCAwIDEgMTUuMyAwTDUzMC45IDMwMWExMiAxMiAwIDAgMCAxNi45LTEuNmwyNS41LTMxYTEyIDEyIDAgMCAwLTEuNy0xNi45M3oiPjwvcGF0aD48L3N2Zz4=");


/***/ }),

/***/ 68053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ReactComponent": () => (/* binding */ ForwardRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgInfo(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    id: "Info",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 20 20",
    enableBackground: "new 0 0 20 20",
    xmlSpace: "preserve",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#FFFFFF",
    d: "M12.432,0c1.34,0,2.01,0.912,2.01,1.957c0,1.305-1.164,2.512-2.679,2.512c-1.269,0-2.009-0.75-1.974-1.99 C9.789,1.436,10.67,0,12.432,0z M8.309,20c-1.058,0-1.833-0.652-1.093-3.524l1.214-5.092c0.211-0.814,0.246-1.141,0-1.141 c-0.317,0-1.689,0.562-2.502,1.117L5.4,10.48c2.572-2.186,5.531-3.467,6.801-3.467c1.057,0,1.233,1.273,0.705,3.23l-1.391,5.352 c-0.246,0.945-0.141,1.271,0.106,1.271c0.317,0,1.357-0.392,2.379-1.207l0.6,0.814C12.098,19.02,9.365,20,8.309,20z"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgInfo);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJJbmZvIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKICAgICB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEyLjQzMiwwYzEuMzQsMCwyLjAxLDAuOTEyLDIuMDEsMS45NTdjMCwxLjMwNS0xLjE2NCwyLjUxMi0yLjY3OSwyLjUxMmMtMS4yNjksMC0yLjAwOS0wLjc1LTEuOTc0LTEuOTkKCUM5Ljc4OSwxLjQzNiwxMC42NywwLDEyLjQzMiwweiBNOC4zMDksMjBjLTEuMDU4LDAtMS44MzMtMC42NTItMS4wOTMtMy41MjRsMS4yMTQtNS4wOTJjMC4yMTEtMC44MTQsMC4yNDYtMS4xNDEsMC0xLjE0MQoJYy0wLjMxNywwLTEuNjg5LDAuNTYyLTIuNTAyLDEuMTE3TDUuNCwxMC40OGMyLjU3Mi0yLjE4Niw1LjUzMS0zLjQ2Nyw2LjgwMS0zLjQ2N2MxLjA1NywwLDEuMjMzLDEuMjczLDAuNzA1LDMuMjNsLTEuMzkxLDUuMzUyCgljLTAuMjQ2LDAuOTQ1LTAuMTQxLDEuMjcxLDAuMTA2LDEuMjcxYzAuMzE3LDAsMS4zNTctMC4zOTIsMi4zNzktMS4yMDdsMC42LDAuODE0QzEyLjA5OCwxOS4wMiw5LjM2NSwyMCw4LjMwOSwyMHoiLz4KPC9zdmc+Cg==");


/***/ }),

/***/ 13572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ReactComponent": () => (/* binding */ ForwardRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgLink(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    id: "Link",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 20 20",
    enableBackground: "new 0 0 20 20",
    xmlSpace: "preserve",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#FFFFFF",
    d: "M7.859,14.691l-0.81,0.805c-0.701,0.695-1.843,0.695-2.545,0c-0.336-0.334-0.521-0.779-0.521-1.252 s0.186-0.916,0.521-1.252l2.98-2.955c0.617-0.613,1.779-1.515,2.626-0.675c0.389,0.386,1.016,0.384,1.403-0.005 c0.385-0.389,0.383-1.017-0.006-1.402C10.069,6.527,7.941,6.791,6.088,8.63l-2.98,2.956C2.393,12.295,2,13.24,2,14.244 c0,1.006,0.394,1.949,1.108,2.658c0.736,0.73,1.702,1.096,2.669,1.096s1.934-0.365,2.669-1.096l0.811-0.805 c0.389-0.385,0.391-1.012,0.005-1.4C8.875,14.309,8.248,14.307,7.859,14.691z M16.891,3.207c-1.547-1.534-3.709-1.617-5.139-0.197 l-1.009,1.002c-0.389,0.386-0.392,1.013-0.006,1.401c0.386,0.389,1.013,0.391,1.402,0.005l1.01-1.001 c0.74-0.736,1.711-0.431,2.346,0.197c0.336,0.335,0.522,0.779,0.522,1.252s-0.186,0.917-0.522,1.251l-3.18,3.154 c-1.454,1.441-2.136,0.766-2.427,0.477c-0.389-0.386-1.016-0.383-1.401,0.005c-0.386,0.389-0.384,1.017,0.005,1.401 c0.668,0.662,1.43,0.99,2.228,0.99c0.977,0,2.01-0.492,2.993-1.467l3.18-3.153C17.605,7.814,18,6.87,18,5.866 C18,4.861,17.605,3.917,16.891,3.207z"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgLink);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKICAgICB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTcuODU5LDE0LjY5MWwtMC44MSwwLjgwNWMtMC43MDEsMC42OTUtMS44NDMsMC42OTUtMi41NDUsMGMtMC4zMzYtMC4zMzQtMC41MjEtMC43NzktMC41MjEtMS4yNTIKCXMwLjE4Ni0wLjkxNiwwLjUyMS0xLjI1MmwyLjk4LTIuOTU1YzAuNjE3LTAuNjEzLDEuNzc5LTEuNTE1LDIuNjI2LTAuNjc1YzAuMzg5LDAuMzg2LDEuMDE2LDAuMzg0LDEuNDAzLTAuMDA1CgljMC4zODUtMC4zODksMC4zODMtMS4wMTctMC4wMDYtMS40MDJDMTAuMDY5LDYuNTI3LDcuOTQxLDYuNzkxLDYuMDg4LDguNjNsLTIuOTgsMi45NTZDMi4zOTMsMTIuMjk1LDIsMTMuMjQsMiwxNC4yNDQKCWMwLDEuMDA2LDAuMzk0LDEuOTQ5LDEuMTA4LDIuNjU4YzAuNzM2LDAuNzMsMS43MDIsMS4wOTYsMi42NjksMS4wOTZzMS45MzQtMC4zNjUsMi42NjktMS4wOTZsMC44MTEtMC44MDUKCWMwLjM4OS0wLjM4NSwwLjM5MS0xLjAxMiwwLjAwNS0xLjRDOC44NzUsMTQuMzA5LDguMjQ4LDE0LjMwNyw3Ljg1OSwxNC42OTF6IE0xNi44OTEsMy4yMDdjLTEuNTQ3LTEuNTM0LTMuNzA5LTEuNjE3LTUuMTM5LTAuMTk3CglsLTEuMDA5LDEuMDAyYy0wLjM4OSwwLjM4Ni0wLjM5MiwxLjAxMy0wLjAwNiwxLjQwMWMwLjM4NiwwLjM4OSwxLjAxMywwLjM5MSwxLjQwMiwwLjAwNWwxLjAxLTEuMDAxCgljMC43NC0wLjczNiwxLjcxMS0wLjQzMSwyLjM0NiwwLjE5N2MwLjMzNiwwLjMzNSwwLjUyMiwwLjc3OSwwLjUyMiwxLjI1MnMtMC4xODYsMC45MTctMC41MjIsMS4yNTFsLTMuMTgsMy4xNTQKCWMtMS40NTQsMS40NDEtMi4xMzYsMC43NjYtMi40MjcsMC40NzdjLTAuMzg5LTAuMzg2LTEuMDE2LTAuMzgzLTEuNDAxLDAuMDA1Yy0wLjM4NiwwLjM4OS0wLjM4NCwxLjAxNywwLjAwNSwxLjQwMQoJYzAuNjY4LDAuNjYyLDEuNDMsMC45OSwyLjIyOCwwLjk5YzAuOTc3LDAsMi4wMS0wLjQ5MiwyLjk5My0xLjQ2N2wzLjE4LTMuMTUzQzE3LjYwNSw3LjgxNCwxOCw2Ljg3LDE4LDUuODY2CglDMTgsNC44NjEsMTcuNjA1LDMuOTE3LDE2Ljg5MSwzLjIwN3oiLz4KPC9zdmc+Cg==");


/***/ }),

/***/ 31582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ReactComponent": () => (/* binding */ ForwardRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgLogo(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "pizza-slice",
    className: "svg-inline--fa fa-pizza-slice fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "M158.87.15c-16.16-1.52-31.2 8.42-35.33 24.12l-14.81 56.27c187.62 5.49 314.54 130.61 322.48 317l56.94-15.78c15.72-4.36 25.49-19.68 23.62-35.9C490.89 165.08 340.78 17.32 158.87.15zm-58.47 112L.55 491.64a16.21 16.21 0 0 0 20 19.75l379-105.1c-4.27-174.89-123.08-292.14-299.15-294.1zM128 416a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm48-152a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm104 104a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgLogo);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJwaXp6YS1zbGljZSIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXBpenphLXNsaWNlIGZhLXctMTYiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE1OC44Ny4xNWMtMTYuMTYtMS41Mi0zMS4yIDguNDItMzUuMzMgMjQuMTJsLTE0LjgxIDU2LjI3YzE4Ny42MiA1LjQ5IDMxNC41NCAxMzAuNjEgMzIyLjQ4IDMxN2w1Ni45NC0xNS43OGMxNS43Mi00LjM2IDI1LjQ5LTE5LjY4IDIzLjYyLTM1LjlDNDkwLjg5IDE2NS4wOCAzNDAuNzggMTcuMzIgMTU4Ljg3LjE1em0tNTguNDcgMTEyTC41NSA0OTEuNjRhMTYuMjEgMTYuMjEgMCAwIDAgMjAgMTkuNzVsMzc5LTEwNS4xYy00LjI3LTE3NC44OS0xMjMuMDgtMjkyLjE0LTI5OS4xNS0yOTQuMXpNMTI4IDQxNmEzMiAzMiAwIDEgMSAzMi0zMiAzMiAzMiAwIDAgMS0zMiAzMnptNDgtMTUyYTMyIDMyIDAgMSAxIDMyLTMyIDMyIDMyIDAgMCAxLTMyIDMyem0xMDQgMTA0YTMyIDMyIDAgMSAxIDMyLTMyIDMyIDMyIDAgMCAxLTMyIDMyeiI+PC9wYXRoPjwvc3ZnPgo=");


/***/ }),

/***/ 93435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ReactComponent": () => (/* binding */ ForwardRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgMoneyCheckAltSolid(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "money-check-alt",
    className: "svg-inline--fa fa-money-check-alt fa-w-20",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 512",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M608 32H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM176 327.88V344c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-16.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V152c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07zM416 312c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16zm160 0c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-96c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h272c4.42 0 8 3.58 8 8v16z"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgMoneyCheckAltSolid);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJtb25leS1jaGVjay1hbHQiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1tb25leS1jaGVjay1hbHQgZmEtdy0yMCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik02MDggMzJIMzJDMTQuMzMgMzIgMCA0Ni4zMyAwIDY0djM4NGMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDU3NmMxNy42NyAwIDMyLTE0LjMzIDMyLTMyVjY0YzAtMTcuNjctMTQuMzMtMzItMzItMzJ6TTE3NiAzMjcuODhWMzQ0YzAgNC40Mi0zLjU4IDgtOCA4aC0xNmMtNC40MiAwLTgtMy41OC04LTh2LTE2LjI5Yy0xMS4yOS0uNTgtMjIuMjctNC41Mi0zMS4zNy0xMS4zNS0zLjktMi45My00LjEtOC43Ny0uNTctMTIuMTRsMTEuNzUtMTEuMjFjMi43Ny0yLjY0IDYuODktMi43NiAxMC4xMy0uNzMgMy44NyAyLjQyIDguMjYgMy43MiAxMi44MiAzLjcyaDI4LjExYzYuNSAwIDExLjgtNS45MiAxMS44LTEzLjE5IDAtNS45NS0zLjYxLTExLjE5LTguNzctMTIuNzNsLTQ1LTEzLjVjLTE4LjU5LTUuNTgtMzEuNTgtMjMuNDItMzEuNTgtNDMuMzkgMC0yNC41MiAxOS4wNS00NC40NCA0Mi42Ny00NS4wN1YxNTJjMC00LjQyIDMuNTgtOCA4LThoMTZjNC40MiAwIDggMy41OCA4IDh2MTYuMjljMTEuMjkuNTggMjIuMjcgNC41MSAzMS4zNyAxMS4zNSAzLjkgMi45MyA0LjEgOC43Ny41NyAxMi4xNGwtMTEuNzUgMTEuMjFjLTIuNzcgMi42NC02Ljg5IDIuNzYtMTAuMTMuNzMtMy44Ny0yLjQzLTguMjYtMy43Mi0xMi44Mi0zLjcyaC0yOC4xMWMtNi41IDAtMTEuOCA1LjkyLTExLjggMTMuMTkgMCA1Ljk1IDMuNjEgMTEuMTkgOC43NyAxMi43M2w0NSAxMy41YzE4LjU5IDUuNTggMzEuNTggMjMuNDIgMzEuNTggNDMuMzkgMCAyNC41My0xOS4wNSA0NC40NC00Mi42NyA0NS4wN3pNNDE2IDMxMmMwIDQuNDItMy41OCA4LTggOEgyOTZjLTQuNDIgMC04LTMuNTgtOC04di0xNmMwLTQuNDIgMy41OC04IDgtOGgxMTJjNC40MiAwIDggMy41OCA4IDh2MTZ6bTE2MCAwYzAgNC40Mi0zLjU4IDgtOCA4aC04MGMtNC40MiAwLTgtMy41OC04LTh2LTE2YzAtNC40MiAzLjU4LTggOC04aDgwYzQuNDIgMCA4IDMuNTggOCA4djE2em0wLTk2YzAgNC40Mi0zLjU4IDgtOCA4SDI5NmMtNC40MiAwLTgtMy41OC04LTh2LTE2YzAtNC40MiAzLjU4LTggOC04aDI3MmM0LjQyIDAgOCAzLjU4IDggOHYxNnoiPjwvcGF0aD48L3N2Zz4=");


/***/ }),

/***/ 53650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ReactComponent": () => (/* binding */ ForwardRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgPepperHotSolid(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "pepper-hot",
    className: "svg-inline--fa fa-pepper-hot fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M330.67 263.12V173.4l-52.75-24.22C219.44 218.76 197.58 400 56 400a56 56 0 0 0 0 112c212.64 0 370.65-122.87 419.18-210.34l-37.05-38.54zm131.09-128.37C493.92 74.91 477.18 26.48 458.62 3a8 8 0 0 0-11.93-.59l-22.9 23a8.06 8.06 0 0 0-.89 10.23c6.86 10.36 17.05 35.1-1.4 72.32A142.85 142.85 0 0 0 364.34 96c-28 0-54 8.54-76.34 22.59l74.67 34.29v78.24h89.09L506.44 288c3.26-12.62 5.56-25.63 5.56-39.31a154 154 0 0 0-50.24-113.94z"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgPepperHotSolid);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJwZXBwZXItaG90IiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtcGVwcGVyLWhvdCBmYS13LTE2IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTMzMC42NyAyNjMuMTJWMTczLjRsLTUyLjc1LTI0LjIyQzIxOS40NCAyMTguNzYgMTk3LjU4IDQwMCA1NiA0MDBhNTYgNTYgMCAwIDAgMCAxMTJjMjEyLjY0IDAgMzcwLjY1LTEyMi44NyA0MTkuMTgtMjEwLjM0bC0zNy4wNS0zOC41NHptMTMxLjA5LTEyOC4zN0M0OTMuOTIgNzQuOTEgNDc3LjE4IDI2LjQ4IDQ1OC42MiAzYTggOCAwIDAgMC0xMS45My0uNTlsLTIyLjkgMjNhOC4wNiA4LjA2IDAgMCAwLS44OSAxMC4yM2M2Ljg2IDEwLjM2IDE3LjA1IDM1LjEtMS40IDcyLjMyQTE0Mi44NSAxNDIuODUgMCAwIDAgMzY0LjM0IDk2Yy0yOCAwLTU0IDguNTQtNzYuMzQgMjIuNTlsNzQuNjcgMzQuMjl2NzguMjRoODkuMDlMNTA2LjQ0IDI4OGMzLjI2LTEyLjYyIDUuNTYtMjUuNjMgNS41Ni0zOS4zMWExNTQgMTU0IDAgMCAwLTUwLjI0LTExMy45NHoiPjwvcGF0aD48L3N2Zz4=");


/***/ }),

/***/ 36661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ReactComponent": () => (/* binding */ ForwardRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgPizzaSliceSolid(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "pizza-slice",
    className: "svg-inline--fa fa-pizza-slice fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M158.87.15c-16.16-1.52-31.2 8.42-35.33 24.12l-14.81 56.27c187.62 5.49 314.54 130.61 322.48 317l56.94-15.78c15.72-4.36 25.49-19.68 23.62-35.9C490.89 165.08 340.78 17.32 158.87.15zm-58.47 112L.55 491.64a16.21 16.21 0 0 0 20 19.75l379-105.1c-4.27-174.89-123.08-292.14-299.15-294.1zM128 416a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm48-152a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm104 104a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgPizzaSliceSolid);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJwaXp6YS1zbGljZSIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXBpenphLXNsaWNlIGZhLXctMTYiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTU4Ljg3LjE1Yy0xNi4xNi0xLjUyLTMxLjIgOC40Mi0zNS4zMyAyNC4xMmwtMTQuODEgNTYuMjdjMTg3LjYyIDUuNDkgMzE0LjU0IDEzMC42MSAzMjIuNDggMzE3bDU2Ljk0LTE1Ljc4YzE1LjcyLTQuMzYgMjUuNDktMTkuNjggMjMuNjItMzUuOUM0OTAuODkgMTY1LjA4IDM0MC43OCAxNy4zMiAxNTguODcuMTV6bS01OC40NyAxMTJMLjU1IDQ5MS42NGExNi4yMSAxNi4yMSAwIDAgMCAyMCAxOS43NWwzNzktMTA1LjFjLTQuMjctMTc0Ljg5LTEyMy4wOC0yOTIuMTQtMjk5LjE1LTI5NC4xek0xMjggNDE2YTMyIDMyIDAgMSAxIDMyLTMyIDMyIDMyIDAgMCAxLTMyIDMyem00OC0xNTJhMzIgMzIgMCAxIDEgMzItMzIgMzIgMzIgMCAwIDEtMzIgMzJ6bTEwNCAxMDRhMzIgMzIgMCAxIDEgMzItMzIgMzIgMzIgMCAwIDEtMzIgMzJ6Ij48L3BhdGg+PC9zdmc+");


/***/ }),

/***/ 25674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ReactComponent": () => (/* binding */ ForwardRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgPlusSolid(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "plus",
    className: "svg-inline--fa fa-plus fa-w-14",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgPlusSolid);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJwbHVzIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtcGx1cyBmYS13LTE0IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQxNiAyMDhIMjcyVjY0YzAtMTcuNjctMTQuMzMtMzItMzItMzJoLTMyYy0xNy42NyAwLTMyIDE0LjMzLTMyIDMydjE0NEgzMmMtMTcuNjcgMC0zMiAxNC4zMy0zMiAzMnYzMmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDE0NHYxNDRjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmgzMmMxNy42NyAwIDMyLTE0LjMzIDMyLTMyVjMwNGgxNDRjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnYtMzJjMC0xNy42Ny0xNC4zMy0zMi0zMi0zMnoiPjwvcGF0aD48L3N2Zz4=");


/***/ }),

/***/ 32544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ReactComponent": () => (/* binding */ ForwardRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgSearchSolid(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "search",
    className: "svg-inline--fa fa-search fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgSearchSolid);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJzZWFyY2giIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1zZWFyY2ggZmEtdy0xNiIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik01MDUgNDQyLjdMNDA1LjMgMzQzYy00LjUtNC41LTEwLjYtNy0xNy03SDM3MmMyNy42LTM1LjMgNDQtNzkuNyA0NC0xMjhDNDE2IDkzLjEgMzIyLjkgMCAyMDggMFMwIDkzLjEgMCAyMDhzOTMuMSAyMDggMjA4IDIwOGM0OC4zIDAgOTIuNy0xNi40IDEyOC00NHYxNi4zYzAgNi40IDIuNSAxMi41IDcgMTdsOTkuNyA5OS43YzkuNCA5LjQgMjQuNiA5LjQgMzMuOSAwbDI4LjMtMjguM2M5LjQtOS40IDkuNC0yNC42LjEtMzR6TTIwOCAzMzZjLTcwLjcgMC0xMjgtNTcuMi0xMjgtMTI4IDAtNzAuNyA1Ny4yLTEyOCAxMjgtMTI4IDcwLjcgMCAxMjggNTcuMiAxMjggMTI4IDAgNzAuNy01Ny4yIDEyOC0xMjggMTI4eiI+PC9wYXRoPjwvc3ZnPg==");


/***/ }),

/***/ 22142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ReactComponent": () => (/* binding */ ForwardRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgSignOutAltSolid(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "sign-out-alt",
    className: "svg-inline--fa fa-sign-out-alt fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgSignOutAltSolid);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,dDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0ic2lnbi1vdXQtYWx0IiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtc2lnbi1vdXQtYWx0IGZhLXctMTYiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDk3IDI3M0wzMjkgNDQxYy0xNSAxNS00MSA0LjUtNDEtMTd2LTk2SDE1MmMtMTMuMyAwLTI0LTEwLjctMjQtMjR2LTk2YzAtMTMuMyAxMC43LTI0IDI0LTI0aDEzNlY4OGMwLTIxLjQgMjUuOS0zMiA0MS0xN2wxNjggMTY4YzkuMyA5LjQgOS4zIDI0LjYgMCAzNHpNMTkyIDQzNnYtNDBjMC02LjYtNS40LTEyLTEyLTEySDk2Yy0xNy43IDAtMzItMTQuMy0zMi0zMlYxNjBjMC0xNy43IDE0LjMtMzIgMzItMzJoODRjNi42IDAgMTItNS40IDEyLTEyVjc2YzAtNi42LTUuNC0xMi0xMi0xMkg5NmMtNTMgMC05NiA0My05NiA5NnYxOTJjMCA1MyA0MyA5NiA5NiA5Nmg4NGM2LjYgMCAxMi01LjQgMTItMTJ6Ij48L3BhdGg+PC9zdmc+Cg==");


/***/ }),

/***/ 10173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ReactComponent": () => (/* binding */ ForwardRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgSoundMix(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    id: "Sound_mix",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 20 20",
    enableBackground: "new 0 0 20 20",
    xmlSpace: "preserve",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#111e6c",
    d: "M5,1.6C5,1.047,4.552,1,4,1C3.447,1,3,1.047,3,1.6V10h2V1.6z M3,18.4C3,18.951,3.447,19,4,19 c0.552,0,1-0.049,1-0.6V15H3V18.4z M6.399,11h-4.8C1.046,11,1,11.448,1,12v1c0,0.553,0.046,1,0.599,1H6.4C6.95,14,7,13.553,7,13v-1 C7,11.448,6.95,11,6.399,11z M18.399,12h-4.801C13.046,12,13,12.448,13,13v1c0,0.553,0.046,1,0.599,1H18.4c0.55,0,0.6-0.447,0.6-1 v-1C19,12.448,18.95,12,18.399,12z M13,7c0-0.552-0.05-1-0.601-1h-4.8C7.046,6,7,6.448,7,7v1c0,0.553,0.046,1,0.599,1H12.4 C12.95,9,13,8.553,13,8V7z M11,1.6C11,1.047,10.552,1,10,1C9.447,1,9,1.047,9,1.6V5h2V1.6z M9,18.4c0,0.551,0.447,0.6,1,0.6 c0.552,0,1-0.049,1-0.6V10H9V18.4z M17,1.6C17,1.047,16.552,1,16,1c-0.553,0-1,0.047-1,0.6V11h2V1.6z M15,18.4 c0,0.551,0.447,0.6,1,0.6c0.552,0,1-0.049,1-0.6V16h-2V18.4z"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgSoundMix);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJTb3VuZF9taXgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgIHZpZXdCb3g9IjAgMCAyMCAyMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgMjAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjMTExZTZjIiBkPSJNNSwxLjZDNSwxLjA0Nyw0LjU1MiwxLDQsMUMzLjQ0NywxLDMsMS4wNDcsMywxLjZWMTBoMlYxLjZ6IE0zLDE4LjRDMywxOC45NTEsMy40NDcsMTksNCwxOQoJYzAuNTUyLDAsMS0wLjA0OSwxLTAuNlYxNUgzVjE4LjR6IE02LjM5OSwxMWgtNC44QzEuMDQ2LDExLDEsMTEuNDQ4LDEsMTJ2MWMwLDAuNTUzLDAuMDQ2LDEsMC41OTksMUg2LjRDNi45NSwxNCw3LDEzLjU1Myw3LDEzdi0xCglDNywxMS40NDgsNi45NSwxMSw2LjM5OSwxMXogTTE4LjM5OSwxMmgtNC44MDFDMTMuMDQ2LDEyLDEzLDEyLjQ0OCwxMywxM3YxYzAsMC41NTMsMC4wNDYsMSwwLjU5OSwxSDE4LjRjMC41NSwwLDAuNi0wLjQ0NywwLjYtMQoJdi0xQzE5LDEyLjQ0OCwxOC45NSwxMiwxOC4zOTksMTJ6IE0xMyw3YzAtMC41NTItMC4wNS0xLTAuNjAxLTFoLTQuOEM3LjA0Niw2LDcsNi40NDgsNyw3djFjMCwwLjU1MywwLjA0NiwxLDAuNTk5LDFIMTIuNAoJQzEyLjk1LDksMTMsOC41NTMsMTMsOFY3eiBNMTEsMS42QzExLDEuMDQ3LDEwLjU1MiwxLDEwLDFDOS40NDcsMSw5LDEuMDQ3LDksMS42VjVoMlYxLjZ6IE05LDE4LjRjMCwwLjU1MSwwLjQ0NywwLjYsMSwwLjYKCWMwLjU1MiwwLDEtMC4wNDksMS0wLjZWMTBIOVYxOC40eiBNMTcsMS42QzE3LDEuMDQ3LDE2LjU1MiwxLDE2LDFjLTAuNTUzLDAtMSwwLjA0Ny0xLDAuNlYxMWgyVjEuNnogTTE1LDE4LjQKCWMwLDAuNTUxLDAuNDQ3LDAuNiwxLDAuNmMwLjU1MiwwLDEtMC4wNDksMS0wLjZWMTZoLTJWMTguNHoiLz4KPC9zdmc+Cg==");


/***/ }),

/***/ 52583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ReactComponent": () => (/* binding */ ForwardRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgToolsSolid(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "tools",
    className: "svg-inline--fa fa-tools fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgToolsSolid);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJ0b29scyIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXRvb2xzIGZhLXctMTYiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNTAxLjEgMzk1LjdMMzg0IDI3OC42Yy0yMy4xLTIzLjEtNTcuNi0yNy42LTg1LjQtMTMuOUwxOTIgMTU4LjFWOTZMNjQgMCAwIDY0bDk2IDEyOGg2Mi4xbDEwNi42IDEwNi42Yy0xMy42IDI3LjgtOS4yIDYyLjMgMTMuOSA4NS40bDExNy4xIDExNy4xYzE0LjYgMTQuNiAzOC4yIDE0LjYgNTIuNyAwbDUyLjctNTIuN2MxNC41LTE0LjYgMTQuNS0zOC4yIDAtNTIuN3pNMzMxLjcgMjI1YzI4LjMgMCA1NC45IDExIDc0LjkgMzFsMTkuNCAxOS40YzE1LjgtNi45IDMwLjgtMTYuNSA0My44LTI5LjUgMzcuMS0zNy4xIDQ5LjctODkuMyAzNy45LTEzNi43LTIuMi05LTEzLjUtMTIuMS0yMC4xLTUuNWwtNzQuNCA3NC40LTY3LjktMTEuM0wzMzQgOTguOWw3NC40LTc0LjRjNi42LTYuNiAzLjQtMTcuOS01LjctMjAuMi00Ny40LTExLjctOTkuNi45LTEzNi42IDM3LjktMjguNSAyOC41LTQxLjkgNjYuMS00MS4yIDEwMy42bDgyLjEgODIuMWM4LjEtMS45IDE2LjUtMi45IDI0LjctMi45em0tMTAzLjkgODJsLTU2LjctNTYuN0wxOC43IDQwMi44Yy0yNSAyNS0yNSA2NS41IDAgOTAuNXM2NS41IDI1IDkwLjUgMGwxMjMuNi0xMjMuNmMtNy42LTE5LjktOS45LTQxLjYtNS02Mi43ek02NCA0NzJjLTEzLjIgMC0yNC0xMC44LTI0LTI0IDAtMTMuMyAxMC43LTI0IDI0LTI0czI0IDEwLjcgMjQgMjRjMCAxMy4yLTEwLjcgMjQtMjQgMjR6Ij48L3BhdGg+PC9zdmc+");


/***/ }),

/***/ 37320:
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 11837:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_require__(37320);var f=__webpack_require__(82820),g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 52322:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(11837);
} else {}


/***/ }),

/***/ 18717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__DO_NOT_USE__ActionTypes": () => (/* binding */ ActionTypes),
/* harmony export */   "applyMiddleware": () => (/* binding */ applyMiddleware),
/* harmony export */   "bindActionCreators": () => (/* binding */ bindActionCreators),
/* harmony export */   "combineReducers": () => (/* binding */ combineReducers),
/* harmony export */   "compose": () => (/* binding */ compose),
/* harmony export */   "createStore": () => (/* binding */ createStore)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33028);


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (false) {}

  return typeOfVal;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( true ? formatProdErrorMessage(0) : 0);
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(1) : 0);
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( true ? formatProdErrorMessage(2) : 0);
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(3) : 0);
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( true ? formatProdErrorMessage(4) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(5) : 0);
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( true ? formatProdErrorMessage(6) : 0);
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( true ? formatProdErrorMessage(7) : 0);
    }

    if (typeof action.type === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(8) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(9) : 0);
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(10) : 0);
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( true ? formatProdErrorMessage(11) : 0);
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(12) : 0);
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(13) : 0);
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( true ? formatProdErrorMessage(14) : 0);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( true ? formatProdErrorMessage(16) : 0);
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( true ? formatProdErrorMessage(15) : 0);
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}




/***/ }),

/***/ 87406:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var moduleMap = {
	"./Store": () => {
		return Promise.resolve().then(() => (() => ((__webpack_require__(71061)))));
	},
	"./Logo": () => {
		return Promise.resolve().then(() => (() => ((__webpack_require__(19712)))));
	},
	"./Home": () => {
		return Promise.resolve().then(() => (() => ((__webpack_require__(75610)))));
	}
};
var get = (module, getScope) => {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(() => {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = (shareScope, initScope) => {
	if (!__webpack_require__.S) return;
	var oldScope = __webpack_require__.S["default"];
	var name = "default"
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: () => (get),
	init: () => (init)
});

/***/ }),

/***/ 56666:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ 33028:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectSpread2)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56666);


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(65526), __webpack_exec__(87406));
/******/ main = __webpack_exports__;
/******/ }
]);