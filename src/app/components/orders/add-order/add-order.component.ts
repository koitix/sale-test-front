import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerModel } from 'src/app/models/customer-order.model';
import { Order } from 'src/app/models/order.model';
import { CustomersService } from '../../services/customers.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent {
   order: Order= {
    id:'',
    customerId:'',
    price:0,
    createdAt:'',
    status: false,
    paidAt:''
   };  

   l_customer : CustomerModel[]=[];

  constructor(private orderService: OrderService, private router:Router, private customerService : CustomersService){

  }

  ngOnInit(): void{
    this.customerService.getAllCustomers().subscribe({
      next:(customers) => {
      this.l_customer = customers;
      },
      error:(response) => {
      console.log(response)
      }
    })
    console.log(this.l_customer);
  }


  AddOrder(){
    console.log(this.order);
    if(this.order.paidAt == ""){
      this.order.paidAt = '0001-01-01';
    }
    if(this.order.createdAt == ""){
      this.order.createdAt = '0001-01-01';
    }
 
    this.orderService.addOrder(this.order).subscribe
    ({
      next:(order)=>{
        this.router.navigate(['/orders']);
      }
    });

  }

}
