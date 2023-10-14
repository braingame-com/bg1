import React, {
  SyntheticEvent,
  useState,
  createContext,
  useContext,
  useRef,
} from 'react';
import {
  NativeSyntheticEvent,
  NativeScrollEvent,
  useColorScheme,
  Animated,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { lightTheme, darkTheme, t } from '../setup/styles';

const ThemeContext = React.createContext(darkTheme);
const ThemeUpdateContext = React.createContext(darkTheme);
export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

// export interface ScrollContextInterface = {
//   opacity: number,
//   oppositeOpacity: number,
// }

export const ScrollContext = createContext({
  scroll: new Animated.Value(0),
  opacity: 1,
  oppositeOpacity: 0,
  onScroll: () => {},
});

export const Tab = createBottomTabNavigator();
export const navigationRef = React.createRef();
export function Navigation() {
  return useNavigation();
}

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const scroll = useRef(new Animated.Value(0)).current;
  const opacity = scroll.interpolate({
    inputRange: [t.medium, t.xl],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const oppositeOpacity = scroll.interpolate({
    inputRange: [t.medium, t.xl],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const onScroll = (
    e: SyntheticEvent | NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    if ('nativeEvent' in e && 'contentOffset' in e.nativeEvent) {
      scroll.setValue(e.nativeEvent.contentOffset.y);
      console.log(e.nativeEvent.contentOffset.y);
    }
  };
  const auto = useColorScheme() === 'dark' ? true : false;
  const [isEnabled, setIsEnabled] = useState(auto);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const theme = isEnabled === true ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={isEnabled}>
      <ThemeUpdateContext.Provider value={toggleSwitch}>
        <ScrollContext.Provider
          value={{
            scroll,
            opacity,
            oppositeOpacity,
            onScroll,
          }}
        >
          <NavigationContainer ref={navigationRef} theme={theme}>
            {children}
          </NavigationContainer>
        </ScrollContext.Provider>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
