import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ElephantComponent } from './components/elephant.component';
import { TrexComponent } from './components/trex.component';
import { CustomerComponent } from './components/customer.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"elephant", component: ElephantComponent},
  {path:"customer/:custId", component: CustomerComponent},
  {path:"trex", component: TrexComponent},
  {path:"**", redirectTo: "/", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
