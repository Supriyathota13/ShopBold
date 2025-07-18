import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SigninComponent } from './signin/signin.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { Product1DescriptionComponent } from './product1-description/product1-description.component';
import { Product2DescriptionComponent } from './product2-description/product2-description.component';
import { Product3DescriptionComponent } from './product3-description/product3-description.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { PaymentsComponent } from './payments/payments.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { FooterComponent } from './footer/footer.component';
import { F1DescComponent } from './f1-desc/f1-desc.component';

export const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' }, // ✅ Default route
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'landing', component: LandingpageComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'product1-description', component: Product1DescriptionComponent },
  { path: 'product2-description', component: Product2DescriptionComponent },
  { path: 'product3-description', component: Product3DescriptionComponent },
  { path: 'furniture', component: FurnitureComponent },
  { path: 'f1-desc', component: F1DescComponent },
  { path: 'cart', component: CartComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'order-confirmation', component: OrderConfirmationComponent },

  // Optional: lazy-loaded versions (if needed)
  // { path: 'electronics', loadComponent: () => import('./electronics/electronics.component').then(m => m.ElectronicsComponent) },
  // { path: 'cart', loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent) },
  // { path: 'payment', loadComponent: () => import('./payments/payments.component').then(m => m.PaymentsComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
