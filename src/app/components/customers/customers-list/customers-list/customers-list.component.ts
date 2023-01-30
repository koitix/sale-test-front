import { Component,OnInit } from '@angular/core';
import { CustomersService } from 'src/app/components/services/customers.service';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit{

  customers: Customer[] = [];

  constructor(private customerService: CustomersService){

  }

  ngOnInit():void{
    this.customerService.getAllCustomers().subscribe({
      next:(customers) => {
      console.log(customers);
      this.customers = customers;
      },
      error:(response) => {
      }
    })
  }

}
