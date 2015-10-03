// var FluxBaconActions = require('../actions/FluxBaconActions');

module.exports = {

  // Load mock product data from localStorage into ProductStore via Action
  getProductData: function() {
    var data = 
    {
      itemId: '0001',
      name: 'Bread',
      icon: 'http://globe-views.com/dcim/dreams/bread/bread-05.jpg', 
      state: 'DO_NOT_BUY'   
    };
    // {
    //   itemId: '0002',
    //   name: 'BACONZZZZ',
    //   icon: '',
    //   state: 'BUY'
    // },
    // {
    //   itemId: '0003',
    //   name: 'Eggs',
    //   icon: 'http://www.berkleys.com.au/wp-content/uploads/2014/03/cracked-brown-egg.jpg',
    //   state: ''
    // },
    return data;
    // FluxBaconActions.receiveProduct(data);
  }

};