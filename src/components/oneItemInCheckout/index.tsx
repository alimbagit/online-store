import { GetItemFromId, initializeItem } from "data";
import "./styles.scss"
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeItemCount, removeFromCart } from "redux/actions";
import { CartItemProps } from "redux/rootReducer";

interface PropsOneItemInCheckout {
    itemCheckout: CartItemProps;
}

const OneItemInCheckout = ({ itemCheckout }: PropsOneItemInCheckout) => {

    const [stateItem, setStateItem] = useState(initializeItem);

    const dispatch = useDispatch();
    useEffect(() => {
        LoadItem();
    });
    const LoadItem = () => {
        let item = GetItemFromId(itemCheckout.id);
        if (item) setStateItem(item);
    };

    return (
        <div>
            <span>{stateItem.description}</span>
            <span>{stateItem.price.toString()}</span>
            <span>
                количество:{" "+itemCheckout.count.toString()}
            </span>
        </div>
    );
};
export default OneItemInCheckout;
