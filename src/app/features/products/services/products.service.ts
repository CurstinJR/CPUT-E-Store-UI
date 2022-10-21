import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductModel} from "../models/product.model";
import {environment} from "../../../../environments/environment";

const API_BASE_URL = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private PRODUCTS_URL = `${API_BASE_URL}/products`;

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.PRODUCTS_URL);
  }
  // createProduct(product:ProductModel): Observable<ProductModel> {
  //   let createURL = this.PRODUCTS_URL
  //   return this.http.post<ProductModel>(createURL,product);
  // }
}
