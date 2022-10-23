import { useState, useEffect } from "react";
import {
  Text,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  View,
  ScrollView,
  FlatList,
  useWindowDimensions,
  KeyboardAvoidingView,
  SafeAreaView,
  Keyboard,
  StyleSheet,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles as s } from "../setup/styles";
import {
  GRAPHQL_URL,
  STOREFRONT_ACCESS_TOKEN,
  GRAPHQL_BODY,
} from "../setup/shopify-sapi";
import { Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Checkbox from "expo-checkbox";

export function TestScreen() {
  // return "Remaining = [" + remaining + "]";
}

export function TasksScreen({ route }) {
  const { colors } = useTheme();
  // const {
  //   itemId,
  //   itemTitle,
  //   itemImage,
  //   itemExcerpt,
  //   itemContent,
  // } = route.params;

  const { width } = useWindowDimensions(),
    dark = true,
    fontColorPrimary = dark ? "white" : "black",
    fontColorSecondary = dark ? "whitesmoke" : "darkslategrey";
  // const fontColorPrimary = s.fontColorPrimary;
  // const source = {
  //   html: `<div style="color: ${colors.text}">${itemContent}</div>`,
  // };

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
    // let tasksCopy = [...tasks];
    // tasksCopy.splice(index, 1);
    // setTasks(tasksCopy);
    // setRemaining(tasks.length - 1);
    // this.props.isChecked = "true";
    console.log("check");
  };
  const removeTask = (index) => {
    let tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
    setRemaining(tasks.length - 1);
  };
  const showHideChecked = (index) => {
    // let tasksCopy = [...tasks];
    // tasksCopy.splice(index, 1);
    // setTasks(tasksCopy);
    // setRemaining(tasks.length - 1);
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
          paddingVertical: 10,
          paddingHorizontal: 0,
          marginHorizontal: 10,
          overflow: "hidden",
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        }}
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
          }}
          onPress={() => checkTask(props.index)}
        >
          <Octicons
            name="check"
            size={20}
            style={{
              ...s.success_text,
              opacity: props.isChecked === "true" ? 1 : 0,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: colors.text,
            ...s.subtitle,
            marginVertical: 0,
            flex: 1,
            marginHorizontal: 20,
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
            marginVertical: 10,
          }}
          onPress={() => removeTask(props.index)}
        >
          <Octicons
            name="x"
            size={20}
            style={{ ...s.error_text, opacity: 0.5 }}
          />
        </TouchableOpacity>
        {/* <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
        /> */}
        {/* <TouchableOpacity
          style={{
            marginLeft: 20,
            height: 20,
            width: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => removeTask(props.index)}
        >
          <Octicons
            name="x-circle"
            size={20}
            style={{ ...s.error_text, opacity: 0.33 }}
          />
        </TouchableOpacity> */}
      </View>
    );
  };
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        paddingBottom: 140,
      }}
    >
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 20,
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
            borderRadius: 10,
            padding: 20,
            borderColor: colors.border,
            borderWidth: 1,
          }}
          onPress={() => showHideChecked()}
        >
          <Octicons name="eye-closed" size={20} color="#777777" />
          {/* <Octicons name="eye" size={20} color="#777777" /> */}
          {/* <Text style={{ color: "#777777", marginLeft: 10 }}>Hide/Show</Text> */}
        </TouchableOpacity>
        <View style={{ flex: 2, marginHorizontal: 20 }}>
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
            borderRadius: 10,
            padding: 20,
            borderColor: colors.border,
            borderWidth: 1,
          }}
          onPress={() => clearChecked()}
        >
          {/* <Text style={{ color: "#777777", marginRight: 10 }}>Clear</Text> */}
          <Octicons name="trash" size={20} color="#777777" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          // shadowColor: "#fff",
          // shadowOffset: { width: 0, height: 0 },
          // shadowOpacity: 1,
          // shadowRadius: 10,
          zIndex: 999,
          overflow: "hidden",
        }}
      >
        <TextInput
          placeholder="Add a new task"
          style={{
            backgroundColor: colors.card,
            paddingVertical: 20,
            paddingLeft: 60,
            paddingRight: 20,
            borderRadius: 10,
            borderWidth: 0,
            margin: 10,
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
            margin: 10,
            position: "absolute",
            left: 10,
            // backgroundColor: "rgba(0,0,0,.5)",
            borderWidth: 0,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Octicons name="pencil" size={20} color="#777777" />
        </TouchableOpacity>
      </View>
      {/* <LinearGradient
        // Button Linear Gradient
        colors={[colors.background, colors.background, "rgba(0,0,0,0)"]}
        style={{
          height: 40,
          marginTop: -10,
          marginbottom: -40,
          width: "100%",
          zIndex: 100,
        }}
      ></LinearGradient> */}
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 10,
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
