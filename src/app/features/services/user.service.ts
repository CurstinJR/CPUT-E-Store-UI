import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {

  public api: string;

  constructor(private http: HttpClient) {
    this.api = `${environment.api}`;
  }

  getAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.api}/users`);
  }

  getById(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.api}/users/${id}`);
  }
}
