import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
 
@Component({
  selector: 'app-electronics',
  imports: [CommonModule,RouterModule,HeaderComponent],
  standalone: true,
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent {
 
    electronics = [
      {
        image: '/HeadPhones.png',
        title: 'boAt Rockerz 450 w/40mm Drivers,15HRS Playback,soft Padded Earcups Bluetooth(Luscious Black,On the Ear',
        description: '',
        price: 1399,
        mrp: 3990,
        discount: 64,
        rating: 4.3,
        reviews: 40872,
        sales: 300,
        isDeal: true,
        delivery: 'FREE delivery Tue, 22 Jul • Fastest: Sun, 20 Jul'
      },
      {
        image: '/Phone.png',
        title: 'Apple iPhone 14 – 128GB, Super Retina XDR Display, A15 Bionic Chip, Dual Camera, Midnight Black',
        description: 'Experience the power of Apple with the iPhone 14. Featuring a stunning Super Retina XDR display, lightning-fast A15 Bionic chip, and advanced dual-camera system,  Perfect for creators, gamers, and tech lovers.',
        price: 80000,
        mrp: 89900,
        discount: 11,
        rating: 4.6,
        reviews: 5123,
        sales: 1200,
        isDeal: true,
        delivery: 'FREE delivery Mon, 21 Jul • Fastest: Sat, 19 Jul'
      },
      {
        image: '/Tv.webp',
        title: 'Samsung 43" Smart LED TV – Full HD, HDR, Built-in Apps, Voice Control, Slim Design',
        description: 'Upgrade your home entertainment with the Samsung 43" Smart LED TV. Enjoy vivid Full HD visuals,.',
        price: 35000,
        mrp: 45990,
        discount: 24,
        rating: 4.2,
        reviews: 2897,
        sales: 650,
        isDeal: true,
        delivery: 'FREE delivery Wed, 23 Jul • Fastest: Mon, 21 Jul'
      },
     
    ];
  }