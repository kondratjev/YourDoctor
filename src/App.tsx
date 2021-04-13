import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CalendarScreen from "./screens/Calendar";
import ProfileScreen from "./screens/Profile";
import MedicinesScreen from "./screens/Medicines";
import MedicineDetailsScreen from "./screens/MedicineDetails";

import Clock from "./components/Icons/Clock";
import User from "./components/Icons/User";

const MainStack = createStackNavigator();

const CalendarStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{ title: "Календарь" }}
      />
    </MainStack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Профиль" }}
      />
      <MainStack.Screen
        name="Medicines"
        component={MedicinesScreen}
        options={{ title: "Мои лекарства" }}
      />
      <MainStack.Screen
        name="MedicineDetails"
        component={MedicineDetailsScreen}
        options={{ title: "Лекарство" }}
      />
    </MainStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Calendar"
          component={CalendarStackScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              <Clock color={focused ? "#167be7" : "#c1c5d0"} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              <User color={focused ? "#167be7" : "#c1c5d0"} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
