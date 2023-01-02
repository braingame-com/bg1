import {
  Text,
  View,
  TouchableOpacity,
  Button,
  Switch,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import { s } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";

export function Support() {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...s.container,
        ...s.m_horizontal,
        marginTop: -10,
      }}
    >
      <Text style={{ ...s.heading, color: colors.text }}>Support</Text>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 5,
          }}
        >
          <Octicons
            name="question"
            size={20}
            style={{ color: "#777777", ...s.m_right, opacity: 0.5 }}
          />
          <Text style={{ ...s.task_mini, color: "#777777" }}>
            How do I use this app?
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
            name="comment"
            size={20}
            style={{ color: "#777777", ...s.m_right, opacity: 0.5 }}
          />
          <Text style={{ ...s.task_mini, color: "#777777" }}>Contact us</Text>
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
            name="file"
            size={20}
            style={{
              color: "#777777",
              ...s.m_right,
              opacity: 0.5,
              width: 20,
            }}
          />
          <Text style={{ ...s.task_mini, color: "#777777" }}>
            Documentation
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
