import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  addUser(data:any): Observable<any>{
    return this.http.post('http://localhost:3000/registerUsers',data)
  }

  getUser(): Observable<any>{
    return this.http.get('http://localhost:3000/registerUsers')
  }
}
