import { useContext, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import {
  AppProvider,
  Tab,
  ScrollContext,
  // ScrollContextInterface,
} from './components/AppProvider';
import { Dashboard } from './screens/dashboard/Dashboard';
// import { Search } from './screens/Search';
// import { Lessons } from './screens/Lessons';
// import { Videos } from './screens/Videos';
// import { Shop } from './screens/Shop';
import { Profile } from './screens/profile/Profile';
import { t } from './setup/styles';
import { Icon, ProfileIcon } from './design/primitives';
import { TabBar } from './components/TabBar';
import { isMobile } from './setup/helpers';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { opacity, oppositeOpacity } = useContext(ScrollContext);

  useEffect(() => {
    console.log({ opacity });
  }, [opacity]);

  const [fontsLoaded] = useFonts({
    // if you load any fonts, you need to reomve the special 'ö' character from the file name
    SohneHalfFat: require('./assets/fonts/TestSohne-Halbfett.otf'),
    SohneStrong: require('./assets/fonts/TestSohne-Kraftig.otf'),
    SohneBook: require('./assets/fonts/TestSohne-Buch.otf'),
    SohneLight: require('./assets/fonts/TestSohne-Leicht.otf'),
    SohneMonoHalfFat: require('./assets/fonts/TestSohneMono-Halbfett.otf'),
    SohneMonoStrong: require('./assets/fonts/TestSohneMono-Kraftig.otf'),
    SohneMonoBook: require('./assets/fonts/TestSohneMono-Buch.otf'),
    SohneMonoLight: require('./assets/fonts/TestSohneMono-Leicht.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppProvider>
      <View onLayout={onLayoutRootView}></View>
      <Tab.Navigator
        tabBar={(props) => <TabBar {...props} />}
        sceneContainerStyle={{
          paddingLeft: isMobile ? 0 : 128,
        }}
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerShown: false,
          headerTitleStyle: {
            fontSize: isMobile ? t.m : t.l,
            marginLeft: isMobile ? 0 : t.s,
            opacity: oppositeOpacity,
          },
          headerShadowVisible: false,
        }}
      >
        <Tab.Screen
          name={'Dashboard '}
          component={Dashboard}
          options={({ navigation }) => ({
            tabBarIcon: ({ color, focused }) => (
              <Icon
                // name={focused ? 'grid-dashboard-solid' : 'grid-dashboard-light'}
                name="list"
                color={color}
                size="primary"
                type={focused ? 'fas' : undefined}
              />
            ),
            headerRight: () => <ProfileIcon navigation={navigation} />,
          })}
        />
        {/* <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ color }) => (
              <>
                <Icon name="search" color={color} size="primary" type="fal" />
              </>
            ),
            headerShown: false,
          }}
        /> */}
        {/* <Tab.Screen
          name="Lessons "
          component={Lessons}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Icon
                name="book-open"
                color={color}
                size="primary"
                type={focused ? 'fas' : undefined}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Videos"
          component={Videos}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Icon
                name="play"
                color={color}
                size="primary"
                type={focused ? 'fas' : undefined}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Icon
                name="bag-shopping"
                color={color}
                size="primary"
                type={focused ? 'fas' : undefined}
              />
            ),
            headerShown: false,
          }}
        /> */}
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Icon
                name="circle-user"
                color={color}
                size="primary"
                type={focused ? 'fas' : undefined}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </AppProvider>
  );
}
