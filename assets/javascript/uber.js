//Add Uber API

// clientid: 1h7LPAAOs9AXxdeZYlsd9cvdFYjLMQ6N

// *********  sample code below

// script input
var lat = request.get("lat");
var lng = request.get("lng");
var url = "https://api.uber.com/v1/products";
var token = "4dPYezRBsWmqpV_XO..............";

// send Ajax request
var res = XHR2.send("GET", url + "?latitude="+lat+"&longitude="+lng, {
 "headers": {
 "Authorization": "Token " + token
 }
});
// response
response.success(res, "application/json");


// ***********  end sample code

// Eric code example

.ajax({
    url: 'http://i.imgur.com/93IWfhg.jpg',
    headers: {'Authorization': 'TOKEN' + ' <token from uber> '}
  });