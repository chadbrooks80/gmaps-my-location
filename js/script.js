//initialize the map:
var map;

//Array for creating markers of my favorite locations:
var favLocations = [

];

var place;
var markers = [];
var marker;

function initMap() {
    //initialize map and place into the div with id of map
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 39.7047, lng: -105.0814 },
        zoom: 9
    });

    infoWindow = new google.maps.InfoWindow();
    //autocomplete to search for site
    var autoComplete = new google.maps.places.Autocomplete(
        document.getElementById('search-places'));
    //binds the boundaries to the view of the map
    autoComplete.bindTo('bounds', map);
    //add listener 
    autoComplete.addListener('place_changed', function() {
        console.log("place has changed");
        place = autoComplete.getPlace();
        console.log(place);
        marker = new google.maps.Marker({
            map: map,
            location: place.geometry.location,
            title: "test"
        });
        markers.push(marker);
        marker.setPosition(place.geometry.location);
        marker.addListener('click', function(){
            alert("you clicke it!");
            populateInfoWindow(this, infoWindow);
        });
    });
}

function populateInfoWindow(marker, markerInfoWindow) {
    markerInfoWindow.marker = marker;
    markerInfoWindow.setContent('test me out!');
    markerInfoWindow.open(map, marker);
    infoWindow.addListener('closeclick', function() {
        markerInfoWindow.setMarker = null;
    });
}