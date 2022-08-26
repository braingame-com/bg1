import { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ArticleList } from "../screens/ArticleList";
import { Article } from "../screens/Article";

const Stack = createNativeStackNavigator();

export function Lessons({ route }) {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
          // height: 100,
          borderTopWidth: 0,
        },
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "black",
          // height: 100,
        },
      }}
    >
      <Stack.Screen
        name="Article List"
        component={ArticleList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Article"
        component={Article}
        options={{ headerTitle: " " }}
      />
    </Stack.Navigator>
  );
}
