import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

const ENDPOINT_BASE = 'http://localhost:8080/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(user: any) {
    return this.http.post<any>(ENDPOINT_BASE, user, {observe: 'response'});

  }

  setAuthToken(authToken: string) {
    localStorage.setItem('token', authToken);
  }

  getUserInfo() {
    const jwtData = this.getAuthToken().split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);

    const firstName = decodedJwtData.firstName;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
  }

  getAuthToken(): string {
    return localStorage.getItem('token');
  }
}
