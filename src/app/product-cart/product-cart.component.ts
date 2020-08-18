import { Component, OnInit } from '@angular/core';
import { CartService } from './../service/cart.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {

   productCart;
  constructor(private cart: CartService) {
  }
  
  ngOnInit () {
  	this.productCart = this.cart.getItems();
  }

}
