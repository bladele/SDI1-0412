// Library: Utility Check
// Author: Bodunrin Ladele
// Created for: SDI Online
// Control File



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