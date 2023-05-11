import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import Home from "../pages/home";
import Settings from "../pages/settings";

import {
  Animated,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";

const Tab = createMaterialTopTabNavigator();

const heightStatus = Platform.OS === "android" ? StatusBar.currentHeight : 50;

export function MyTabs() {
  return (
    <Tab.Navigator
      style={{marginTop: heightStatus}}
      initialRouteName="Feed"
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: ""},
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel: "Home"}}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{tabBarLabel: "Settings"}}
      />
    </Tab.Navigator>
  );
}
