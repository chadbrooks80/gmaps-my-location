var x;
var viewModel = {
    places: ko.observableArray(),
    categories: ko.observableArray(),
    selectedCategories: ko.observableArray(),
    showInfoWindow: function() {
        populateInfoWindow(this, largeInfowindow)
    },
    checkBoxValue: "test",
    filterMarkers: function() {
        alert(this);
    }
}

viewModel.selectedCategories.subscribe(function() {
    console.log("changes made!");
})

ko.applyBindings(viewModel);
