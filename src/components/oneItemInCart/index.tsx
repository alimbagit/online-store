import { GetItemFromId, initializeItem } from "data";
import React, { useEffect, useState } from "react";
import { CartStateProps } from "redux/rootReducer";

const OneItemInCart = (itemCart: CartStateProps) => {

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
