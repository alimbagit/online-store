import React, { useState, useEffect } from "react";
import { ItemInterface } from "data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "redux/actions";
import { CartState } from "redux/rootReducer";

/**
 * @param item Представление одонго товара в каталоге
 * @returns ReactNode
 */
const OneItemIcon = (item: ItemInterface) => {
  const [stateButton, setStateButton] = useState(false);

  const cartItemsState = useSelector((state: CartState) => state.items);
  const dispatch = useDispatch();
  const EventToCartListener = () => {
    if (stateButton) {
      dispatch(removeFromCart(item.id));
      setStateButton(false);
    } else {
      dispatch(addToCart({ id: item.id, price: item.price }));
      setStateButton(true);
    }
  };

  const CheckItemInCart = () => {
    let index = cartItemsState.findIndex((element) => element.id === item.id);
    setStateButton(index != -1);
  };

  useEffect(() => {
    CheckItemInCart();
  });

  return (
    <div>
      <div>
        <img src={item.img} />
        <span>{item.description}</span>
        <span>{item.price.toString()}</span>
      </div>
      <button onClick={() => EventToCartListener()}>
        {stateButton ? "УБРАТЬ ИЗ КОРЗИНЫ" : "В КОРЗИНУ"}
      </button>
    </div>
  );
};

export default OneItemIcon;