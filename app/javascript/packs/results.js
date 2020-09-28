

document.addEventListener("DOMContentLoaded", function() {

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


window.onload = function() {
	var numDiv = document.getElementById("divOne");
	numDiv.style.display = "none"; 
};

