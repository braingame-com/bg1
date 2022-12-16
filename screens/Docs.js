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

export function Docs({ route }) {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ ...s.container, flex: 1 }}>
      <View
        style={{
          ...s.container,
          ...s.flex,
          ...s.centered,
        }}
      >
        <Text style={{ color: "white" }}>Hello world!</Text>
      </View>
    </SafeAreaView>
  );
}
