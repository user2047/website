console.log("This is running");

var title = {
	title: "Indecision App",
	subTitle: "This is the description"
};
var template =	( 
	<div>
		<h1>{title.title}</h1>
		<p>{title.subTitle}</p>
		<ol>
			<li>Item 1</li>	
			<li>Item 2</li>
		</ol>
	</div>
); 

var userName = "Cameron";
var userAge = 23;
var userLocation = "Glastonbury";

var user = {
	name: 'Cameron',
	age: 23,
	location: 'Glastonbury'
}


function getLocation(){
	if (user.location){
		return user.location;
	}
	else{
		return "location not found";
	}}


var template2 = (
	<div>
		<h1>{user.name}</h1>
		<p> Age: {user.age}</p>
		<p> Location: {getLocation()} </p>

	</div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2,appRoot);
