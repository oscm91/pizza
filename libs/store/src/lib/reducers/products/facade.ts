import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveProduct, setName, addMass, removeMass, addIngredient, removeIngredient } from './actions';

export default () => {
  const products = useSelector((state) => state['products']);
  const dispatch = useDispatch();

  return {
    removeIngredient: (name) => {
      dispatch(removeIngredient(name));
    },
    addIngredient: (name) => {
      dispatch(addIngredient(name));
    },
    removeMass: (name) => {
      dispatch(removeMass(name));
    },
    addMass: (name) => {
      dispatch(addMass(name));
    },
    setName: (name) => {
      dispatch(setName(name));
    },
    saveProduct: () => {
      dispatch(saveProduct());
    },
    getState: () => products,
  };
};
