import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersListComponent } from './components/orders/orders-list/orders-list.component';
import { AddCustomerComponent } from './components/customers/add-customer/add-customer.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list/customers-list.component';
import { EditCustomerComponent } from './components/customers/edit-customer/edit-customer.component';
import { AddOrderComponent } from './components/orders/add-order/add-order.component';
import { EditOrderComponent } from './components/orders/edit-order/edit-order.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    OrdersListComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    AddOrderComponent,
    EditOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
