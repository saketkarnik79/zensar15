import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
 public getProducts(): Product[] {
    return [
      { productID: 1, name: 'Laptop', price: 1200 },
      { productID: 2, name: 'Smartphone', price: 800 },
      { productID: 3, name: 'Tablet', price: 600 },
    ];
  } 
}
