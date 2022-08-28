import { Text, View, SafeAreaView } from "react-native";
import { styles as s } from "../setup/styles";
import { Octicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Products } from "../screens/Products";
import { Checkout } from "../screens/Checkout";

const Drawer = createDrawerNavigator();

export function Shop({ route, navigation }) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
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
