import { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
} from "react-native";
import {
  AppProvider,
  Tab,
  navigationRef,
  Navigation,
} from "./components/AppProvider";
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
import { Library } from "./screens/Library";
// import { Videos } from "./screens/Videos";
import { Search } from "./screens/Search";
import { Shop } from "./screens/Shop";
import { Settings } from "./screens/Settings";
import { useTheme, useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { styles as s } from "./setup/styles";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();
  console.log(Navigation);
  return (
    <AppProvider>
      <Tab.Navigator
        screenOptions={{
          //   tabBarBackground: () => (
          //     <BlurView
          //       tint="dark"
          //       intensity={50}
          //       style={{
          //         ...StyleSheet.absoluteFill,
          //         overflow: "hidden",
          //       }}
          //     />
          //   )
          tabBarStyle: {
            // position: "absolute",
            // left: 0,
            // right: 0,
            // bottom: 0,
            backgroundColor: "black",
            // height: 100,
            justifyContent: "center",
            alignItems: "center",
            // borderRadius: 30,
            overflow: "hidden",
            borderTopWidth: 1,
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
          // headerShown: false,
          headerMode: "none",
          headerShadowVisible: true,
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitleStyle: {},
        }}
      >
        <Tab.Screen
          name=" "
          component={Dashboard}
          options={{
            tabBarLabel: "Dashboard",
            tabBarIcon: ({ focused }) => (
              <IconBG fill={focused ? "white" : "#777777"} />
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{
                  ...s.row,
                  alignItems: "center",
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
                onPress={() => navigationRef.current?.navigate("Notifications")}
              >
                <Octicons name="bell" size={20} style={{ color: "#777777" }} />
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={Library}
          options={{
            tabBarLabel: "Library",
            tabBarIcon: ({ focused }) => (
              <Octicons
                name="book"
                color={focused ? "white" : "#777777"}
                size={20}
              />
            ),
            // headerRight: () => (
            //   <TouchableOpacity
            //     style={{
            //       ...s.row,
            //       ...s.back_btn,
            //       alignItems: "center",
            //       padding: 10,
            //     }}
            //     onPress={() => navigation.navigate("Search Library")}
            //   >
            //     <Octicons
            //       name="search"
            //       size={20}
            //       style={{ color: "#777777" }}
            //     />
            //   </TouchableOpacity>
            // ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ focused }) => (
              <Octicons
                name="search"
                color={focused ? "white" : "#777777"}
                size={20}
              />
            ),
            // headerRight: () => (
            //   <TouchableOpacity
            //     style={{
            //       ...s.row,
            //       ...s.back_btn,
            //       alignItems: "center",
            //       padding: 10,
            //     }}
            //     onPress={() => navigation.navigate("Search Videos")}
            //   >
            //     <Octicons
            //       name="search"
            //       size={20}
            //       style={{ color: "#777777" }}
            //     />
            //   </TouchableOpacity>
            // ),
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
            headerRight: () => (
              <TouchableOpacity
                style={{
                  ...s.row,
                  alignItems: "center",
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
                onPress={() => navigationRef.getParent().toggleDrawer()}
              >
                <Text style={{ ...s.m_right, color: "#777777" }}>£0.00</Text>
                <Octicons
                  name="sidebar-expand"
                  size={20}
                  style={{ color: "#777777" }}
                />
              </TouchableOpacity>
            ),
            // tabBarBadge: "3",
          }}
        />
        <Tab.Screen
          name="  "
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
            headerRight: () => (
              <TouchableOpacity
                style={{
                  ...s.row,
                  alignItems: "center",
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
                onPress={() => setModalVisible(true)}
              >
                <Text style={{ ...s.m_right, ...s.info_text }}>Log in</Text>
                <Octicons name="sign-in" size={20} style={{ ...s.info_text }} />
              </TouchableOpacity>
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="light" />
    </AppProvider>
  );
}
