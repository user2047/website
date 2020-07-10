"use strict";

console.log("This is running");

var title = {
	title: "Indecision App",
	subTitle: "This is the description"
};
var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		title.title
	),
	React.createElement(
		"p",
		null,
		title.subTitle
	),
	React.createElement(
		"ol",
		null,
		React.createElement(
			"li",
			null,
			"Item 1"
		),
		React.createElement(
			"li",
			null,
			"Item 2"
		)
	)
);

var userName = "Cameron";
var userAge = 23;
var userLocation = "Glastonbury";

var user = {
	name: 'Cameron',
	age: 23,
	location: 'Glastonbury'
};

function getLocation() {
	if (user.location) {
		return user.location;
	} else {
		return "location not found";
	}
}

var template2 = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		user.name
	),
	React.createElement(
		"p",
		null,
		" Age: ",
		user.age
	),
	React.createElement(
		"p",
		null,
		" Location: ",
		getLocation(),
		" "
	)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
