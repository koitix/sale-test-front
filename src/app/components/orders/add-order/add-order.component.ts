import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class addOrderComponent {
   order: Order= {
    id:'',
    customerId:'',
    price:0,
    createdAt:'',
    status: false,
    paidAt:''
   };  

  constructor(private orderService: OrderService, private router:Router){

  }

  ngOnInit(): void{

  }


  addCustomer(){
    this.orderService.addOrder(this.order).subscribe
    ({
      next:(order)=>{
        this.router.navigate(['/customers']);
      }
    });

  }

}
