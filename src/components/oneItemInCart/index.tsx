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
  const [countItem, setCountItem] = useState(itemCart.count);
  const dispatch = useDispatch();
  useEffect(() => {
    LoadItem();
  });
  const LoadItem = () => {
    let item = GetItemFromId(itemCart.id);
    if (item) setStateItem(item);
  };

  const ChangeCountItem = (event: any) => {
      ChangeCountById(parseInt(event.target.value));
  };

  const ClickButtonChanges = (changeToOneValue: number) => {
    ChangeCountById(changeToOneValue+itemCart.count);
  };

  const ChangeCountById = (changeValue:number) => {
    setCountItem(changeValue);
    dispatch(changeItemCount(itemCart.id, changeValue));
  };

  const RemoveItemById = (id:string) => {
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
          type="text"
          size={5}
          value={countItem}
          onChange={ChangeCountItem}
        />{" "}
      </span>
      <button onClick={() => ClickButtonChanges(1)}>+</button>
      <button onClick={() => ClickButtonChanges(-1)}>-</button>
      <button onClick={()=>RemoveItemById(itemCart.id)}>убрать из корзины</button>
    </div>
  );
};
export default OneItemInCart;
