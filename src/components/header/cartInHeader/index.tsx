import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartState } from "redux/rootReducer";
import "./cartInHeader.scss";

/**Иконка корзины в заголовке */
const CartInHeader = () => {
  const totalCount = useSelector((state: CartState) => state.totalItems);//Общее количество товаров
  const totalPrice = useSelector((state: CartState) => state.totalPrice); //Общая цена

  return (
    <div className="cart-in-header">
      <Link to="/cart">
        <div className="icon-wrapper">
          <img src={require("./cart-icon.png")} />
          {totalCount > 0 && (
            <div className="total-count">
              <span> {totalCount.toString()}</span>
            </div>
          )}
        </div>
        <span>{totalPrice > 0 ? totalPrice.toString() + "Р" : "Корзина"}</span>
      </Link>
    </div>
  );
};
export default CartInHeader;
