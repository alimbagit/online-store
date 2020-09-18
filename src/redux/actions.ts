import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_ITEM_COUNT } from "./types";

export interface OneCartItem {
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

export function changeItemCount(id: string, changeCount: number) {
  return {
    type: CHANGE_ITEM_COUNT,
    payload: { id, changeCount },
  };
}

export type CartActions =
  | ReturnType<typeof addToCart>
  | ReturnType<typeof removeFromCart>
  | ReturnType<typeof changeItemCount>;
