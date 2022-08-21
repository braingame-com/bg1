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

export default function App() {
  return (
    <AppProvider>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "black",
            // height: 100,
            borderTopWidth: 0,
          },
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "black",
            // height: 100,
          },
          // headerTintColor: "#777777",
          headerTitleStyle: {
            // color: "white",
            // fontWeight: "normal",
            // fontSize: 20,
          },
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: "",
            tabBarIcon: () => <IconPie />,
          }}
        />
        <Tab.Screen
          name="Lessons"
          component={Lessons}
          options={{
            tabBarLabel: "",
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
            tabBarLabel: "",
            tabBarIcon: () => <IconCog />,
            activeTintColor: "rgb(255, 0, 0)",
            inactiveTintColor: "rgb(0, 255, 0)",
          }}
        />
      </Tab.Navigator>
    </AppProvider>
  );
}
