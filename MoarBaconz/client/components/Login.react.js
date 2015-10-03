var React = require('react-native');
var {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
} = React;

// Flux login view
var Login = React.createClass({

  // Render Login View
  render: function() {

    var blue = '#1D8DA4';
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
        fontStyle: 'italic',
        marginBottom: 10,
        color: blue
      },
      input: {
        borderColor: blue,
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
        backgroundColor: blue,
        borderRadius: 20,
        color: '#fff',
        marginTop: 30,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30
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
          UserName
        </Text>
        <TextInput style={styles.input}>
        </TextInput>
        <Text style={styles.inputLabel}>
          Password
        </Text>
        <TextInput style={styles.input}>
        </TextInput>
        <Text style={styles.loginButton}>
          Send
        </Text>
      </View>
    );
  },

});

module.exports = Login;