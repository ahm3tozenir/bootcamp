import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/card.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.productService.getAll().subscribe((result) => {
      this.products = result;
    });
  }
  addToCart(product: Product): void {
    if (product.quantity > 0) {
      this.cartService.addToCart(product);
    }
  }
  getProductService(): ProductService {
    return this.productService;
  }
}
