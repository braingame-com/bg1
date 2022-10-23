import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles as s } from "../setup/styles";
import { Octicons } from "@expo/vector-icons";
import { DashboardList } from "../screens/DashboardList";
import { TasksScreen } from "../screens/TasksScreen";
import { VisualizationScreen } from "../screens/VisualizationScreen";
import { AffirmationsScreen } from "../screens/AffirmationsScreen";
import { NumbersScreen } from "../screens/NumbersScreen";
import { PlanningScreen } from "../screens/PlanningScreen";
import { JournalScreen } from "../screens/JournalScreen";

const Stack = createNativeStackNavigator();

export function Dashboard({ route, navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShadowVisible: false,
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
          headerTitle: "Tasks",
          headerLeft: () => (
            <TouchableOpacity
              style={{ ...s.back_btn, padding: 10 }}
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
          //   <Text
          //     style={{
          //       ...s.pill,
          //       ...s.warn,
          //       ...s.m_horizontal_2,
          //       alignSelf: "auto",
          //     }}
          //   >
          //     0 / 3
          //   </Text>
          // ),
        }}
      />
      <Stack.Screen
        name="Visualization Screen"
        component={VisualizationScreen}
        options={{
          headerTitle: "Visualization",
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
      <Stack.Screen
        name="Affirmations Screen"
        component={AffirmationsScreen}
        options={{
          headerTitle: "Affirmations",
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
      <Stack.Screen
        name="Numbers Screen"
        component={NumbersScreen}
        options={{
          headerTitle: "Numbers",
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
      <Stack.Screen
        name="Planning Screen"
        component={PlanningScreen}
        options={{
          headerTitle: "Planning",
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
      <Stack.Screen
        name="Journal Screen"
        component={JournalScreen}
        options={{
          headerTitle: "Journal",
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
