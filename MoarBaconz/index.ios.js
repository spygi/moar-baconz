/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry
} = React;
var Item = require('./client/components/Item.react');

AppRegistry.registerComponent('MoarBaconz', () => Item);
