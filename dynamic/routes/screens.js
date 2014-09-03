var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send({
  	"first": {
            "type": "text",
            "label": "First Name"
        },
        "last": {
            "type": "text",
            "label": "Last Name"
        },
        "birthDate": {
        	"type":"date",
        	"label":"Birthdate"
        },
        "limits": {
        	"label":"Limits",
    		"type": "fieldset",
    		"fields": {
    			"thisLimit": {
    				"type":"number",
    				"label":"This Limit"
    			},
    			"thatLimit": {
    				"type":"number",
    				"label":"That Limit"
    			}
    		}
        },
        "submissionId": {
        	"type":"hidden"
        },
        "fileId": {
        	"type":"hidden"
        },
        "submit": {
            "type": "submit",
            "label": "Submit"
        }
  });
});

module.exports = router;
