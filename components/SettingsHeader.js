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
          <Text style={{ ...s.m_right, ...s.info_text }}>Log in</Text>
          <Octicons name="sign-in" size={20} style={{ ...s.info_text }} />
          {/* <Octicons name="sign-in" size={20} style={{ color: "#777777" }} /> */}
          {/* <Octicons name="sign-out" size={20} style={{ color: "#777777" }} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}
