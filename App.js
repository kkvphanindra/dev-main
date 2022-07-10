/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatHome from './chat/ChatHome';
import OneToOne from './chat/OneToOne';
import GroupCreation from './chat/GroupCreation';
import GroupChat from './chat/GroupChat';
import GroupEdit from './chat/GroupEdit';
import Calling from './chat/Calling';

const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="chatHome">
        <Stack.Screen name="chatHome" component={ChatHome} />
        <Stack.Screen name="oneToOne" component={OneToOne} />
        <Stack.Screen name="groupCreation" component={GroupCreation} />
        <Stack.Screen name="groupChat" component={GroupChat} />
        <Stack.Screen name="groupEdit" component={GroupEdit} />
        <Stack.Screen name="calling" component={Calling} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
