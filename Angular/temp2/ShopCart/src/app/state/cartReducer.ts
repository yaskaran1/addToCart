import { ShoppingAction, shoppingActionTypes } from "./addCart.action";
import { ShoppingItem } from "./cart.model";

const initialState:Array<ShoppingItem>=[
  {
    id: 12,
  title: '21212',
  price: 121,
  description: '21212',
  category: '21212',
  }
];

export function ShoppingReducer(
  state:Array<ShoppingItem>=initialState,
  action: ShoppingAction
){
  switch (action.type) {
    case shoppingActionTypes.ADD_ITEM:
      return [...state,action.payload];
  
    default:
      return state;
  }
}