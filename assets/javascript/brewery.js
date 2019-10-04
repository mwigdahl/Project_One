var pubs = [];


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
    var results = response;
    console.log('results', results);
    
    pubs.push(results);
    console.log('pubs', pubs);
  });
    
  });
  
  function pubOutput() {
    var pubCard = $('<div>');
    pubCard.addClass('card');
    pubCard.append('<div class="card-body">' + 'hello!' + '</div>');
    //pubCard.text('Hello!' );
    $('#pubOutput').append(pubCard);
  }
  
  pubOutput()
// {/* <div class="card">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div> */}

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
