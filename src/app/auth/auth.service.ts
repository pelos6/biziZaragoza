import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  login(user: string, password: string): Observable<any> {
    const apiUrl: string = 'http://localhost:9000/api/auth';
    const body = {'access_token': 'QaJieB8ZZr99gRMykGt1RGyzDUZbcN4O'};

    let authHeader = 'Basic '.concat(btoa(user + ':' + password));
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', authHeader);
    return this.httpClient.post(apiUrl, body, {headers: headers}).map(
      (data:any) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.user);
        return data;
      }
    );
  }

  logout(): any {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  getUser(): any {
    return localStorage.getItem('user');
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null && this.getToken() != null;
  }
}

