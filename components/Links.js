import {
  Text,
  View,
  TouchableOpacity,
  Button,
  Switch,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import { styles as s } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";

export function Links() {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...s.container,
        ...s.m_horizontal,
        marginTop: -10,
      }}
    >
      <Text style={{ ...s.heading, color: colors.text }}>Links</Text>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 5,
          }}
        >
          <Octicons
            name="organization"
            size={20}
            style={{ color: "#777777", ...s.m_right, opacity: 0.5 }}
          />
          <Text style={{ ...s.task_mini, color: "#777777" }}>
            Legal policies
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 5,
          }}
        >
          <Octicons
            name="mark-github"
            size={20}
            style={{ color: "#777777", ...s.m_right, opacity: 0.5 }}
          />
          <Text style={{ ...s.task_mini, color: "#777777" }}>Github</Text>
          <Octicons
            name="code"
            color={colors.border}
            size={20}
            style={{ marginHorizontal: 10 }}
          />
          <Text style={{ color: colors.border }}>v1.1.1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
