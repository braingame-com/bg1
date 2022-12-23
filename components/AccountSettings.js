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

export function AccountSettings() {
  const { colors } = useTheme();
  return (
    <View style={{ ...s.container, ...s.m_horizontal }}>
      <Text style={{ ...s.heading, color: colors.text }}>Account</Text>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 5,
          }}
        >
          <Octicons
            name="person"
            size={20}
            style={{ color: "#777777", ...s.m_right, opacity: 0.5 }}
          />
          <Text style={{ ...s.task_mini, color: "#777777" }}>
            Change username or email
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
            name="lock"
            size={20}
            style={{ color: "#777777", ...s.m_right, opacity: 0.5 }}
          />
          <Text style={{ ...s.task_mini, color: "#777777" }}>
            Change password
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
            name="credit-card"
            size={20}
            style={{ color: "#777777", ...s.m_right, opacity: 0.5 }}
          />
          <Text style={{ ...s.task_mini, color: "#777777" }}>
            Payment methods
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
            name="trash"
            size={20}
            style={{ ...s.error_text, ...s.m_right, opacity: 0.5 }}
          />
          <Text style={{ ...s.error_text, ...s.task_mini, opacity: 0.5 }}>
            Delete account
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
