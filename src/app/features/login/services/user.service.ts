import {environment} from "../../../../environments/environment";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductModel} from "../../products/models/product.model";
import {LoginUserModel} from "../models/login-user.model";
import {UserModel} from "../models/user.model";

const API_BASE_URL = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private USER_URL = `${API_BASE_URL}/users/`;

  constructor(private http: HttpClient) {
  }

  login(email:string ,password:string): Observable<UserModel> {
    let loginURL = this.USER_URL+"login/"+email+"/"+password
    return this.http.get<UserModel>(loginURL);
  }
}
