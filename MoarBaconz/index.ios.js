'use strict';

var React = require('react-native');
var {
  AppRegistry
} = React;

// Temporary switches (I WILL ZESTROY ZEM NAO)
var displayLoginForm = true;
var displaySignUpForm = true;

if (displayLoginForm) 
{
  if (displaySignUpForm) {
    var SignUp = require('./client/components/SignUp.react');
    AppRegistry.registerComponent('MoarBaconz', () => SignUp);
  }
  else {
    var Login = require('./client/components/Login.react');
    AppRegistry.registerComponent('MoarBaconz', () => Login);
  }
}
else 
{
  var List = require('./client/components/List.react');
  AppRegistry.registerComponent('MoarBaconz', () => List);
}
