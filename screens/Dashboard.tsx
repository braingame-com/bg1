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
import { ScrollContext } from '../components/AppProvider';
import { s, t } from '../setup/styles';
import { AccountFlow } from './AccountFlow';
import {
  Title,
  Heading,
  Text,
  Small,
  SecondaryText,
} from '../design/typography';
import { Icon, Dot, Row, BackButton, Divider } from '../design/primitives';
import { isMobile } from '../setup/helpers';
import { ChartRangeSelector } from '../components/ChartRangeSelector';
import { Playground } from './Playground/Playground';
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
    <Stack.Screen
      name="Playground"
      component={Playground}
      options={{ headerShown: false }}
    />
    {!userIsLoggedIn && (
      <Stack.Screen
        name="Account Flow"
        component={AccountFlow}
        options={{ headerShown: false }}
      />
    )}
    <Stack.Screen
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
    />
    <Stack.Screen
      name="Tasks Screen"
      component={TasksScreen}
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
    />
  </Stack.Navigator>
);

const DashboardList = () => {
  const { opacity, onScroll } = useContext(ScrollContext);
  const { colors } = useTheme();

  const NumbersBlock = () => {
    const navigation = useNavigation();
    // const priceHistory = usePriceHistory("ethereum");

    return (
      <Pressable
        onPress={() => (navigation as any).navigate('Numbers Screen')}
        style={{ flex: 2 }}
      >
        <View
          style={{
            ...s.card,
            backgroundColor: colors.card,
            marginVertical: t.s,
            flex: 1,
          }}
        >
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View style={{ ...s.row, marginBottom: t.s }}>
                <Heading>Numbers</Heading>
                <Small style={{ ...s.pill, ...s.warn, marginLeft: t.l }}>
                  To do
                </Small>
              </View>
              <View style={{ ...s.row }}>
                <View style={s.block_btn}>
                  <Icon name="filter" size="secondary" />
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: t.s,
                marginBottom: t.l,
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: colors.border,
                borderRadius: t.s,
              }}
            >
              {/* <LineGraph points={priceHistory} color="#4484B2" /> */}
            </View>
            <ChartRangeSelector />
          </>
        </View>
      </Pressable>
    );
  };
  const TasksBlock = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();

    let tasks = [
      'Logo design and branding (colors)',
      'Illustrator assets (including fonts) & mockups',
      'Implement',
      'Polish (animations / interactions)',
      'Testing',
      'Monitoring',
      'Optimization / Minification / Tree-shaking',
      'Deployment/CI',
      'Hosting',
    ];

    const UpcomingTasks = () => {
      return (
        <View style={{ marginTop: t.s }}>
          {tasks.map((task, i) => (
            <Row key={i}>
              <Dot />
              <SecondaryText style={{ paddingVertical: t.xs, marginLeft: t.s }}>
                {task}
              </SecondaryText>
            </Row>
          ))}
        </View>
      );
    };

    return (
      <Pressable
        onPress={() => (navigation as any).navigate('Tasks Screen')}
        style={{ flex: 1 }}
      >
        <View
          style={{
            ...s.card,
            backgroundColor: colors.card,
            marginVertical: t.s,
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ ...s.row }}>
              <Heading>Tasks</Heading>
              <Text style={{ ...s.pill, ...s.warn, marginLeft: t.l }}>5</Text>
            </View>
          </View>
          <UpcomingTasks />
        </View>
      </Pressable>
    );
  };
  const MindsetBlock = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    return (
      <Pressable
        onPress={() => (navigation as any).navigate('Mindset Screen')}
        style={{ ...s.flex }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            ...s.card,
            backgroundColor: colors.card,
            marginVertical: t.s,
          }}
        >
          <View style={{ ...s.row }}>
            <Heading>Mindset</Heading>
            <Text style={{ ...s.pill, ...s.success, marginLeft: t.l }}>
              <Icon name="check" color={t.positive} />
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };
  const PlanningBlock = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    return (
      <Pressable
        onPress={() => (navigation as any).navigate('Planning Screen')}
        style={{ ...s.flex }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            ...s.card,
            backgroundColor: colors.card,
            marginVertical: t.s,
          }}
        >
          <View style={{ ...s.row }}>
            <Heading>Planning</Heading>
            <Text style={{ ...s.pill, ...s.warn, marginLeft: t.l }}>To do</Text>
          </View>
        </View>
      </Pressable>
    );
  };
  const JournalBlock = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    return (
      <Pressable
        onPress={() => (navigation as any).navigate('Journal Screen')}
        style={{ ...s.flex }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            ...s.card,
            backgroundColor: colors.card,
            marginVertical: t.s,
          }}
        >
          <View style={{ ...s.row }}>
            <Heading>Journal</Heading>
            <Text style={{ ...s.pill, ...s.warn, marginLeft: t.l }}>To do</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: !isMobile ? 1 : 0 }}
        style={{ marginHorizontal: t.s }}
      >
        <View style={{ ...s.container, flex: 1 }}>
          <Animated.View style={{ opacity: opacity }}>
            <Title>Dashboard</Title>
          </Animated.View>

          <View style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <View
              style={{
                flexDirection: isMobile ? 'column' : 'row',
                flex: 1,
              }}
            >
              <NumbersBlock />
              <TasksBlock />
            </View>

            <View
              style={{
                flexDirection: isMobile ? 'column' : 'row',
                flex: 1,
              }}
            >
              <MindsetBlock />
              <PlanningBlock />
              <JournalBlock />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const NumbersScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'white' }}>Numbers Screen</Text>
    </View>
  );
};

const TasksScreen = () => {
  const { colors } = useTheme();
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<any[]>([]);
  const [remaining, setRemaining] = useState(0);
  const onKeyPress = (e: any) => {
    let key = e.nativeEvent.key;
    if (key == 'Enter') {
      addTask();
    }
    console.log('You pressed a key: ' + key);
  };
  const addTask = () => {
    setTasks([...(tasks as any), task] as any);
    setTask('');
    setRemaining((prevRemaining) => prevRemaining + 1);
  };
  const checkTask = (index: number) => {
    console.log('check @ index: ' + index);
  };
  const removeTask = (index: number) => {
    let tasksCopy = [...(tasks as any)];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy as any);
    setRemaining((prevRemaining) => prevRemaining - 1);
  };
  const showHideChecked = () => {
    console.log('show/hide');
  };
  const clearChecked = () => {
    setTasks([]);
    setRemaining((tasks as any).length);
    console.log('clear');
  };
  const Task = (props: any) => {
    return (
      <View
        style={{
          borderBottomWidth: 0,
          borderColor: colors.border,
          paddingVertical: t.s,
          paddingHorizontal: 0,
          marginHorizontal: t.s,
          overflow: 'hidden',
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Pressable
          style={{
            width: 28,
            height: 28,
            borderColor: colors.border,
            borderWidth: 1,
            borderRadius: t.s,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => checkTask(props.index)}
        >
          <Icon name="check" color={t.positive} />
        </Pressable>
        <Text
          style={{
            color: colors.text,
            marginVertical: 0,
            flex: 1,
            marginHorizontal: t.l,
          }}
        >
          {props.text}
        </Text>
        <Pressable
          style={{
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'flex-end',
            opacity: 0.5,
            position: 'relative',
            marginVertical: t.s,
          }}
          onPress={() => removeTask(props.index)}
        >
          <Icon name="times" />
        </Pressable>
      </View>
    );
  };
  return (
    <View
      style={{
        paddingHorizontal: t.l,
        paddingVertical: t.s,
        paddingBottom: 140,
      }}
    >
      <View
        style={{
          paddingHorizontal: t.s,
          paddingVertical: t.l,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Pressable
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: t.s,
            padding: t.l,
            borderColor: colors.border,
            borderWidth: 1,
          }}
          onPress={() => showHideChecked()}
        >
          <Icon name="eye-slash" size="secondary" />
        </Pressable>
        <View style={{ flex: 1, marginHorizontal: t.s }}>
          <Text
            style={{
              ...s.pill,
              ...s.info,
              alignSelf: 'center',
            }}
          >
            0 / {remaining}
          </Text>
        </View>
        <Pressable
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: t.s,
            padding: t.l,
            borderColor: colors.border,
            borderWidth: 1,
          }}
          onPress={() => clearChecked()}
        >
          <Icon name="times" size="secondary" />
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          zIndex: 999,
          overflow: 'hidden',
        }}
      >
        <TextInput
          placeholder="Add a new task"
          style={{
            backgroundColor: colors.card,
            paddingVertical: t.l,
            paddingLeft: 60,
            paddingRight: t.l,
            borderRadius: t.s,
            borderWidth: 0,
            margin: t.s,
            flex: 1,
            color: 'white',
          }}
          onSubmitEditing={() => addTask()}
          onChangeText={(text) => setTask(text)}
          onKeyPress={(e) => {
            onKeyPress(e);
          }}
          value={task}
        />
        <Pressable
          onPress={() => addTask()}
          style={{
            width: 45,
            height: 45,
            margin: t.s,
            position: 'absolute',
            left: t.s,
            borderWidth: 0,
            borderRadius: t.s,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="edit" size="secondary" color={t.grey} />
        </Pressable>
      </View>
      <View
        style={{
          marginTop: t.l,
          marginHorizontal: t.s,
          borderColor: colors.border,
          borderTopWidth: 1,
        }}
      ></View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            color: '#777',
            opacity: 0.5,
            textAlign: 'center',
            padding: 30,
            display: tasks?.length === 0 ? 'flex' : 'none',
          }}
        >
          Your task list is empty
        </Text>
        {(tasks as any).map((text: string, index: number) => {
          let hIndex = index + 1;
          let isChecked = 'false';
          return (
            <Task
              number={hIndex}
              index={index}
              key={index}
              text={text}
              isChecked={isChecked}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const MindsetScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'white' }}>
        Mindset (Affirmations & Visualization) Screen
      </Text>
    </View>
  );
};

const PlanningScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'white' }}>Planning Screen</Text>
    </View>
  );
};

const JournalScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'white' }}>Journal Screen</Text>
    </View>
  );
};

const Profile = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'white' }}>Profile</Text>
    </View>
  );
};
