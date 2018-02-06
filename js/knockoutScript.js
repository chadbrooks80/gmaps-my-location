var x;
var viewModel = {
    places: ko.observableArray(),
    categories: ko.observableArray(),
    showInfoWindow: function() {
        populateInfoWindow(this, largeInfowindow)
    },
    checkBoxValue: "test",
    filterMarkers: function() {
        alert(this);
    }
}


ko.applyBindings(viewModel);
