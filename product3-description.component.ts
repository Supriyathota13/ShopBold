import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-product3-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product3-description.component.html',
  styleUrls: ['./product3-description.component.css']
})
export class Product3DescriptionComponent {
  constructor(private router: Router) {}
 
  product = {
    name: 'Samsung Smart LED TV - 55 inch',
    description: `
      Enjoy immersive viewing with the Samsung Smart LED TV. Featuring a 55-inch 4K UHD display, built-in streaming apps, and voice control compatibility.
    `,
    price: 62999,
    image: '/Tv.webp'
  };
 
  addToCart() {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    existingCart.push({ ...this.product, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(existingCart));
    this.router.navigate(['/cart']);
  }
}