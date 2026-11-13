import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './services/can-deactivate.guard';
import { ItemRequestComponent } from './item-request/item-request.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"cart/:id",component:CartComponent, canDeactivate:[CanDeactivateGuard]},
  {path:"login",component:LoginComponent},
  {path:"item-request",component:ItemRequestComponent, canActivate:[AuthGuard]},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
