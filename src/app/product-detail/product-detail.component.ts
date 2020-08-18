import { Component, OnInit } from '@angular/core';
import {DataService} from './../service/data.service';
import {ActivatedRoute} from '@angular/router';
import {CartService} from './../service/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
productItem;

  constructor(private productService:DataService, private route: ActivatedRoute, private cart: CartService) {
  }
  
  ngOnInit () {
    let id = this.route.snapshot.paramMap.get('id');
  	this.productItem = this.productService.getProductItem(id);
  }
   addToCart(product) {
	    this.cart.addToCart(product);
	    window.alert('Your product has been added to the cart!');
  }
}
