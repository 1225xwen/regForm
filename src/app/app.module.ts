import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import {NotfoundComponent} from './notfound/notfound.component';
import { registerLocaleData } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabaseService } from './database.service';


const Routes:Routes=[
  {path:"",component:RegistrationComponent},
  {path:"welcome",component:WelcomeComponent},
  {path:"**",component:NotfoundComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(Routes,{useHash:true}),
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
