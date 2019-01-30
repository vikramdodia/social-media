import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(public http:HttpClient ) { }

  login(login){
  	console.log("Response from API of Login", login);
  	return this.http.post("http://localhost:3000/user/login", login );
  }

  signup(signup){
  	console.log("Response from API of Signup", signup)
  	return this.http.post("http://localhost:3000/user/signup", signup);
  }

  searchUser(key){
    console.log("Key:",key);
    var query = "?key="+key;
    return this.http.get("http://localhost:3000/user/search-user"+query);
  }

  followUser(_id){
    console.log("userId of User", _id);
    var body = { requestedUser: JSON.parse(localStorage.getItem('user'))._id ,userToBeFollowed: _id };
    return this.http.post("http://localhost:3000/user/add-friend", body);
  }

  unFollowUser(_id){
    console.log("userId of User", _id);
    var body = { requestedUser: JSON.parse(localStorage.getItem('user'))._id ,userToBeFollowed: _id };
    return this.http.post("http://localhost:3000/user/unFriend", body);
  }

  getUserById(id){
    console.log("user id:", id);
    return this.http.get("http://localhost:3000/user/personal-profile/"+id);
  }

  getUserFriends(currentUser){
    console.log("currentUser", currentUser)
    return this.http.get("http://localhost:3000/user/connection/"+currentUser);
  }
}