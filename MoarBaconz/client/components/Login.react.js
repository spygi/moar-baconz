var React = require('react-native'),
    Ajax = require('../utils/ajax'),
    BaconConstants = require('../constants/FluxBaconConstants');
var {
  AsyncStorage,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} = React;

// Flux login view
var Login = React.createClass({
  tryLogin: function() {
    // Validation 
    if (this.state.email && this.state.password) {

      var body = {
        email: this.state.email,
        password: this.state.password
      }

      success = function(response) {
        if (response.success) {
          var accessToken = response.token;
          AsyncStorage.setItem(BaconConstants.ACCESS_TOKEN, accessToken);
        }
        else {
          console.log('error ocurred, API returned false');
        }
      }

      var error = function(error) {
        console.log('error',error);
      }

      Ajax.do('POST', 'authenticate', body, success, error);
    }
  },

  // Render Login View
  render: function() {

    var blue = '#1D8DA4';
    var orange = '#FF9128';
    var styles = StyleSheet.create({
      container: {
        alignItems: 'center',
        backgroundColor: "#FFF",
        flex: 1,
        flexDirection: 'column',
        paddingTop: 80,
        // justifyContent: 'center',
      },
      avatar: {
        borderRadius: 50,
        height: 100,
        marginBottom: 20,
        width: 100,
      },
      avatarLabel: {
        fontStyle: 'italic',
        marginBottom: 40,
        color: blue,
        marginLeft: 30,
        marginRight: 30,
        textAlign: 'center'
      },
      inputLabel: {
        color: blue,
        fontStyle: 'italic',
        marginBottom: 10,
        textAlign: 'left'
      },
      input: {
        borderColor: orange,
        borderWidth: 1,
        borderRadius: 10,
        color: blue,
        height: 40,
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
        padding: 8
      },
      loginButton: {
        backgroundColor: orange,
        borderRadius: 10,
        color: '#fff',
        marginTop: 30,
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40
      }
    });

    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{uri: 'http://s1h.roomido.com/bundles/gujhomestylrfrontend/images/placeholder_avatar_300x300.png'}}
        />
        <Text style={styles.avatarLabel}>
          Welcome to MoarBacon APP, please fill in your credentials
        </Text>
        <Text style={styles.inputLabel}>
          Email
        </Text>
        <TextInput style={styles.input}
                   onChangeText={(email) => this.setState({email})}>
        </TextInput>
        <Text style={styles.inputLabel}>
          Password
        </Text>
        <TextInput style={styles.input}
                   onChangeText={(password) => this.setState({password})}>
        </TextInput>
        <TouchableHighlight underlayColor= '#FFF'
                            onPress={this.tryLogin}>
          <Text style={styles.loginButton}>
          Send
        </Text>
        </TouchableHighlight>
      </View>
    );
  },

});

module.exports = Login;