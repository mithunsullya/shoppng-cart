import { Component, OnInit } from '@angular/core';
import {DataService} from './../../service/data.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  implements OnInit{
  products;
  constructor(private productService:DataService, private cart: CartService) {
  }
  
  ngOnInit () {
  	this.products = this.productService.getProducts();
  }

  addToCart(product) {
    this.cart.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
