var React = require('react-native');
var BaconAPI = require('../utils/BaconAPI');
var product = BaconAPI.getProductData();

var {
  StyleSheet,
  Image,
  Text,
  View,
} = React;

// a single product's view
var FluxProduct = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {product.name}
        </Text>
        <Image
          style={styles.icon}
          source={{uri: product.icon}}
        />
        <Text style={styles.instructions}>
          {product.state}
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCC',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  icon: {
    height: 40,
    width: 40
  }
});

module.exports = FluxProduct;