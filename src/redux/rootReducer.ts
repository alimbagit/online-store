import { ItemInterface } from "data";
import { CartActions } from "./actions";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export interface CartStateProps {
  id: string;
  price: number;
  count: number;
}

export type CartState = CartStateProps[];

const initialState: CartState = [];

export const rootReducer = (
  state: CartState = initialState,
  action: CartActions
): CartState => {

  switch (action.type) {
    case ADD_TO_CART:
      let indexAdd = state.findIndex(
        (element) => element.id === action.payload.id
      );
      indexAdd === -1
        ? state.push({ id: action.payload.id, price: action.payload.price, count: 1 })
        : state[indexAdd].count++;
      return state;

    case REMOVE_FROM_CART:
      let indexRemove = state.findIndex(
        (element) => element.id === action.payload
      );
      indexRemove != -1 && state.splice(indexRemove, 1);
      return state;

    default:
      return state;
  }
};
