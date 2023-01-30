import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroments/enviroment';
import { Order } from 'src/app/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseApiUr: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllOrder() : Observable<Order[]>{
    return this.http.get<Order[]>(this.baseApiUr + "/api/Order");
  }

  addOrder(order : Order) : Observable<Order>{
    return this.http.post<Order>( this.baseApiUr + "/api/Order", order);
  }

  getOrder(id:string) : Observable<Order>{
    return this.http.get<Order>( this.baseApiUr + "/api/Order/" + id);
  }

  editOrder(id:string, order : Order) : Observable<Order>{
    return this.http.put<Order>( this.baseApiUr + "/api/Order/" + id, order);
  }

  deleteOrder(id:string) : Observable<Order>{
    return this.http.delete<Order>( this.baseApiUr + "/api/Order/" + id);
  }

  payOrder(id:string) : Observable<Order>{
    return this.http.put<Order>( this.baseApiUr + "/api/Order/UpdatePayOrder/" + id, null);
  }
}
