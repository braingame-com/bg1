import { TouchableOpacity, View } from 'react-native';
import { s, t } from '../setup/styles';
import { useTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Products } from './Products';
import { Checkout } from './Checkout';
import { Text } from '../setup/typography';
import { Icon } from '../setup/primitives';
import { isMobile } from '../utilities/helpers';

const Drawer = createDrawerNavigator();

export function Shop() {
  const { colors } = useTheme();
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          fontSize: isMobile ? t.medium : t.large,
          marginLeft: isMobile ? 0 : t.small,
        },
        headerShadowVisible: false,
        drawerPosition: 'right',
        // headerShown: false,
        drawerStyle: {
          // right: isMobile ? 110 : 1175,
        },
        drawerLabelStyle: {
          fontFamily: 'SohneBook',
        },
        headerLeft: () => <View></View>,
        headerRight: () => (
          <TouchableOpacity
            style={{
              ...s.row,
              alignItems: 'center',
              paddingVertical: t.small,
              marginRight: isMobile ? t.large : t.xl,
            }}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          >
            <Text style={{ ...s.m_right, color: t.grey }}>£0.00</Text>
            <Icon name="bars" size="primary" type="fas" />
          </TouchableOpacity>
        ),
      })}
    >
      <Drawer.Screen
        name="Products"
        component={Products}
        options={{
          headerTitle: () => <Text>Shop</Text>,
        }}
      />
      <Drawer.Screen
        name="Checkout"
        component={Checkout}
        options={{
          headerTitle: () => <Text>Checkout</Text>,
        }}
      />
    </Drawer.Navigator>
  );
}
