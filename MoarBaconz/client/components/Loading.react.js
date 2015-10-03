var React = require('react-native');

var {
  Image,
  StyleSheet,
  View
} = React;

// Flux login view
var Loading = React.createClass({
  
  // Render Loading View
  render: function() {

    var styles = StyleSheet.create({
      container: {
        alignItems: 'center',
        backgroundColor: "#FFF",
        flex: 1,
        flexDirection: 'column',
        paddingTop: 80,
        justifyContent: 'center',
      },
      loading: {
        height: 100,
        width: 100
      }
    });

    return (
      <View style={styles.container}>
        <Image
          style={styles.loading}
          source={{uri: 'http://www.mit.edu/~amini/assets/img/icons/loading.png'}} />
      </View>
    );
  },

});

module.exports = Loading;