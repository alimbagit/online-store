import { CartActions } from "./actions";
import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_ITEM_COUNT, CLEAR_CART } from "./types";

export interface CartItemProps {
  id: string;
  price: number;
  count: number;
}

export interface CartState {
  items: CartItemProps[];
  totalPrice: number;
  totalItems: number;
}

/**Корзина изначально пуста */
const initialState: CartState = { items: [], totalItems: 0, totalPrice: 0 };

export const rootReducer = (
  state: CartState = initialState,
  action: CartActions
): CartState => {
  const new_state = { ...state };
  switch (action.type) {

    /**Добавление товара в корзину */
    case ADD_TO_CART:
      new_state.items = [...state.items];
      let indexAdd = new_state.items.findIndex(
        (element) => element.id === action.payload.id
      );
      indexAdd === -1
        ? new_state.items.push({
          id: action.payload.id,
          price: action.payload.price,
          count: 1,
        })
        : new_state.items[indexAdd].count++;
      new_state.totalItems++;
      new_state.totalPrice += action.payload.price;
      return new_state;
    /**удаление товара из корзины */
    case REMOVE_FROM_CART:
      let indexRemove = state.items.findIndex(
        (element) => element.id === action.payload
      );
      if (indexRemove != -1) {
        new_state.totalItems -= state.items[indexRemove].count;
        new_state.totalPrice -=
          state.items[indexRemove].price * state.items[indexRemove].count;
        new_state.items = state.items.filter((_, index) => index !== indexRemove);
      }
      return new_state;
    /**установка количества одного товара в корзине */
    case CHANGE_ITEM_COUNT:
      if (action.payload.changeCount <= 0) action.payload.changeCount = 1;
      let indexChange = new_state.items.findIndex(
        (element) => element.id === action.payload.id
      );
      if (indexChange != -1) {
        new_state.totalItems +=
          action.payload.changeCount - new_state.items[indexChange].count;
        new_state.totalPrice +=
          new_state.items[indexChange].price *
          (action.payload.changeCount - new_state.items[indexChange].count);
        new_state.items[indexChange].count = action.payload.changeCount;
      }

      return new_state;
    /**очистка корзины от товаров */
    case CLEAR_CART:
      return initialState;

    default:
      return new_state;
  }
};
