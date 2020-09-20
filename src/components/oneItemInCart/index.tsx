import { GetItemFromId, initializeItem } from "data";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeItemCount, removeFromCart } from "redux/actions";
import { CartItemProps } from "redux/rootReducer";

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
    let item = GetItemFromId(itemCart.id);
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
    <div>
      <img src={stateItem.img} />
      <span>{stateItem.description}</span>
      <span>{stateItem.price.toString()}</span>
      <span>
        количество:{" "}
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
      <button onClick={() => RemoveItemById(itemCart.id)}>убрать из корзины</button>
    </div>
  );
};
export default OneItemInCart;
