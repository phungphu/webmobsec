alert('JS code from: github.io');
document.addEventListener("onload", onDeviceReady, false);
function onDeviceReady() {
	alert('alert from: github.io domain, onDeviceReady fired');

	document.querySelector("#getGeoLoc").addEventListener("mouseover", function() {
         alert('alert from: github.io domain, document.querySelector("#getGeoLoc"). fired');});
	       
}

