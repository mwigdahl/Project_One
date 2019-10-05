// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCDKdUg5y9iSENnaHRpGx2czlfEyjOza6s",
  authDomain: "uber-pub-crawl.firebaseapp.com",
  databaseURL: "https://uber-pub-crawl.firebaseio.com",
  projectId: "uber-pub-crawl",
  storageBucket: "uber-pub-crawl.appspot.com",
  messagingSenderId: "746444227672",
  appId: "1:746444227672:web:5938a0ac6de7275e42362d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

//concatenate query url
function buildPubQuery() {

  var type = $('#by-type').val().trim();
  var state = $('#by-state').val().trim();
  var city = $('#by-city').val().trim();
  var name = $('#by-name').val().trim();
  //var tags = '';

  let queryURL = 'https://api.openbrewerydb.org/breweries' + 
  '?by_type=' + type + 
  '&by_state=' + state + 
  '&by_name=' + name + 
  '&by_city=' + city;
 console.log("queryurl", queryURL);
 
  return queryURL
}

//submit form input data
$('#add-pubInput-btn').on('click', function(event){

  event.preventDefault();
  
  var queryURL = buildPubQuery();

  $.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response){
  var pubs = response;

  // Set vars
  var lat = '';
  var long = '';
  var city = '';
  var state = '';
  var street = '';
  var zip = '';

  $('#pubOutput').empty();

  // Create Pub result cards and print on page
  for (var i = 0; i < pubs.length; i++) { 

    var pubResults = $('<div>');
    pubResults.addClass('card pubItem card-body col-md-4 m-3');
    pubResults.attr('data-id', i);
    pubResults.html('<h3>' + pubs[i].name + '</h3>' +
    'Street: ' + pubs[i].street + '<br/>' +
    'Phone: ' + pubs[i].phone + '<br/>' + 
    'Website: ' + pubs[i].website_url + 
    '<button type="button" class="btn btn-primary">Add to PubCrawl</button>');

    $('#pubOutput').prepend(pubResults);   

  }
  });
    
  });

  $('.btn-primary').on('click', function(){
    //add to firebase
    firebase.database('/pub').ref().push({
      name: name,
      street: street,
      city: city,
      state: state,
      lat: lat,
      long: long,
    });
  });


  // brewery_type: "large"
  // city: "Boise"
  // country: "United States"
  // id: 2242
  // latitude: "43.6174335918367"
  // longitude: "-116.202360204082"
  // name: "10 Barrel Brewing Co"
  // phone: "5416785228"
  // postal_code: "83702-5857"
  // state: "Idaho"
  // street: "830 W Bannock St"
  // tag_list: []
  // updated_at: "2018-08-24T00:29:51.675Z"
  // website_url: "http://www.10barrel.com"
