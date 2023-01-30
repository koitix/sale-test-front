import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent {
  orders: Order[] = [];

  constructor(private orderService: OrderService, private router:Router){

  }
  ngOnInit():void{
    this.orderService.getAllOrder().subscribe({
      next:(customers) => {
      this.orders = customers;
      },
      error:(response) => {
      console.log(response)
      }
    })
  }

  payOrder(id:string){
    this.orderService.payOrder(id).subscribe
    ({
      next:(response)=>{
        console.log("ok");
        this.router.navigate(['/orders']);
      }
    });
  }

}
