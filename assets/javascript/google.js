$(document).ready(function(){

  function initMap() {

    var map = new google.maps.Map(document.getElementById('googleMaps'), {
      zoom: 1,
      center: {lat: 00, lng: 00}
    });

    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var locations = [
    {lat: 40.756391, lng: -111.8750211},
    {lat: 40.698753, lng: -111.850318},
    {lat: 40.751873, lng: -111.881724},
    {lat: 40.755053, lng: -111.895509},
    {lat: 40.750550, lng: -111.890674},
    {lat: 40.7748784, lng: -111.89671},
    {lat: 40.729823, lng: -111.948156},
    {lat: 40.732671, lng: -111.899319}
  ]
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function(location, i) {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
      });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  }


//  function initMap() {
//    // The location of Uluru
//    var location = [ 
   

//   //  {lat: , lng: },
//   //  {lat: , lng: },
//   //  {lat: , lng: },
//   //  {lat: , lng: },
//   //  {lat: , lng: },
//    ]
//    // The map, centered at Uluru
//    var map = new google.maps.Map(
//        document.getElementById("googleMaps"), {zoom: 13, center: {lat: -28.024, lng: 140.887}});
//    // The marker, positioned at Uluru
//    var marker = new google.maps.Marker({position: location, map: map});
//  }
// initMap()

// var map, infoWindow;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('googleMaps'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 12
//   });
//   infoWindow = new google.maps.InfoWindow;

//   // Try HTML5 geolocation.
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       var pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };

//       // infoWindow.setPosition(pos);
//       // infoWindow.setContent('Location found.');
//       // infoWindow.open(map);
//       map.setCenter(pos);
//     }, function() {
//       handleLocationError(true, infoWindow, map.getCenter());
//     });
//   } else {
//     // Browser doesn't support Geolocation
//     handleLocationError(false, infoWindow, map.getCenter());
//   }
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(browserHasGeolocation ?
//                         'Error: The Geolocation service failed.' :
//                         'Error: Your browser doesn\'t support geolocation.');
//   infoWindow.open(map);
// }

 initMap()
});