var React = require('react-native'),
    Ajax = require('../utils/ajax'),
    Constants = require('../constants/Constants');

var {
  AsyncStorage,
  Image,
  NavigatorIOS,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} = React;

var styles = {
  container: {
    flex: 1
  }
}

var SignUp = require('./SignUp.react'),
    LogIn = require('./Login.react'),
    List = require('./List.react');

// Flux Main view
var MainComponent = React.createClass({

  getInitialState: function() {
    return { screen: { component: LogIn, title: "Log In" } };
  },
  _startAppWith: function(startingScreen) {
    this.refs.nav.navigator.replace(startingScreen)
    // this.setState({screen: startingScreen})
  },
  _startAppWithAppropriateScreen: function () {
    var component = this;
    var accessToken;
    AsyncStorage.getItem(Constants.ACCESS_TOKEN).then(function(token){
      accessToken = token;
      return AsyncStorage.getItem(Constants.MEMBER_ID);
    }).then(function(memberId){
      
          if(accessToken && memberId) {

            var body = {};

            var success = function(response) {

              if (response.success) {
                component._startAppWith(
                  {
                    component: List,
                    title: "My List"
                  }
                );
              }
              else {
                component._startAppWith(
                  {
                    component: LogIn,
                    title: "Log In"
                  }
                );
              }
            };
            var error = function(response) {
              console.log("An error ocurred", response);
            };

            Ajax.do('GET', 'member/'+memberId, body, success, error, accessToken);
          }
          else {
            component._startAppWith(
              {
                component: SignUp,
                title: "Sign Up"
              }
            );
          }
        });
     
  },
  componentDidMount: function() {
   this._startAppWithAppropriateScreen();
  },

  render: function() {
    return (
        <NavigatorIOS
            style={styles.container}
            ref="nav"
            initialRoute={{
              component: this.state.screen.component,
              title: this.state.screen.title,
              // leftButtonTitle: 'Settings',
              // onLeftButtonPress: () => {
              //   this.refs.nav.navigator.push({
              //     component: Login,
              //     id: 'login',
              //     title: 'Log In'
              //   })
              // }
            }}
            configureScene={(route) => {
              if (route.sceneConfig) {
                return route.sceneConfig;
              }
              return Navigator.SceneConfigs.FloatFromBottom;
            }}
        />
    );
  }

});

module.exports = MainComponent;