import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewPurchasesComponent} from "./view-purchases/view-purchases.component";
import {UserProfileComponent} from "./user-profile.component";
import {ProfileComponent} from "../components/profile/profile.component";

const routes: Routes = [
  {
    path: 'user-profile', component: UserProfileComponent,
    children: [
      {path: '', component: ProfileComponent},
      {path: 'view-purchases', component: ViewPurchasesComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule {
}
