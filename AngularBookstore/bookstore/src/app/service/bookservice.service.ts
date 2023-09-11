import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable ,map,of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Product} from '../Product'

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http: HttpClient) { }
  private readonly userData = { email: 'vishnu@gmail.com', password: 'password' };
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);



  login(email: string, password: string):Observable <boolean> {
    if (email === this.userData.email && password === this.userData.password) {
     this.isLoggedInSubject.next(true)
      return of(true);
    }
    return of(false);
  }

  getProducts(): Observable<Product[]> {
   
    return this.http.get<Product[]>("https://api.itbook.store/1.0/search/mongodb");

  }

  isLogedIn(): Observable<boolean> {
    return this.isLoggedInSubject.pipe(
      map((value) => value)
    );
  }

}
