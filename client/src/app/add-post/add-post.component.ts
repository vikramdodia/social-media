import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
	details = {content: "",date: "", publish: "",author: ""} ;
	post:any;
  constructor(public _postService:PostService) { }

  ngOnInit() {
  }

  addPost(details){
  	details['userId'] = JSON.parse(localStorage.getItem('user'))._id;
  	console.log("addPost  Content: ", details);
  	this._postService.addPost(details).subscribe(res=>{
  		console.log("Post content response ", res);
  	}, err=>{
  		console.error("addPost", details);
  	})
  }
  getPosts(details){
  	this._postService.addPost(details).subscribe(res=> {
  		console.log("Responce of ", res);
  	},err=>{
  		console.error("error",err);
  	});
  }
}