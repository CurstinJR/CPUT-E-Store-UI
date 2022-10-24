import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductModel} from "../models/product.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProductsService {

  public api: string;

  constructor(private http: HttpClient) {
    this.api = `${environment.api}`;
  }

  getAll(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.api}/products`);
  }

  getById(id: string): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.api}/products/${id}`);
  }
}
