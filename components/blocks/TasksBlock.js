import { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  Switch,
  SafeAreaView,
} from "react-native";
import { styles as s } from "../../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { UpcomingTasks } from "../UpcomingTasks";

export function TasksBlock() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Tasks Screen")}>
      <View
        style={{
          ...s.rounded,
          backgroundColor: "transparent",
          borderColor: colors.border,
          borderWidth: 1,
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
            <Text
              style={{
                ...s.heading,
                color: colors.text,
              }}
            >
              Tasks
            </Text>
            <Text style={{ ...s.pill, ...s.warn, ...s.m_left_2 }}>0 / 3</Text>
            {/* <Text style={{ ...s.pill, ...s.success, ...s.m_left }}>
            Done &nbsp;
            <Octicons name="check" size={15} />
          </Text> */}
          </View>
          {/* <View style={{ ...s.row }}> */}
          {/* <Octicons
            name="plus"
            size={20}
            color="#777777"
            style={{ ...s.m_right_2 }}
          /> */}
          <View style={s.block_btn}>
            <Octicons name="chevron-right" size={20} color="#777777" />
          </View>
          {/* </View> */}
        </View>
        <UpcomingTasks />
      </View>
    </TouchableOpacity>
  );
}
