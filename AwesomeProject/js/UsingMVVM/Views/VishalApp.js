/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import LoginViewModel from "./js/UsingMVVM/ViewModels/LoginViewModel"
import LoginInfo from "./js/UsingMVVM/Models/LoginInfo"
import RefreshDelegate from "./js/UsingMVVM/ViewModels/LoginViewModel"
import styles from './js/UsingMVVM/Styles/LoginStyle'

import {
  Platform,
  Text,
  View,
  ScrollView,
  ListView,
  Button
} from 'react-native';

export default class App extends Component implements RefreshDelegate  {
  viewModel = new LoginViewModel();

  constructor() {
    super();
    this.viewModel.delegate = this
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2','row3']),
    };
  }

  refreshScreen() {
    this.setState({})
  }

  onPressMethod() {
    this.viewModel.callWebserviceToLoadData()
  }

  render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            { this.viewModel.getTitleMessage()}
          </Text>
          <Text style={styles.instructions}>
          <Text style={styles.welcome}>
          { this.viewModel.getSubTitleMessage()}
            </Text>
          </Text>
          <Text style={styles.instructions}>
            {LoginViewModel.instructions}
          </Text>
          <Button onPress={() => this.onPressMethod()} title="Change Content"> 
            </Button>
        </View>
      );
    }
  }

