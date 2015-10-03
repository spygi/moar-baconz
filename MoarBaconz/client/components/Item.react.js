var React = require('react-native'),
    Constants = require('../constants/Constants'),
    _ = require('lodash'),
    Ajax = require('../utils/ajax');

var {
  AsyncStorage,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} = React;

var states = {
  0: Constants.BUY,
  1: Constants.MAYBE_BUY,
  2: Constants.DO_NOT_BUY
};

var codeFromState = function(state){
  var code;

  _.each(states, function(val, key){
    if (state === val) {
      code = key;
    }
  });

  return Number(code);
};

// a single item's view
var Item = React.createClass({
  _updateServer: function(state) {
    var accessToken = AsyncStorage.getItem(Constants.ACCESS_TOKEN), 
        groupId = AsyncStorage.getItem(Constants.GROUP_ID),
        endPoint = '/group/' + groupId + '/item/' + this.props.item.itemId;  
    
    var body = {
          item: {
            state: state  
          }
    };
    body[Constants.ACCESS_TOKEN] = accessToken;

    var success = function(response) {
        if (!response.success) {
          console.log('error occurred, API returned ' + response.message);
        }
      };

    var error = function(error) {
      console.log('error', error);
    };

    console.log(endPoint);

    Ajax.do('PUT', endPoint, body, success, error);
  },

  _toggleStatus: function() {
    var key = (codeFromState(this.state.availability) + 1) % (_.size(states));
    var newState = states[key];

    // update localy
    this.setState({'availability': newState});
    // and remotely
    this._updateServer(newState);
  },

  getInitialState: function(){    
    return {
      availability: this.props.item.state
    }
  },

  render: function() {
    return (
      <TouchableHighlight onPress={this._toggleStatus}>
      <View style={[styles.container, this.state.availability === Constants.BUY && styles.buy, this.state.availability === Constants.MAYBE_BUY && styles.maybeBuy, this.state.availability === Constants.DO_NOT_BUY && styles.doNotBuy]} >
      <Image 
      style={styles.icon}
      source={{uri: this.props.item.icon}}
      />
      <Text style={styles.name}>
      {this.props.item.name}
      </Text>
      </View>
      </TouchableHighlight>
      );
  },
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CCC',
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  availability: {    
    flex: 1,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buy: {
    backgroundColor: '#FF0000'
  }, 
  doNotBuy: {
    backgroundColor: '#0f0'
  },
  maybeBuy: {
    backgroundColor: '#FFCC00'
  },
  icon: {
    height: 40,
    width: 40
  }
});

module.exports = Item;