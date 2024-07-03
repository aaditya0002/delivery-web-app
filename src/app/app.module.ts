import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DeliveryLoginComponent } from './delivery-login/delivery-login.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AdminLogInComponent } from './admin-log-in/admin-log-in.component';
import { ReportsComponent } from './reports/reports.component';
import { Inventory1Component } from './inventory1/inventory1.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DeliveryLoginComponent,
    InventoryComponent,
    AdminLogInComponent,
    ReportsComponent,
    Inventory1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
