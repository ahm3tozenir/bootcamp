import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>('https://fakestoreapi.com/products')
      .pipe(
        map((products) =>
          products.map((product) => ({ ...product, quantity: 0 }))
        )
      );
  }
  increaseQuantity(product: Product): void {
    product.quantity += 1;
  }

  decreaseQuantity(product: Product): void {
    if (product.quantity > 0) {
      product.quantity -= 1;
    }
  }
}
