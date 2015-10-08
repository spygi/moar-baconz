var BackgroundGeolocation = require('react-native-background-geolocation');
var Ajax = require('./ajax');
var React = require('react-native');
var Constants = require('../constants/Constants');

// GO HARDCODE MODE
var currentMember = {
	id: "561048d3cb9fa011008f6afb"
};
var {
	AsyncStorage
} = React;

var handleNearbyStores = function(member){
	if(member.nearbyStores && member.nearbyStores.length){
		BackgroundGeolocation.getGeofences(function(geofences){

		});
		member.nearbyStores.forEach(function(place){
			BackgroundGeolocation.addGeofence({
				identifier: place.id,
				radius: 150,
				latitude: place.geometry.location.lat,
				longitude: place.geometry.location.lng,
				notifyOnEntry: true,
				notifyOnExit: false
			}, function() {
				console.log("Successfully added geofence");
			}, function(error) {
				console.warn("Failed to add geofence", error);
			});
		});
	}
};

var onLocation = function(data){
	if(currentMember && currentMember.id){
		AsyncStorage.getItem(Constants.ACCESS_TOKEN).then(function(accessToken){
			// GO HARDCODE MODE
			accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRvbS5mb3JyZXIrYXNkZkBnbWFpbC5jb20iLCJoYXNoIjoiJDJhJDA4JEF5Lll4TzBZQjMyWmZONVJDSktoTnVjRFQ4Q2VJM0pqQ3k3cHo4LkdxcjVIZWFhV3ZLMDZpIiwiaWF0IjoxNDQzOTEyMTg0fQ.ikT1k11DlT9coBZXzap-Mw5ZZb7QFDL_PmWKcUKKKCc";
			
			if(accessToken) {
				var body = {
					location: {
						latitude: data.coords.latitude,
						longitude: data.coords.longitude
					}, 
					token: accessToken
				};

				Ajax.do('PUT', 'member/' + currentMember.id, body, handleNearbyStores);
			}
		});
	}
};

var onGeofence = function(){

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