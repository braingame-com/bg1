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
        <Text
          style={{
            ...s.task_mini,
            color: colors.text,
          }}
        >
          • Take bins out
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            ...s.task_mini,
            color: colors.text,
          }}
        >
          • Do some exercise
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            ...s.task_mini,
            color: colors.text,
          }}
        >
          • Read a book
        </Text>
      </View>
    </View>
  );
}
