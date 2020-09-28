import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartState } from "redux/rootReducer";
import "./cartInHeader.scss";
// import frfrf from "./cart-icon.png";

const CartInHeader = () => {
    const totalCount = useSelector((state: CartState) => state.totalItems);
    const totalPrice = useSelector((state: CartState) => state.totalPrice);

    return (
        <div className="cart-in-header">
            <Link to="/cart">
                <div className="icon-wrapper">
                    <div className="total-count">{totalCount > 0 && totalCount.toString()}</div>
                    <img src={require('./cart-icon.png')} />
                </div>
                <span>{totalPrice > 0 ? totalPrice.toString() + "Р" : "Корзина"}</span>
            </Link>

        </div>
    )
}
export default CartInHeader;
