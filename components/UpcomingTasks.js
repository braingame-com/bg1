import { useState } from "react";
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
import { IconBG, IconCode } from "../utilities/svg-icons";
import { Octicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

export function UpcomingTasks() {
  const { colors } = useTheme();
  const [isChecked, setChecked] = useState(false);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Checkbox
          style={{ ...s.checkbox, display: "none" }}
          color="#777777"
          value={isChecked}
          onValueChange={setChecked}
        />
        <Text
          style={{
            ...s.task_mini,
            color: "#777777",
          }}
        >
          First:
        </Text>
        <Text
          style={{
            ...s.task_mini,
            ...s.m_left,
            color: colors.text,
          }}
        >
          Take bins out
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Checkbox
          style={{ ...s.checkbox, display: "none" }}
          color="#777777"
          value={isChecked}
          onValueChange={setChecked}
        />
        <Text
          style={{
            ...s.task_mini,
            color: "#777777",
          }}
        >
          Then:
        </Text>
        <Text
          style={{
            ...s.task_mini,
            ...s.m_left,
            color: colors.text,
          }}
        >
          Do some exercise
        </Text>
      </View>
    </View>
  );
}
