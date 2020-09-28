import { GetItemById, initializeItem } from "data";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeItemCount, removeFromCart } from "redux/actions";
import { CartItemProps } from "redux/rootReducer";
import "./oneItemInCart.scss"

interface PropsOneItemInCart {
  itemCart: CartItemProps;
}

const OneItemInCart = ({ itemCart }: PropsOneItemInCart) => {
  const [stateItem, setStateItem] = useState(initializeItem);

  const dispatch = useDispatch();
  useEffect(() => {
    LoadItem();
  });
  const LoadItem = () => {
    let item = GetItemById(itemCart.id);
    if (item) setStateItem(item);
  };

  const ChangeCountItem = (event: React.FormEvent<HTMLInputElement>) => {
    ChangeCountById(parseInt(event.currentTarget.value));
  };

  const ClickButtonChanges = (changeToOneValue: number) => {
    ChangeCountById(changeToOneValue + itemCart.count);
  };

  const ChangeCountById = (changeValue: number) => {
    dispatch(changeItemCount(itemCart.id, changeValue));
  };

  const RemoveItemById = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="one-item-cart">
      <div className="item-image-wrapper">
        <img src={stateItem.img} />
      </div>
      <div className="middle-item-cart">
        <p className="item-description">{stateItem.description}</p>
        <div className="counter">
          <span>
            <input
              type="number"
              size={5}
              value={itemCart.count}
              onChange={ChangeCountItem}
              min="0" max="100"
            />{" "}
          </span>
          <button onClick={() => ClickButtonChanges(1)}>+</button>
          <button onClick={() => ClickButtonChanges(-1)}>-</button>
        </div>
      </div>
      <div className="end-item-cart">
        <span className="price">{stateItem.price.toString()}Р</span>
        <button onClick={() => RemoveItemById(itemCart.id)}>убрать из корзины</button>
      </div>
    </div>
  );
};
export default OneItemInCart;
