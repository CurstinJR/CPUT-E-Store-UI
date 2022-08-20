import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NavbarComponent} from './core/components/navbar/navbar.component';
import {FooterComponent} from './core/components/footer/footer.component';
import {LoginComponent} from './features/login/login.component';
import {CartComponent} from './features/cart/cart.component';
import {HeroComponent} from './features/hero/hero.component';
import {ProductsModule} from "./features/products/products.module";
import {SharedModule} from "./shared/shared.module";
import {AdminProfileModule} from "./features/profiles/admin-profile/admin-profile.module";
import {UserProfileModule} from "./features/profiles/user-profile/user-profile.module";
import { RegistrationComponent } from './features/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    CartComponent,
    HeroComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AdminProfileModule,
    UserProfileModule,
    ProductsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
