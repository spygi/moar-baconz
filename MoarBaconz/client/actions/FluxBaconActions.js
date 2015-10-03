var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxBaconConstants = require('../constants/FluxBaconConstants');

// Define actions object
var FluxBaconActions = {

  // Toggle availability of product
  toggleAvailability: function(productId){
    AppDispatcher.handleAction({
      actionType: FluxBaconConstants.TOGGLE_AVAILABILITY,
      productId: productId
    })
  }

};

module.exports = FluxBaconActions;