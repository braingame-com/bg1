import { useContext, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { AppProvider, Tab, ScrollContext } from './components/AppProvider';
import { Dashboard } from './screens/Dashboard';
// import { Search } from './screens/Search';
import { Lessons } from './screens/Lessons';
import { Videos } from './screens/Videos';
import { Shop } from './screens/Shop';
import { Settings } from './screens/Settings';
import { t } from './setup/styles';
import { Text } from './setup/typography';
import { Icon, ProfileIcon } from './setup/primitives';
import { TabBar } from './components/TabBar';
import { isMobile } from './utilities/helpers';
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
          headerMode: 'none',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            fontSize: isMobile ? t.medium : t.large,
            marginLeft: isMobile ? 0 : t.small,
            opacity: oppositeOpacity,
          },
          headerShadowVisible: false,
        }}
      >
        <Tab.Screen
          name={'Dashboard '}
          component={Dashboard}
          options={({ navigation }) => ({
            tabBarIcon: ({ fill, focused }) => (
              <Icon
                name={focused ? 'grid-dashboard-solid' : 'grid-dashboard-light'}
                color={fill}
                size="primary"
              />
            ),
            headerRight: () => <ProfileIcon navigation={navigation} />,
          })}
        />
        {/* <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ fill }) => (
              <>
                <Icon name="search" color={fill} size="primary" type="fal" />
              </>
            ),
            headerShown: false,
          }}
        /> */}
        <Tab.Screen
          name="Lessons "
          component={Lessons}
          options={{
            tabBarIcon: ({ fill, focused }) => (
              <Icon
                name="book-open"
                color={fill}
                size="primary"
                type={focused && 'fas'}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Videos"
          component={Videos}
          options={{
            tabBarIcon: ({ fill, focused }) => (
              <Icon
                name="play"
                color={fill}
                size="primary"
                type={focused && 'fas'}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarIcon: ({ fill, focused }) => (
              <Icon
                name="bag-shopping"
                color={fill}
                size="primary"
                type={focused && 'fas'}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ fill, focused }) => (
              <Icon
                name="circle-user"
                color={fill}
                size="primary"
                type={focused && 'fas'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </AppProvider>
  );
}
