import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Configuration } from '../Config/configuration';

@Injectable({
  providedIn: 'root'
})
export class RegisterApiService {
  config :any = new Configuration();

  checkStatus = new BehaviorSubject<boolean>(false);
  isUserLoggedIn = this.checkStatus.asObservable();

  constructor(private http: HttpClient) { 

  }

  registerUser(user){
    return this.http.post(this.config.apiUrl + "/register", user).subscribe(data => console.log(data));
  }

  checkLogin(){
    const token = localStorage.getItem('token');
    if(token){
      this.checkStatus.next(true);
    }else{
      this.checkStatus.next(false);
    }
  }

  loginUser(user){
    return this.http.post(this.config.apiUrl+"/login", user).subscribe((data: any) => {
                  if(data){
                      localStorage.setItem('token' , data.token);
                      localStorage.setItem('user' , JSON.stringify(data.user));
                      return this.checkLogin();
                  }
            });
  }
}
