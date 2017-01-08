alert('JS code from: github.io');
document.addEventListener("click", onDeviceReady, false);
function onDeviceReady() {
	alert('alert from: github.io domain, onDeviceReady fired');

	document.querySelector("#getGeoLoc").addEventListener("click", function() {
         alert('alert from: github.io domain, document.querySelector("#getGeoLoc"). fired');});
	       
}

