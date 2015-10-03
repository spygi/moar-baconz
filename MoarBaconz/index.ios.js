/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
} = React;

var BaconAPI = require('./client/utils/BaconAPI');
var FluxProduct = require('./client/components/FluxProduct.react');
AppRegistry.registerComponent('MoarBaconz', () => FluxProduct);
