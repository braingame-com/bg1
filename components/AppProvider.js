import React, { useState, createContext, useContext } from "react";
import { useColorScheme, Appearance } from "react-native";
import {
  DefaultTheme,
  DarkTheme,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();
export const Tab = createBottomTabNavigator();
export const navigationRef = React.createRef();

export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function Navigation() {
  return useNavigation();
}

const BGLightTheme = {
  dark: false,
  colors: {
    primary: "#49A6E9",
    background: "white",
    card: "rgb(247, 249, 249)",
    text: "rgb(15, 20, 25)",
    border: "rgb(239, 243, 244)",
    notification: "#E4616B",
  },
};

const BGDarkTheme = {
  dark: true,
  colors: {
    primary: "#49A6E9",
    background: "black",
    card: "rgb(22, 24, 28)",
    text: "rgb(231, 233, 234)",
    border: "rgb(47, 51, 54)",
    notification: "#E4616B",
  },
};

export function AppProvider({ children }) {
  // const navigation = useNavigation();
  const auto = useColorScheme() === "dark" ? true : false,
    [isEnabled, setIsEnabled] = useState(auto),
    toggleSwitch = () => setIsEnabled((previousState) => !previousState),
    theme = isEnabled === true ? BGDarkTheme : BGLightTheme;
  return (
    <ThemeContext.Provider value={isEnabled}>
      <ThemeUpdateContext.Provider value={toggleSwitch}>
        <NavigationContainer ref={navigationRef} theme={theme}>
          {children}
        </NavigationContainer>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
