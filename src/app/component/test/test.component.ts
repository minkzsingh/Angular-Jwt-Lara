import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  hobbies:string[];
  address:Address;
  constructor() { }

  ngOnInit() {
    this.name     = "Gurinder Singh";
    this.age      = 30;
    this.email    = "minkzz@gmail.com";
    this.hobbies  = ['Love To coding', 'Love Laravel', 'Love Angular'];
    this.address  = {
      city        : "Ludhiana",
      street      : "Dashmesh Nagar Dhuri Line",
      street_no   : 12.1 
    }
  }

  onSubmit(hobby){
    //console.log(hobby);
      this.hobbies.unshift(hobby);
  }

}
interface Address{
    street:string,
    city:string,
    street_no:number
}