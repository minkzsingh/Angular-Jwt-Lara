import { Component, OnInit } from '@angular/core';
import { RegisterApiService } from '../service/register-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUserLogIn = true;
  username = "";
  constructor(private apiService:RegisterApiService) { }

  ngOnInit() {
    this.apiService.isUserLoggedIn.subscribe(val => {
          if(val){
            this.isUserLogIn = val;
            const user = JSON.parse(localStorage.getItem('user'));
            this.username = user.name;
          }
        });

  }
}
