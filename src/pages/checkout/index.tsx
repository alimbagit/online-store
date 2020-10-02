import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CartState } from "redux/rootReducer";
import OneItemInCheckout from "components/oneItemInCheckout";
import CheckoutForm from "components/checkoutForm";
import ModalWindow from "components/modalWindow";
import { RouteComponentProps } from "react-router-dom";
import "./checkout.scss";

/**
 * Страница оформления заказа
 */

const Checkout = ({ history }: RouteComponentProps) => {
  const [isVisibleModalWindow, setIsVisibleModalWindow] = useState(false);
  const [textInWidow, setTextInWindow] = useState(new Array<string>(0));
  const checkoutItems = useSelector((state: CartState) => state.items);
  const totalItems = useSelector((state: CartState) => state.totalItems);
  const totalPriceItems = useSelector((state: CartState) => state.totalPrice);

  /**Функция, которая примет данные из формы при успешной валидации */
  const CallbackFormValues = (checkoutInfo: string[]) => {
    setTextInWindow([
      "Количество товаров: " + totalItems.toString() +" шт",
      "Общая стоимость: " + totalPriceItems.toString() + "р",
      ...checkoutInfo,
    ]);
    /**Запуск модального окна с помощью переключения флага состояния */
    setIsVisibleModalWindow(true);
  };

  const CloseModalWindow = () => {
    history.push("/catalog");
  };

  return (
    <div>
      <h2>Оформление заказа</h2>
      <div className="wrapper-checkout">
        <div className="checkout-info">
          <div className="checkout-items">
            {checkoutItems.map((item, index) => (
              <OneItemInCheckout key={index} itemCheckout={item} />
            ))}
          </div>

          <div className="total-info">
            <hr />
            Товаров: {totalItems} шт
          </div>
          <div className="total-info">
            Общая стоимость: {totalPriceItems} Р
          </div>
        </div>
        <CheckoutForm callbackFormValues={CallbackFormValues} />
      </div>
      {/** Модальное окно */}
      <ModalWindow
        shown={isVisibleModalWindow}
        textInWindow={textInWidow}
        closeWindow={CloseModalWindow}
      />
    </div>
  );
};
export default Checkout;
