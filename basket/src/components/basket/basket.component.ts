import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/card.service';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss',
})
export class BasketComponent {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalCost();
  }
  totalCost() {
    for (let i = 0; i < this.cartItems.length; i++) {
      this.total += this.cartItems[i].price * this.cartItems[i].quantity;
    }
  }
}
