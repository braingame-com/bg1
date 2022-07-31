import React, { useState, useEffect, createContext, useContext } from "react";
import {
  Image,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  useColorScheme,
  Appearance,
  Switch,
} from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import {
  IconBrainGame,
  IconCode,
  IconPie,
  IconBookOpen,
  IconShoppingBag,
  IconCog,
  IconArrowRightSmall,
} from "./utilities/svg-icons";
import { Dashboard } from "./screens/Dashboard";
import { Lessons } from "./screens/Lessons";
import { Shop } from "./screens/Shop";
import { Settings } from "./screens/Settings";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();
export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export default function App() {
  let auto = useColorScheme() === "dark" ? true : false;
  const [isEnabled, setIsEnabled] = useState(auto);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  console.log("isEnabled", isEnabled);
  let yeahMan = "Sup bro";
  return (
    <ThemeContext.Provider value={isEnabled}>
      <ThemeUpdateContext.Provider value={toggleSwitch}>
        <TailwindProvider>
          <View className="m-10">
            <Text
              className="mt-20 flex"
              style={{
                marginTop: 10,
                padding: 10,
                backgroundColor: "rgba(128,128,128,.2)",
                color: "grey",
                fontSize: 20,
              }}
            >
              isEnabled is [{yeahMan}]
            </Text>
            <Switch
              className="m-5"
              value={isEnabled}
              onValueChange={toggleSwitch}
              onChange={console.log(isEnabled)}
            />
          </View>
          <NavigationContainer
            theme={isEnabled === true ? DarkTheme : DefaultTheme}
          >
            {/* <Stack.Navigator>
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="Lessons" component={Lessons} />
              </Stack.Navigator> */}
            <Tab.Navigator>
              <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                  tabBarLabel: "",
                  tabBarIcon: () => <IconPie />,
                }}
              />
              <Tab.Screen
                name="Lessons"
                component={Lessons}
                options={{
                  tabBarLabel: "",
                  tabBarIcon: () => <IconBookOpen />,
                }}
              />
              <Tab.Screen
                name="Shop"
                component={Shop}
                options={{
                  tabBarLabel: "Shop",
                  tabBarIcon: () => <IconShoppingBag />,
                  /* tabBarBadge: 3, */
                }}
              />
              <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                  tabBarLabel: "settings",
                  tabBarIcon: () => <IconCog />,
                  activeTintColor: "rgb(255, 0, 0)",
                  inactiveTintColor: "rgb(0, 255, 0)",
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </TailwindProvider>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
