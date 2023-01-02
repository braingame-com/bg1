import React, { useState, createContext, useContext } from "react";
import { useColorScheme, Appearance } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { lightTheme, darkTheme } from "../setup/styles";

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

export function AppProvider({ children }) {
  // const navigation = useNavigation();
  const auto = useColorScheme() === "dark" ? true : false,
    [isEnabled, setIsEnabled] = useState(auto),
    toggleSwitch = () => setIsEnabled((previousState) => !previousState),
    theme = isEnabled === true ? darkTheme : lightTheme;
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
