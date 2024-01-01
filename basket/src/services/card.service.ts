import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: object[] = [];

  addToCart(product: any): void {
    this.cartItems.push(product);
  }

  getCartItems(): object[] {
    return this.cartItems;
  }
}
