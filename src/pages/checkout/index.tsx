import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CartState } from "redux/rootReducer";
import OneItemInCheckout from "components/oneItemInCheckout";
import CheckoutForm from "components/checkoutForm";
import ModalWindow from "components/modalWindow";
import { RouteComponentProps } from "react-router-dom";

/**
 * Страница оформления заказа
 */

const Checkout = ({history}:RouteComponentProps) => {
  const [isVisibleModalWindow, setIsVisibleModalWindow] = useState(false);
  const [textInWidow, setTextInWindow]=useState(new Array<string>(0));
  const checkoutItems = useSelector((state: CartState) => state.items);
  const totalItems = useSelector((state: CartState) => state.totalItems);
  const totalPriceItems = useSelector((state: CartState) => state.totalPrice);

  const CallbackFormValues = (checkoutInfo: string[]) => {
    setTextInWindow([totalItems.toString(),totalPriceItems.toString(), ...checkoutInfo]);
    setIsVisibleModalWindow(true);
  }

  const CloseModalWindow=()=>{
    history.push("/catalog");
  }

  return (
    <div>
      <div>
        <div>
          <h2>Оформление заказа</h2>
          {checkoutItems.map((item, index) => (
            <OneItemInCheckout key={index} itemCheckout={item} />
          ))}
        </div>
        <div>Общее количество товаров: {totalItems}</div>
        <div>Общая стоимость товаров: {totalPriceItems}</div>
      </div>
      <div>
        <CheckoutForm callbackFormValues={CallbackFormValues} />
      </div>
      {/** Модальное окно */}
      <ModalWindow shown={isVisibleModalWindow} textInWindow={textInWidow} closeWindow={CloseModalWindow}/>
    </div>
  );
};
export default Checkout;
