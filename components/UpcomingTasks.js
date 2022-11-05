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
    <View style={{ display: "none" }}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => checkTask(props.index)}
      >
        <TouchableOpacity
          style={{
            width: 20,
            height: 20,
            borderColor: colors.border,
            borderWidth: 1,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            ...s.m_right,
          }}
          onPress={() => checkTask(props.index)}
        >
          <Octicons
            name="check"
            size={15}
            style={{
              ...s.success_text,
              opacity: 1,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            ...s.task_mini,
            color: colors.text,
          }}
        >
          Take bins out
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => checkTask(props.index)}
      >
        <TouchableOpacity
          style={{
            width: 20,
            height: 20,
            borderColor: colors.border,
            borderWidth: 1,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            ...s.m_right,
          }}
          onPress={() => checkTask(props.index)}
        >
          <Octicons
            name="check"
            size={20}
            style={{
              ...s.success_text,
              opacity: 0,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            ...s.task_mini,
            color: colors.text,
          }}
        >
          Do some exercise
        </Text>
      </TouchableOpacity>
    </View>
  );
}
