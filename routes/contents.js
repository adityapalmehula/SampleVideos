var express = require('express');
var router = express.Router();
const fs = require("fs");
var path = require('path');


//get main Contenet by id 
router.get('/:fileName',function(req,res){
	
	debugger;
	try {
		const getFileName=req.params.fileName.toString();

		var filedataInfo = './../menus/mainContent/'+getFileName;
		var filePath = path.join(__dirname, '..', '/menus/','/mainContent/'+getFileName);

		const filedata = require(filedataInfo);

		if (fs.existsSync(filePath)) {
				return res.status(200).send({ success: true, data:filedata});
			}else{
				return res.status(400).send({ success: false, msg:"File Not Found !"});
			}
		
	}catch(err) {

		return res.status(400).send({ success: false,msg: "File Not Found !" });
	}
});

module.exports = router;
