// make ajax call
var type = '';
var state = 'utah';
var city = 'salt lake city';
var name = '';
var tags = '';

function pubCrawl() {
  
  let queryURL = 'https://api.openbrewerydb.org/breweries' + 
  '?by_type=' + type + 
  '&by_state=' + state + 
  '&by_city=' + city;
  $.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response){
    console.log(response);
  });
}

pubCrawl();