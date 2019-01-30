import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
	selector: 'app-feeds',
	templateUrl: './feeds.component.html',
	styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
	friends = [];
	constructor(public _postService: PostService) { }

	ngOnInit() {
		this.getFriendPosts();
	}
	getFriendPosts(){
		var id = JSON.parse(localStorage.getItem('user'))._id;
		this._postService.getFriendPosts(id).subscribe((res: any)=>{
			console.log("response from service", res);
			for(var i=0;i<res.length;i++){
				for(var j=0; j < res[i].post.length; ++j){
					this.friends.push(res[i].post[j]);
				}
			}
			console.log("post response in service", this.friends);
		}, err=>{
			console.error("Error from API response", err);
		});
	}
}