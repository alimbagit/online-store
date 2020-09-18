import React, { useState } from "react";
import { useSelector } from "react-redux";
import OneItemInCart from "components/oneItemInCart";
import { CartState } from "redux/rootReducer";

const Cart = () => {
  const stateTmpItems = useSelector((state: CartState) => state.items);

  console.log("stateTmpItems: ", stateTmpItems);
  return (
    <div>
      <p>Тут должна быть корзина</p>
      {stateTmpItems.map((itemCart, index) => (
        <OneItemInCart key={index} itemCart={itemCart}/>
      ))}
    </div>
  );
};
export default Cart;
