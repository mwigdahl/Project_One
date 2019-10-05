$(document).ready(function(){

function initMap() {
  // The location of Uluru
  var uluru = {lat: 40.758701, lng: -111.876183};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('googleMaps'), {zoom: 13, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
initMap()

});