var userModule = require('../model/user.model');
var userController = {};

userController.signUp = function(req, res){

	var user = new userModule(req.body);
	user.save(function(err, newUser){
		console.log("New User Created", newUser);
		res.send(newUser)
		
	});
}

userController.logIn = function(req, res){
	email_entered = req.body.email;
	userModule.findOne({email: email_entered},function(err, foundUser){
		if(err){
			res.status(500).send(err);
		} else if(foundUser){
			if(req.body.password == foundUser.password ){
				res.status(200).json({message: "Login successful" , user: foundUser})

			}else{
				res.status(403).json({message: "Password incorrect"})
			}
		}else{
			res.status(403).json({message: "Unauthorized Access"})
		}
	})
}

userController.searchUsers = function(req, res){
	var key = req.query.key;
	console.log("Searched user from userController", key);
	userModule
	.find({$or:[{firstname:key},{lastname:key}]},function(err, searchedUser){
		res.send(err || searchedUser);
		console.log(searchedUser);
	})
}

userController.followUser = function(req, res){
	var currentUser = req.body.requestedUser;
	var user = req.body.userToBeFollowed;
	userModule.findOne({_id: currentUser},
		function(err, foundUser){
			console.log(foundUser);
			foundUser.friend.push(user);
			foundUser.save();
			res.status(200).send(foundUser);
		})
}

userController.unFollowUser = function(req, res){
	var currentUser = req.body.requestedUser;
	var user = req.body.userToBeFollowed;
	userModule.findOne({_id: currentUser},
		function(err, result){
			console.log(result);
			var index = result.friend.indexOf(user);
			console.log(index)
			if(index == -1){
				console.log("User not found");
				res.status(401).send("Bad request")
			} else{
				result.friend.splice(index,1);
				result.save();
				res.send(result);
			}
		})
}

userController.getUserById = function(req, res){
	userModule
	.findOne({_id: req.params.id}, function(err, userFound){
		console.log(req.params.id)
		res.send(userFound);
	})
}

userController.getUserFriends = function(req, res){
	var currentUser = req.params.userFriendsList;
	console.log("friends of Current User", req.params.userFriendsList);
	userModule
	.findOne({_id: currentUser})
	.exec((err, result)=>{
		if(err) {
			res.status(500).send(err);
		}
		userModule
		.find({'_id': {$in: result.friend}})
		.populate('user')
		.exec((err, friend)=>{
			if(err) {
				res.status(500).send(err);
			}
			console.log("friend",friend);
			res.status(200).send(friend);
		})
	})
}

module.exports = userController;