import { TouchableOpacity, View, SafeAreaView } from "react-native";
import { s, t } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContent,
  useDrawerStatus,
} from "@react-navigation/drawer";
import { Products } from "../screens/Products";
import { Checkout } from "../screens/Checkout";
import { Text } from "../components/typography";
import { isMobile } from "../utilities/helpers";

const Drawer = createDrawerNavigator();

export function Shop({ route, navigation }) {
  const { colors } = useTheme();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          fontSize: isMobile ? t.medium : t.large,
          marginLeft: isMobile ? 0 : t.small,
        },
        drawerPosition: "right",
        // headerShown: false,
        drawerStyle: {
          // right: isMobile ? 110 : 1175,
        },
        headerLeft: () => <View></View>,
        headerRight: () => (
          <TouchableOpacity
            style={{
              ...s.row,
              alignItems: "center",
              paddingVertical: t.small,
              marginRight: isMobile ? t.large : t.xl,
            }}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          >
            <Text style={{ ...s.m_right, color: t.grey }}>£0.00</Text>
            <Octicons
              name="sidebar-expand"
              size={t.large}
              style={{ color: t.grey }}
            />
          </TouchableOpacity>
        ),
      })}
    >
      <Drawer.Screen
        name="Products"
        component={Products}
        options={{
          headerTitle: "Shop",
        }}
      />
      <Drawer.Screen name="Checkout" component={Checkout} />
    </Drawer.Navigator>
  );
}
