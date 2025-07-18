import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  order: any;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    const stateOrder = nav?.extras?.state?.['order'];

    if (stateOrder) {
      this.order = stateOrder;
    } else {
      // fallback: fetch last order from JSON Server
      this.http.get<any[]>('http://localhost:3000/orders').subscribe(data => {
        this.order = data[data.length - 1]; // get the most recent order
      });
    }
  }
}
