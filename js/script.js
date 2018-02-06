//initialize the map:
var map;
//used to store all the places after making a json request
var places = [];
//used to store marker objects placed on map. 
var markers = []
//Array for creating markers of my favorite locations:
var favLocations = [

];

//record placeIDs used to get coordinates and other information.
var placeIDs = [
    "ChIJE7tYRySHa4cRSauU_fDROfk",
    "ChIJOwZSABaBa4cRwP15cLnsWK8",
    "ChIJuZkeRJiHa4cRCg7kh3946CU",
    "ChIJG0f852iEa4cRtowO4afIcEI",
    "ChIJMZtL9Bp_a4cRvQg9V0bvjis",
    "ChIJX4Jmj5B-bIcR48cSaPW_jR0",
    "ChIJj514rSCBa4cRn1UBXj-8nqU",
    "ChIJ281BYiGBa4cRicArfgS5kGI",
    "ChIJ4c_pIWiEa4cRzXmDg9Oi9XI",
    "ChIJk4E8CwB_a4cRQrSQeNwQmTA",
    "ChIJZ2iOftloQocRdcCuYDevo0o",
    "ChIJux94CcN4bIcRcH7lFkSAUfo",
    "ChIJkeVs4AWHbIcRj4KAN2u2O9U",
    "ChIJIwwzg8R4bIcR0k02y28L3is",
    "ChIJyc8brt-Aa4cRXGBd6TXqG1U",
    "ChIJ2_JElnSEa4cRoNi8ffasMQ8",
    "ChIJTwxKHKuBa4cRhDgjbDJSXMQ",
    "ChIJkahrxs2BbIcRSPKtTkM2VCM",
    "ChIJRV4I2IyAa4cRP4O3lptbl_Y",
    "ChIJAexs4PiIa4cRYHRp5qqymJQ"
];

function initMap() {
    // initialize map and place into the div with id of map
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 39.7047, lng: -105.0814 },
        zoom: 9
    });


    // set up infoWindow & service for Google Places
    infoWindow = new google.maps.InfoWindow();
    service = new google.maps.places.PlacesService(map)

    // Goes through Places by ID and get's location
    for(i=0; i < placeIDs.length; i++) {
        service.getDetails({placeId: placeIDs[i]},
            function(place, status) {
                if(status == google.maps.places.PlacesServiceStatus.OK) {
                    places.push(place);
                    addMarker(place);
                } else {
                    console.log("error: " + status);
                }
            }
        );
    }




    // AUTO COMPLETE FOR SEARCH FEATURE
    //autocomplete to search for site
    var autoComplete = new google.maps.places.Autocomplete(
        document.getElementById('search-places')
    );
    autoComplete.bindTo('bounds', map);
    
    autoComplete.addListener('place_changed', function() {
        place = autoComplete.getPlace();
        marker = new google.maps.Marker({
            map: map,
            location: place.geometry.location,
            title: "test"
        });
        markers.push(marker);
        marker.setPosition(place.geometry.location);
        marker.addListener('click', function(){
            populateInfoWindow(this, infoWindow);
        });
    });



}

function addMarker(place) {
    marker = new google.maps.Marker({
        map: map,
        location: place.geometry.location,
        title: "test title"
    });
    marker.setPosition(place.geometry.location);
    markers.push(marker);
    console.log(marker);
    

}



function populateInfoWindow(marker, markerInfoWindow) {
    markerInfoWindow.marker = marker;
    markerInfoWindow.setContent('test me out!');
    markerInfoWindow.open(map, marker);
    infoWindow.addListener('closeclick', function() {
        markerInfoWindow.setMarker = null;
    });
}