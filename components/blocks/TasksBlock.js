import { useState } from "react";
import {
  View,
  TouchableOpacity,
  Button,
  Switch,
  SafeAreaView,
} from "react-native";
import { s, t } from "../../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { UpcomingTasks } from "../UpcomingTasks";
import { Text } from "../../components/typography";

export function TasksBlock() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Tasks Screen")}
      style={{ flex: 0.2 }}
    >
      <View
        style={{
          ...s.card,
          backgroundColor: colors.card,
          ...s.m_vertical,
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ ...s.row }}>
            <Text style={{ ...s.heading }}>Tasks</Text>
            <Text style={{ ...s.pill, ...s.warn, ...s.m_left_2 }}>5</Text>
          </View>
        </View>
        <UpcomingTasks />
      </View>
    </TouchableOpacity>
  );
}
