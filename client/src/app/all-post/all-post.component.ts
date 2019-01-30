import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {
  posts;
  constructor(public _postService: PostService) { }

  ngOnInit() {
  	var id = JSON.parse(localStorage.getItem('user'))._id;
  	console.log("Local storade id", id)
    this._postService.getUserPosts(id).subscribe((res:any)=>{
      console.log("getUserPosts Response from API", res);

      this.posts = res.post;
      console.log("Post Response", this.posts);
    }, err=>{
      console.error("Error in getPosts", err)
    })
  }
}