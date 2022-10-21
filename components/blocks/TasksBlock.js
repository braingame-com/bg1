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
import Checkbox from "expo-checkbox";

export function TasksBlock({ navigation }) {
  const { colors } = useTheme();
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={{ ...s.rounded, backgroundColor: colors.card }}>
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
          <Text style={{ ...s.pill, ...s.warn, ...s.m_left }}>0 / 3</Text>
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
        <TouchableOpacity onPress={() => console.log("go to tasks")}>
          <Octicons name="chevron-right" size={20} color="#777777" />
        </TouchableOpacity>
        {/* </View> */}
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* <Checkbox
          style={s.checkbox}
          color="#777777"
          value={isChecked}
          onValueChange={setChecked}
        /> */}
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
        {/* <Checkbox
          style={s.checkbox}
          color="#777777"
          value={isChecked}
          onValueChange={setChecked}
        /> */}
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
      {/* <View
        style={{
          marginVertical: 5,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Checkbox
          style={s.checkbox}
          color="#777777"
          value={isChecked}
          onValueChange={setChecked}
        />
        <Text
          style={{
            ...s.task_mini,
            ...s.m_left,
            color: "#777777",
          }}
        >
          Birth new tubs
        </Text>
      </View> */}
      {/* <View
        style={{
          marginVertical: 5,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Checkbox
          style={s.checkbox}
          color="#777777"
          value={isChecked}
          onValueChange={setChecked}
        />
        <Text
          style={{
            ...s.task_mini,
            ...s.m_left,
            color: "#777777",
          }}
        >
          Have a workout
        </Text>
      </View> */}
    </View>
  );
}
