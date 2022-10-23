import {
  Text,
  View,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import { styles as s } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";

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
        <Text style={{ ...s.title, color: colors.text }}>Settings</Text>
        <TouchableOpacity
          style={{
            ...s.row,
            alignItems: "center",
          }}
          onPress={() => console.log("log in")}
        >
          <Octicons name="sign-in" size={20} style={{ ...s.info_text }} />
          <Text style={{ ...s.m_left, ...s.info_text }}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
