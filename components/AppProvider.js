import React, { useState, createContext, useContext } from "react";
import { useColorScheme, Appearance } from "react-native";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();
export const Tab = createBottomTabNavigator();

export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function AppProvider({ children }) {
  const auto = useColorScheme() === "dark" ? true : false,
    [isEnabled, setIsEnabled] = useState(auto),
    toggleSwitch = () => setIsEnabled((previousState) => !previousState),
    theme = isEnabled === true ? DarkTheme : DefaultTheme;
  return (
    <ThemeContext.Provider value={isEnabled}>
      <ThemeUpdateContext.Provider value={toggleSwitch}>
        <NavigationContainer theme={theme}>{children}</NavigationContainer>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
