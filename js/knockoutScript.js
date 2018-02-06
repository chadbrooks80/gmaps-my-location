var x;
var viewModel = {
    places: ko.observableArray(),
    showInfoWindow: function() {
        populateInfoWindow(this, largeInfowindow)
    }
}


ko.applyBindings(viewModel);
