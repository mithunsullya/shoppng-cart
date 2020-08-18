import { Component, OnInit } from '@angular/core';
import { CartService } from './../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  products;
  constructor(private cart: CartService) { }

   ngOnInit () {
  	this.products = this.cart.getItems();
  }

}
