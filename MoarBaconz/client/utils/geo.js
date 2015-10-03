var BackgroundGeolocation = require('react-native-background-geolocation');


var onLocation = function(){
	console.log('onLocation');
	console.log(arguments);
	
};

var onGeofence = function(){
console.log(arguments);
};

var setupTracking = function(){
	BackgroundGeolocation.configure({
		desiredAccuracy: 0,
		distanceFilter: 100,
		autoSync: false,
	});

	BackgroundGeolocation.on('location', onLocation); 
	BackgroundGeolocation.on('onGeofence', onGeofence); 

console.log('starting tracking');
 	BackgroundGeolocation.start(function(){

 	}, function(){
 		
 	});
};

module.exports = {
	setupTracking: setupTracking
}