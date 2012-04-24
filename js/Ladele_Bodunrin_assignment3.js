// Apple Inc House: How my family uses the IOS Devices
// Author: Bodunrin Ladele
// Created for: SDI Online
// Control File

console.log("Today we will be looking at the Ladele family and how they use their IOS devices.")
console.log("Here are the members of the family...")

var handleData = function(json) {
	for (var i = 0; i < json.family.length; i++) {
		var family = json.family[i];
		console.log("Name: " + family.name + ", Designation: " + family.designation + ", Age: " +
		family.age + ", Device: " + family.device);
		};
};

handleData(houseHold);

console.log("These are the activities that each member of the family uses their " +
		"IOS device for. I have also listed the tech adoption rate of each family member.");
		
var handleData = function(json) {
	for (var i = 0; i < json.family.length; i++) {
		var family = json.family[i];
		console.log("Name: " + family.name + ", Activity: " + family.activity + ", Adoption Rate: " +
		family.adoptionRate);
		};
};

handleData(houseHold);

console.log("To calculate each family members expertise score,",
	" I multiplied each user adoption rate score by the number of activities they perform",
	" with their IOS devices.")
var expertise = function(json) {
	for (var i = 0; i < json.family.length; i++) {
	var family = json.family[i];
	console.log( "Name: "+ family.name + " Expertise: " + family.activity.length * family.adoptionRate);
	};
};
expertise(houseHold);

console.log("Being the Geeky Dad that I am, I use as much tech as I can afford to make life",
			" better for the family.");
console.log("As tech in the world advances ever so rapidly, I hope to instill", 
			" a love for tech and the innovative ways it can be used in my loved ones.");
console.log("Here is what I think of my progress...");


var praise = function(json) {
	alert(json.family.length);
	//for (var i = 0; i < json.family.length; i++) {
//	var family = json.family[i];
//	};
//	if (houseHold.family.activity.length * family.adoptionRate < 30 )
//	console.log(family.name + "The force is strong with you.");
//	else {
//	console.log(family.name + "The force is not yet strong with you.");
	}

praise(houseHold);



console.log(houseHold.family[0].name);
