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

var expertise = function(json) {
	for (var i = 0; i <json.family.length; i++) {
	var family = json.family[i];
	console.log("To calculate" + family.activity.length * family.adoptionRate);
	};
};
expertise(houseHold);


console.log(houseHold.family[0].name);
