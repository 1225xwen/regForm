import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private db:DatabaseService,private router: Router) {

   }

   newUser=null;

  ngOnInit(): void {
    this.newUser=this.db.CurrentUser;
    console.log(this.newUser);
  }

  GoToRegister(){
    this.router.navigate(["/"]);
  }

  
}
