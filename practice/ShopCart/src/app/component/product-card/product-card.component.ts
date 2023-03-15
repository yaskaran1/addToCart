import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { addProduct } from 'src/cart-state-store/cart.actions';
import { Product } from 'src/entity/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  public product: any;

  constructor(private api: ApiService,private store: Store) {
    
   }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.product=res;
    })
  }
  // addToCart(product:any){
  //   this.cartList.push(product as never);
  //   localStorage.setItem('cart', JSON.stringify(this.cartList as never));
  // }

  public buyProduct(product: Product) {
    this.store.dispatch(addProduct(product));
  }
  
}
