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

  let queryURL = 'https://api.openbrewerydb.org/breweries' +
    '?by_type=' + type +
    '&by_state=' + state +
    '&by_name=' + name +
    '&by_city=' + city;

  return queryURL
}

//submit form input data
$('#add-pubInput-btn').on('click', function (event) {

  event.preventDefault();

  var queryURL = buildPubQuery();

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function (response) {
    var pubs = response;

    $('#pubOutput').empty();

    // Create Pub result cards and print on page
    for (var i = 0; i < pubs.length; i++) {

      var pubResults = $('<div>');
      pubResults.addClass('card pubItem card-body col-md-3 m-1');
      pubResults.attr('data-id', i);
      pubResults.html('<h3>' + pubs[i].name + '</h3>' +
        'Street: ' + pubs[i].street + '<br/>' +
        'Phone: ' + pubs[i].phone + '<br/>' +
        'Website: ' + pubs[i].website_url +
        '<button type="button" ' + 'data-id=' + i + ' class="btn btn-primary pubBtn">Add to PubCrawl</button>');

      $('#pubOutput').prepend(pubResults);

    }

    $('.pubBtn').on('click', function () {
      var addPub = $(this).attr('data-id');
      myPub = pubs[addPub];

      name = myPub.name;
      street = myPub.street;
      city = myPub.city;
      state = myPub.state;
      zip = myPub.postal_code;
      lat = myPub.latitude;
      long = myPub.longitude;

      //add to firebase
      database.ref('/pub').push({
        name: name,
        street: street,
        city: city,
        state: state,
        zip: zip,
        lat: lat,
        long: long,
      });
    });
  });

});

// Clear search results
$('#clear-results').on('click', function () {
  $(this).empty();
});

//print saved results to modal
database.ref().on("child_added", function (snapshot) {

  var result = JSON.stringify(snapshot.val());
  console.log('result', result);

  for (var j = 0; j < result.length; j++) {
    var savedPub = $('<div>');
    savedPub.text(result[j]);
    $("#pubCard").append(result[j]);

  }

  // Handle the errors
}, function (errorObject) {
  console.log("Errors handled: " + errorObject.code);
});
