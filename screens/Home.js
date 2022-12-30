import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles as s } from "../setup/styles";
import { Octicons } from "@expo/vector-icons";
import { HomeList } from "../screens/HomeList";
import { Profile } from "../screens/Profile";
import { TasksScreen } from "../screens/TasksScreen";
import { VisualizationScreen } from "../screens/VisualizationScreen";
import { AffirmationsScreen } from "../screens/AffirmationsScreen";
import { NumbersScreen } from "../screens/NumbersScreen";
import { PlanningScreen } from "../screens/PlanningScreen";
import { JournalScreen } from "../screens/JournalScreen";
import { Playground } from "../screens/Playground";

const Stack = createNativeStackNavigator();

export function Home({ route, navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="Playground"
        component={Playground}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Numbers Screen"
        component={NumbersScreen}
        options={{
          headerTitle: "Numbers",
          headerLeft: () => (
            <TouchableOpacity
              style={{ ...s.back_btn, padding: 10 }}
              onPress={() => navigation.navigate("Home")}
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
        name="Tasks Screen"
        component={TasksScreen}
        options={{
          headerTitle: "Tasks",
          headerLeft: () => (
            <TouchableOpacity
              style={{ ...s.back_btn, padding: 10 }}
              onPress={() => navigation.navigate("Home")}
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
        name="Visualization Screen"
        component={VisualizationScreen}
        options={{
          headerTitle: "Visualization",
          headerLeft: () => (
            <TouchableOpacity
              style={{ ...s.back_btn, padding: 10 }}
              onPress={() => navigation.navigate("Home")}
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
              style={{ ...s.back_btn, padding: 10 }}
              onPress={() => navigation.navigate("Home")}
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
              style={{ ...s.back_btn, padding: 10 }}
              onPress={() => navigation.navigate("Home")}
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
              style={{ ...s.back_btn, padding: 10 }}
              onPress={() => navigation.navigate("Home")}
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
        name="Profile"
        component={Profile}
        options={{
          headerTitle: "Profile",
          headerLeft: () => (
            <TouchableOpacity
              style={{ ...s.back_btn, padding: 10 }}
              onPress={() => navigation.navigate("Home")}
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
