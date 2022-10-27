import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponsComponent } from './components/coupons/coupons.component';
import { OffersComponent } from './components/offers/offers.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:"offers",component:OffersComponent},
  {path:"coupons",component:CouponsComponent},
  {path:"",component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
