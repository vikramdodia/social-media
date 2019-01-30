import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
	data = {email:'', password:''};
  constructor(public _userService: UserserviceService, private _route: Router) { }

  ngOnInit() {
  }

  login(data){
  	console.log("Users Details ", data);
  	this._userService.login(data).subscribe((res:any)=>{
  		console.log("Add user Response",res);
      localStorage.setItem("user", JSON.stringify(res.user));
      this._route.navigate(['/personal-profile']);
    },err=>{
      console.error("Error to add user", err);
    } );
  }
}