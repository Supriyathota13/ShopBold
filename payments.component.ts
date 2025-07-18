import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
  total: number = 0;

  paymentMethod: string = 'card';

  cardNumber: string = '';
  cardHolder: string = '';
  expiryDate: string = '';
  cvv: string = '';

  delivery = {
    fullName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    postalCode: ''
  };

  cartItems = [
    {
      name: 'Wireless Headphones',
      price: 2499,
      image: 'assets/Product1.png',
      quantity: 1
    }
  ];

  constructor(private router: Router, private http: HttpClient) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state;
    this.cartItems = state?.['cartItems'] || this.cartItems;
    this.total = state?.['total'] || this.getTotal();
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  placeOrder() {
    // Optional: log to confirm method is triggered
    console.log('Form submitted');

    const order = {
      cart: this.cartItems,
      total: this.getTotal(),
      paymentMethod: this.paymentMethod,
      cardDetails: this.paymentMethod === 'card' ? {
        cardNumber: this.cardNumber,
        cardHolder: this.cardHolder,
        expiryDate: this.expiryDate,
        cvv: this.cvv
      } : null,
      delivery: this.delivery
    };

    this.http.post('http://localhost:3000/orders', order).subscribe({
      next: (response) => {
        this.router.navigate(['/order-confirmation'], {
          state: { order: response }
        });
      },
      error: (err) => {
        console.error('Order submission failed:', err);
      }
    });
  }
}
