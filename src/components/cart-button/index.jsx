import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import * as style from './style';
export const CartButton = ({quanti}) => {
  return (
    <style.CartButton type='button'>
      <AiOutlineShoppingCart size={25} />
      <style.QuantiSpan>{quanti}</style.QuantiSpan>
    </style.CartButton>
  )
}
