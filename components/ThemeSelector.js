import { useState, useContext } from "react";
import {
  View,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { useThemeUpdate } from "../components/AppProvider";
import { s, t } from "../setup/styles";
import { Octicons } from "@expo/vector-icons";
import { Text } from "../components/typography";

export function ThemeSelector() {
  const { colors } = useTheme();
  const auto = useColorScheme() === "dark" ? true : false;
  const [isEnabled, setIsEnabled] = useState(auto);
  const toggleTheme = useThemeUpdate();
  return (
    <View style={{ ...s.container, ...s.m_horizontal }}>
      <Text
        style={{ ...s.heading, color: colors.text, paddingBottom: t.small }}
      >
        Theme
      </Text>
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
          }}
        >
          <Octicons name="sun" size={t.large} color={t.grey} />
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
          <Octicons name="moon" size={t.large} color={t.grey} />
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
          onPress={toggleTheme}
        >
          <Text style={{ ...s.subtitle, color: colors.text }}>Auto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
