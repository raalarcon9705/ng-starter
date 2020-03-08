import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>(environment.apiUrl + '/login', { password, email });
  }

  register(email: string, password: string, name: string) {
    return this.http.post<any>(environment.apiUrl + '/register', { password, email, name });
  }
}
