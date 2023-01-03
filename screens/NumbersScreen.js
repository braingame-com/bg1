import { useState, useEffect } from "react";
import {
  Image,
  View,
  ScrollView,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { s, t } from "../setup/styles";
import {
  GRAPHQL_URL,
  STOREFRONT_ACCESS_TOKEN,
  GRAPHQL_BODY,
} from "../setup/shopify-sapi";
import RenderHtml from "react-native-render-html";
import { Octicons } from "@expo/vector-icons";
import { Text } from "../components/typography";

export function NumbersScreen({ route }) {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ ...s.heading, color: "white" }}>Numbers Screen</Text>
    </View>
  );
}
