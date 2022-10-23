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
import { AccountSettings } from "../components/AccountSettings";
import { Support } from "../components/Support";
import { Links } from "../components/Links";

export function Settings({ route }) {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ ...s.container, flex: 1 }}>
      <SettingsHeader />
      <ThemeSelector />
      <AccountSettings />
      <Support />
      <Links />
      <View
        style={{
          ...s.container,
          position: "absolute",
          alignSelf: "center",
          bottom: 0,
        }}
      ></View>
    </SafeAreaView>
  );
}
