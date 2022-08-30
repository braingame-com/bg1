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
import { Octicons } from "@expo/vector-icons";
import { SettingsHeader } from "../components/SettingsHeader";
import { ThemeSelector } from "../components/ThemeSelector";
import { VersionWatermark } from "../components/VersionWatermark";

export function Settings({ route }) {
  const { colors } = useTheme();
  const auto = useColorScheme() === "dark" ? true : false;
  const [isEnabled, setIsEnabled] = useState(auto);
  const toggleTheme = useThemeUpdate();
  return (
    <SafeAreaView style={{ ...s.container, flex: 1 }}>
      <SettingsHeader />
      <ThemeSelector />
      <View style={{ ...s.container, ...s.m_horizontal }}>
        <Text
          style={{
            ...s.m_vertical,
            ...s.btn_secondary,
            ...s.rounded,
            ...s.subtitle,
            color: colors.text,
            borderColor: colors.border,
            alignSelf: "flex-start",
          }}
          onPress={toggleTheme}
        >
          Toggle Theme
        </Text>
      </View>
      <View
        style={{
          ...s.container,
          position: "absolute",
          alignSelf: "center",
          bottom: 0,
        }}
      >
        <VersionWatermark />
      </View>
    </SafeAreaView>
  );
}
