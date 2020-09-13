import { ItemInterface } from "data";
import { CartStateProps } from "./rootReducer";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export interface OneCartItem{
  id: string;
  price: number;
}

export function addToCart(item: OneCartItem) {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
}

export function removeFromCart(id: string) {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
}

export type CartActions =
  | ReturnType<typeof addToCart>
  | ReturnType<typeof removeFromCart>;
