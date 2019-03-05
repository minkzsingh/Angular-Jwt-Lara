import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterApiService {

  constructor(private http: HttpClient) { 

  }

  registerUser(user){
    return this.http.post("http://miui-xyrin-davinder.c9users.io/api/auth/register", user).subscribe(data => console.log(data));
  }
}
