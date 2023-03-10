import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCountProducts } from 'src/cart-state-store/cart.selectors';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  countProducts$: Observable<number>;
  constructor(private store:Store) {
    this.countProducts$ = store.select(selectCountProducts);
  }

  ngOnInit(): void {
  }
}

