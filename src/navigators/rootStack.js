import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomTab from './stacks';

const RootStack = () => {
  const MainStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen component={BottomTab} name={'bottomTab'} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default RootStack;
