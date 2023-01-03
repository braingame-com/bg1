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

export function Support() {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...s.container,
        ...s.m_horizontal,
        marginTop: -t.small,
      }}
    >
      <Text style={{ ...s.heading, color: colors.text, marginBottom: t.small }}>
        Support
      </Text>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Octicons
            name="question"
            size={t.large}
            style={{ color: t.grey, ...s.m_right }}
          />
          <Text style={{ ...s.task_mini }}>How do I use this app?</Text>
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
            name="comment"
            size={t.large}
            style={{ color: t.grey, ...s.m_right }}
          />
          <Text style={{ ...s.task_mini }}>Contact us</Text>
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
            name="file"
            size={t.large}
            style={{
              color: t.grey,
              ...s.m_right,

              width: t.large,
            }}
          />
          <Text style={{ ...s.task_mini }}>Documentation</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
