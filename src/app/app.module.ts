import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ProductComponent } from './product/product.component';
import { BillingComponent } from './billing/billing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomepageComponent } from './homepage/homepage.component';

import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { PostService } from './post.service';
import { RevService } from './rev.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    ForgotComponent,
    ProductComponent,
    BillingComponent,
    CheckoutComponent,
    LogoutComponent,
    AdminComponent,
    HomepageComponent
 ],
 imports: [
	BrowserModule,
	routing,
	ReactiveFormsModule,
	HttpClientModule
 ],
 providers: [AuthService,PostService,RevService],
 bootstrap: [AppComponent]
})
export class AppModule { }
