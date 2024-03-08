import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {selectProductsCount} from '../../redux/cart/cart.selector.js';

import * as actions from '../../redux/user/actions';

// Components
import Cart from "../cart/index";
import { CartButton } from '../cart-button/index.jsx';

// Styles
import * as Styles from "./styles";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const {currentUser} = useSelector((rootReducer) => rootReducer.userReducer );
  // const {products} = useSelector((rootReducer) => rootReducer.cartReducer );

  const productsCounts = useSelector(selectProductsCount);
  
  const dispatch = useDispatch();

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(actions.userLogin({name: 'Allan', email: 'allan@email.com'}))
  }

  const handleLogoutClick = () => {
    dispatch(actions.userLogout())
  }

  return (
    <Styles.Container>
      <Styles.Logo>Carrinho de Compras com React Redux</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? <div onClick={handleLogoutClick}> Exit </div> : <div onClick={handleLoginClick} >Login</div> }
        
        <div onClick={handleCartClick}>
          <CartButton quanti={productsCounts} />
        </div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
