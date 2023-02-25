import { StatusBar } from 'react-native';
import * as Font from 'expo-font';

import Home from './src/pages/Home';
import React, { useState } from 'react';

let customFonts = {
  'Inter-Regular': require('./assets/fonts/Inter-Regular.otf'),
  'Inter-Bold': require('./assets/fonts/Inter-Bold.otf'),
};

export default class App extends React.Component {
  
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Home />
      </>
    );
  }
}