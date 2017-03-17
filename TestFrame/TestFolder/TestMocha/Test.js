/**
 * http://usejsdoc.org/
 */
var assert = require('assert');
var request = require('request');
var chai=require('chai');
var should=require("chai").should();
describe("Test First",function(){
//	var done=this.async;
	it("my first test",function(){
		var url="http://127.0.0.1:1338/";
		request(url,function(err,res,body){
			if (err) {
	            throw err;
	          }
			var data=JSON.parse(body);
			console.log(data.first)
			console.log(res.statusCode)
	          // this is should.js syntax, very clear
	          res.statusCode.should.equal(200);
	         this.done;
		})
		
		
	})
	
	it("my second test",function(){
		var url="http://127.0.0.1:1338/";
		request(url,function(err,res,body){
			if (err) {
	            throw err;
	          }
			var data=JSON.parse(body);
			console.log(data.second)
			console.log(res.statusCode)
	          // this is should.js syntax, very clear
	          res.statusCode.should.equal(200);
	         this.done;
		})
	})
})