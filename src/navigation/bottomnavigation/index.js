import AnDesign from "react-native-vector-icons/AntDesign";
import { COLORS } from "../../constants/Colors";
import Details from "../../pages/Details";
import Home from "../../pages/Home";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Profile from "../../pages/ProfileScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useState } from "react";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = ({ navigation }) => {
  return (
    <Tab.Navigator
      activeColor="black"
      inactiveColor={COLORS.PRIMARY_COLORds}
      barStyle={{
        backgroundColor: COLORS.TAB_COLOR,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Events",
          tabBarIcon: ({ color }) => (
            <AnDesign name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarLabel: "Add",
          tabBarIcon: ({ color }) => (
            <AnDesign name="pluscircleo" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
