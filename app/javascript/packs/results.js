

document.addEventListener("DOMContentLoaded", function() {

	var numDiv = document.getElementById("divOne");
	numDiv.style.display = "none"; 


	var definitions = document.getElementsByClassName("definitions");
	var defIDs = [];
	var num = [];
	for(var i = 0; i < definitions.length; i++) {
		var tmpDiv = document.getElementById(definitions[i].id);
		tmpDiv.style.display = "none";
		defIDs.push(definitions[i].id);
		num.push(i);
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


	num.forEach(i => {
		valueDictCount[i].addEventListener("click", function() {
	  	var dictId = valueDictCount[i].id.replace("Value", "");
			for(var j = 0; j < defIDs.length; j++) {
				if(defIDs[j] != dictId) {
					document.getElementById(defIDs[j]).style.dispay = 'none';
				} else { 
					document.getElementById(dictId).style.display = "block";	
				}
			}
		});

		wordDictCount[i].addEventListener("click", function() {
	  	var wordId = wordDictCount[i].id.replace("Word", "");
			for(var j = 0; j < defIDs.length; j++) {
				if(defIDs[j] != wordId) {
					document.getElementById(defIDs[j]).style.dispay = 'none';
				} else { 
					document.getElementById(wordId).style.display = "block";	
				}
			}
		});
	})


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


