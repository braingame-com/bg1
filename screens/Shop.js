import { Text, View, SafeAreaView, Dimensions } from "react-native";
import { styles as s } from "../setup/styles";
import { Octicons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContent,
  useDrawerStatus,
} from "@react-navigation/drawer";
import { Products } from "../screens/Products";
import { Checkout } from "../screens/Checkout";

const screenWidth = Dimensions.get("window").width;
const isMobile = screenWidth < 769 ? true : false;

const Drawer = createDrawerNavigator();

export function Shop({ route, navigation }) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        drawerStyle: {
          right: isMobile ? 110 : 1175,
        },
      }}
    >
      <Drawer.Screen
        name="Products"
        component={Products}
        options={{
          headerTitle: " ",
        }}
      />
      <Drawer.Screen name="Checkout" component={Checkout} />
    </Drawer.Navigator>
  );
}
