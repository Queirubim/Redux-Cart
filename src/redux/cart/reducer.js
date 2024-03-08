import * as types from '../types';


const initialState = {
  products: [],
  productsTotalPrice: 0,

}

const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.ADD_PRODUCT: {
      // verificar se o produtoesta no carrinho
      const productInCart = state.products.some((product)=> product.id === action.payload.id);

      // se ele estiver, aumentar a quantidade
      if (productInCart) {
        return {
          ...state,
          products: state.products.map((product) => 
            product.id === action.payload.id ? {...product, quantity: product.quantity + 1} : product
        ) }
      }

      //se não estiver, adicionalo
      return {
        ...state,
        products: [...state.products, {...action.payload, quantity:  1}]
      }
    }

    case types.EXC_PRODUCT: {
      return {
        ...state,
        products: state.products.filter(product => product.id !==  action.payload)
      }
    }

    case types.UP_AMOUNT_PRODUCT: {
      return {
        ...state,
        products: state.products.map((product) =>
            product.id === action.payload ?
            {...product, quantity: product.quantity +1} :
            product
          )
      }
    }

    case types.DOWN_AMOUNT_PRODUCT: {
      return {
        ...state,
        products: state.products.map((product) =>
            product.id === action.payload ?
            {...product, quantity: product.quantity - 1} :
            product
          ).filter((product) => product.quantity > 0)
      }
    }

    default :{
      return state
    }
  }
  
};



export default cartReducer;