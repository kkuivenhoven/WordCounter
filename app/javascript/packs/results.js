

document.addEventListener("DOMContentLoaded", function() {

	var numDiv = document.getElementById("divOne");
	numDiv.style.display = "none"; 


	var definitions = document.getElementsByClassName("definitions");
	var defIDs = [];
	var num = [];
	var numInner = [];
	for(var i = 0; i < definitions.length; i++) {
		var tmpDiv = document.getElementById(definitions[i].id);
		tmpDiv.style.display = "none";
		defIDs.push(definitions[i].id);
		num.push(i);
		numInner.push(i);
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
			numInner.forEach(j => {
				if(definitions[j].id == dictId) {
					document.getElementById(definitions[j].id).style.display = "block";	
				}
				if(definitions[j].id != dictId) {
					document.getElementById(definitions[j].id).style.display = "none";
				} 
			});
		});

		wordDictCount[i].addEventListener("click", function() {
	  	var wordId = wordDictCount[i].id.replace("Word", "");
			numInner.forEach(j => {
				if(definitions[j].id == wordId) {
					document.getElementById(definitions[j].id).style.display = "block";	
				}
				if(definitions[j].id != wordId) {
					document.getElementById(definitions[j].id).style.display = "none";
				} 
			});
		});
	})


	document.getElementById("alphButton").addEventListener("click", function() {
		var alphaDiv = document.getElementById("divTwo");
		var numDiv = document.getElementById("divOne");
		alphaDiv.style.display = "block"; 
		numDiv.style.display = "none";  
		hideDefinitions();
	});	

	document.getElementById("numButton").addEventListener("click", function() {
		var alphaDiv = document.getElementById("divTwo");
		var numDiv = document.getElementById("divOne");
		alphaDiv.style.display = "none";  
		numDiv.style.display = "block"; 
		hideDefinitions();
	});	


});


function hideDefinitions() {
	var definitions = document.getElementsByClassName("definitions");
	for(var i = 0; i < definitions.length; i++) {
		var tmpDiv = document.getElementById(definitions[i].id);
		tmpDiv.style.display = "none";
	}
}


/*
function hideUnclickedDefinitions(var word, var dictWords) {
	for(var j = 0; j < dictWords.length; j++) {
		if(dictWords[j] != word) {
			document.getElementById(dictWords[j]).style.dispay = 'none';
		} else { 
			document.getElementById(word).style.display = "block";	
		}
	}
}
*/


