import { useSelector } from 'react-redux';
import {selectProductsTotalPrice} from '../../redux/cart/cart.selector'

// Styles
import * as Styles from "./styles";

//Components
import CartItem from '../cart-item/index';

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <div key={12}>
        <Styles.CartContent>
          <Styles.CartTitle>Carrinho de Compras</Styles.CartTitle>

          {products.map(product => <CartItem product={product} key={product.id} />)}
        </Styles.CartContent>
        <Styles.CartTotalContainer>
          <Styles.CartTotal> R$ {productsTotalPrice} </Styles.CartTotal>
          < Styles.TotalButton type="button">
            Finalizar compras
          </Styles.TotalButton >
        </Styles.CartTotalContainer>
      </div>
    </Styles.CartContainer>
  );
};

export default Cart;
