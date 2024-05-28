import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
// prpperty
email:string=""
password:string=""

constructor(private api:ApiService,private loginRouter:Router){}

login(){
  if(this.email && this.password){
    // compare username and password with admin details
  //  we should get admin details from http://localhost:3000/users/1
  // for that we have to make an api call to http://localhost:3000/users/1
  this.api.adminDetails().subscribe({
    next:(result:any)=>{
      console.log(result);
      // compare username and password with admin details
      if(this.email===result.email && this.password===result.password){
        alert("Authorization Successfull")
        // navigate to home page
        this.loginRouter.navigateByUrl('home')
      }else{
        alert("Invalid Admin Credential!!!")
      }
    },
    error:(result:any)=>{
      console.log(result);
      alert("Error while fetching data please try after some time ")
    }
  })
  }else{
    alert("Please fill the form completely!!!")
  }
}
}