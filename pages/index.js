import * as React from 'react';
import * as Font from 'expo-font'
import { Image, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';


export default class App extends React.Component {
  state = {
    isReady: false,
  };

  render() {
   
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadResources}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      ); }

    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <Text>It works!</Text>
      </View>
    );
  }

  async loadResources() {
    await Promise.all([
      // Asset.loadAsync([
      //   require('./image/path/here'),
      // ]),
      Font.loadAsync({
        'Arial': require(`../assets/Arial.ttf`),
      }),
    ])
  }
  
}