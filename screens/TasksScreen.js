import { useState, useEffect } from "react";
import {
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  View,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  Keyboard,
  StyleSheet,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { s, t } from "../setup/styles";
import { Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Checkbox from "expo-checkbox";
import { Text } from "../components/typography";

export function TasksScreen({ route }) {
  const { colors } = useTheme();
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const onKeyPress = (e) => {
    let key = e.nativeEvent.key;
    if (key == "Enter") {
      addTask();
    }
    console.log("You pressed a key: " + key);
  };
  const addTask = () => {
    setTasks([...tasks, task]);
    setTask(null);
    setRemaining(tasks.length + 1);
  };
  const checkTask = (index) => {
    console.log("check");
  };
  const removeTask = (index) => {
    let tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
    setRemaining(tasks.length - 1);
  };
  const showHideChecked = (index) => {
    console.log("show/hide");
  };
  const clearChecked = (index) => {
    setTasks([]);
    setRemaining(tasks.length);
    console.log("clear");
  };
  const Task = (props) => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: colors.border,
          paddingVertical: t.small,
          paddingHorizontal: 0,
          marginHorizontal: t.small,
          overflow: "hidden",
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        }}
      >
        <TouchableOpacity
          style={{
            width: 28,
            height: 28,
            borderColor: colors.border,
            borderWidth: 1,
            borderRadius: t.small,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => checkTask(props.index)}
        >
          <Octicons
            name="check"
            size={t.large}
            style={{
              ...s.success_text,
              // opacity: props.isChecked === "true" ? 1 : 0,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: colors.text,
            ...s.subtitle,
            marginVertical: 0,
            flex: 1,
            marginHorizontal: t.large,
          }}
        >
          {props.text}
        </Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "flex-end",
            opacity: 0.5,
            position: "relative",
            marginVertical: t.small,
          }}
          onPress={() => removeTask(props.index)}
        >
          <Octicons
            name="x"
            size={t.large}
            style={{ color: colors.text, opacity: 0.5 }}
          />
        </TouchableOpacity>
        {/* <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
        /> */}
        {/* <TouchableOpacity
          style={{
            marginLeft: t.large,
            height: t.large,
            width: t.large,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => removeTask(props.index)}
        >
          <Octicons
            name="x-circle"
            size={t.large}
            style={{ ...s.error_text, opacity: 0.33 }}
          />
        </TouchableOpacity> */}
      </View>
    );
  };
  return (
    <View
      style={{
        paddingHorizontal: t.large,
        paddingVertical: t.small,
        paddingBottom: 140,
      }}
    >
      <View
        style={{
          paddingHorizontal: t.small,
          paddingVertical: t.large,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: t.small,
            padding: t.large,
            borderColor: colors.border,
            borderWidth: 1,
          }}
          onPress={() => showHideChecked()}
        >
          <Octicons name="eye-closed" size={t.large} color={t.grey} />
          {/* <Octicons name="eye" size={t.large} color={t.grey} /> */}
          {/* <Text style={{ color: t.grey, marginLeft: t.small }}>Hide/Show</Text> */}
        </TouchableOpacity>
        <View style={{ flex: 2, marginHorizontal: t.small }}>
          <Text
            style={{
              ...s.pill,
              ...s.heading_secondary,
              ...s.info,
              alignSelf: "center",
              // justifyContent: "center",
              // textAlign: "center",
            }}
          >
            0 / {remaining}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: t.small,
            padding: t.large,
            borderColor: colors.border,
            borderWidth: 1,
          }}
          onPress={() => clearChecked()}
        >
          {/* <Text style={{ color: t.grey, marginRight: t.small }}>Clear</Text> */}
          <Octicons name="x" size={t.large} color={t.grey} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          // shadowColor: "#fff",
          // shadowOffset: { width: 0, height: 0 },
          // shadowOpacity: 1,
          // shadowRadius: t.small,
          zIndex: 999,
          overflow: "hidden",
        }}
      >
        <TextInput
          placeholder="Add a new task"
          style={{
            backgroundColor: colors.card,
            paddingVertical: t.large,
            paddingLeft: 60,
            paddingRight: t.large,
            borderRadius: t.small,
            borderWidth: 0,
            margin: t.small,
            flex: 1,
            color: "white",
            ...s.heading_secondary,
          }}
          onSubmitEditing={() => addTask()}
          onChangeText={(text) => setTask(text)}
          onKeyPress={(e) => {
            onKeyPress(e);
          }}
          value={task}
        />
        <TouchableOpacity
          onPress={() => addTask()}
          style={{
            width: 45,
            height: 45,
            margin: t.small,
            position: "absolute",
            left: t.small,
            // backgroundColor: "rgba(0,0,0,.5)",
            borderWidth: 0,
            borderRadius: t.small,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Octicons name="pencil" size={t.large} color={t.grey} />
        </TouchableOpacity>
      </View>
      {/* <LinearGradient
        // Button Linear Gradient
        colors={[colors.background, colors.background, "rgba(0,0,0,0)"]}
        style={{
          height: 40,
          marginTop: -t.small,
          marginbottom: -40,
          width: "100%",
          zIndex: 100,
        }}
      ></LinearGradient> */}
      <View
        style={{
          marginTop: t.large,
          marginHorizontal: t.small,
          borderColor: colors.border,
          borderTopWidth: 1,
        }}
      ></View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            color: "#777",
            opacity: 0.5,
            textAlign: "center",
            padding: 30,
            display: tasks.length === 0 ? "flex" : "none",
          }}
        >
          Your task list is empty
        </Text>
        {tasks.map((text, index) => {
          let hIndex = index + 1;
          let isChecked = "false";
          return (
            <Task
              number={hIndex}
              index={index}
              key={index}
              text={text}
              isChecked={isChecked}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
