import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  public product: any;
  cartList=[];

  constructor(private api: ApiService,private store: Store) {
    
   }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.product=res;
    })
  }
  addToCart(product:any){
    this.cartList.push(product as never);
    localStorage.setItem('cart', JSON.stringify(this.cartList as never));
  }
  
}
