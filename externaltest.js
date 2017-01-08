alert('JS code from: github.io');
document.addEventListener("click", onMyClick, false);
function onMyClick() {
	alert('alert from: github.io domain, onMyClick event is fired');

	document.querySelector("#getGeoLoc").addEventListener("mouseover", function() {
         	alert('alert from: github.io domain, document.querySelector("#getGeoLoc"). fired');}
         );
}

