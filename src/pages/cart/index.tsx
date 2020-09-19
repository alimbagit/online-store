import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OneItemInCart from "components/oneItemInCart";
import { CartState } from "redux/rootReducer";
import { removeFromCart } from "redux/actions";

const Cart = () => {
  const stateTmpItems = useSelector((state: CartState) => state.items);

  return (
    <div>
      <p>Тут должна быть корзина</p>
      {stateTmpItems.map((itemCart, index) => (
        <OneItemInCart key={index} itemCart={itemCart} />
      ))}
    </div>
  );
};
export default Cart;
