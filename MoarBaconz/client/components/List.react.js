var React = require('react-native'),
BaconAPI = require('../utils/BaconAPI'),
Item = require('./Item.react'),
Ajax = require('../utils/ajax'),
Constants = require('../constants/Constants');

var {
  Image,
  Text,
  ListView,
  AsyncStorage
} = React;

// a single product's view
var List = React.createClass({

  componentDidMount: function() {
    var accessToken, 
    groupId ,
    endPoint; 
    var success = function(response) {

      if(response){
        if (response && !response.success && response.items) {
          console.log('error occurred, API returned ' + response.message);
        } else {
          this.setState({items: response.items});
        }
      }
      
    };

    var error = function(error) {
      console.log('error', error);
    }; 
    var body = {};

    AsyncStorage.getItem(Constants.ACCESS_TOKEN).then(function(token){

      accessToken = token;
      return AsyncStorage.getItem(Constants.GROUP_ID);

    }).then(function(gid){

      if(gid) {
        groupId = "123";
        endPoint = '/group/' + groupId;
        Ajax.do('GET', endPoint, body, success, error, accessToken);
      }
      
    });
  },

  getInitialState: function() {
    return {
      items: []
    };
  },

  render: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return (
      <ListView
      dataSource={ds}
      renderRow={(rowData) => <Item item={rowData} />} />
    );
}

});

module.exports = List;