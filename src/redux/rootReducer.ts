import { ItemInterface } from "data";
import { CartActions } from "./actions";
import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_ITEM_COUNT } from "./types";

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
const initialState: CartState = { items: [], totalItems: 0, totalPrice: 0 };

export const rootReducer = (
  state: CartState = initialState,
  action: CartActions
): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      let indexAdd = state.items.findIndex(
        (element) => element.id === action.payload.id
      );
      indexAdd === -1
        ? state.items.push({
            id: action.payload.id,
            price: action.payload.price,
            count: 1,
          })
        : state.items[indexAdd].count++;
      state.totalItems++;
      state.totalPrice += action.payload.price;
      return state;

    case REMOVE_FROM_CART:
      let indexRemove = state.items.findIndex(
        (element) => element.id === action.payload
      );
      if (indexRemove != -1) {
        state.totalItems -= state.items[indexRemove].count;
        state.totalPrice -=
          state.items[indexRemove].price * state.items[indexRemove].count;
        state.items.splice(indexRemove, 1);
      }
      return state;

    case CHANGE_ITEM_COUNT:
      let indexChange = state.items.findIndex(
        (element) => element.id === action.payload.id
      );
      if (indexChange != 1) {
        state.totalItems +=
          action.payload.changeCount - state.items[indexChange].count;
        state.totalPrice +=
          state.items[indexChange].price *
          (action.payload.changeCount - state.items[indexChange].count);
        state.items[indexChange].count = action.payload.changeCount;
      }
      return state;

    default:
      return state;
  }
};
