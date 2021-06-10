import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import ArrowLeft from "../icons/ArrowLeft";
import Capsule from "../icons/Capsule";
import User from "../icons/User";
import Zoom from "../icons/Zoom";
import CalendarScreen from "../screens/Calendar";
import EditMedicineScreen from "../screens/EditMedicine";
import EditPeriodScreen from "../screens/EditPeriod";
import EditScheduleScreen from "../screens/EditSchedule";
// import ProfileScreen from "./screens/Profile";
import EmptyScreen from "../screens/EmptyScreen";
import MedicineDetailsScreen from "../screens/MedicineDetails";
import MedicinesScreen from "../screens/Medicines";

const navigatorScreenOptions: StackNavigationOptions = {
  headerBackTitleVisible: false,
  headerTintColor: "#c1c5d0",
  headerBackImage: ({ tintColor }) => (
    <View style={{ marginLeft: 15 }}>
      <ArrowLeft color={tintColor} />
    </View>
  ),
  headerTitleStyle: {
    fontWeight: "500",
    color: "#222",
  },
};

const MedicinesStack = createStackNavigator();

const MedicinesStackScreen = () => {
  return (
    <MedicinesStack.Navigator screenOptions={navigatorScreenOptions}>
      <MedicinesStack.Screen
        name="Calendar"
        component={CalendarScreen}
        options={({ route }) => ({
          title: route?.params?.name ?? "Календарь",
          headerStyle: {
            borderBottomColor: "transparent",
            shadowColor: "transparent",
          },
        })}
      />
      <MedicinesStack.Screen
        name="Medicines"
        component={MedicinesScreen}
        options={{ title: "Мои лекарства" }}
      />
      <MedicinesStack.Screen
        name="MedicineDetails"
        component={MedicineDetailsScreen}
        options={{ title: "Лекарство" }}
      />
      <MedicinesStack.Screen
        name="EditMedicine"
        component={EditMedicineScreen}
        options={{ title: "Изменить лекарство" }}
      />
      <MedicinesStack.Screen
        name="EditSchedule"
        component={EditScheduleScreen}
        options={{ title: "Изменить расписание" }}
      />
      <MedicinesStack.Screen
        name="EditPeriod"
        component={EditPeriodScreen}
        options={{ title: "Изменить период приема" }}
      />
    </MedicinesStack.Navigator>
  );
};

const KnowledgeBaseStack = createStackNavigator();

const KnowledgeBaseStackScreen = () => {
  return (
    <KnowledgeBaseStack.Navigator screenOptions={navigatorScreenOptions}>
      <KnowledgeBaseStack.Screen
        name="KnowledgeBase"
        component={EmptyScreen}
        options={{ title: "База знаний" }}
      />
    </KnowledgeBaseStack.Navigator>
  );
};

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={navigatorScreenOptions}>
      <ProfileStack.Screen
        name="Profile"
        component={EmptyScreen}
        options={{ title: "Профиль" }}
      />
    </ProfileStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Medicines"
          component={MedicinesStackScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              <Capsule color={focused ? "#167be7" : "#c1c5d0"} />
            ),
          }}
        />
        <Tab.Screen
          name="KnowledgeBase"
          component={KnowledgeBaseStackScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              <Zoom color={focused ? "#167be7" : "#c1c5d0"} />
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
