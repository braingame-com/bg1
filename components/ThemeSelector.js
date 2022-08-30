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

export function ThemeSelector() {
  const { colors } = useTheme();
  return (
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
  );
}
