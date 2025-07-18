import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-product2-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product2-description.component.html',
  styleUrls: ['./product2-description.component.css']
})
export class Product2DescriptionComponent {
  constructor(private router: Router) {}
 
  product = {
    name: 'Apple iPhone 14 - 12GB',
    description: `
      Experience the power and elegance of the Apple iPhone 14 with 12GB RAM. Featuring a stunning Super Retina XDR display, advanced camera system, and lightning-fast performance.
    `,
    price: 79999,
    image: '/Phone.png'
  };
 
  addToCart() {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    existingCart.push({ ...this.product, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(existingCart));
    this.router.navigate(['/cart']);
  }
}