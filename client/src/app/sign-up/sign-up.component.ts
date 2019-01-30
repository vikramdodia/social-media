import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

	details = {firstname:'' ,lastname:'', email:'', dob:'', password:'' };

  constructor(public _userService:UserserviceService, public _router: Router) { }

  ngOnInit() {
  }
  signup(details){
  	console.log("Users Details ", details);
  	this._userService.signup(details).subscribe(res=>{
  		console.log("Add user Response",res);
      this._router.navigate(['/log-in']);
  	},err=>{
  		console.error("Error to add user", err);
  	} );
  }
}