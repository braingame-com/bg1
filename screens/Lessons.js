import { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles as s } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { LessonCategories } from "../screens/LessonCategories";
import { ArticleList } from "../screens/ArticleList";
import { Article } from "../screens/Article";

const Stack = createNativeStackNavigator();

const screenWidth = Dimensions.get("window").width;
const isMobile = screenWidth < 769 ? true : false;

export function Lessons({ route, navigation }) {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerShadowVisible: true,
        headerTitleStyle: {
          marginLeft: isMobile ? 0 : 10,
        },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={LessonCategories}
        options={{ headerTitle: "Categories" }}
      />
      <Stack.Screen
        name="Lessons"
        component={ArticleList}
        options={{
          headerTitle: "Lessons",
          headerLeft: () => (
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "flex-start",
                marginLeft: isMobile ? 0 : 20,
              }}
              onPress={() => navigation.navigate("Categories")}
              hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
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
        name="Article"
        component={Article}
        options={{
          headerTitle: " ",
          headerLeft: () => (
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "flex-start",
                marginLeft: isMobile ? 0 : 20,
              }}
              onPress={() => navigation.navigate("Lessons")}
              hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
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
