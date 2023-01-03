import { useState, useRef } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
  Animated,
} from "react-native";
import {
  AppProvider,
  Tab,
  navigationRef,
  Navigation,
} from "./components/AppProvider";
import {
  IconHome,
  IconSolidHome,
  IconBook,
  IconSolidBook,
  IconPlay,
  IconSolidPlay,
  IconTag,
  IconSolidTag,
  IconGear,
  IconSolidGear,
} from "./utilities/svg-icons";
import { Octicons } from "@expo/vector-icons";
import { Home } from "./screens/Home";
import { Lessons } from "./screens/Lessons";
import { Videos } from "./screens/Videos";
import { Shop } from "./screens/Shop";
import { Settings } from "./screens/Settings";
import { useTheme, useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { s, t } from "./setup/styles";
import { TabBar } from "./components/TabBar";
import { Text } from "./components/typography";
import { isMobile, platform } from "./utilities/helpers";
import { Header } from "./components/Header";

export default function App({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();
  const [scroll, setScroll] = useState(0);
  return (
    <AppProvider>
      <Tab.Navigator
        tabBar={(props) => <TabBar {...props} />}
        sceneContainerStyle={{
          paddingLeft: isMobile ? 0 : 128,
        }}
        screenOptions={{
          headerMode: "none",
          headerShadowVisible: true,
          headerStyle: {},
          headerTitleStyle: {
            fontSize: isMobile ? t.medium : t.large,
            marginLeft: isMobile ? 0 : t.small,
          },
        }}
      >
        <Tab.Screen
          name={scroll.toString()}
          children={() => <Home scroll={scroll} setScroll={setScroll} />}
          options={({ navigation }) => ({
            tabBarLabel: "Home",
            tabBarIcon: ({ fill, focused }) =>
              focused ? (
                <IconSolidHome fill={fill} />
              ) : (
                <IconHome fill={fill} />
              ),
            headerRight: () => (
              <TouchableOpacity
                style={{
                  ...s.row,
                  alignItems: "center",
                  marginRight: isMobile ? t.large : t.xl,
                }}
                onPress={() => navigation.navigate("Profile")}
                hitSlop={{
                  top: t.small,
                  bottom: t.small,
                  left: t.small,
                  right: t.small,
                }}
              >
                <Image
                  source={{
                    uri:
                      "https://cdn.shopify.com/s/files/1/0171/7947/6022/files/polish.jpg?v=1671745772",
                  }}
                  style={{
                    width: isMobile ? t.large : t.xl,
                    height: isMobile ? t.large : t.xl,
                    borderRadius: 999,
                  }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Tab.Screen
          name="Lessons "
          component={Lessons}
          options={{
            tabBarLabel: "Lessons",
            tabBarIcon: ({ fill, focused }) =>
              focused ? (
                <IconSolidBook fill={fill} />
              ) : (
                <IconBook fill={fill} />
              ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Videos"
          component={Videos}
          options={{
            tabBarLabel: "Videos",
            tabBarIcon: ({ fill, focused }) =>
              focused ? (
                <IconSolidPlay fill={fill} />
              ) : (
                <IconPlay fill={fill} />
              ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarLabel: "Shop",
            tabBarIcon: ({ fill, focused }) =>
              focused ? <IconSolidTag fill={fill} /> : <IconTag fill={fill} />,
            headerShown: false,
            // tabBarBadge: "3",
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ fill, focused }) =>
              focused ? (
                <IconSolidGear fill={fill} />
              ) : (
                <IconGear fill={fill} />
              ),
          }}
        />
      </Tab.Navigator>
    </AppProvider>
  );
}
