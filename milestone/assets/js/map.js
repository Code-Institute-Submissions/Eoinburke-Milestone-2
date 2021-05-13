/*function initMap() {
    const myLatLng = { lat: 53.1424, lng: -7.6921 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: myLatLng,
    });
    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
    });
}*/

function initMap() {
    gMap = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 21, lng: 78},
        mapTypeId: google.maps.MapTypeId.HYBRID,
        zoom: 6,
        heading: 90,
        tilt: 0
    });


    document.getElementsByTagName("head")[0].appendChild(fileref)

}


// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }