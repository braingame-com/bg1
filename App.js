import { useContext, useEffect } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { AppProvider, Tab, ScrollContext } from './components/AppProvider';
import {
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
} from './utilities/svg-icons';
import { Home } from './screens/Home';
import { Lessons } from './screens/Lessons';
import { Videos } from './screens/Videos';
import { Shop } from './screens/Shop';
import { Settings } from './screens/Settings';
import { s, t } from './setup/styles';
import { TabBar } from './components/TabBar';
import { isMobile } from './utilities/helpers';

export default function App() {
  const { opacity, oppositeOpacity } = useContext(ScrollContext);
  useEffect(() => {
    console.log({ opacity });
  }, [opacity]);
  return (
    <AppProvider>
      <Tab.Navigator
        tabBar={(props) => <TabBar {...props} />}
        sceneContainerStyle={{
          paddingLeft: isMobile ? 0 : 128,
        }}
        screenOptions={{
          headerMode: 'none',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            fontSize: isMobile ? t.medium : t.large,
            marginLeft: isMobile ? 0 : t.small,
            opacity: oppositeOpacity,
          },
        }}
      >
        <Tab.Screen
          name={'Home '}
          component={Home}
          options={({ navigation }) => ({
            headerTitle: 'Home',
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
                  alignItems: 'center',
                  marginRight: isMobile ? t.large : t.xl,
                }}
                onPress={() => navigation.navigate('Profile')}
                hitSlop={{
                  top: t.small,
                  bottom: t.small,
                  left: t.small,
                  right: t.small,
                }}
              >
                <Image
                  source={{
                    uri: 'https://cdn.shopify.com/s/files/1/0171/7947/6022/files/polish.jpg?v=1671745772',
                  }}
                  style={{
                    width: isMobile ? t.large : t.xl,
                    height: isMobile ? t.large : t.xl,
                    borderRadius: 999,
                  }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Tab.Screen
          name="Lessons "
          component={Lessons}
          options={{
            headerTitle: 'Lessons',
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
            tabBarIcon: ({ fill, focused }) =>
              focused ? (
                <IconSolidPlay fill={fill} />
              ) : (
                <IconPlay fill={fill} />
              ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarIcon: ({ fill, focused }) =>
              focused ? <IconSolidTag fill={fill} /> : <IconTag fill={fill} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ fill, focused }) =>
              focused ? (
                <IconSolidGear fill={fill} />
              ) : (
                <IconGear fill={fill} />
              ),
          }}
        />
      </Tab.Navigator>
    </AppProvider>
  );
}
