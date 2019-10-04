

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
  return queryURL
}

//submit form data to build url query for api
$('#add-pubInput-btn').on('click', function(event){
  event.preventDefault();
  
  var queryURL = buildPubQuery();

  $.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response){
    var pubs = response;
    //console.log('pubs', pubs);
    console.log('brewery name', pubs[0].name);
    
    pubs.push(pubs);
    console.log('pubs', pubs);
    $('#pubOutput').empty();
    for (var i = 0; i < pubs.length; i++) {

      
  //$('#pubOutput').empty();
    
      var pubResults = $('<div>');
      pubResults.addClass('card card-body');
      pubResults.html('<h3>' + pubs[i].name + '</h3>' + '<br/>' + 
      'Street: ' + pubs[i].street + '<br/>' +
      'Phone: ' + pubs[i].phone + '<br/>' + 
      'Website: ' + pubs[i].website_url);
      //pubResults.append(pubs[i]);
      $('#pubOutput').prepend(pubResults);
      //pubs.push(pubs);
    }
  });
    
  });
  
  function pubOutput() {
    var pubCard = $('<div>');
    pubCard.addClass('card');
    pubCard.append('<div class="card-body">' + 'hello!' + '</div>');
    //pubCard.text('Hello!' );
    $('#pubOutput').append(pubCard);
  }
  
  brewery_type: "large"
  city: "Boise"
  country: "United States"
  id: 2242
  latitude: "43.6174335918367"
  longitude: "-116.202360204082"
  name: "10 Barrel Brewing Co"
  phone: "5416785228"
  postal_code: "83702-5857"
  state: "Idaho"
  street: "830 W Bannock St"
  tag_list: []
  updated_at: "2018-08-24T00:29:51.675Z"
  website_url: "http://www.10barrel.com"

  //pubOutput()
// {/* <div class="card">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div> */}

for (var i = 0; i < pubs.length; i++) {

  $('#pubOutput').empty();

  var pubResults = $('<div>');
  pubResults.addClass('pubItem');
  pubResults.append(pubs[i]);
  //pubs.push(pubs);
}

// console.log('pubs', pubs);

// for (var i = 0; i < pubs.length; i++) {

//   //$('#pubOutput').empty();
//   var pubResults = $('<div>');
//   pubResults.addClass('pubItem');
//   pubResults.text
//   pubResults.append(pubs[i]);
//   pubs.push(pubs);
// }
