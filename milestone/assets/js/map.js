// /*function initMap() {
//     const myLatLng = { lat: 53.1424, lng: -7.6921 };
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: myLatLng,
//     });
//     new google.maps.Marker({
//         position: myLatLng,
//         map,
//         title: "Hello World!",
//     });
// }*/

// function initMap() {
//     gMap = new google.maps.Map(document.getElementById("map"), {
//         center: {lat: 21, lng: 78},
//         mapTypeId: google.maps.MapTypeId.HYBRID,
//         zoom: 6,
//         heading: 90,
//         tilt: 0
//     });


//     document.getElementsByTagName("head")[0].appendChild(fileref)

// }


// // let map;

// // function initMap() {
// //   map = new google.maps.Map(document.getElementById("map"), {
// //     center: { lat: -34.397, lng: 150.644 },
// //     zoom: 8,
// //   });
// // }

function initMap() {
// The location of Uluru
   var uluru = {lat: 53.1424, lng: -7.6921};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 8, center: uluru});
  // The marker, positioned at Uluru
 const map = new google.maps.Map(document.getElementById("map"), 

new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  }));

  addMarker({lat:49.2827, lng:-123.1207});
  addMarker({lat:52.3676, lng:-4.9041});
  addMarker({lat:36.7783, lng:-119.4179});
   addMarker({lat:40.7128, lng:-74.0060});


  function addMarker(coords){
      var marker = new google.maps.Marker({
          position:coords,
          map:map,
      });
  }
}