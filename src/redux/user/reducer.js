import * as types from '../types';


const initialState = {
  currentUser: null,
}

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.USER_lOGIN: {
      return {...state, currentUser: action.payload}
    }

    case types.USER_lOGOUT: {
      return { ...state, currentUser: null}
    }

    default :{
      return state
    }
  }
  
};



export default userReducer;