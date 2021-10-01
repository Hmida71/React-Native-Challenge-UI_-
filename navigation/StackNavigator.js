import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import { View, StyleSheet, Image, Text, TouchableOpacity,Button } from 'react-native';
import Home from '../src/Home';
// import HomeBar from '../TopBar/HomeBar';
import About from '../src/About';
import Countact from '../src/Countact';
import option_1 from '../src_drawer/option_1';
import option_2 from '../src_drawer/option_2';


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStylehome}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      {/* <Stack.Screen name="Contact" component={Countact} /> */}
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Countact} />
      <Stack.Screen name="option_1" component={option_1} />
      <Stack.Screen name="option_2" component={option_2} />
    </Stack.Navigator>
  );
};

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  headerTitleAlign: 'center',
};
const screenOptionStylehome = {
  headerShown: false,
}

export { MainStackNavigator, ContactStackNavigator };
