import { useState, useRef } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import {
  AppProvider,
  Tab,
  navigationRef,
  Navigation,
} from "./components/AppProvider";
import { StatusBar } from "expo-status-bar";
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
import { styles as s } from "./setup/styles";
import { TabBar } from "./components/TabBar";

const screenWidth = Dimensions.get("window").width;
const isMobile = screenWidth < 769 ? true : false;

export default function App({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();
  return (
    <AppProvider>
      <Tab.Navigator
        tabBar={(props) => <TabBar {...props} />}
        sceneContainerStyle={{ marginLeft: isMobile ? 0 : 128 }}
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#777777",
          tabBarLabelPosition: isMobile ? "below-icon" : "beside-icon",
          tabBarLabelStyle: {
            fontSize: isMobile ? 10 : 20,
          },
          tabBarStyle: {
            position: isMobile ? "relative" : "absolute",
            height: isMobile ? 79 : "100vh",
            width: isMobile ? "100%" : 128,
            backgroundColor: "black",
            overflow: "hidden",
            borderColor: "rgb(39, 39, 41)",
            padding: 0,
            margin: 0,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          },
          headerMode: "none",
          headerShadowVisible: true,
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitleStyle: {
            marginLeft: isMobile ? 0 : 10,
          },
          // headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home "
          component={Home}
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
                  marginRight: isMobile ? 20 : 30,
                }}
                onPress={() => navigation.navigate("Profile")}
              >
                <Image
                  source={{
                    uri:
                      "https://cdn.shopify.com/s/files/1/0171/7947/6022/files/polish.jpg?v=1671745772",
                  }}
                  style={{
                    width: isMobile ? 28 : 38,
                    height: isMobile ? 28 : 38,
                    borderColor: colors.border,
                    borderWidth: 1,
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
      <StatusBar style="light" />
    </AppProvider>
  );
}
