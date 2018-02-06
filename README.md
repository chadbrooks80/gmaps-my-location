check out this site for how we can do the bining for checkbox: 
https://stackoverflow.com/questions/8613602/binding-a-list-of-objects-to-a-list-of-checkboxes

THIS IS THE README FILE. Changes to test ability to update the github repository from my desktop system. 

use this example, it works!

```
<ul data-bind="foreach: people">
    <li>
        <input type="checkbox" value="" data-bind="checkedValue: id, checked: $parent.selectedPeople"><span data-bind="text: name"></span>
    </li>
</ul>

<hr/>

<div data-bind="text: ko.toJSON($root)"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.2.0/knockout-min.js"></script>

<script>

	function Person(id,name,age) {
	    this.id = id;
	    this.name = name;
	    this.age = age;
	}

	var listOfPeople = [
	    new Person(1, 'Fred', 25),
	    new Person(2, 'Joe', 60),
	    new Person(3, 'Sally', 43)
	];

	var viewModel = {
	    people: ko.observableArray(listOfPeople),
	    selectedPeople: ko.observableArray([1])
	};

	viewModel.selectedPeople.subscribe(function() {
		console.log("someone clicked!")
	});


	ko.applyBindings(viewModel);
</script>

```