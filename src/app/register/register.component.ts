import { Component, OnInit } from '@angular/core';
import { RegisterApiService } from '../service/register-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registered = false;
  constructor(private apiService: RegisterApiService) { }

  ngOnInit() {
  }

  onFormSubmit(form){
    const user = {
      name : form.controls.fullname.value,
      email: form.controls.email.value,
      password : form.controls.password.value,
      password_confirmation : form.controls.password_confirmation.value
    }
    
    this.registered = this.apiService.registerUser(user) ? true : false;
  }
}
