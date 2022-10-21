import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles as s } from "../setup/styles";
import { Octicons } from "@expo/vector-icons";
import { ArticleList } from "../screens/ArticleList";
import { Article } from "../screens/Article";

const Stack = createNativeStackNavigator();

export function Lessons({ route, navigation }) {
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
        name="Article List"
        component={ArticleList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Article"
        component={Article}
        options={{
          headerTitle: " ",
          headerLeft: () => (
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => navigation.navigate("Article List")}
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
