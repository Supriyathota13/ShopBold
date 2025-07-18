import { F1DescComponent } from './f1-desc/f1-desc.component';
import { Component } from '@angular/core';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';
import { ElectronicsComponent } from './electronics/electronics.component';
import { Product1DescriptionComponent } from './product1-description/product1-description.component';
import { Product2DescriptionComponent } from './product2-description/product2-description.component';
import { Product3DescriptionComponent } from './product3-description/product3-description.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { PaymentsComponent } from './payments/payments.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { FurnitureComponent } from './furniture/furniture.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,SigninComponent,LandingpageComponent,ElectronicsComponent,Product1DescriptionComponent,Product2DescriptionComponent,Product3DescriptionComponent,CartComponent,HeaderComponent,SignupComponent,PaymentsComponent,OrderConfirmationComponent,FurnitureComponent,FooterComponent,F1DescComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  title = 'landingpage';

  showSignup = false;
 
  toggleView() {
    this.showSignup = !this.showSignup;
  }
}
