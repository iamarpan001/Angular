import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators,AbstractControl} from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup;
  name: AbstractControl;
  gender: AbstractControl;
  email: AbstractControl;
  pswd: AbstractControl;
  userList: Array<any> = [];
  preparedData: Array<any> = [];
  constructor(
    private formbuilder: FormBuilder,
    private usersevice: UserService,
    private router: Router,
    private userService: UserService
  ) {
    this.registerform = formbuilder.group({
      name: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(40), Validators.pattern(/^[a-zA-Z ]*$/)]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
      gender: ['', Validators.required],
      pswd: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]]
   });
   this.name = this.registerform.controls['name'];
   this.email = this.registerform.controls['email'];
   this.gender = this.registerform.controls['gender'];
   this.pswd = this.registerform.controls['pswd'];

  }

  ngOnInit() {
    this.userService.currentMessage.subscribe(data => {
      console.log('Remaining data.....',data);
      if(data){
        let newData = JSON.parse(data);
        console.log('',newData);
        this.preparedData = newData;
      }
    });
  }
  registration(){
     if(
      this.registerform.value.name   && this.registerform.value.email           
      &&  this.registerform.value.gender  && this.registerform.value.pswd
      ){
      let sendData = {
        name: this.registerform.value.name, 
        email: this.registerform.value.email,
        gender: this.registerform.value.gender,
        pswd: this.registerform.value.pswd
      }
      console.log("My data prepared...",sendData)
     //this.usersevice.changeMessage(JSON.stringify(sendData));
      this.userList.push(sendData);
      console.log('Data pushed......',this.userList);

     
     if(this.preparedData && this.preparedData.length > 0){
      console.log("prepared in if......",this.preparedData);
     this.preparedData.push(sendData);
      this.userService.changeMessage(JSON.stringify(this.preparedData));
      this.router.navigate(['contact']);
    }
    else{
      console.log('Prepared in else.... ', this.preparedData);
      this.userService.changeMessage(JSON.stringify(this.userList));
      this.router.navigate(['contact']);
    }

   }
 }   
}
