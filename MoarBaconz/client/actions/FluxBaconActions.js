var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

// Define actions object
var FluxBaconActions = {

  // Toggle availability of product
  toggleAvailability: function(productId){
    AppDispatcher.handleAction({
      actionType: Constants.TOGGLE_AVAILABILITY,
      productId: productId
    })
  }

};

module.exports = FluxBaconActions;