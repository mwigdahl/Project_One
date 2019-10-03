// API Key AIzaSyDF2Mgr4QclaeCPJZ4yfzgPxhLYTeHOFJ4

function displayMap(){

var quaryURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDF2Mgr4QclaeCPJZ4yfzgPxhLYTeHOFJ4&v=3&callback=iniMap";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

  var map;
  function iniMap() {
      map = new google.maps.Map(document.getElementById("map"), {
          center: {lat: 40.758701, lng: -111.876183},
          zoom: 13
      });            
  }

} 

append iniMap();