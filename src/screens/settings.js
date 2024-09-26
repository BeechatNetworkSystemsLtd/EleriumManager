import React, {useEffect, useState} from 'react';
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

const logoImage = require('../assets/images/activeChipICon.png');
const eyeIcon = require('../assets/images/eyeIcon.png');
const eyeSlashIcon = require('../assets/images/eyeSlash.png');
import AsyncStorage from '@react-native-async-storage/async-storage';
const Settings = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    hanldeGetSavedPassword();
  }, []);
  const hanldeGetSavedPassword = async () => {
    let password = await AsyncStorage.getItem('password');
    if (password) setPassword(password);
  };

  const handleSavePassword = () => {
    AsyncStorage.setItem('password', password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerWrapper}>
        <View style={styles.contentContainer}>
          {/* <Image source={logoImage} style={styles.logo} /> */}
          <Text style={styles.text}>Enter Server Password</Text>
          <View style={styles.divider} />
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
          <TouchableOpacity onPress={handleSavePassword} style={styles.button}>
            <Text style={styles.buttonText}>Save Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Settings;
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
  logo: {
    width: 150,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  text: {
    fontWeight: '700',
    fontSize: 18,
    alignSelf: 'center',
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
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
});
