var viewModel = {
    places: ko.observableArray(),
    showMarkerInfoWindow: function() {
        console.log("did it work?")
    }
}

var viewModelFunctions = {
    showMarkerInfoWindow: function() {
        console.log("did it work?")
    }
}

ko.applyBindings(viewModel);
