import { Component, signal, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product';
import { ProductService } from './services/product-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  //providers: [ProductService],
})
export class App {
  protected readonly title = signal('Demo Angular Services');

  products: Product[] = [];
  productService: ProductService | null = null;

  // constructor() {
  //   this.productService = new ProductService();
  // }

  constructor(@Inject(ProductService) productService: ProductService) { 
    this.productService = productService;
  }

  getProducts(): void {
    this.products = this.productService?.getProducts() || [];
  }
}
