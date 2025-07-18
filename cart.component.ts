import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
 
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
 
  constructor(private router: Router) {}
 
  ngOnInit() {
    this.loadCart();
 
    // Reload cart when navigating back to this route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.urlAfterRedirects === '/cart') {
        this.loadCart();
      }
    });
  }
 
  loadCart() {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  }
 
  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
 
  increaseQuantity(index: number) {
    this.cartItems[index].quantity++;
    this.updateLocalStorage();
  }
 
  decreaseQuantity(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      this.updateLocalStorage();
    }
  }
 
  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.updateLocalStorage();
  }
 
  updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
 
  goToPayment() {

{
  const cartItems = this.cartItems;
  const total = this.getTotal();

  this.router.navigate(['/payments'], {
    state: { cartItems, total }
  });
}

}
}