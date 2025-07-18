import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
 import { RouterModule } from '@angular/router';
 import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-furniture',
  imports: [CommonModule,RouterModule,HeaderComponent],
  templateUrl: './furniture.component.html',
  styleUrl: './furniture.component.css'
})
export class FurnitureComponent {
 
  furniture = [
    {
      image: '/f1image.png',
      title: 'High Back Cushioned Chair\nErgonomic Design & Comfort\nIdeal for Office Use',
 
      rating: 4.6,
      reviews: 3210,
      ratingsCount: 12345,
      price: 12999,
      mrp: 18999,
      discount: 32,
      isDeal: true,
      delivery: 'FREE delivery Thu, 25 Jul • Fastest: Tue, 23 Jul',
      description: `This stylish and comfortable sofa set is perfect for modern homes. Upholstered in high-quality fabric, it offers both elegance and durability.`,
      features: [
        '🛋️ High-quality fabric upholstery',
        '📏 Dimensions: 200cm x 90cm x 85cm',
        '🧼 Easy to clean and maintain',
        '🪑 Includes 3-seater and 2-seater units',
        '🏠 Ideal for living rooms and lounges'
      ]
    },
    {
      image: '/f2image.png',
      title: 'Modern Fabric Sofa Set\nElegant & Durable\nPerfect for Living Rooms',
 
     
      rating: 4.7,
      reviews: 2145,
      ratingsCount: 8432,
      price: 15999,
      mrp: 22999,
      discount: 30,
      isDeal: true,
      delivery: 'FREE delivery Wed, 24 Jul • Fastest: Mon, 22 Jul',
      description: `This elegant wardrobe is crafted from high-quality wood and features spacious compartments for organized storage. Its sleek design complements modern interiors.`,
      features: [
        '🚪 3-door design with mirror panel',
        '🧥 Hanging space and adjustable shelves',
        '🪵 Made from solid engineered wood',
        '📦 Large drawers for extra storage',
        '🎨 Walnut finish for a premium look'
      ]
    },
    {
      image: '/f3image.png',
      title: 'Premium Wooden Wardrobe\nSpacious & Stylish Storage\nPerfect for Modern Interiors'
,
      rating: 4.6,
      reviews: 3210,
      ratingsCount: 12345,
      price: 4999,
      mrp: 7999,
      discount: 38,
      isDeal: true,
      delivery: 'FREE delivery Tue, 23 Jul • Fastest: Sun, 21 Jul',
      description: `Adiko High Back Executive Office chair consisting of cushioned seat & back, center-tilt mechanism, Hydraulic mechanism for adjustment of seat height, chrome plated metal base & Nylon wheels.`,
      features: [
        '🪵 Frame Material: Engineered Wood',
        '📏 W x H: 53 cm x 110 cm (1 ft 8 in x 3 ft 7 in)',
        '🎨 Upholstery Type: Cushion',
        '🛠️ DIY assembly with simple tools and instructions'
      ]
    }
  ];
}
