import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../index";
import CourseScreen from "../Course";
import NotificationScreen from "../Notifications";
import { Ionicons } from "@expo/vector-icons";
import Account from "../Account";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ color, size }) => {
      //     let iconName: keyof typeof Ionicons.glyphMap;

      //     switch (route.name) {
      //       case "index": // Tab Home
      //         iconName = "ios-home";
      //         break;
      //       case "Course": // Tab Course
      //         iconName = "ios-book";
      //         break;
      //       case "Notifications": // Tab Notification
      //         iconName = "ios-notifications";
      //         break;
      //       default:
      //         iconName = "ios-home";
      //     }

      //     return <Ionicons name={iconName} size={size} color={color} />;
      //   },
      // })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Course" component={CourseScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="Account" component={Account}/>
    </Tab.Navigator>
  );
};

export default Tabs;
