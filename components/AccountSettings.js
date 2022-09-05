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
      <Text style={{ ...s.subtitle, color: colors.text }}>Account</Text>
      <TouchableOpacity>
        <Text style={{ ...s.task_mini, color: "#777777" }}>
          Change email/phone number
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ ...s.task_mini, color: "#777777" }}>
          Change password
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ ...s.task_mini, ...s.error_text }}>Delete account</Text>
      </TouchableOpacity>
    </View>
  );
}
