var React = require('react-native'),
    BaconAPI = require('../utils/BaconAPI'),
    Item = require('./Item.react'),
    Ajax = require('../utils/ajax');

var {
  Image,
  Text,
  ListView,
} = React;

// a single product's view
var List = React.createClass({

_getFromServer: function() {
  var accessToken = AsyncStorage.getItem(Constants.ACCESS_TOKEN), 
      groupId = AsyncStorage.getItem(Constants.GROUP_ID),
      endPoint = '/group/' + groupId;  

  var success = function(response) {
      if (!response.success) {
        console.log('error occurred, API returned ' + response.message);
      } else {
        console.log(response);
        this.setState({items: response.items});
      }
    };

  var error = function(error) {
    console.log('error', error);
  };

  console.log(endPoint);

  Ajax.do('GET', endPoint, body, success, error, accessToken);
},

getInitialState: function() {
  this._getFromServer();
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this.state.items),
    };
  },

  render: function() {
    return (
    <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => <Item item={rowData}></Item>}
    />
    );
  }

});

module.exports = List;