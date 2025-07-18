import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  goToElectronics() {
    this.router.navigate(['/electronics']);
  }

  goToHome() {
  this.router.navigate(['/landing']);
}

goToCart() {
  this.router.navigate(['/cart']);
}
gotofurniture(){
  this.router.navigate(['/furniture'])
}


}
