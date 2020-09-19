import React from "react";
import { useSelector } from "react-redux";
import { CartState } from "redux/rootReducer";
import OneItemInCheckout from 'components/oneItemInCheckout';
/**
 * Страница оформления заказа
 */
const Checkout = () => {

  const checkoutItems = useSelector((state: CartState) => state.items);
  const totalItems = useSelector((state: CartState) => state.totalItems);
  const totalPriceItems = useSelector((state: CartState) => state.totalPrice);
  return (
    <div>
    <div>
      <h2>Оформление заказа</h2>
      {checkoutItems.map((item, index) => (
        <OneItemInCheckout key={index} itemCheckout={item} />
      ))}
    </div>
      <div>Общее количество товаров: {totalItems}</div>
      <div>Общая стоимость товаров: {totalItems}</div>
    </div>
  )
}
export default Checkout;
