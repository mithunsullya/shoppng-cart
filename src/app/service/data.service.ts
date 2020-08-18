import { Injectable } from '@angular/core';
import { products } from './../utils/products';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  productItem;

  constructor() { }

  getProducts() {
    this.productItem = products;
    return this.productItem;
  }

  getProductItem(id) {
    let products = this.getProducts();
    return products.find(product => product.id == id);
  }

// Flters the products based on the color.

  addFilters(color? : string) {
    this.productItem = products;
    let filteredProducts = [];
    this.productItem.filter(item => {
      if(item.color.includes(color) == true ) {
        filteredProducts.push(item);
      }
    })
    return filteredProducts;
  }

}