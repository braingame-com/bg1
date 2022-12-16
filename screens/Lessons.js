import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles as s } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { ArticleList } from "../screens/ArticleList";
import { Article } from "../screens/Article";

const Stack = createNativeStackNavigator();

export function Lessons({ route, navigation }) {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarStyle: {
          color: "#777777",
          // height: 100,
          borderTopWidth: 0,
        },
        // headerShadowVisible: false,
        // headerTintColor: "#777777",
        headerStyle: {
          // backgroundColor: colors.card,
          backgroundColor: colors.background,
          // height: 100,
          // borderWidth: 1,
          // borderColor: colors.border,
        },
      }}
    >
      <Stack.Screen
        name="Lessons"
        component={ArticleList}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Article"
        component={Article}
        options={{
          headerTitle: " ",
          headerLeft: () => (
            <TouchableOpacity
              style={{
                ...s.row,
                ...s.back_btn,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
              onPress={() => navigation.navigate("Lessons")}
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
