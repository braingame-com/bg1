import { useState } from "react";
import {
  View,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import { s, t } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { Text } from "../components/typography";

export function SettingsHeader() {
  const { colors } = useTheme();
  return (
    <View style={{ ...s.container }}>
      <View
        style={{
          ...s.row,
          ...s.m_horizontal,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{ ...s.title, color: colors.text, marginBottom: -t.small }}
        >
          Settings
        </Text>
      </View>
    </View>
  );
}
