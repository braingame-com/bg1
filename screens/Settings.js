import { useState, useContext } from "react";
import { Text, View, TouchableOpacity, Switch } from "react-native";
import { useThemeUpdate } from "../components/AppProvider";
import { styles as s } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { IconBG, IconCode } from "../utilities/svg-icons";

export function Settings({ route }) {
  const { colors } = useTheme();
  // const dark = useTheme();
  const toggleTheme = useThemeUpdate();
  return (
    <View style={{ flex: 1 }}>
      {/* <Text style={{ color: colors.text }}>Dark Mode</Text>
      <Switch style={s.toggle} value={dark} onChange={toggleTheme} /> */}
      <View style={{ ...s.container, ...s.row }}>
        <IconBG />
        <IconCode style={{ marginHorizontal: 10 }} />
        <Text style={{ color: "#777777" }}>v1.1.1</Text>
      </View>
    </View>
  );
}
