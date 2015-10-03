'use strict';

var React = require('react-native');
var MainComponent = require('./client/components/MainComponent.react');
var Constants = require('./client/constants/Constants');
var Ajax = require('./client/utils/ajax');
var {
  AppRegistry,
  AsyncStorage,
  NavigatorIOS
} = React;

var SignUp = require('./client/components/SignUp.react'),
    Login = require('./client/components/Login.react'),
    List = require('./client/components/List.react');


var styles = {
  container: {
    flex: 1
  }
}

  AppRegistry.registerComponent('MoarBaconz', () => MainComponent);