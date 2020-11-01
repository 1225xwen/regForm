import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private db:DatabaseService) {

   }

   newUser=null;

  ngOnInit(): void {
    this.newUser=this.db.CurrentUser;
  }

  
}
