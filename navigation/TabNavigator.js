// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { AntDesign } from '@expo/vector-icons';
// import { MainStackNavigator, ContactStackNavigator } from './StackNavigator';
// import { View, StyleSheet, Text } from 'react-native';

// // animation
// import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
// import Home from '../src/Home';

// const Tab = AnimatedTabBarNavigator();

// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       // activeColor="red"
//       // barStyle={{ backgroundColor: '#694fad' }}
//       //  tabBarOptions={{
//       //   shifting: true,
//       //   labeled: false,
//       //   sceneAnimationEnabled:true,
//       //   activeTintColor:"#00aea2",
//       //   inactiveTintColor:"#95a5a6",
//       //   // activeTintColor: '#fff',
//       //   // inactiveTintColor: 'lightgray',
//       //   // inactiveBackgroundColor: '#b55031',
//       //   // activeBackgroundColor: '#E8F2FC',
        
//       //  }}
//       tabBarOptions={{
//         activeTintColor: "#d3d",
//         inactiveTintColor: "#222222",
//         activeBackgroundColor: '#bdd2e6',
//       }}
      
//     >
//       <Tab.Screen
//        name="Home"
//        component={MainStackNavigator}
//        options={{
//          tabBarIcon: ({ focused, color, size }) => (
//              <AntDesign
//                  name="home"
//                  size={ 24}
//                  color={focused ? color : "#222222"}
//                  focused={focused}
//                  color={color}
//              />
//          ),
        
//        }}
//       />
//       <Tab.Screen
//         name=" Contact"
//         component={ContactStackNavigator}
//         options={{
//           tabBarIcon: ({ focused, color, size }) => (
//               <AntDesign
//                   name="contacts"
//                   size={24}
//                   color={focused ? color : "#222222"}
//                   focused={focused}
//                   color={color}
//               />
//           )
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default BottomTabNavigator;
