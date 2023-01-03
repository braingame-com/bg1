import {
  View,
  TouchableOpacity,
  Button,
  Switch,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import { s, t } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { Text } from "../components/typography";

export function AccountSettings() {
  const { colors } = useTheme();
  return (
    <View style={{ ...s.container, ...s.m_horizontal }}>
      <Text style={{ ...s.heading, color: colors.text, marginBottom: t.small }}>
        Account
      </Text>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Octicons
            name="bell"
            size={t.large}
            style={{ color: t.grey, ...s.m_right }}
          />
          <Text style={{ ...s.task_mini }}>Manage notifications</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Octicons
            name="person"
            size={t.large}
            style={{ color: t.grey, ...s.m_right }}
          />
          <Text style={{ ...s.task_mini }}>Change username or email</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Octicons
            name="lock"
            size={t.large}
            style={{ color: t.grey, ...s.m_right }}
          />
          <Text style={{ ...s.task_mini }}>Change password</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            opacity: 0.5,
          }}
        >
          <Octicons
            name="trash"
            size={t.large}
            style={{ ...s.error_text, ...s.m_right }}
          />
          <Text style={{ ...s.error_text, ...s.task_mini }}>
            Delete account
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
