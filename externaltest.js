alert('JS code from: github.io');
document.addEventListener("onload", onDeviceReady, false);
function onDeviceReady() {
	alert('alert from: github.io domain, onload event is fired');

	document.querySelector("#getGeoLoc").addEventListener("click", function() {
         alert('alert from: github.io domain, document.querySelector("#getGeoLoc"). fired');});
	       
}

