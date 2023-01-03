import { TouchableOpacity, View, SafeAreaView, Dimensions } from "react-native";
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

const screenWidth = Dimensions.get("window").width;
const isMobile = screenWidth < 769 ? true : false;

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
            <Text style={{ ...s.m_right, color: "#777777" }}>£0.00</Text>
            <Octicons
              name="sidebar-expand"
              size={t.large}
              style={{ color: "#777777" }}
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
