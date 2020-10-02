import { GetItemById, initializeItem } from "data";
import React, { useEffect, useState } from "react";
import { CartItemProps } from "redux/rootReducer";

interface PropsOneItemInCheckout {
    itemCheckout: CartItemProps;
}

const OneItemInCheckout = ({ itemCheckout }: PropsOneItemInCheckout) => {

    const [stateItem, setStateItem] = useState(initializeItem);

    useEffect(() => {
        LoadItem();
    });
    const LoadItem = () => {
        let item = GetItemById(itemCheckout.id);
        if (item) setStateItem(item);
    };

    return (
        <div>
            <span>{stateItem.description}</span>
            <span>{stateItem.price.toString()}</span>
            <span>
                :{" "+itemCheckout.count.toString()} шт
            </span>
        </div>
    );
};
export default OneItemInCheckout;
