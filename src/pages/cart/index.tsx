import React, { useEffect, useState } from "react";
import LayoutPage from "components/layoutPage";
import { connect, useDispatch, useSelector } from "react-redux";
import OneItemInCart from "components/oneItemInCart";
import { CartState } from "redux/rootReducer";

const Cart = () => {
  const state = useSelector((state: CartState) => state.items);
  const [currentItemsCart, setCurrentItems] = useState(state);

  useEffect(() => {
    setCurrentItems(state);
  });

  return (
    <LayoutPage>
      <div>
        <p>Тут должна быть корзина</p>
        {currentItemsCart.map((itemCart, index) => {
          let count = 0;
          for (let i = 0; i < index; i++) {
            if (itemCart.id === currentItemsCart[i].id) count++;
          }
          return <OneItemInCart key={index} {...itemCart} />;
        })}
      </div>
    </LayoutPage>
  );
};
export default Cart;
