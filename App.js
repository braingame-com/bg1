import { useContext, useEffect } from 'react';
import { AppProvider, Tab, ScrollContext } from './components/AppProvider';
import { useFonts } from 'expo-font';
import { Icon } from './utilities/svg-icons';
import { Dashboard } from './screens/Dashboard';
import { Search } from './screens/Search';
import { Lessons } from './screens/Lessons';
// import { Videos } from './screens/Videos';
import { Shop } from './screens/Shop';
import { Settings } from './screens/Settings';
import { t } from './setup/styles';
import { ProfileIcon } from './setup/primitives';
import { TabBar } from './components/TabBar';
import { isMobile } from './utilities/helpers';

export default function App() {
  const { opacity, oppositeOpacity } = useContext(ScrollContext);

  useEffect(() => {
    console.log({ opacity });
  }, [opacity]);

  useFonts({
    SohneLight: require('./assets/fonts/TestSöhne-Buch.otf'),
    SohneBook: require('./assets/fonts/TestSöhne-Buch.otf'),
    SohnePowerful: require('./assets/fonts/TestSöhne-Kräftig.otf'),
  });

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
          headerShadowVisible: false,
        }}
      >
        <Tab.Screen
          name={'Dashboard '}
          component={Dashboard}
          options={({ navigation }) => ({
            tabBarIcon: ({ focused }) => (
              <Icon
                name={focused ? 'dashboard-solid' : 'dashboard'}
                size="large"
                color={t.white}
              />
            ),
            headerRight: () => <ProfileIcon navigation={navigation} />,
          })}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: () => (
              <Icon name="search" size="large" color={t.white} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Lessons "
          component={Lessons}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name={focused ? 'book-solid' : 'book'}
                size="large"
                color={t.white}
              />
            ),
            headerShown: false,
          }}
        />
        {/* <Tab.Screen
          name="Videos"
          component={Videos}
          options={{
            tabBarIcon: ({ fill, focused }) => (
              <Icon name={focused ? 'play-solid' : 'play'} size="large" color={t.white}/>
            ),
            headerShown: false,
          }}
        /> */}
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name={focused ? 'bag-solid' : 'bag'}
                size="large"
                color={t.white}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name={focused ? 'user-circle-solid' : 'user-circle'}
                size="large"
                color={t.white}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </AppProvider>
  );
}
