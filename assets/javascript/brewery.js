
function buildPubQuery() {

  var type = $('#by-type').val().trim();
  var state = $('#by-state').val().trim();
  var city = $('#by-city').val().trim();
  var name = $('#by-name').val().trim();
  //var tags = '';
  
  console.log('type', type);
  console.log('state', state);
  console.log('city', city);
  console.log('name', name);
  
  let queryURL = 'https://api.openbrewerydb.org/breweries' + 
  '?by_type=' + type + 
  '&by_state=' + state + 
  '&by_name=' + name + 
  '&by_city=' + city;
  console.log('queryurl', queryURL);
}

//submit form data to build url query for api
$('#add-pubInput-btn').on('click', function(event){
  event.preventDefault();
  
  var queryURL = buildPubQuery();

  $.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response){

  });
    

});


// for (var i = 0; i < pubs.length; i++) {

//   $('#pubOutput').empty();

//   var pubResults = $('<div>');
//   pubResults.addClass('pubItem');
//   pubResults.append(pubs[i]);
//   //pubs.push(pubs);
// }

// console.log('pubs', pubs);

// for (var i = 0; i < pubs.length; i++) {

//   //$('#pubOutput').empty();
//   var pubResults = $('<div>');
//   pubResults.addClass('pubItem');
//   pubResults.text
//   pubResults.append(pubs[i]);
//   pubs.push(pubs);
// }