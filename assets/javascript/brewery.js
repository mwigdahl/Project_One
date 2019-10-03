// make ajax call
var type = '';
var state = '';
var city = '';
var name = '';
var tags = '';
var pubs = [];

function pubCrawl() {
  
  let queryURL = 'https://api.openbrewerydb.org/breweries' + 
  '?by_type=' + type + 
  '&by_state=' + state + 
  '&by_name=' + name + 
  '&by_name=' + tags + 
  '&by_city=' + city;
  $.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response){
    console.log(response);
  });
}

pubCrawl();

$('#add-pubInput-btn').on('click', function(event){
  event.preventDefault();

  var type = $('#by-type').val().trim();
  var state = $('#by-state').val().trim();
  var city = $('#by-city').val().trim();
  var name = $('#by-name').val().trim();
  var tags = $('#by-tags').val().trim();

  console.log('type', type);
  console.log('state', state);
  console.log('city', city);
  console.log('name', name);
  console.log('tags', tags);


  for (var i = 0; i < pubs.length; i++) {

    $('#pubOutput').empty();

    var pubResults = $('<div>');
    pubResults.addClass('pubItem');
    pubResults.text(pubs[i]);
    pub.push(pubResults);
  }

});
