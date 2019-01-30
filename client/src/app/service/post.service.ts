import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public http:HttpClient) { }

  addPost(details){
  	console.log("Add post responce from API", details);
  	return this.http.post("http://localhost:3000/post", details );
  }

  getPost(userid){
  	console.log("getpost is displayed here", );
  	return this.http.get("http://localhost:3000/post", userid);
  }


  getUserPosts(userId){
  	// console.log("getpost is displayed here");
  	return this.http.get("http://localhost:3000/post/"+userId );
  }

  getFriendPosts(currentUser){
    return this.http.get("http://localhost:3000/post/get-friends-post/"+currentUser)
  }
}
