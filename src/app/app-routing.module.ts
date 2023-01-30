import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/customers/add-customer/add-customer.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list/customers-list.component';
import { EditCustomerComponent } from './components/customers/edit-customer/edit-customer.component';
import { AddOrderComponent } from './components/orders/add-order/add-order.component';
import { EditOrderComponent } from './components/orders/edit-order/edit-order.component';
import { OrdersListComponent } from './components/orders/orders-list/orders-list.component';

const routes: Routes = [
  {
    path:'',
    component:CustomersListComponent
  },
  {
    path:'customers',
    component:CustomersListComponent
  },
  {
    path:'customers/add',
    component:AddCustomerComponent
  },
  {
    path:'customers/edit/:id',
    component:EditCustomerComponent
  },
  {
    path:'orders',
    component:OrdersListComponent
  },
  {
    path:'orders/add',
    component:AddOrderComponent
  },
  {
    path:'orders/edit/:id',
    component:EditOrderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
