import {urlSignProgram, urlSignReset} from '@beechatnetwork/elerium-lib';
import {Buffer} from 'buffer';
import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import MintStreet from './src/screens/mintStreet';
import Settings from './src/screens/settings';
import RootStack from './src/navigators/rootStack';
const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <MintStreet /> */}
      {/* <Settings /> */}
      <RootStack />
    </View>
  );
};
export default App;
