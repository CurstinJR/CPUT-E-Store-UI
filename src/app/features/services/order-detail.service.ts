import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {OrderDetailsModel} from "../models/order-details-model";

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  public api: string;

  constructor(private http: HttpClient) {
    this.api = `${environment.api}`;
  }

  getAll(): Observable<OrderDetailsModel[]> {
    return this.http.get<OrderDetailsModel[]>(`${this.api}/order-details`);
  }

  getById(id: number): Observable<OrderDetailsModel> {
    return this.http.get<OrderDetailsModel>(`${this.api}/order-details/${id}`);
  }
}
