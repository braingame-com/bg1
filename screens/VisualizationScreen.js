import { useState, useEffect } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { s, t } from "../setup/styles";
import { Text } from "../components/typography";

export function VisualizationScreen({ route }) {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ ...s.heading, color: "white" }}>Visualization Screen</Text>
    </View>
  );
}
