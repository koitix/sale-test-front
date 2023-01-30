import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroments/enviroment';
import { Customer } from 'src/app/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  baseApiUr: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllCustomers() : Observable<Customer[]>{
    return this.http.get<Customer[]>(this.baseApiUr + "/api/Customer")
  }

  addCustomer(customer : Customer) : Observable<Customer>{
    return this.http.post<Customer>( this.baseApiUr + "/api/Customer", customer)
  }

  getCustomer(id:string) : Observable<Customer>{
    return this.http.get<Customer>( this.baseApiUr + "/api/Customer/" + id)
  }

  editCustomer(id:string, customer : Customer) : Observable<Customer>{
    return this.http.put<Customer>( this.baseApiUr + "/api/Customer/" + id, customer)
  }

  deleteCustomer(id:string) : Observable<Customer>{
    return this.http.delete<Customer>( this.baseApiUr + "/api/Customer/" + id)
  }
}
