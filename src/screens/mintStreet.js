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
  Alert,
} from 'react-native';

const {height, width} = Dimensions.get('window');
import {Buffer} from 'buffer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {urlSignProgram, urlSignReset} from '@beechatnetwork/elerium-lib';
import DropdownPickerComponent from '../components/dropdownPicker';
const logoImage = require('../assets/images/activeChipICon.png');

const eyeIcon = require('../assets/images/eyeIcon.png');
const eyeSlashIcon = require('../assets/images/eyeSlash.png');

const MintStreet = () => {
  const [password, setPassword] = useState('');
  // bonkadvi
  const [url, setUrl] = useState('');
  // 3947857711
  const [pubKey, setPubKey] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const [selectedUrl, setSelectedUrl] = useState('StreetMint');
  const [urlItems, setUrlItems] = useState([
    {label: 'StreetMint', value: 'StreetMint'},
    {label: 'IRLS', value: 'IRLS'},
  ]);

  const doProgram = async () => {
    if (password.length !== 8) {
      Alert.alert('Password should be exact 8 symbols');
      return;
    }
    let updateUrl =
      selectedUrl === 'StreetMint'
        ? 'https://streetmint/' + url
        : 'https://www.irls.xyz/irl/' + url;
    // 'streetmint.xyz/mint/' + url
    const pubKey = await urlSignProgram(password, updateUrl);

    console.log('public key ', pubKey);
    setPubKey(Buffer.from(pubKey).toString('hex'));
  };
  const doReset = async () => {
    if (password.length !== 8) {
      Alert.alert('Password should be exact 8 symbols');
      return;
    }
    urlSignReset(password);
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flex: 1}}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.containerWrapper}>
          <View style={styles.contentContainer}>
            <Image source={logoImage} style={styles.logo} />
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password (max. 8 characters)"
                maxLength={8}
                secureTextEntry={!showPassword}
                placeholderTextColor={'gray'}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image
                  source={showPassword ? eyeSlashIcon : eyeIcon}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.divider} />
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={url}
                onChangeText={setUrl}
                placeholder="Mint ID"
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={styles.divider} />

            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={pubKey}
                placeholderTextColor={'gray'}
                placeholder="Public Key"
              />
            </View>
            <View style={styles.divider} />
            <View style={styles.dropDownContainer}>
              <DropdownPickerComponent
                value={selectedUrl}
                setValue={setSelectedUrl}
                items={urlItems}
                setItems={setUrlItems}
                zIndexInverse={1000}
                zIndex={3000}
              />
            </View>

            <View style={styles.divider} />
            <TouchableOpacity
              onPress={async () => await doProgram()}
              style={styles.button}>
              <Text style={styles.buttonText}>Program</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity
              onPress={async () => await doReset()}
              style={[
                styles.button,
                {
                  backgroundColor: 'transparent',
                  borderColor: '#000000',
                  borderWidth: 1,
                },
              ]}>
              <Text style={[styles.buttonText, {color: 'black'}]}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};
export default MintStreet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  containerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,

    width: '95%',
    padding: '8%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    width: '90%',
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    color: '#00000',
    textAlignVertical: 'top', // Ensures the text starts at the top of the input
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#777777',

    paddingVertical: 4,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  divider: {
    height: 20,
  },

  button: {
    backgroundColor: '#000',
    borderRadius: 8,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    width: 150,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  dropDownContainer: {
    zIndex: 1000,
  },
});
