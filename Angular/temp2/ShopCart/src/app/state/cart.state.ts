import { ShoppingItem } from "./cart.model";

export interface AppState{
  readonly shopping:Array<ShoppingItem>,
}