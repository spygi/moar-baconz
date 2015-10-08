var React = require('react-native');
var BaconAPI = require('../utils/BaconAPI');
var Item = require('./Item.react');
var items = BaconAPI.getProductData();
var geo = require('../utils/geo');

var {
  Image,
  Text,
  ListView,
} = React;

// a single product's view
var List = React.createClass({
  componentDidMount: function(){
      geo.setupTracking();
  },

getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(items),
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