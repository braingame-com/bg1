import { useState, useContext } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import { useThemeUpdate } from "../components/AppProvider";
import { styles as s } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { IconBG, IconCode } from "../utilities/svg-icons";
import { Octicons } from "@expo/vector-icons";

export function Settings({ route }) {
  const { colors } = useTheme();
  const auto = useColorScheme() === "dark" ? true : false;
  const [isEnabled, setIsEnabled] = useState(auto);
  const dark = useTheme();
  const toggleTheme = useThemeUpdate();
  console.log(useThemeUpdate());
  return (
    <SafeAreaView style={s.container}>
      <View style={{ ...s.container }}>
        <Text style={{ ...s.title, ...s.m_horizontal, color: colors.text }}>
          Settings
        </Text>
      </View>
      <View
        style={{
          ...s.row,
          padding: 20,
          bottom: 0,
          width: "100%",
          alignItems: "center",
        }}
      >
        <IconBG fill={colors.border} />
        <Octicons
          name="code"
          color={colors.border}
          size={20}
          style={{ marginHorizontal: 10 }}
        />
        <Text style={{ color: colors.border }}>v1.1.1</Text>
        <Octicons
          name="smiley"
          color={colors.border}
          size={20}
          style={{ marginHorizontal: 10 }}
        />
      </View>
      <View style={{ ...s.container, ...s.m_horizontal }}>
        <Text style={{ ...s.subtitle, color: colors.text }}>Theme</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              ...s.btn_secondary,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderColor: colors.border,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
            onPress={() => {
              console.log("light");
              setIsEnabled(false);
            }}
          >
            <Octicons name="sun" size={20} color="#777777" />
            <Text style={{ ...s.subtitle, ...s.m_left, color: colors.text }}>
              Light
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...s.btn_secondary,
              borderRadius: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderColor: colors.border,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
            onPress={() => {
              console.log("dark");
            }}
          >
            <Octicons name="moon" size={20} color="#777777" />
            <Text style={{ ...s.subtitle, ...s.m_left, color: colors.text }}>
              Dark
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...s.btn_secondary,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderColor: colors.border,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              backgroundColor: colors.card,
            }}
            onPress={() => {
              console.log("auto");
            }}
          >
            <Text style={{ ...s.subtitle, color: colors.text }}>Auto</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ ...s.container, ...s.m_horizontal }}>
        <Text style={{ ...s.subtitle, color: colors.text }}>Dark Mode</Text>
        <Switch style={s.m_vertical} value={auto} onChange={toggleTheme} />
      </View>
    </SafeAreaView>
  );
}
