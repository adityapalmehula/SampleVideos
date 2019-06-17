var express = require('express');
var router = express.Router();
const menuData = require('./../menus/menu.json')
const fs = require("fs");
var path = require('path');
// const configConstants = require('./../constants/config');
var menuPath = path.join(__dirname, '..', '/menus/','menu.json');

/* get all classes from  */
router.get('/', function(req, res, next) {
	 //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.header("Content-Type",'application/json');
	if (fs.existsSync(menuPath)) {
		return res.status(200).send({ success: true, data:menuData});
	}else{
		return res.status(500).send({ success: false, msg:"File Not Found !"});
	}
});


module.exports = router;