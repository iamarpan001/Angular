import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // email: any;
  // pswd: any;

  constructor() { }
  login(data){
    console.log('my Data Comming.........',data);
    // this.email = data.email;
    // this.pswd = data.pswd
    if(data.email == "abc@gmail.com" && data.pswd == 12345){
     console.log('Login successful');}
    else{
    console.log('Invalid');
    }
  }
}
