

document.addEventListener("DOMContentLoaded", function() {

	var numDiv = document.getElementById("divOne");
	numDiv.style.display = "none"; 

	var definitions = document.getElementsByClassName("definitions");
	for(var i = 0; i < definitions.length; i++) {
		var tmpDiv = document.getElementById(definitions[i].id);
		tmpDiv.style.display = "none";
	}

	var valueDictCount = document.getElementsByClassName("valueDictCount");
	var valueIDs = [];
	for(var i = 0; i < valueDictCount.length; i++) {
		valueIDs.push(valueDictCount[i].id);
	}

	for(var i = 0; i < valueIDs.length; i++) {
	  var dictId = valueIDs[i].replace("Value", "");
		document.getElementById(valueIDs[i]).addEventListener("click", function() {
			console.log(" CLICKED " + dictId);	
			document.getElementById(dictId).style.display = "block";	
		});
	}

	var wordDictCount = document.getElementsByClassName("wordDictCount");
	for(var i = 0; i < wordDictCount.length; i++) {
		// console.log(" id: " + wordDictCount[i].id);
	}

	document.getElementById("alphButton").addEventListener("click", function() {
		var alphaDiv = document.getElementById("divTwo");
		var numDiv = document.getElementById("divOne");
		alphaDiv.style.display = "block"; 
		numDiv.style.display = "none";  
	});	

	document.getElementById("numButton").addEventListener("click", function() {
		var alphaDiv = document.getElementById("divTwo");
		var numDiv = document.getElementById("divOne");
		alphaDiv.style.display = "none";  
		numDiv.style.display = "block"; 
	});	


});



