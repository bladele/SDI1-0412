// Library: Utility Check
// Author: Bodunrin Ladele
// Created for: SDI Online
// Test File

// Use RegExp to check for valid phone number
 function checkPhone()
	{
		var strNum = document.getElementById("txtPhone").value;
		var bValid = Utility.isPhoneNumber(strNum);
		var strResult;
		if (bValid == true)
		{
			strResult = "IS";
		}
		else
		{
			strResult = "IS NOT";
		}
		alert("The text " + strNum + " " + strResult + " a valid phone number!");
	}
	
	
// Check to see if the given string is a valid email address
function checkEmail()
	{
		var strMail = document.getElementById("txtEmail").value;
		var bValid = Utility.isEmail(strMail);
		var strResult;
		if (bValid == true)
		{
			strResult = "IS";
		}
		else
		{
			strResult = "IS NOT";
		}
		alert("The text " + strMail + " " + strResult + " a valid email address!");
	}
	
	
// Check to see if the given string is a valid URL (begins with http or https)
function checkUrl()
	{
		var strUrl = document.getElementById("txtUrl").value;
		var bValid = Utility.isURL(strUrl);
		var strResult;
		if (bValid == true)
		{
			strResult = "IS";
		}
		else
		{
			strResult = "IS NOT";
		}
		alert("The text " + strUrl + " " + strResult + " a valid Url!");
	}
	
	
	
// see if Check is within pct Percent of numberRef
function checkFuzzyMatch()
	{
		var refNum = document.getElementById("refNum").value;
		var checkNum = document.getElementById("numCheck").value;
		var pct = document.getElementById("pctWithin").value;
		
		var result = Utility.fuzzyMatch(refNum, checkNum, pct);
		var strResult;
		if (result == true)
		{
			strResult = "IS";
		}
		else
		{
			strResult = "IS NOT";
		}
		alert("The number " + checkNum + " " + strResult + " within " + pct + " percent of " + refNum + "!");
		
	}
	
	
/* Return the number within a string as an integer */

function howMuch()
	{
		var strSum = document.getElementById("txtNum").value;
		var givMe = Utility.stringToNum(strSum);
		var hereUgo;
		if (givMe >= 0)
		{
		alert("Here's $" + hereUgo + ".")
	    }
	}

//I dont know what I am doing wrong here.

// find hours or days difference
function daysbtween()
	{
		var numDays = document.getElementById("").value
	}


/* Find the smallest value in an array that is greater
than any given numer*/




/* Given an array of object and name of a key, return the array
sorted by the value of that key in each of the objects.*/


// Find a sum of the number values in an array


/* Title-case a string: Split a string into 2 words and 
change to uppercase first letter of each word.*/