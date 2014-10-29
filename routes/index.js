var express = require('express');
var router = express.Router();
var fs = require('fs');



/* GET home page. */

router.get('/', function(req, res) {
	res.render('index')
});
	

router.get('/:id', function(req, res){

	console.log('this is the id ' + req.params.id)
	if (!req.params.id ) { 
  		res.render('index')
 
	} else {

 		fs.readdir('./public/images/' + req.params.id, function(err, files){
  			if(err) console.log( err )

  			var photos = files;

  			res.render('default',  { photos: photos, destination: req.params.id })
		});
	}

	
});











module.exports = router;
