import { Component, OnInit } from '@angular/core';
import { UserserviceService} from '../service/userservice.service';
import * as _ from 'lodash';


@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	key;
	users=[];
	_id: string;
	myFriends = [];
	public isFollow: boolean = false;

	constructor(public _userService: UserserviceService) { }

	ngOnInit() {
	}

	searchUser(key){
		this._userService.searchUser(this.key).subscribe((res:any)=>{
			console.log("Response from user service",res);
			this.users = res;
			this.myFriends = JSON.parse(localStorage.getItem('user')).friend;
			this.users.forEach((i)=>{
				var flag = _.includes(this.myFriends, i._id);
				i['isFriend'] = flag;
				console.log("i: ",i);
			})
		},err=>{
			console.error("Response error",err);
		})
		console.log("Response user search",this.key);
	}

	followUser(_id){
		console.log("Response of userId to be followed", _id);
		this._userService.followUser(_id).subscribe((res:any)=>{
			console.log("Response", res)
			this._id = res;
			localStorage.setItem('user', JSON.stringify(res));
		},err=>{
			console.error("Error to Follow User",err);
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

	// onClick(){
	// 	this.isFollow = !this.isFollow;

	// }
}