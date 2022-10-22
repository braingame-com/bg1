import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles as s } from "../setup/styles";
import { Octicons } from "@expo/vector-icons";
import { DashboardList } from "../screens/DashboardList";
import { TasksScreen } from "../screens/TasksScreen";
import { JournalScreen } from "../screens/JournalScreen";

const Stack = createNativeStackNavigator();

export function Dashboard({ route, navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarStyle: {
          color: "#777777",
          // height: 100,
          borderTopWidth: 0,
        },
        headerShadowVisible: false,
        headerTintColor: "#777777",
        headerStyle: {
          backgroundColor: "black",
          // height: 100,
        },
      }}
    >
      <Stack.Screen
        name="Dashboard List"
        component={DashboardList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tasks Screen"
        component={TasksScreen}
        options={{
          headerTitle: " ",
          headerLeft: () => (
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => navigation.navigate("Dashboard List")}
            >
              <Octicons
                name="chevron-left"
                size={20}
                style={{ color: "#777777" }}
              />
            </TouchableOpacity>
          ),
          // headerTitle: () => (
          //   <Text style={{ ...s.pill, ...s.warn, ...s.m_left }}>0 / 3</Text>
          // ),
        }}
      />
      <Stack.Screen
        name="Journal Screen"
        component={JournalScreen}
        options={{
          headerTitle: " ",
          headerLeft: () => (
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => navigation.navigate("Dashboard List")}
            >
              <Octicons
                name="chevron-left"
                size={20}
                style={{ color: "#777777" }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
