import {
  PRODUCTS_ADD_INGREDIENT,
  PRODUCTS_REMOVE_INGREDIENT,
  PRODUCTS_ADD_MASS,
  PRODUCTS_REMOVE_MASS,
  PRODUCTS_SET_NAME,
  PRODUCTS_UPDATE,
  PRODUCTS_SAVE,
} from '../../actions/actionTypes';

export const setName = (name) => {
  const action = async (dispatch, getState) => {
    dispatch({
      type: PRODUCTS_SET_NAME,
      payload: name,
    });
  };
  return action;
};

export const saveProduct = () => {
  const action = async (dispatch, getState) => {

    dispatch({
      type: PRODUCTS_SAVE,
      payload: undefined,
    });
  };

  return action;
};

export const addMass = (nameMass) => {
  const action = async (dispatch, getState, getAsyncReducer) => {
    const asyncReducer = await getAsyncReducer();
    const tempState = await asyncReducer(getState(), {
      type: PRODUCTS_ADD_MASS,
      payload: nameMass,
    });

    dispatch({
      type: PRODUCTS_UPDATE,
      payload: tempState.products,
    });
  };
  action.worker = true;

  return action;
};

export const removeMass = (nameMass) => {
  const action = async (dispatch, getState, getAsyncReducer) => {
    const asyncReducer = await getAsyncReducer();
    const tempState = await asyncReducer(getState(), {
      type: PRODUCTS_REMOVE_MASS,
      payload: nameMass,
    });

    dispatch({
      type: PRODUCTS_UPDATE,
      payload: tempState.products,
    });
  };
  action.worker = true;

  return action;
};

export const addIngredient = (nameIngredient) => {
  const action = async (dispatch, getState, getAsyncReducer) => {
    const asyncReducer = await getAsyncReducer();
    const tempState = await asyncReducer(getState(), {
      type: PRODUCTS_ADD_INGREDIENT,
      payload: nameIngredient,
    });

    dispatch({
      type: PRODUCTS_UPDATE,
      payload: tempState.products,
    });
  };
  action.worker = true;

  return action;
};

export const removeIngredient = (nameIngredient) => {
  const action = async (dispatch, getState, getAsyncReducer) => {
    const asyncReducer = await getAsyncReducer();
    const tempState = await asyncReducer(getState(), {
      type: PRODUCTS_REMOVE_INGREDIENT,
      payload: nameIngredient,
    });

    dispatch({
      type: PRODUCTS_UPDATE,
      payload: tempState.products,
    });
  };
  action.worker = true;

  return action;
};
