import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-f1-desc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './f1-desc.component.html',
  styleUrls: ['./f1-desc.component.css']
})
export class F1DescComponent {
  constructor(private router: Router) {}
 
  product = {
    name: 'High Back Cushioned Office chair',
    description: `
     
Adiko High Back Executive Office chair consisting of cushioned seat & back, center-tilt mechanism, Hydraulic mechanism for adjustment of seat height, chrome plated metal base & Nylon wheels.
    `,
    price: 4999,
    image: 'f1image.png'
  };
 
  addToCart() {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    existingCart.push({ ...this.product, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(existingCart));
    this.router.navigate(['/cart']);
  }
}
 