import { StyleSheet } from "react-native";
import { AppProvider, Tab } from "./components/AppProvider";
import { StatusBar } from "expo-status-bar";
import {
  IconBG,
  IconPie,
  IconBook,
  IconPlay,
  IconBag,
  IconCog,
} from "./utilities/svg-icons";
import { Octicons } from "@expo/vector-icons";
import { Dashboard } from "./screens/Dashboard";
import { Lessons } from "./screens/Lessons";
import { Videos } from "./screens/Videos";
import { Shop } from "./screens/Shop";
import { Settings } from "./screens/Settings";
import { useTheme } from "@react-navigation/native";
import { BlurView } from "expo-blur";

export default function App() {
  const { colors } = useTheme();
  return (
    <AppProvider>
      <Tab.Navigator
        screenOptions={{
          // tabBarBackground: () => (
          //   <BlurView
          //     tint="dark"
          //     intensity={50}
          //     style={{
          //       ...StyleSheet.absoluteFill,
          //       borderRadius: 20,
          //       overflow: "hidden",
          //     }}
          //   />
          // ),
          tabBarStyle: {
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgb(18, 18, 18)",
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30,
            overflow: "hidden",
            borderTopWidth: 0,
            // borderColor: "green",
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
          tabBarShowLabel: false,
          headerShown: false,
          headerMode: "none",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "teal",
          },
          headerTitleStyle: {},
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: "Dashboard",
            tabBarIcon: ({ focused }) => (
              <IconBG fill={focused ? "white" : "#777777"} />
            ),
            tabBarOptions: {},
          }}
        />
        <Tab.Screen
          name="Lessons"
          component={Lessons}
          options={{
            tabBarLabel: "Lessons",
            tabBarIcon: ({ focused }) => (
              <Octicons
                name="book"
                color={focused ? "white" : "#777777"}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Videos"
          component={Videos}
          options={{
            tabBarLabel: "Videos",
            tabBarIcon: ({ focused }) => (
              <Octicons
                name="play"
                color={focused ? "white" : "#777777"}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarLabel: "Shop",
            tabBarIcon: ({ focused }) => (
              <Octicons
                name="tag"
                color={focused ? "white" : "#777777"}
                size={20}
              />
            ),
            // tabBarBadge: "3",
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ focused }) => (
              <Octicons
                name="gear"
                color={focused ? "white" : "#777777"}
                size={20}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="light" />
    </AppProvider>
  );
}
