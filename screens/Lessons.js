import { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ArticleList } from "../screens/ArticleList";
import { Article } from "../screens/Article";

const Stack = createNativeStackNavigator();

export function Lessons({ route }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ArticleList" component={ArticleList} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
}
