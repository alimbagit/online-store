import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartState } from "redux/rootReducer";

const CartInHeader = () => {
    const totalCount = useSelector((state: CartState) => state.totalItems);
    const totalPrice = useSelector((state: CartState) => state.totalPrice);

    return (
        <div>

            <Link to="/cart">Корзина {totalCount.toString()} {totalPrice.toString()}р</Link>
        </div>
    )
}
export default CartInHeader;
