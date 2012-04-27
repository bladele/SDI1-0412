// Library: Utility
// Author: Bodunrin Ladele
// Created for: SDI Online
// Control File


//
// Utility Object class - this is a collection of utility functions
//

// Declare an empty class that will house the functions
var Utility = function ()
{
};

// checks to see if the given string is a valid phone number
Utility.isPhoneNumber = function(checkString)
{
	// Use RegExp to check for valid phone number
	var patt = /\d{3}\d{3}\d{4}/;
	
	var result = patt.test(checkString);

	return result;
};

// Check to see if the given string is a valid email address
Utility.isEmail = function(checkString)
{
	// use RegExp to check for valid email
	var patt = /\w+@\w+.\w{2,3}$/;
	var result = patt.test(checkString);
	return result;
};

// Check to see if the given string is a valid email address
Utility.isURL = function(checkString)
{
	var patt1 = /^http[s]?:/; 
	var result = patt1.test(checkString);
	return result;
}


// see if Check is within pct Percent of numberRef
Utility.fuzzyMatch = function(numberRef, numberCheck, pct)
{
	var bigNum = numberRef + (numberRef * (pct/100));
	var lilNum = numberRef - (numberRef * (pct/100));
	
	var result = ( numberCheck <= bigNum || numberCheck >= lilNum);
	
	return result;
}


/* Find the smallest value in an array that is greater
than any given numer*/
Utility.smallestGreaterThan = function(check, array)
{
}


/* Given an array of object and name of a key, return the array
sorted by the value of that key in each of the objects.*/
Utility.keySort = function(keyName, array)
{
}

/* Return the passed in string as an integer.  If the string
 is NOT a valid integer, return 0*/
Utility.stringToNum = function(strNum)
{
	var theNum = parseInt(strNum);
	var theResult = 0;
	if (theNum = Nan)	//I dont know what I am doing wrong here, it seems logical...
	{
		theResult = theNum;
	}
	return theResult;
}


// Given a decial, expand or truncate it to the given number of places.
Utility.formatDecimal = function(num, places)
{
}

// find hours or days difference
Utility.dateDiff = function(startDate, endDate)
{
	// Assume dates are in the same month
	var day1 = startDate.getDate();
	var day2 = endDate.getDate();
	
	var dayDiff = day2 - day1;
	
	var hour1 = startDate.getHours();
	var hour2 = startDate.getHours();
	var hourDiff = hour2 - hour1;
	
	
}



// Find a sum of the number values in an array
Utility.findSumOfNumbers = function(theArray)
{
	var len = theArray.lenth;
	var total = 0;
	for(i=0; i<len; i++)
	{
		var possibleNum = ParseInt(theArray[i]);
		
		if (possibleNum != NaN)
		{
			total += possibleNum;
		}
	}
	return total;
}

/* Title-case a string: Split a string into 2 words and 
change to uppercase first letter of each word.*/
Utility.lowerToUpper = function(upperCase)
{
}