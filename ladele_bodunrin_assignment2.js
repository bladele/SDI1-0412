// Assignment 2: Passing SDI
// Author: Bodunrin Ladele
// Created for: SDI Online
// Strategy for passing SDI.
var projectNames = ["Week 1", "Week 2", "Week 3", "Week 4"];
var projectScores = [75, 37, 52, 10];
	
	console.log("To evaluate how much I need to improve my grades, I looked at my " + (projectScores.length) + " project scores from the last time I took the class.");
	console.log("My projects scores where " + projectScores + ".");

// Log a loop for what grade I got for each week. 
	for (var i=0, j=projectScores.length; i < j; i++) {
		console.log (projectNames[i] + " was " + projectScores[i] );
};
//End of grade-recieved code.

// Log an avarage of all the project scores.
	var scoreAvg = function() {
		var scoreSum = 0;
		for (var i = 0, j = projectScores.length; i < j; i++) {
			scoreSum += projectScores[i];
			
			
		};
		console.log("My average from all my project scores was " + scoreSum / projectScores.length);
		if ((scoreSum / projectScores.length) < 70) {
					console.log("I did misserably.");
	}	else { 
		console.log("I passed, barely.");
	};
	};
scoreAvg(); 
// End of code for average.
	
	
// Log a loop for each score need to pass.
	var scoreNeeded = function() {
		var scoreSum = 0
		console.log ("Here are the scores that I wil need to pass the class.");

		for (var i = 0, j=projectScores.length; i < j; i++) {
			scoreSum += projectScores[i];
			console.log(projectNames[i] + " should be " + (scoreSum + (25)));
			};
	};
	scoreNeeded();
// The results turned out all wrong for my math.  No sure what happened there but I must press on time is of the essence./

//Log total average needed to pass class. 
var scoreAvgNeeded = function() {
		var scoreNeeded = 0;
		for (var i = 0, j = projectScores.length; i < j; i++) {
			scoreNeeded += scoreNeeded[i];
		}
		console.log("Therefore the average I need from all my project scores to pass the class is " + scoreNeeded / projectScores.length);
				
				if ((scoreNeeded / projectScores.length) > 70) {
					console.log("I passed the class!");
	} 			
				else {
					console.log("What is it going to take?!");
	};
	};
	scoreAvgNeeded();
// Still running in issues.


