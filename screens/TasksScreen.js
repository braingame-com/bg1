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
  const [isChecked, setChecked] = useState(false);

  const onKeyPress = (e) => {
    let key = e.key;
    console.log("You pressed a key: " + key);
  };
  const addTask = () => {
    // Keyboard.dismiss();
    setTasks([...tasks, task]);
    setTask(null);
    setRemaining(tasks.length + 1);
  };
  const checkTask = (index) => {
    // let tasksCopy = [...tasks];
    // tasksCopy.splice(index, 1);
    // setTasks(tasksCopy);
    // setRemaining(tasks.length - 1);
    console.log("check");
  };
  const removeTask = (index) => {
    let tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
    setRemaining(tasks.length - 1);
  };

  const Task = (props) => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: colors.border,
          paddingVertical: 10,
          paddingHorizontal: 20,
          marginHorizontal: 10,
          overflow: "hidden",
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        }}
      >
        <TouchableOpacity
          style={{
            borderColor: "rgba(127.5, 127.5, 127.5, .2)",
            borderWidth: 1,
            height: 40,
            width: 40,
            borderRadius: 999,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: colors.text,
              ...s.heading,
              marginVertical: 0,
              color: "#777777",
            }}
          >
            {props.number}
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: colors.text,
            ...s.heading_secondary,
            marginVertical: 0,
            flex: 1,
            marginHorizontal: 20,
          }}
        >
          {props.text}
        </Text>
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            backgroundColor: "rgba(127.5, 127.5, 127.5, 0.2)",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          // onPress={() => checkTask(props.index)}
          onPress={() => removeTask(props.index)}
        >
          <Octicons name="check" size={20} style={{ ...s.success_text }} />
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
        padding: 10,
        paddingBottom: 140,
      }}
    >
      {/* <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            ...s.pill,
            ...s.warn,
            ...s.m_horizontal,
            alignSelf: "auto",
          }}
        >
          0 / {remaining}
        </Text>
      </View> */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Add a new task"
          style={{
            backgroundColor: colors.card,
            paddingVertical: 20,
            paddingLeft: 20,
            paddingRight: 80,
            borderRadius: 10,
            margin: 10,
            flex: 1,
            color: "white",
            ...s.heading_secondary,
          }}
          onChangeText={(text) => setTask(text)}
          onKeyPress={(e) => {
            onKeyPress(e);
          }}
          value={task}
        />
        <TouchableOpacity
          onPress={() => addTask()}
          style={{
            position: "absolute",
            right: 10,
            backgroundColor: "rgba(127.5, 127.5, 127.5, 0.11)",
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            padding: 20,
          }}
        >
          <Octicons name="diff-added" size={20} color="#777777" />
        </TouchableOpacity>
      </View>
      <LinearGradient
        // Button Linear Gradient
        colors={[colors.background, colors.background, "rgba(0,0,0,0)"]}
        style={{
          height: 40,
          marginTop: -10,
          marginbottom: -40,
          width: "100%",
          zIndex: 100,
        }}
      ></LinearGradient>
      <ScrollView style={{ paddingTop: 30, marginTop: -40 }}>
        {tasks.map((text, index) => {
          let hIndex = index + 1;
          return <Task number={hIndex} index={index} key={index} text={text} />;
        })}
      </ScrollView>
    </View>
  );
}
