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
    groupId,
    endPoint; 
    var success = function(response) {
      if(response){
          this.setState({items: this.state.ds.cloneWithRows(response.items)});
        }
    }.bind(this);

    var error = function(error) {
      console.log('error', error);
    }; 
    var body = {};

    AsyncStorage.getItem(Constants.ACCESS_TOKEN).then(function(token){
      accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNnIiwiaGFzaCI6IiQyYSQwOCRmUUo4c1RjdGswcmFSTTM0Z0FyRVdlN1JDSzk5cTdTb3g3QjlEdXZjc3FTRmoyeUpMMGs0LiIsImlhdCI6MTQ0MzkxMjY5Mn0.b_zkjRnTrK0amaLtA8dMaGlKYXRMVMimfkOVBV9u6d4";
      
      return AsyncStorage.getItem(Constants.GROUP_ID);
    }).then(function(gid){
        groupId = "561023fe8cbcbe95648a093c";
        endPoint = '/group/' + groupId;
        Ajax.do('GET', endPoint, body, success, error, accessToken);

    });
  },

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return {
      ds: ds,
      items: ds.cloneWithRows([])
    };
  },

  render: function() {

    return (
      <ListView
      dataSource={this.state.items}
      renderRow={(rowData) => <Item item={rowData} />} />
    );
}

});

module.exports = List;