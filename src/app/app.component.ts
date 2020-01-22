import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginp';
  constructor(
    private router: Router, 
  ) { }
  id:any;

  ngOnInit() {
    let id = localStorage.getItem("ID");
    this.checkforlogin();
  }
checkforlogin(){
  if(this.id == null ||this.id == ""){
    this.router.navigate(['register']);
  }
}
}
