var React = require('react-native');
var Constants = require('../constants/Constants');
var _ = require('lodash');

var {
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
  _toggleStatus: function() {
    var key = (codeFromState(this.state.availability) + 1) % (_.size(states));

    this.setState({'availability': states[key]});
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