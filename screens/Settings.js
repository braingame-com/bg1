import { useState, useContext } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Switch,
  SafeAreaView,
} from "react-native";
import { useThemeUpdate } from "../components/AppProvider";
import { styles as s } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { IconBG, IconCode } from "../utilities/svg-icons";

export function Settings({ route }) {
  const { colors } = useTheme();
  // const dark = useTheme();
  const toggleTheme = useThemeUpdate();
  return (
    <SafeAreaView style={s.container}>
      <View style={{ ...s.container }}>
        <Text style={{ ...s.title, ...s.m_left }}>Settings</Text>
      </View>
      {/* <Text style={{ color: colors.text }}>Dark Mode</Text>
      <Switch style={s.toggle} value={dark} onChange={toggleTheme} /> */}
      <View
        style={{
          ...s.row,
          padding: 20,
          backgroundColor: "midnightblue",
          opacity: 0.666,
          bottom: 0,
          width: "100%",
          alignItems: "center",
        }}
      >
        <IconBG />
        <IconCode style={{ marginHorizontal: 10 }} />
        <Text style={{ color: "#777777" }}>v1.1.1</Text>
      </View>
    </SafeAreaView>
  );
}
