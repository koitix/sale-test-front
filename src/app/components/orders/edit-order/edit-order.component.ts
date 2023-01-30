import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent {
  order: Order= {
    id:'',
    customerId:'',
    price:0,
    createdAt:'',
    status: false,
    paidAt:''
   };  

   
  constructor(private route: ActivatedRoute, private orderService: OrderService, private router:Router){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
          const id =  params.get('id');

          if(id){
            this.orderService.getOrder(id).subscribe({
              next:(response) =>{
                this.order = response;
              }
            });
          }
      }
    })
  }

  editOrder(){
    this.orderService.editOrder(this.order.id, this.order).subscribe
    ({
      next:(response)=>{
        this.router.navigate(['/orders']);
      }
    });
  }

  deleteOrder(id:string){
    this.orderService.deleteOrder(id).subscribe
    ({
      next:(response)=>{
        this.router.navigate(['/orders']);
      }
    });
  }

}
