import * as types from '../types';


export const addProductToCart = (payload) => ({
  type: types.ADD_PRODUCT,
  payload,
})


export const excProductToCart = (payload) => ({
  type: types.EXC_PRODUCT,
  payload,
})

export const upAmountProduct = (payload) => ({
  type: types.UP_AMOUNT_PRODUCT,
  payload,
})

export const downAmountProduct = (payload) => ({
  type: types.DOWN_AMOUNT_PRODUCT,
  payload,
})
