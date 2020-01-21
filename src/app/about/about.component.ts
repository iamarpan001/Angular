import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  id: any;

  constructor(private router: Router,
    private usersevice: UserService,) { }

  ngOnInit() {
    this.getId();
  }
  getId(){
    this.id = localStorage.getItem("ID");
  }

  logout(){
    localStorage.removeItem("ID");
    //console.log("My id.....",this.id);
    this.router.navigate(['login']);
    this.usersevice.alertForSuccess("Log out","Successfully");
  }

}
