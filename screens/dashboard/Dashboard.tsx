import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AccountFlow } from '../account/AccountFlow';
import { Bold } from '../../design/typography';
import { TasksScreen } from './dashboard-components/tasks/TasksScreen';
import { t, s } from '../../setup/styles';
import { Button } from '../../design/primitives';
import { useState } from 'react';
import { useTheme } from '@react-navigation/native';
// import { auth } from '../firebaseConfig';
// import { onAuthStateChanged } from 'firebase/auth';

let userIsLoggedIn = true;
// let currentUser: any;

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

// export const Dashboard: React.FC<DashboardProps> = ({ navigation }) => (
export const Dashboard: React.FC<DashboardProps> = () => {
  const { colors } = useTheme();
  const [remaining, setRemaining] = useState(0);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.background,
        },
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
        options={{
          headerTitle: () => (
            <>
              <Bold>Tasks</Bold>
              <Bold
                style={{
                  ...s.pill,
                  ...s.info,
                  marginLeft: t.xs,
                }}
                mono={true}
              >
                {remaining}
              </Bold>
            </>
          ),
          // headerLeft: () => (
          //   <BackButton
          //     text="Dashboard"
          //     onPress={() => navigation.navigate('Dashboard')}
          //   />
          // ),
          headerRight: () => (
            // <BackButton
            //   text="Dashboard"
            //   onPress={() => navigation.navigate('Dashboard')}
            // />
            <Button
              type="Naked"
              style={{}}
              icon="rectangle-history"
              iconSize={t.l}
            />
          ),
        }}
      >
        {(props) => <TasksScreen {...props} setRemaining={setRemaining} />}
      </Stack.Screen>
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
};