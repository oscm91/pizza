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
const PAYMENTS_TABLE_FORMAT = '@@PAYMENTS/TABLE/FORMAT';
const PAYMENTS_TABLE_FILTER = '@@PAYMENTS/TABLE/FILTER';
const PAYMENTS_TABLE_UPDATE = '@@PAYMENTS/TABLE/UPDATE'; // product Actions

const PRODUCTS_ADD_INGREDIENT = '@@PRODUCTS/ADD/INGREDIENT';
const PRODUCTS_REMOVE_INGREDIENT = '@@PRODUCTS/REMOVE/INGREDIENT';
const PRODUCTS_ADD_MASS = '@@PRODUCTS/ADD/MASS';
const PRODUCTS_REMOVE_MASS = '@@PRODUCTS/REMOVE/MASS';
const PRODUCTS_SET_NAME = '@@PRODUCTS/SET/NAME';
const PRODUCTS_UPDATE = '@@PRODUCTS/UPDATE';
const PRODUCTS_SAVE = '@@PRODUCTS/SAVE';

/***/ }),

/***/ 5183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ workerMiddleware),
/* harmony export */   "withAsyncReducer": () => (/* binding */ createWorkerMiddleware)
/* harmony export */ });
function createWorkerMiddleware(getAsyncReducer) {
  return ({
    dispatch,
    getState
  }) => next => action => {
    if (typeof action === 'function' && action.worker) {
      return action(dispatch, getState, getAsyncReducer);
    }

    return next(action);
  };
}

const workerMiddleware = createWorkerMiddleware(() => undefined);


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
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9163);

const addpayments = (payment, filters) => {
  const action = async (dispatch, getState) => {
    const state = getState();
    const paymentsData = [].concat(state.payments.data, payment);
    dispatch({
      type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PAYMENTS_TABLE_UPDATE,
      payload: {
        data: paymentsData,
        normalized: [],
        filtered: []
      }
    });
    dispatch(paymentsTableFormat(paymentsData, filters));
  };

  return action;
};
const getpayments = (search, filters) => {
  const action = async (dispatch, getState) => {
    const state = getState();
    const paymentsData = state.payments.data;
    dispatch({
      type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PAYMENTS_TABLE_UPDATE,
      payload: {
        data: [],
        normalized: [],
        filtered: []
      }
    });
    const response = await new Promise(resolve => {
      setTimeout(() => {
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
    dispatch({
      type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PAYMENTS_TABLE_UPDATE,
      payload: {
        data: response,
        normalized: [],
        filtered: []
      }
    });
    const payments = getState().payments.data;
    dispatch(paymentsTableFormat(payments, filters));
  };

  return action;
};
const paymentsTableFormat = (payments, filters) => {
  const action = async (dispatch, getState, getAsyncReducer) => {
    dispatch({
      type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PAYMENTS_TABLE_UPDATE,
      payload: {
        data: [],
        normalized: [],
        filtered: []
      }
    });
    const asyncReducer = await getAsyncReducer();
    const tempState = await asyncReducer(getState(), {
      type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PAYMENTS_TABLE_FORMAT,
      payload: {
        payments
      }
    });
    const newState = await asyncReducer(tempState, {
      type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PAYMENTS_TABLE_FILTER,
      payload: {
        payments: tempState.payments.normalized,
        filters
      }
    });
    dispatch({
      type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PAYMENTS_TABLE_UPDATE,
      payload: newState.payments
    });
  };

  action.worker = true;
  return action;
};
const paymentsTableFilter = (payments, filters) => {
  const action = async (dispatch, getState, getAsyncReducer) => {
    dispatch({
      type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PAYMENTS_TABLE_UPDATE,
      payload: Object.assign({}, payments, {
        filtered: []
      })
    });
    const asyncReducer = await getAsyncReducer();
    const result = await asyncReducer(getState(), {
      type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PAYMENTS_TABLE_FILTER,
      payload: {
        payments,
        filters
      }
    });
    dispatch({
      type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PAYMENTS_TABLE_UPDATE,
      payload: result.payments
    });
  };

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
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const payments = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => Object.assign({}, state['payments'], {
    list: state['products'].list
  }));
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('today');
  const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [buyer, setBuyer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  return {
    getSearch: () => search,
    setSearch: value => setSearch(value),
    checkFilter: nameFilter => {
      return filters.includes(nameFilter);
    },
    setFilters: (nameFilter, value) => {
      if (value) {
        setFilters(Array.from(new Set([].concat(nameFilter, filters))));
      } else {
        setFilters(Array.from(new Set([].concat(nameFilter, filters))).filter(filter => filter !== nameFilter));
      }
    },
    getData: search => {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.getpayments)(search, filters));
    },
    filter: () => {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.paymentsTableFilter)(payments.normalized, filters));
    },
    getState: () => payments,
    getTotal: () => total,
    setTotal: () => setTotal,
    buyer,
    product,
    setBuyer,
    setProduct,
    total: (payments.data || []).reduce((total, payment) => total + (payment.payment_value || 0), 0),
    sellProduct: () => {
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

const initialState = {
  data: [],
  normalized: [],
  filtered: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PAYMENTS_TABLE_FORMAT:
      {
        const normalized = Object.values(payload.payments).map(payments => {
          return Object.assign({}, payments, {
            date: payments.created_date,
            amount: `$${payments.payment_value}`,
            deductions: `-$${payments.payment_due}`
          });
        });
        return Object.assign({}, state, {
          data: payload.payments,
          normalized
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
          filtered: payload.payments.filter(payments => payload.filters.includes(payments.payment_type))
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
const suma = (a, b) => a + b;

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
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9163);

const setName = name => {
  const action = async (dispatch, getState) => {
    dispatch({
      type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_SET_NAME,
      payload: name
    });
  };

  return action;
};
const saveProduct = () => {
  const action = async (dispatch, getState) => {
    dispatch({
      type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_SAVE,
      payload: undefined
    });
  };

  return action;
};
const addMass = nameMass => {
  const action = async (dispatch, getState, getAsyncReducer) => {
    const asyncReducer = await getAsyncReducer();
    const tempState = await asyncReducer(getState(), {
      type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_ADD_MASS,
      payload: nameMass
    });
    dispatch({
      type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_UPDATE,
      payload: tempState.products
    });
  };

  action.worker = true;
  return action;
};
const removeMass = nameMass => {
  const action = async (dispatch, getState, getAsyncReducer) => {
    const asyncReducer = await getAsyncReducer();
    const tempState = await asyncReducer(getState(), {
      type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_REMOVE_MASS,
      payload: nameMass
    });
    dispatch({
      type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_UPDATE,
      payload: tempState.products
    });
  };

  action.worker = true;
  return action;
};
const addIngredient = nameIngredient => {
  const action = async (dispatch, getState, getAsyncReducer) => {
    const asyncReducer = await getAsyncReducer();
    const tempState = await asyncReducer(getState(), {
      type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_ADD_INGREDIENT,
      payload: nameIngredient
    });
    dispatch({
      type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_UPDATE,
      payload: tempState.products
    });
  };

  action.worker = true;
  return action;
};
const removeIngredient = nameIngredient => {
  const action = async (dispatch, getState, getAsyncReducer) => {
    const asyncReducer = await getAsyncReducer();
    const tempState = await asyncReducer(getState(), {
      type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_REMOVE_INGREDIENT,
      payload: nameIngredient
    });
    dispatch({
      type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_UPDATE,
      payload: tempState.products
    });
  };

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const products = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state['products']);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  return {
    removeIngredient: name => {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.removeIngredient)(name));
    },
    addIngredient: name => {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.addIngredient)(name));
    },
    removeMass: name => {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.removeMass)(name));
    },
    addMass: name => {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.addMass)(name));
    },
    setName: name => {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.setName)(name));
    },
    saveProduct: () => {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.saveProduct)());
    },
    getState: () => products
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

const initialState = {
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

const getPrice = (mass, ingredients) => {
  const massPrice = mass && mass.price || 0;
  const ingredientsPrice = ingredients && ingredients.length ? ingredients.reduce((total, ingredient) => {
    return total + (ingredient.price || 0);
  }, 0) : 0;
  return massPrice + ingredientsPrice;
};

const getResume = (mass, ingredients) => {
  const resume = [];

  if (mass) {
    resume.push(Object.assign({}, mass, {
      type: 'mass',
      quantity: 1
    }));
  }

  if (ingredients && ingredients.length) {
    const resumeIngredients = ingredients.reduce((resume, ingredient) => {
      const resumeIngredient = resume[ingredient.name] || {};
      return Object.assign({}, resume, {
        [ingredient.name]: Object.assign({}, ingredient, {
          price: (resumeIngredient.price || 0) + ingredient.price,
          type: 'ingredient',
          quantity: (resumeIngredient.quantity || 0) + 1
        })
      });
    }, {});
    resume.push(...Object.values(resumeIngredients));
  }

  return resume;
};

const isComplete = (name, mass, ingredients) => {
  return !!(name && mass && ingredients && ingredients.length);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, {
  type,
  payload
}) => {
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
        const nameBase = payload;
        const mass = state.mass.find(mass => mass.name === nameBase);
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
        const mass = undefined;
        return Object.assign({}, state, {
          product: Object.assign({}, state.product, {
            mass: mass,
            price: getPrice(mass, state.product.ingredients),
            resume: getResume(mass, state.product.ingredients),
            isCompleted: isComplete(state.product.name, mass, state.product.ingredients)
          })
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_ADD_INGREDIENT:
      {
        const nameBase = payload;
        const ingredient = state.ingredients.find(ingredient => ingredient.name === nameBase);
        const ingredients = [].concat(state.product.ingredients, ingredient);
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
        const nameBase = payload;
        const ingredient = state.ingredients.find(ingredient => ingredient.name === nameBase);
        let isRemoved = false;
        const ingredients = state.product.ingredients.filter(item => {
          if (item.name === ingredient.name && !isRemoved) {
            isRemoved = true;
            return false;
          }

          return true;
        });
        return Object.assign({}, state, {
          product: Object.assign({}, state.product, {
            ingredients: ingredients,
            price: getPrice(state.product.mass, ingredients),
            resume: getResume(state.product.mass, ingredients),
            isCompleted: isComplete(state.product.name, state.product.mass, ingredients)
          })
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_SAVE:
      {
        return Object.assign({}, state, {
          list: Object.assign({}, state.list, {
            [state.product.name]: state.product
          }),
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



const appReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  payments: _payments_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  products: _products_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});

const rootReducer = (state, action) => {
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









const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || redux__WEBPACK_IMPORTED_MODULE_0__.compose;

function getStore(initialState) {
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_5__["default"], initialState, composeEnhancers((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((0,redux_localstorage_simple__WEBPACK_IMPORTED_MODULE_2__.save)(), (0,_middleware_workerMiddleware__WEBPACK_IMPORTED_MODULE_3__.withAsyncReducer)(_worker_rootAsyncReducer__WEBPACK_IMPORTED_MODULE_4__["default"]), redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"])));
}

const actions = {
  paymentsTableFormat: _reducers_payments_actions__WEBPACK_IMPORTED_MODULE_8__.paymentsTableFormat,
  paymentsTableFilter: _reducers_payments_actions__WEBPACK_IMPORTED_MODULE_8__.paymentsTableFilter
};
const facade = {
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
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(758);
/* harmony import */ var _reducers_workerReducer_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6584);
 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore


const worker = new _reducers_workerReducer_worker__WEBPACK_IMPORTED_MODULE_1__["default"]();
let singletonWorker = null;
let singletonBlocker = false;

async function getAsyncReducer() {
  if (!singletonWorker && !singletonBlocker) {
    singletonBlocker = true;
    singletonWorker = await (0,comlink__WEBPACK_IMPORTED_MODULE_0__.wrap)(worker);
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(singletonWorker);
    }, 0);
  });
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
  return new Worker(__webpack_require__.p + "workerReducer.worker.b3792cfd6e1055c7.esm.worker.js");
}

/***/ })

}]);