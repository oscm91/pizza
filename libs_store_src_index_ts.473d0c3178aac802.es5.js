"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["libs_store_src_index_ts"],{

/***/ 1061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actions": () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.actions),
/* harmony export */   "facade": () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.facade),
/* harmony export */   "getStore": () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.getStore)
/* harmony export */ });
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7881);


/***/ }),

/***/ 9163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 5183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 7448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addpayments": () => (/* binding */ addpayments),
/* harmony export */   "getpayments": () => (/* binding */ getpayments),
/* harmony export */   "paymentsTableFormat": () => (/* binding */ paymentsTableFormat),
/* harmony export */   "paymentsTableFilter": () => (/* binding */ paymentsTableFilter)
/* harmony export */ });
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1954);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2543);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9163);



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

/***/ 456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4792);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7448);




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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "suma": () => (/* binding */ suma)
/* harmony export */ });
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9163);

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

/***/ 1396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setName": () => (/* binding */ setName),
/* harmony export */   "saveProduct": () => (/* binding */ saveProduct),
/* harmony export */   "addMass": () => (/* binding */ addMass),
/* harmony export */   "removeMass": () => (/* binding */ removeMass),
/* harmony export */   "addIngredient": () => (/* binding */ addIngredient),
/* harmony export */   "removeIngredient": () => (/* binding */ removeIngredient)
/* harmony export */ });
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1954);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2543);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9163);



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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4792);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1396);


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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9163);

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

/***/ 9883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8717);
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

/***/ 7881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStore": () => (/* binding */ getStore),
/* harmony export */   "actions": () => (/* binding */ actions),
/* harmony export */   "facade": () => (/* binding */ facade)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8717);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3292);
/* harmony import */ var redux_localstorage_simple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6659);
/* harmony import */ var _middleware_workerMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5183);
/* harmony import */ var _worker_rootAsyncReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7096);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9883);
/* harmony import */ var _reducers_payments_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(456);
/* harmony import */ var _reducers_products_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8111);
/* harmony import */ var _reducers_payments_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7448);









var composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || redux__WEBPACK_IMPORTED_MODULE_0__.compose;

function getStore(initialState) {
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_5__["default"], initialState, composeEnhancers((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((0,redux_localstorage_simple__WEBPACK_IMPORTED_MODULE_2__.save)(), (0,_middleware_workerMiddleware__WEBPACK_IMPORTED_MODULE_3__.withAsyncReducer)(_worker_rootAsyncReducer__WEBPACK_IMPORTED_MODULE_4__["default"]), redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"])));
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

/***/ 7096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1954);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2543);
/* harmony import */ var _Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_oscar_mora_Documents_chapter_pizza_node_modules_nrwl_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(758);
/* harmony import */ var _reducers_workerReducer_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6584);


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

/***/ 6584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Worker_fn)
/* harmony export */ });
function Worker_fn() {
  return new Worker(__webpack_require__.p + "workerReducer.worker.0e3c6f7e1829fd58.es5.worker.js");
}

/***/ })

}]);