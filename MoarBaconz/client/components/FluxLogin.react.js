var React = require('react-native');
var {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
} = React;

// Flux login view
var FluxLogin = React.createClass({

  // Render Login View
  render: function() {
    var styles = StyleSheet.create({
      container: {
        alignItems: 'center',
        backgroundColor: "#CCC",
        flex: 1,
        flexDirection: 'column',
        paddingTop: 80,
        // justifyContent: 'center',
      },
      avatar: {
        borderRadius: 40,
        height: 80,
        marginBottom: 20,
        width: 80,
      },
      avatarLabel: {
        fontStyle: 'italic'
      },
      userNameInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
      },
      passwordInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
      }
    });

    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{uri: 'http://s1h.roomido.com/bundles/gujhomestylrfrontend/images/placeholder_avatar_300x300.png'}}
        />
        <Text style={styles.avatarLabel}>
          Hoi
        </Text>
        <Text style={styles.userNameLabel}>
          UserName
        </Text>
        <TextInput style={styles.userNameInput}>
        </TextInput>
        <Text style={styles.passwordLabel}>
          Password
        </Text>
        <TextInput style={styles.passwordInput}>
        </TextInput>
      </View>
    );
  },

});

module.exports = FluxLogin;