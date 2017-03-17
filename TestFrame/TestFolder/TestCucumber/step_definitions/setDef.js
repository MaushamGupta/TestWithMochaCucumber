/**
 * http://usejsdoc.org/
 */

var gen=require("../Library/GenericMethods.js");
var gen1=new gen();

module.exports=function()
{
	this.Given(/^I am Testing something$/, function (callback) {
		  // Write code here that turns the phrase above into concrete actions
		   var url="http://127.0.0.1:1338/";
           gen1.verifyJson(url,callback)
//        	   callback();
          // })
		});
}