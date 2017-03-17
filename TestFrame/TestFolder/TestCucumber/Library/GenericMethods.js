/**
 * http://usejsdoc.org/
 */
var assert = require('assert');
var request = require('request');
var chai=require('chai');
var should=require("chai").should();
module.exports=function()
{
	
this.verifyJson=function(url,callback)
{
	
	return request(url,function(err,res,body){
		   	if (err) {
         throw err;
       }
		var data=JSON.parse(body);
		console.log(data.first)
		console.log(res.statusCode)
       // this is should.js syntax, very clear
       res.statusCode.should.equal(200);
		callback();
	})
}

}
