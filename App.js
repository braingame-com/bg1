import { useState, useRef } from "react";
import {
  Text,
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
  IconBG,
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

const screenWidth = Dimensions.get("window").width;
const isMobile = screenWidth < 769 ? true : false;

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ ...s.tabBar }}>
      {!isMobile && (
        <View
          style={{
            paddingLeft: 40,
            height: 64,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <IconBG
            fill="white"
            onClick={() => {
              navigation.navigate("Home");
            }}
          />
        </View>
      )}

      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const icon = options.tabBarIcon({
          fill: isFocused ? "#49A6E9" : "#777777",
          focused: isFocused ? true : false,
        });

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              ...s.tabBarItem,
              flex: 1,
              background: isFocused ? "rgba(73, 166, 233, .2)" : "transparent",
              borderRadius: 20,
              marginHorizontal: isMobile ? 0 : 20,
              marginTop: (label === "Settings") & !isMobile ? "auto" : 0,
              marginBottom: (label === "Settings") & !isMobile ? 20 : 0,
            }}
            key={index}
          >
            <View
              style={{
                ...s.tabBarIconWrapper,
                width: label === "Lessons" ? 24 : 20,
              }}
            >
              {icon}
            </View>
            <Text
              style={{
                ...s.tabBarLabel,
                color: isFocused ? "#49A6E9" : "#777777",
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();
  return (
    <AppProvider>
      <Tab.Navigator
        tabBar={(props) => <TabBar {...props} />}
        sceneContainerStyle={{ marginLeft: isMobile ? 0 : 256 }}
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
            width: isMobile ? "100%" : 256,
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
          headerTitleStyle: {},
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
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
          name="Lessons"
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
