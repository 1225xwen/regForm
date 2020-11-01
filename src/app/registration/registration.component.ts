import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private db:DatabaseService,private router: Router) { }

  ngOnInit(): void {
  }

  FullName='';
  Email='';
  PhoneNumber=0;
  Address='';
  Password='';
  Users=[]

  onSubmit(){
    let newUser={
      FullName:this.FullName,
      Email:this.Email,
      PhoneNumber:this.Address,
      Address:this.Address,
      Password:this.Password
    }
    this.FullName='';
    this.Email='';
    this.PhoneNumber=0;
    this.Address='';
    this.Password='';
    //this.db.setCurrentUser.emit(newUser);
    this.db.onSetCurrentUser(newUser);
    this.router.navigate(["/welcome"]);



  }
  

}
