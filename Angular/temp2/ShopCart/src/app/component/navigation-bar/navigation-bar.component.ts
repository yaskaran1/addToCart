import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingItem } from 'src/app/state/cart.model';
import { AppState } from 'src/app/state/cart.state';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  shoppingItem$:Observable<Array<ShoppingItem>> | undefined;
  constructor(private store:Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select(store=> store.shopping)
  }
}

