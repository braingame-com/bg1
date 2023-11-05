import { useContext, useState } from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Animated,
  Pressable,
  TextInput,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollContext } from '../../components/AppProvider';
import { s, t } from '../../setup/styles';
import { AccountFlow } from '../AccountFlow';
import {
  Title,
  Heading,
  Text,
  Small,
  SecondaryText,
  Bold,
} from '../../design/typography';
import { Icon, Dot, Row, BackButton, Divider } from '../../design/primitives';
import { isMobile } from '../../setup/helpers';
import { ChartRangeSelector } from '../../components/ChartRangeSelector';
import { Playground } from '../Playground/Playground';
import { TasksScreen } from './dashboard-components/TasksScreen';
// import { auth } from '../firebaseConfig';
// import { onAuthStateChanged } from 'firebase/auth';

let userIsLoggedIn = true;
let currentUser: any;

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log('User is signed out');
//     const uid = user.uid;
//     console.log(user.email);
//     userIsLoggedIn = true;
//     currentUser = user;
//   } else {
//     console.log('User is signed out');
//     userIsLoggedIn = false;
//     currentUser = null;
//   }
// });

// console.log('user is :', currentUser);

const Stack = createNativeStackNavigator();

type DashboardProps = {
  navigation: NativeStackNavigationProp<any, 'Dashboard'>;
};

export const Dashboard: React.FC<DashboardProps> = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerShadowVisible: false,
    }}
  >
    {/* <Stack.Screen
      name="Playground"
      component={Playground}
      options={{ headerShown: false }}
    /> */}
    {!userIsLoggedIn && (
      <Stack.Screen
        name="Account Flow"
        component={AccountFlow}
        options={{ headerShown: false }}
      />
    )}
    {/* <Stack.Screen
      name="Dashboard"
      component={DashboardList}
      options={{ headerShown: false }}
    />
    {userIsLoggedIn && (
      <Stack.Screen
        name="Account Flow"
        component={AccountFlow}
        options={{ headerShown: false }}
      />
    )}
    <Stack.Screen
      name="Numbers Screen"
      component={NumbersScreen}
      options={{
        headerTitle: '',
        headerLeft: () => (
          <BackButton
            text="Dashboard"
            onPress={() => navigation.navigate('Dashboard')}
          />
        ),
      }}
    /> */}
    <Stack.Screen
      name="Tasks Screen"
      component={TasksScreen}
      options={{
        headerTitle: () => <Bold>Tasks</Bold>,
        // headerLeft: () => (
        //   <BackButton
        //     text="Dashboard"
        //     onPress={() => navigation.navigate('Dashboard')}
        //   />
        // ),
      }}
    />
    {/* <Stack.Screen
      name="Mindset Screen"
      component={MindsetScreen}
      options={{
        headerTitle: '',
        headerLeft: () => (
          <BackButton
            text="Dashboard"
            onPress={() => navigation.navigate('Dashboard')}
          />
        ),
      }}
    />
    <Stack.Screen
      name="Planning Screen"
      component={PlanningScreen}
      options={{
        headerTitle: '',
        headerLeft: () => (
          <BackButton
            text="Dashboard"
            onPress={() => navigation.navigate('Dashboard')}
          />
        ),
      }}
    />
    <Stack.Screen
      name="Journal Screen"
      component={JournalScreen}
      options={{
        headerTitle: '',
        headerLeft: () => (
          <BackButton
            text="Dashboard"
            onPress={() => navigation.navigate('Dashboard')}
          />
        ),
      }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerTitle: '',
        headerLeft: () => (
          <BackButton
            text="Dashboard"
            onPress={() => navigation.navigate('Dashboard')}
          />
        ),
      }}
    /> */}
  </Stack.Navigator>
);
