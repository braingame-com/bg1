import { useState, useContext } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Switch,
  useColorScheme,
} from "react-native";
import { IconBrainGame, IconCode } from "../utilities/svg-icons";
import { ThemeContext, useTheme, useThemeUpdate } from "../App";

export function Settings({ route }) {
  let auto = useColorScheme() === "dark" ? true : false;
  const [isEnabled, setIsEnabled] = useState(darkTheme);
  const toggleSwitch = useThemeUpdate();
  let darkTheme = useTheme();

  console.log(darkTheme);

  const setDarkTheme = () => {
    setIsEnabled(false);
  };
  const setLightTheme = () => {
    setIsEnabled(true);
  };
  const setAutoTheme = () => {
    setIsEnabled(auto);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View className="pt-4 my-10 items-center">
        <Text
          className={darkTheme === true ? "text-white pb-4" : "text-black pb-4"}
        >
          Dark Mode
        </Text>
        <Switch value={darkTheme} onValueChange={toggleSwitch} />
      </View>
      <View className="flex-row">
        <TouchableOpacity
          style={{
            backgroundColor: "dodgerblue",
            margin: 10,
            padding: 10,
            color: "white",
          }}
          className="bg-slate-300 py-2 px-4 mt-4 rounded-full"
          onPress={() => {
            setDarkTheme();
            console.log(darkTheme);
          }}
        >
          <Text classname="text-xl">Light</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "dodgerblue",
            margin: 10,
            padding: 10,
            color: "white",
          }}
          className="bg-slate-300 py-2 px-4 mt-4 rounded-full"
          onPress={() => {
            setLightTheme();
            console.log(darkTheme);
          }}
        >
          <Text classname="text-xl">Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "dodgerblue",
            margin: 10,
            padding: 10,
            color: "white",
          }}
          className="bg-slate-300 py-2 px-4 mt-4 rounded-full"
          onPress={() => {
            setAutoTheme();
            console.log(darkTheme);
          }}
        >
          <Text classname="text-xl">Auto</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          margin: 10,
          padding: 10,
          color: "white",
        }}
        className="bg-slate-300 py-2 px-4 mt-4 rounded-full"
        onPress={(theme) => {
          console.log(darkTheme);
        }}
      >
        <Text classname="text-xl">Console log!</Text>
      </TouchableOpacity>
      <View className="flex-row mt-20">
        <IconBrainGame fill={"rgb(107, 114, 128)"} />
        <View className="flex-row ml-2">
          <IconCode fill={"rgb(107, 114, 128)"} />
          <Text className="text-sm font-semibold text-gray-500 ml-2">
            v1.1.1
          </Text>
        </View>
      </View>
    </View>
  );
}
