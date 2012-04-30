// Library: Utility
// Author: Bodunrin Ladele
// Created for: SDI Online
/*All my script has been put on this Java Script file. The reason I separated it to begin with was because I thought it would help me distinguish
  my code better. I had the library functions in one file and the test functions in another file. Now that I have them all in one file, it seems like 
  that was a stupid idea. */


//
// Utility Object class - this is a collection of utility functions
//

// Declare an object class that will house the functions
var Utility = function () 
{
};

// checks to see if the given string is a valid phone number
Utility.isPhoneNumber = function(checkString) /* To verify a phone number, a function is needed and the argument "checkString" is the argument,
												 which is the entry field on my html, so any data passed through it can be verified.  */
{
	// Use RegExp to check for valid phone number
	var patt = /\d{3}\d{3}\d{4}/; /* Stating the regexp variable that will verify the number that is entered.*/
	var result = patt.test(checkString); /* regExp.test() method, calls the function and verifies the user's input.*/
	return result; // Calling the Utility.isPhoneNumber function
};

//The checkPhone function will test the Utility.isPhoneNumber function
 function checkPhone()  
	{
		var strNum = document.getElementById("txtPhone").value; /*This variable turns whatever is entered by the user into usable data. "txtPhone" 
																   is represent whatever is entered into the input field. */
		var bValid = Utility.isPhoneNumber(strNum);/*The beValid variable runs whatever is put into the designated input field, var strNum, and runs it through
													 the Utility.isPhoneNumber function. */
		var strResult;/* The strResult var is a conditional statement that houses the response to whatever is entered
		 					in the phone check input field.*/ 
		if (bValid == true)// The if condition
		{
			strResult = "IS";// Output if the condition is true the string in the alert below will include "IS"
		}
		else  //else condition
		{
			strResult = "IS NOT";// Output if condition is false, the alert below will include "IS NOT"
		}
		alert("The text " + strNum + " " + strResult + " a valid phone number!"); //the alert output 
	}
	


// Check to see if the given string is a valid email address
Utility.isEmail = function(checkString) /* To verify the an email address, a function is needed and the argument "checkString" is the argument,
												 which is the entry field on my html, so any data passed through it can be verified.  */
{
	// use RegExp to check for valid email
	var patt = /\w+@\w+.\w{2,3}$/; /* Stating the regexp variable that will verify the email address that is entered.*/
	var result = patt.test(checkString);  /* regExp.test() method, calls the function and verifies the user's imput.*/
	return result;  // Calling the Utility.isPhoneNumber function
};

function checkEmail()
	{
		var strMail = document.getElementById("txtEmail").value;  /*This variable turns whatever is entered by the user into usable data. "txtEmail" 
																   is represent whatever is entered into the input field. */
		var bValid = Utility.isEmail(strMail);  /*The beValid variable runs whatever is put into the designated input field, var strMail, and runs it through
													 the Utility.isEmail function. */
		var strResult;		/* The strResult var is a conditional statement that houses the response to whatever is entered
		 					in the email check input field.*/
		if (bValid == true)// The if condition
		{
			strResult = "IS";// Output if the condition is true the string in the alert below will inlcude "IS"
		}
		else //else condition
		{
			strResult = "IS NOT";// Output if condition is false, the alert below will include "IS NOT"
		}
		alert("The text " + strMail + " " + strResult + " a valid email address!"); //the alert output 
	}
	

// Check to see if the given string is a valid email address
Utility.isURL = function(checkString) /* To verify the a URL, a function is needed and the argument "checkString" is the argument,
												 which is the entry field on my html, so any data passed through it can be verified.  */
{
	var patt1 = /^http[s]?:/; /* Stating the regexp variable that will verify the Url that is entered.*/
	var result = patt1.test(checkString);/* regExp.test() method, calls the function and verifies the user's imput.*/
	return result;// Calling the Utility.isPhoneNumber function
}

function checkUrl()
	{
		var strUrl = document.getElementById("txtUrl").value;  /*This variable turns whatever is entered by the user into usable data. "txtUrl" 
																   is represent by whatever is entered into the designated input field. */
		var bValid = Utility.isURL(strUrl); /*The beValid variable runs whatever is put into the input field, var strUrl, and runs it through
													 the Utility.isUrl function. */
		var strResult;  // Output if the condition is true the string in the alert below will inlcude "IS"
		if (bValid == true)// The if condition
		{
			strResult = "IS";// Output if the condition is true the string in the alert below will inlcude "IS"
		}
		else //else condition
		{
			strResult = "IS NOT";// Output if condition is false, the alert below will include "IS NOT"
		}
		alert("The text " + strUrl + " " + strResult + " a valid Url!");//the alert output 
	}
	


// see if Check is within pct Percent of numberRef
Utility.fuzzyMatch = function(numberRef, numberCheck, pct)  /*This function is one that has to check different number values against each other. 
																and that is why all of them are stated in the argument. */
{
	var bigNum = numberRef + (numberRef * (pct/100));/* Whatever is entered into pct input field by the user is first divided by 100 and then multiplied
														by whatever is entered into the numberRef by the user. The result is added to numberRef value.
														Example: if pct = 100 then bigNum is 110*/
														
	var lilNum = numberRef - (numberRef * (pct/100));/* Whatever is entered into pct input field by the user is first divided by 100 and then multiplied
														by whatever is entered into the numberRef by the user. The result is subtracted numberRef value.
														Example: if pct = 100 then lilNum is 10*/
	
	var result = ( numberCheck <= bigNum || numberCheck >= lilNum);/*The result variable uses a boolean logic operator, "||", which means "or". So continuing with
																	my "Example", the number entered in the numberCheck value has to be less than or equal to 10, or,
																	greater that or equal to 90.*/
	
	return result;// return statement to call the function.
}

function checkFuzzyMatch()/*Function to test the Utility.fuzzyMatch function. */
	{
		var refNum = document.getElementById("refNum").value;/*This variable turns whatever is entered by the user into usable data. "refNum" 
																   is represent by whatever is entered into the designated input field. */
		var checkNum = document.getElementById("numCheck").value;/*This variable turns whatever is entered by the user into usable data. "numCheck" 
																   is represent by whatever is entered into the designated input field. */
		var pct = document.getElementById("pctWithin").value;/*This variable turns whatever is entered by the user into usable data. "pctWithin" 
																   is represent by whatever is entered into the designated input field. */
		
		var result = Utility.fuzzyMatch(refNum, checkNum, pct);/*The beValid variable runs whatever is put into the input fields, refNum, numCheck, and pctWithin, 
																and runs it through the Utility.fuzzyMatch function. */
		var strResult;
		if (result == true) /* The strResult var is a conditional statement that calls the return result.*/
		{
			strResult = "IS";// Output if the condition is true the string in the alert below will inlcude "IS"
		}
		else //else condition
		{
			strResult = "IS NOT";// Output if condition is false, the alert below will include "IS NOT"
		}
		alert("The number " + checkNum + " " + strResult + " within " + pct + " percent of " + refNum + "!");//the alert output 
		
	}


/* Return the passed in string as an integer.  If the string
 is NOT a valid integer, return 0*/
Utility.stringToNum = function(strNum)/* Numbers in strings aren't recognized as numbers but as a string. This function takes the numbers within a
									     string and make it a number. The strNum argument represents anything entered into the designated input field
									     which would be a string */
{
	var theNum = parseInt(strNum);  /*The is variable uses the parseInt to convert a string to an integer.*/
	var theResult = theNum; 
	if (theNum = Nan)	/*if condition to make incase there are no number digits in the string.*/
	{
		theResult = Nan;
	}
	else
	return theResult; /*Return statement */
}

function howMuch() //I am getting an error for this line of code saying howMuch is not defined
	{
		var strSum = document.getElementById("txtNum").value;/*This variable turns whatever is entered by the user into usable data. "txtNum" 
																   is represent by whatever is entered into the designated input field. */
		var givMe = Utility.stringToNum(strSum);  /*The givMe variable runs whatever is put into the input field, var strSum, and runs it through
													 the Utility.isUrl function. */
		var strResult;// This variable should put out any digit that was put in the input field.
		if (givMe >= 0)  // if conditional that should give an output
		{
		alert("Here's $" + strResult + ".");//output if true
	    }
	    else { 
	    alert("You must enter a digit to get some money.");//output if false
	    }
	}


// Find hours or days difference. This is unfinished. 
Utility.dateDiff = function(startDate, endDate) // Two dates are needed in the arguments to get the difference of.
{
	// Assume dates are in the same month
	var day1 = startDate.getDate(); // start date
	var day2 = endDate.getDate(); // end date
	
	var dayDiff = day2 - day1; // simple math to get the how many days from start date to end date
	
	var hour1 = startDate.getHours(); //start date 
	var hour2 = startDate.getHours();// end date
	var hourDiff = hour2 - hour1; //math to get the how many hours from start date to end date
	
	
}

function daysbtween() //incomplete test function
	{
		var numDays = document.getElementById("").value// incomplete data retrieval from entry field 
	}


// Find a sum of the number values in an array
Utility.findSumOfNumbers = function(theArray) /*For this function I was trying to figure out how to the data could be 
											     by the user. I know how to create a for loop and I would have figured this out
											     but I got stuck on another problem that I thought would have been easier to solve.*/

{ 
	for (var i = 0; i < theArray.length; i++)// for loop that needs some work.
	{
		var possibleNum = parseInt(theArray[i]);//the parseInt would allow my to use an input field that gave a return no matter what the user entered.
		
		if (possibleNum != NaN) // if condition in the case that what was entered was not a number
		{
			total += possibleNum;//
		}
	}
	return total;// Return statement.
}
