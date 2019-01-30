var postModel = require('../model/post.model');
var postController = {};
var userModel = require('../model/user.model');

postController.getPosts = function(req, res){
	postModel
	.find({},
	function(req, showPost){
		console.log("Post")
		res.status(200).send(showPost);
	})
}
postController.getPostById = function(req, res){
	postModel.findOne({_id: req.params.id}, function(err, foundPost){
		console.log(req.params.id)
		res.send(foundPost);
	})
}

postController.getUserPosts = function(req, res){
	var userId = req.params.userId;
	userModel
	.findOne({_id: userId})
	.populate('post')
	.select('post')
	.exec((err, result)=>{
		if (err) { res.status(500).send(err);}
		res.status(200).send(result);
	})
}


postController.deletePost = function(req, res){
	postModel.deleteOne({_id: req.params.id}, function(err, foundPost){
		console.log(req.params.id)
		res.send(foundPost);
	})
}
postController.updatePost = function(req, res){
	var postid = req.body._id;
	console.log("updatedPost =", req.body);
	postModel.findOneAndUpdate({_id: postid}, req.body, {upsert: true,new: true}, function(err, updatedPost){
		console.log(updatedPost)
		res.send(updatedPost);
	})
	console.log(req.body);
}
postController.addPost = function(req, res){
	console.log(req.body);
	var userId = req.body.userId;
	var post = new postModel(req.body);
	console.log("Add post", post);
	post.save( function(err, savedPost){
		if(err){
		 res.status(500).send("Server Error")
		} else{
			userModel.findOne({_id:userId})
			.exec((err, user)=>{
				if(err) {
					res.status(500).send("Server Error")
				}else{
					user.post.push(savedPost._id);
					user.save();
					res.status(200).send(savedPost);
				}
			})
		}
	})
}

postController.getFriendPosts = function(req, res){
	var currentUser = req.params.requestedUser;
	console.log("Id of Current User", req.params.requestedUser);
	userModel
	.findOne({_id: currentUser})
	.exec((err, result)=>{
		if(err) {
			res.status(500).send(err);
		}
		userModel
		.find({'_id': {$in: result.friend}})
		.populate('post')
		.select('post')
		.exec((err, posts)=>{
			if(err) {
				res.status(500).send(err);
			}
			console.log("post",posts);
			res.status(200).send(posts);
		})
	})
}


module.exports = postController;