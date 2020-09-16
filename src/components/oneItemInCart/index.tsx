import { GetItemFromId, initializeItem } from "data";
import React, { useEffect, useState } from "react";
import { CartItemProps } from "redux/rootReducer";

const OneItemInCart = (itemCart: CartItemProps) => {

  const [stateItem, setStateItem] = useState(initializeItem);
  useEffect(() => {
    LoadItem();
  });
  const LoadItem = () => {
    let item = GetItemFromId(itemCart.id);
    if (item) setStateItem(item);
  };
  return (
    <div>
      <img src={stateItem.img} />
      <span>{stateItem.description}</span>
      <span>{stateItem.price.toString()}</span>
      <span>количество: {itemCart.count.toString()}</span>
    </div>
  );
};
export default OneItemInCart;
