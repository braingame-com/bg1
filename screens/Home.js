import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { s, t } from '../setup/styles';
import { Octicons } from '@expo/vector-icons';
import { AccountFlow } from '../screens/AccountFlow';
import { HomeList } from '../screens/HomeList';
import { Profile } from '../screens/Profile';
import { TasksScreen } from '../screens/TasksScreen';
import { VisualizationScreen } from '../screens/VisualizationScreen';
import { AffirmationsScreen } from '../screens/AffirmationsScreen';
import { NumbersScreen } from '../screens/NumbersScreen';
import { PlanningScreen } from '../screens/PlanningScreen';
import { JournalScreen } from '../screens/JournalScreen';
// import { Playground } from '../screens/Playground';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     console.log(uid);
//   } else {
//     // User is signed out
//     console.log('User is signed out');
//   }
// });

const Stack = createNativeStackNavigator();

const userIsLoggedIn = false;

export function Home({ navigation }) {
  return (
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
      <Stack.Screen
        name="Home"
        component={userIsLoggedIn ? HomeList : AccountFlow}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Numbers Screen"
        component={NumbersScreen}
        options={{
          headerTitle: 'Numbers',
          headerLeft: () => (
            <TouchableOpacity
              style={{ ...s.back_btn, padding: t.small }}
              onPress={() => navigation.navigate('Home')}
            >
              <Octicons
                name="chevron-left"
                size={t.large}
                style={{ color: t.grey }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Tasks Screen"
        component={TasksScreen}
        options={{
          headerTitle: 'Tasks',
          headerLeft: () => (
            <TouchableOpacity
              style={{ ...s.back_btn, padding: t.small }}
              onPress={() => navigation.navigate('Home')}
            >
              <Octicons
                name="chevron-left"
                size={t.large}
                style={{ color: t.grey }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Visualization Screen"
        component={VisualizationScreen}
        options={{
          headerTitle: 'Visualization',
          headerLeft: () => (
            <TouchableOpacity
              style={{ ...s.back_btn, padding: t.small }}
              onPress={() => navigation.navigate('Home')}
            >
              <Octicons
                name="chevron-left"
                size={t.large}
                style={{ color: t.grey }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Affirmations Screen"
        component={AffirmationsScreen}
        options={{
          headerTitle: 'Affirmations',
          headerLeft: () => (
            <TouchableOpacity
              style={{ ...s.back_btn, padding: t.small }}
              onPress={() => navigation.navigate('Home')}
            >
              <Octicons
                name="chevron-left"
                size={t.large}
                style={{ color: t.grey }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Planning Screen"
        component={PlanningScreen}
        options={{
          headerTitle: 'Planning',
          headerLeft: () => (
            <TouchableOpacity
              style={{ ...s.back_btn, padding: t.small }}
              onPress={() => navigation.navigate('Home')}
            >
              <Octicons
                name="chevron-left"
                size={t.large}
                style={{ color: t.grey }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Journal Screen"
        component={JournalScreen}
        options={{
          headerTitle: 'Journal',
          headerLeft: () => (
            <TouchableOpacity
              style={{ ...s.back_btn, padding: t.small }}
              onPress={() => navigation.navigate('Home')}
            >
              <Octicons
                name="chevron-left"
                size={t.large}
                style={{ color: t.grey }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: 'Profile',
          headerLeft: () => (
            <TouchableOpacity
              style={{ ...s.back_btn, padding: t.small }}
              onPress={() => navigation.navigate('Home')}
            >
              <Octicons
                name="chevron-left"
                size={t.large}
                style={{ color: t.grey }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
