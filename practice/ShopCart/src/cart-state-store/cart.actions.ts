import { loginStatus, Product } from '../cart/product';
import { createAction, props } from '@ngrx/store';
import { createReadStream } from 'fs';

export const addProduct = createAction('Add Product', props<Product>());
export const removeProduct = createAction('Remove Product', props<Product>());
export const clearCart = createAction('Clear Cart');
export const login=createAction('login dashboard', props<loginStatus>())
