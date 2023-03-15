import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ITEMS } from './component/product-card/product-card.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  products=ITEMS;
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
  }
}
