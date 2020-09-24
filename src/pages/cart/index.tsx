import React from "react";
import { useSelector } from "react-redux";
import OneItemInCart from "components/oneItemInCart";
import { CartState } from "redux/rootReducer";
import { RouteComponentProps } from "react-router-dom";

const Cart = ({ history }: RouteComponentProps) => {
  /** Берем массив текущих товаров в корзине */
  const stateCartItems = useSelector((state: CartState) => state.items);
  const statePriceItems = useSelector((state: CartState) => state.totalPrice);
  /**Обработчик нажатия на кнопку "Оформить заказ" */
  const GoToCheckoutPage = () => {
    stateCartItems.length === 0
      ? alert("Добавьте хотя бы 1 товар в корзину")
      : history.push("/checkout");
  }

  return (
    <div>
      <h2>Корзина</h2>
      {stateCartItems.map((itemCart, index) => (
        <OneItemInCart key={index} itemCart={itemCart} />
      ))}
      <div>Общая стоимость: {statePriceItems}</div>
      <button onClick={GoToCheckoutPage}>Оформить заказ</button>
    </div>
  );
};
export default Cart;
