var request = require("request");

request({
	uri: "http://www.sitepoint.com",
	}, 
	function(error, response, body) {
	  console.log(body);
	}
})


