import React from 'react';
import {Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MintStreet from '../screens/mintStreet';
import Settings from '../screens/settings';

const homeIcon = require('../assets/images/homeIcon.png');
const gearIcon = require('../assets/images/settingIcon.png');

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          let iconSource;
          let tintColor = focused ? '#FFFFFF' : '#000000';
          let backgroundColor = focused ? '#000000' : 'transparent';

          if (route.name === 'Home') {
            iconSource = homeIcon;
          } else if (route.name === 'Settings') {
            iconSource = gearIcon;
          }

          return (
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: backgroundColor,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={iconSource}
                style={{width: 24, height: 24, tintColor: tintColor}}
                resizeMode="contain"
              />
            </View>
          );
        },
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          height: 100,
        },
      })}>
      <Tab.Screen name="Home" component={MintStreet} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTab;
