import { useState } from "react";
import {
  View,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import { s, t } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { IconBG, IconCode } from "../utilities/svg-icons";
import { Octicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { Text } from "../components/typography";

export function UpcomingTasks() {
  const { colors } = useTheme();
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={{ ...s.m_top }}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => checkTask(props.index)}
      >
        <TouchableOpacity
          style={{
            width: t.large,
            height: t.large,
            borderColor: colors.border,
            borderWidth: 1,
            borderRadius: 12,
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
            borderTopWidth: 0,
          }}
        >
          Take bins out, including recycling!
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
        onPress={() => checkTask(props.index)}
      >
        <TouchableOpacity
          style={{
            width: t.large,
            height: t.large,
            borderColor: colors.border,
            borderWidth: 1,
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
            ...s.m_right,
          }}
          onPress={() => checkTask(props.index)}
        >
          <Octicons
            name="check"
            size={t.large}
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
            borderTopWidth: 0,
          }}
        >
          Do some exercise
        </Text>
      </TouchableOpacity>
    </View>
  );
}
