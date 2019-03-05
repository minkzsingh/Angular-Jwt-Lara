import { Component, OnInit } from '@angular/core';
import { RegisterApiService } from '../service/register-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: RegisterApiService) { }

  ngOnInit() {
  }

  onLoginSubmit(user: any){
    user = {
      "email": user.controls.email.value,
      "password": user.controls.password.value
    }

    this.apiService.loginUser(user);
  }

}
