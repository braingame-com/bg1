import {
  View,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from "react-native";
import { useThemeUpdate } from "../components/AppProvider";
import { s, t } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { SettingsHeader } from "../components/SettingsHeader";
import { ThemeSelector } from "../components/ThemeSelector";
import { AccountSettings } from "../components/AccountSettings";
import { Support } from "../components/Support";
import { Links } from "../components/Links";
import { Text } from "../components/typography";
import { Button } from "../components/primitives";
import { isMobile } from "../utilities/helpers";

let subscriber = false;

export function Settings({ route }) {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ ...s.container, flex: 1, ...s.m_top }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ThemeSelector />
        <AccountSettings />
        <Support />
        <Links />
        <Button
          type="Primary"
          text={subscriber ? "View donations" : "Donate"}
          icon={subscriber ? "smiley" : "code-of-conduct"}
          onPress={() => console.log(subscriber ? "view donations" : "donate")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
