import { Action } from "@ngrx/store";
import { ShoppingItem } from "./cart.model";

export enum shoppingActionTypes{
  ADD_ITEM="[shopping] add item",
}

export class AddItemAction implements Action{
  readonly type =shoppingActionTypes.ADD_ITEM;
  constructor(public payload:ShoppingItem){}
}

export type ShoppingAction=AddItemAction;