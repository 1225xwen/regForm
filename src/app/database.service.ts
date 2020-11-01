import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  CurrentUser=null;
  setCurrentUser=new EventEmitter<object>();
  
  onSetCurrentUser(newUser){
    this.CurrentUser=newUser
  }
}
