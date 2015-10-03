var BackgroundGeolocation = require('react-native-background-geolocation');


var onLocation = function(data){
	//data.coords
	
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

 	BackgroundGeolocation.start(function(){
 		// successfully started tracking (ie the user allowed it)
 	});
};

module.exports = {
	setupTracking: setupTracking
}