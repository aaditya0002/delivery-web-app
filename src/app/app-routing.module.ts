import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeliveryLoginComponent } from './delivery-login/delivery-login.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AdminLogInComponent } from './admin-log-in/admin-log-in.component';
import { ReportsComponent } from './reports/reports.component';
import { Inventory1Component } from './inventory1/inventory1.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'delivery-login',
    component: DeliveryLoginComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'admin-log',
    component: AdminLogInComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },{
    path:'inventory1',
    component:Inventory1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
