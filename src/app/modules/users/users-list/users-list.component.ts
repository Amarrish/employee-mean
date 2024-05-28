import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserSchema } from '../users.model'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  allUsers:UserSchema[] =[]

  constructor(private api:ApiService){}

  // when UserlistComponent page is open call getUserList()
  ngOnInit(): void {
    this.getUserList()

  }

  getUserList(){
  // when Users List page open,display all users list from json file by making an api call: http://localhost:3000/users
  this.api.getallusers().subscribe({
    next:(result:any)=>{
      console.log(result);
      this.allUsers = result
      // this.sortByName()
    },
    error:(result:any)=>{
      console.log(result);
      alert("Error while fetching data please try after some time")
      
    }
  })
  }
 

  deleteuser(id:any){
    this.api.deleteuser(id).subscribe({
      next:(res:any)=>{
        console.log("deleted successfully");
        this.getUserList() 
      },
      error:(err:any)=>{
        console.log(err);
        alert("Cannot perform the action now... Please try after sometimes!!!")
      }
    })
  }


  sortById(){
    this.allUsers.sort((a:any,b:any)=>a.id-b.id)
    console.log(this.allUsers);
    
  }
}
