import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {LoginUserModel} from "../_models/login-user.model";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public api: string;
  public currentUser: Observable<LoginUserModel>;
  private currentUserSubject: BehaviorSubject<LoginUserModel>;

  constructor(private http: HttpClient, private router: Router) {
    this.api = `${environment.api}`;
    // @ts-ignore
    this.currentUserSubject = new BehaviorSubject<LoginUserModel>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): LoginUserModel {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<LoginUserModel> {
    return this.http.post<LoginUserModel>(`${this.api}/auth/login`, {email, password})
      .pipe(map(user => {
        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        user.authData = window.btoa(`${email}:${password}`);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  // TODO: Implement logout
  logout() {
    this.http.post(`${this.api}/auth/login`, {});
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // @ts-ignore
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }
}
