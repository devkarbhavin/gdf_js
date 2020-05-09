var request=require('request');
var express=require('express');
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.erlencoded({extended:true}));
var path=require("path");
var server=require('http').createServer(app);
var io=require('socket.io'(server));




app.post('/webhook',function(req,res){
	if(!req.body) return res.sendStatus(400)
  	res.setHeader('Content-Type','application/json');
	var intent=req.body.intent['displayName'];
	var w=sendSms(intent);
	let response="";
	let responseObj={
			"fulfillmentText":response
			,"fulfillmentMessage":[{""text":{""text:[w]}}]
			,"source":""
			}
	return res.json(responseObj);
	}
)

var result

function cb(err, response, body){
result='send sms executed';
}

function sendsms(intent){
	result=undefined;
	var url='http://sms.digimiles.in/bulksms/bulksms?username=di78-agcnet&password=digimile&type=0&dlr=1&destination=9768683886&source=AGCNTW&message=99';
	var req=request(url,cb);
	while(result===undefined){
		require('deasync').runLoopOnce();
		}
return result;
}

