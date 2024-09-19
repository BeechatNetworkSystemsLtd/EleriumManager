import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

const {height, width} = Dimensions.get('window');
import {Buffer} from 'buffer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {urlSignProgram, urlSignReset} from '@beechatnetwork/elerium-lib';
import MintStreet from './src/screens/mintStreet';
const logoImage = require('./src/assets/images/activeChipICon.png');
const eyeIcon = require('./src/assets/images/eyeIcon.png');
const eyeSlashIcon = require('./src/assets/images/eyeSlash.png');

const App = () => {
  const [password, setPassword] = useState('');
  // bonkadvi
  const [url, setUrl] = useState('');
  // 3947857711
  const [pubKey, setPubKey] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const doProgram = async () => {
    const pubKey = await urlSignProgram(password, 'streetmint.xyz/mint/' + url);

    console.log('public key ', pubKey);
    setPubKey(Buffer.from(pubKey).toString('hex'));
  };
  const doReset = async () => {
    urlSignReset(password);
  };
  return (
    <View style={{flex: 1}}>
      <MintStreet />
    </View>
  );
};
export default App;
