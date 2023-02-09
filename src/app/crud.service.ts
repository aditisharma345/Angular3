import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

/* export class users {
  id: number;
  name: string;
  email: string;
  phone: number;
} */

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}
  users(id: any) {
    return this.http.delete('${this.url}/${id}');
  }
}
