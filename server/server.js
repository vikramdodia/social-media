var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var userController = require('./controller/user.controller');
var postController = require('./controller/post.controller');

mongoose.connect('mongodb://localhost:27017/socialmedia')
.then(()=>{console.log("connected")})
.catch(err => {console.log(err)});

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.post('/user/signup', userController.signUp);
app.post('/user/login', userController.logIn);
app.get('/user/search-user', userController.searchUsers);
app.get('/user/personal-profile/:id', userController.getUserById);
app.post('/user/add-friend', userController.followUser);
app.post('/user/unFriend', userController.unFollowUser);
app.get('/user/connection/:userFriendsList', userController.getUserFriends);

app.get('/post/:userId', postController.getUserPosts);
app.get('/post/:id', postController.getPostById);
app.get('/post/get-friends-post/:requestedUser', postController.getFriendPosts);
app.post('/post', postController.addPost);
app.delete('/post', postController.deletePost);
app.put('/post', postController.updatePost);

app.listen(3000);