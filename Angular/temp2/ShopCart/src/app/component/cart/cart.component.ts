import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingItem } from 'src/app/state/cart.model';
import { AppState } from 'src/app/state/cart.state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  shoppingItem$:Observable<Array<ShoppingItem>> | any;
  items:any;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(store=> store.shopping)
    this.CartProduct();
  }

  CartProduct(){
    this.items=(localStorage.getItem('cart'));
    console.log(this.items);
    console.log(this.shoppingItem$);
    
  }

}
