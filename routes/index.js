var express = require('express');
var router = express.Router();
var User = require('./usersSchema');


/* GET home page. */
router.post('/api/signup', function(req, res){
	var username = req.body.username;
	var password =  req.body.password;
	User.find({username:req.body.username},function(err,user){
		if(err){
			console.log(err);
			return res.send(err);

		}
		if(user.length){
			console.log('user already exists');
			return res.status(200).send("user already regd");
		}

		var  _user=new User({
			username:req.body.username,
			password:req.body.password

		});
		console.log(password);

		_user.save(function(err,user){
			if(err)
				return res.status(500).send(err);
			console.log(user);
			return res.status(200).send();
		});
	});
	
});
// api for login
router.post('/api/login',function(req,res){
	var username=req.body.username;
	var password=req.body.password;
	User.find({username:req.body.username},function(err,user){
		if(err){
			console.log(err);
			return res.send('user  do not exists');
		}
		User.findOne({username:req.body.username,password:req.body.password},function(err,user){
			if(err){
				console.log(err);
				return res.status(401).send({message : 'Internal Server Error'});
			}
			if(user){
				console.log(user);
				console.log('user logged in successfully');
				res.status(200).send({message : 'User logged in successfully'});
			}
			else{

				console.log('either username or pasword is incorrect');
				res.status(401).send({message : 'either username or pasword is incorrect'});
			}
		});
	})

});//api for login





router.get('*', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;

