

document.addEventListener("DOMContentLoaded", function() {

	var numDiv = document.getElementById("divOne");
	numDiv.style.display = "none"; 

	var definitions = document.getElementsByClassName("definitions");
	var defIDs = [];
	for(var i = 0; i < definitions.length; i++) {
		var tmpDiv = document.getElementById(definitions[i].id);
		tmpDiv.style.display = "none";
		defIDs.push(definitions[i].id);
	}

	var valueDictCount = document.getElementsByClassName("valueDictCount");
	var valueIDs = [];
	for(var i = 0; i < valueDictCount.length; i++) {
		valueIDs.push(valueDictCount[i].id);
	}

	var wordDictCount = document.getElementsByClassName("wordDictCount");
	var wordIDs = [];
	for(var i = 0; i < wordDictCount.length; i++) {
		wordIDs.push(wordDictCount[i].id);
	}

	for(var i = 0; i < valueIDs.length; i++) {
	  var dictId = valueIDs[i].replace("Value", "");
		document.getElementById(valueIDs[i]).addEventListener("click", function() {
			document.getElementById(dictId).style.display = "block";	
			for(var j = 0; j < dupDefIDs.length; j++) {
				document.getElementById(dupDefIDs[j]).style.dispay = 'none';
			}
		}); 
	}

	for(var i = 0; i < wordIDs.length; i++) {
	  var wordId = wordIDs[i].replace("Word", "");
		document.getElementById(wordIDs[i]).addEventListener("click", function() {
			document.getElementById(wordId).style.display = "block";	
			for(var j = 0; j < dupDefIDs.length; j++) {
				document.getElementById(dupDefIDs[j]).style.dispay = 'none';
			}
		});
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



