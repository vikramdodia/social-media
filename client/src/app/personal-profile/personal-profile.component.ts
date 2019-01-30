import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';

@Component({
	selector: 'app-personal-profile',
	templateUrl: './personal-profile.component.html',
	styleUrls: ['./personal-profile.component.css']
})
export class PersonalProfileComponent implements OnInit {

	profiles = [];
	
	constructor(public _userService: UserserviceService) { }

	ngOnInit() {
		var id = JSON.parse(localStorage.getItem('user'))._id;
		console.log("Local storage id", id)
		this._userService.getUserById(id).subscribe((res:any)=>{
			console.log("getUser Response from API", res);
			this.profiles.push(res) ;
			console.log("User Response", this.profiles);
		}, err=>{
			console.error("Error in getPosts", err)
		})
	}
}