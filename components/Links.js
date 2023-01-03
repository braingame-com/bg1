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

export function Links() {
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
        Links
      </Text>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Octicons
            name="bug"
            size={t.large}
            style={{
              color: t.grey,
              ...s.m_right,
              width: t.large,
            }}
          />
          <Text style={{ ...s.task_mini }}>Report a bug</Text>
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
            name="organization"
            size={t.large}
            style={{ color: t.grey, ...s.m_right }}
          />
          <Text style={{ ...s.task_mini }}>Legal policies</Text>
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
            name="mark-github"
            size={t.large}
            style={{ color: t.grey, ...s.m_right }}
          />
          <Text style={{ ...s.task_mini }}>Github</Text>
          <Octicons
            name="code"
            color={t.grey}
            size={t.large}
            style={{ marginHorizontal: t.small }}
          />
          <Text style={{ color: t.grey }}>v1.1.1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
