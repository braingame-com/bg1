import { AppProvider, Tab } from "./components/AppProvider";
import {
  IconPie,
  IconBook,
  IconPlay,
  IconBag,
  IconCog,
} from "./utilities/svg-icons";
import { Dashboard } from "./screens/Dashboard";
import { Lessons } from "./screens/Lessons";
import { Videos } from "./screens/Videos";
import { Shop } from "./screens/Shop";
import { Settings } from "./screens/Settings";

export default function App(tintColor) {
  return (
    <AppProvider>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "black",
            borderTopWidth: 0,
          },
          // tabBarShowLabel: false,
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#777777",
          headerShown: false,
          headerMode: "none",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "teal",
            height: 120,
          },
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: 33,
            paddingVertical: 20,
          },
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: "Dashboard",
            tabBarIcon: (focusedTab) => (
              <IconPie stroke={focusedTab ? "orange" : "blue"} />
            ),
            tabBarOptions: {
              activeTintColor: "blue",
            },
          }}
        />
        <Tab.Screen
          name="Lessons"
          component={Lessons}
          options={{
            tabBarLabel: "Lessons",
            tabBarIcon: () => <IconBook />,
          }}
        />
        {/* <Tab.Screen
          name="Videos"
          component={Videos}
          options={{
            tabBarLabel: "",
            tabBarIcon: () => <IconPlay />,
          }}
        /> */}
        {/* <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarLabel: "",
            tabBarIcon: () => <IconBag />,
          }}
        /> */}
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: () => <IconCog />,
          }}
        />
      </Tab.Navigator>
    </AppProvider>
  );
}
