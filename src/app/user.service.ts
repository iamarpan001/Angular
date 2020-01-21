import { Injectable } from '@angular/core';
import{ v4 as uuid} from 'uuid';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // email: any;
  // pswd: any;

  constructor(private toastr: ToastrService) { }
  login(data){
    console.log('my Data Comming.........',data);
    // this.email = data.email;
    // this.pswd = data.pswd
    if(data.email == "abc@gmail.com" && data.pswd == 12345){
     console.log('Login successful');
    let id =uuid();
  console.log("my id ....",id);
  localStorage.setItem("ID",id);
  return true;
}
    else{
    console.log('Invalid');
    }
  }
  alertForSuccess(message,title){
    this.toastr.success(message, title);
  }
  alertFordanger(message,title){
    this.toastr.error(message, title);
  }
  alertForWarning(message,title){
    this.toastr.warning(message, title);
  }
}
