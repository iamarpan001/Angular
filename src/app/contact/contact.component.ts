import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myData: any;
  name: any;
  email: any;
  gender: any;
  pswd: any;

  constructor(
    private usersevice: UserService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.usersevice.currentMessage.subscribe(data => {

      this.myData = JSON.parse(data);
      console.log('data coming.....',this.myData);
    });
  }
}
