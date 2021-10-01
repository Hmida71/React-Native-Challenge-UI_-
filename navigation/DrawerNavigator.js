import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerItems from '../src_drawer/DrawerItems';
import { ContactStackNavigator } from "./StackNavigator";
// import TabNavigator from "./TabNavigator";
import option_1 from "../src_drawer/option_1";
import option_2 from "../src_drawer/option_2";
import Home from "../src/Home";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
     <Drawer.Navigator drawerContent={(props) => <DrawerItems {...props}/>}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
      <Drawer.Screen name="option 1" component={option_1} />
      <Drawer.Screen name="option 2" component={option_2} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
