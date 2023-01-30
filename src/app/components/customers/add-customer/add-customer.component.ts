import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
   customer: Customer= {
    id:'',
    name:'',
    birthDate:'',
    age:0,
    cpf:'',
    email:'',
   };  

  constructor(private customerService: CustomersService, private router:Router){

  }

  ngOnInit(): void{

  }


  addCustomer(){
    this.customerService.addCustomer(this.customer).subscribe
    ({
      next:(customer)=>{
        this.router.navigate(['/customers']);
      }
    });

  }

}
