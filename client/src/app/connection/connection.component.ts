import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';

@Component({
	selector: 'app-connection',
	templateUrl: './connection.component.html',
	styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

	friends = [];
	_id: string;

	constructor(public _userService: UserserviceService) { }

	ngOnInit() {		
		var currentUser = JSON.parse(localStorage.getItem('user'))._id;
		console.log("Local storage id", currentUser)
		this._userService.getUserFriends(currentUser).subscribe((res:any)=>{
			console.log("getUser Response from API", res);
			for(var i = 0; i < res.length; i++){
				this.friends.push(res[i]);				
			}
			console.log("User friend Response", this.friends);
		}, err=>{
			console.error("Error in getPosts", err)
		})
	}

	unFollowUser(_id){
		console.log("Response of userId to be followed", _id);
		this._userService.unFollowUser(_id).subscribe((res:any)=>{
			console.log("Response", res)
			this._id = res;
			localStorage.setItem('user', JSON.stringify(res));
		},err=>{
			console.error("Error to Follow User",err);
		})
	}
}