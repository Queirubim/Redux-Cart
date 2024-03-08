import * as types from '../types';


export const userLogin = (payload) => ({
  type: types.USER_lOGIN,
  payload,
})

export const userLogout = (payload) => ({
  type: types.USER_lOGOUT,
  payload,
})