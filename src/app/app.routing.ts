import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';

import {ForgotComponent} from './forgot/forgot.component';
import {ProductComponent} from './product/product.component';
import {BillingComponent} from './billing/billing.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {HomepageComponent} from './homepage/homepage.component'; 

import {AuthGuard} from './auth.guard';

const appRoutes: Routes = [
{ path: 'register', component:RegisterComponent},
{ path: 'login', component:LoginComponent},
{ path: 'logout', component:LogoutComponent},
{ path: 'user', component:UserComponent, canActivate: [AuthGuard], data:
{permission: {only: ["user", "admin"]}}},
{ path: 'admin', component:AdminComponent, canActivate: [AuthGuard], data:
{permission: {only: ["admin"]}}},
{ path: 'forgot', component:ForgotComponent},
{ path: 'product', component:ProductComponent},
{ path: 'billing', component:BillingComponent},
{ path: 'checkout', component:CheckoutComponent},
{ path: 'homepage', component:HomepageComponent},
{ path: '', component:HomepageComponent, pathMatch:'full'},
{ path: 'product/:product_title/:product_description/:product_unitPrice/:product_releaseDate/:product_type/:product_image', component:ProductComponent}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);




						

