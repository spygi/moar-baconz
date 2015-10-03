var React = require('react-native'),
    Ajax = require('../utils/ajax'),
    Constants = require('../constants/Constants');

var {
  AsyncStorage,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} = React;

// Flux SignUp view
var SignUp = React.createClass({
  trySignUp: function() {
    // Validation 
    if (this.state.email && this.state.password) {

      var body = {
        email: this.state.email,
        password: this.state.password
      }

      success = function(response) {
        console.log('signup',response);
        if (response.success && response.result && response.result.token && response.result.id) {
          var accessToken = response.result.token;
          var memberId = response.result.id;
          AsyncStorage.setItem(Constants.ACCESS_TOKEN, accessToken);
          AsyncStorage.setItem(Constants.MEMBER_ID, memberId);
        }
        else {
          console.log('error ocurred, API returned false');
        }
      }

      var error = function(error) {
        console.log('error',error);
      }

      Ajax.do('POST', 'member', body, success, error);
    }
    else {
      // Notify the user that something is missing
    }
  },

  // Render Login View
  render: function() {

    var blue = '#1D8DA4',
        orange = '#FF9128',
        lightOrange = "#FFBB7A";
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
        marginBottom: 10
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
      signUpButton: {
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
        <Text style={styles.inputLabel}>
          Email
        </Text>
        <TextInput style={styles.input}
                   placeholder="bacon@fryingpan.now"
                   placeholderTextColor={lightOrange}
                   onChangeText={(email) => this.setState({email})}>
        </TextInput>
        <Text style={styles.inputLabel}>
          Password
        </Text>
        <TextInput style={styles.input}
                   placeholder="******"
                   placeholderTextColor={lightOrange}
                   onChangeText={(password) => this.setState({password})}>
        </TextInput>
        <TouchableHighlight underlayColor= '#FFF'
                            onPress={this.trySignUp}>
          <Text style={styles.signUpButton}>
            Sign Up
          </Text>
        </TouchableHighlight>
      </View>
    );
  },

});

module.exports = SignUp;