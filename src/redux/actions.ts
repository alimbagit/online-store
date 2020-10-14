import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_ITEM_COUNT, CLEAR_CART } from "./types";

/**Интерфейс для actions */
export interface OneCartItem {
  id: string;
  price: number;
}

/**Добавление товара в корзину */
export function addToCart(item: OneCartItem) {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
}

/**Удаление из корзины 1 товара */
export function removeFromCart(id: string) {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
}
/**Изменение количества товара в корзине по id */
export function changeItemCount(id: string, changeCount: number) {
  return {
    type: CHANGE_ITEM_COUNT,
    payload: { id, changeCount },
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART,
    payload: true
  };
}

export type CartActions =
  | ReturnType<typeof addToCart>
  | ReturnType<typeof removeFromCart>
  | ReturnType<typeof changeItemCount>
  | ReturnType<typeof clearCart>;
