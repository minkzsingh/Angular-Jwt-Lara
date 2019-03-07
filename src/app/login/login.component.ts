import { Component, OnInit } from '@angular/core';
import { RegisterApiService } from '../service/register-api.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogIn = false;
  constructor(private apiService: RegisterApiService) { }

  ngOnInit() {
  }

  onLoginSubmit(user: any){
    user = {
      "email": user.controls.email.value,
      "password": user.controls.password.value
    }

    this.apiService.loginUser(user);
    this.apiService.isUserLoggedIn.subscribe(val => (this.userLogIn = val));
    //this.route.navigate(['/dashboard']);
  }

}
