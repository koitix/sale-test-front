import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Customer } from "src/app/models/customer.model";
import { CustomersService } from "../../services/customers.service";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit{

  editCustomerRequest: Customer= {
    id:'',
    name:'',
    birthDate:'',
    age:0,
    cpf:'',
    email:'',
   };  


  constructor(private route: ActivatedRoute, private service : CustomersService,private router:Router){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
          const id =  params.get('id');

          if(id){
            this.service.getCustomer(id).subscribe({
              next:(response) =>{
                this.editCustomerRequest = response;
              }
            });
          }
      }
    })
  }

  editCustomer(){
    this.service.editCustomer(this.editCustomerRequest.id, this.editCustomerRequest).subscribe
    ({
      next:(response)=>{
        this.router.navigate(['/customers']);
      }
    });
  }

  deleteCustomer(id:string){
    this.service.deleteCustomer(id).subscribe
    ({
      next:(response)=>{
        this.router.navigate(['/customers']);
      }
    });
  }

}
