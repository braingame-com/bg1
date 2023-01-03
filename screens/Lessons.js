import { useState, useEffect } from "react";
import { View, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { s, t } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { Button } from "../components/primitives";
import { LessonCategories } from "../screens/LessonCategories";
import { ArticleList } from "../screens/ArticleList";
import { Article } from "../screens/Article";
import { Text } from "../components/typography";

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
          marginLeft: isMobile ? 0 : t.small,
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
            <Button
              type="Naked"
              icon="chevron-left"
              onPress={() => navigation.navigate("Categories")}
            />
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
                marginLeft: isMobile ? 0 : t.large,
              }}
              onPress={() => navigation.navigate("Lessons")}
              hitSlop={{
                top: t.small,
                bottom: t.small,
                left: t.small,
                right: t.small,
              }}
            >
              <Octicons
                name="chevron-left"
                size={t.large}
                style={{ color: "#777777" }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
