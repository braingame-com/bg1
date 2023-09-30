import { useContext, useState } from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollContext } from '../components/AppProvider';
import { s, t } from '../setup/styles';
import { Octicons } from '@expo/vector-icons';
import { AccountFlow } from './AccountFlow';
import { Title, Text } from '../setup/typography';
import { Dot, Row } from '../setup/primitives';
import { isMobile } from '../utilities/helpers';
import { ChartRangeSelector } from '../components/ChartRangeSelector';
// import { Playground } from '../screens/Playground';
// import { auth } from '../firebaseConfig';
// import { onAuthStateChanged } from 'firebase/auth';

let userIsLoggedIn = true;
let currentUser;

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

export const Dashboard = ({ navigation }) => {
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
      {!userIsLoggedIn && (
        <Stack.Screen
          name="Account Flow"
          component={AccountFlow}
          options={{ headerShown: false }}
          navigation={navigation}
          currentUser={currentUser}
        />
      )}
      <Stack.Screen
        name="Dashboard"
        component={DashboardList}
        options={{ headerShown: false }}
        navigation={navigation}
        currentUser={currentUser}
      />
      {userIsLoggedIn && (
        <Stack.Screen
          name="Account Flow"
          component={AccountFlow}
          options={{ headerShown: false }}
          navigation={navigation}
          currentUser={currentUser}
        />
      )}
      <Stack.Screen
        name="Numbers Screen"
        component={NumbersScreen}
        options={{
          headerTitle: 'Numbers',
          headerLeft: () => (
            <TouchableOpacity
              style={{ ...s.back_btn, padding: t.small }}
              onPress={() => navigation.navigate('Dashboard')}
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
              onPress={() => navigation.navigate('Dashboard')}
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
              onPress={() => navigation.navigate('Dashboard')}
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
              onPress={() => navigation.navigate('Dashboard')}
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
              onPress={() => navigation.navigate('Dashboard')}
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
              onPress={() => navigation.navigate('Dashboard')}
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
              onPress={() => navigation.navigate('Dashboard')}
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
};

const DashboardList = () => {
  const { opacity, onScroll } = useContext(ScrollContext);

  const NumbersBlock = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    // const priceHistory = usePriceHistory("ethereum");
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Numbers Screen')}
        style={{ flex: 0.8 }}
      >
        <View
          style={{
            ...s.card,
            backgroundColor: colors.card,
            ...s.m_vertical,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ ...s.row, ...s.m_bottom }}>
              <Text
                style={{
                  ...s.heading,
                  color: colors.text,
                }}
              >
                Numbers
              </Text>
              <Text style={{ ...s.pill, ...s.warn, ...s.m_left_2 }}>To do</Text>
              {/* <Text style={{ ...s.pill, ...s.success, ...s.m_left }}>
              Done &nbsp;
              <Octicons name="check" size={t.medium} />
            </Text> */}
            </View>
            <View style={{ ...s.row }}>
              <View style={s.block_btn}>
                <Octicons name="filter" size={t.large} color={t.grey} />
              </View>
              {/* <View style={s.block_btn}>
                <Octicons name="chevron-right" size={t.large} color={t.grey} />
              </View> */}
            </View>
          </View>
          <View
            style={{
              ...s.m_top,
              ...s.m_bottom_2,
              height: isMobile ? t.medium ** 2 : t.medium * 24,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: colors.border,
              borderRadius: t.small,
            }}
          >
            {/* <LineGraph points={priceHistory} color="#4484B2" /> */}
          </View>
          <ChartRangeSelector />
        </View>
      </TouchableOpacity>
    );
  };

  const TasksBlock = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();

    let tasks = [
      'Logo design and branding (colors)',
      'Illustrator assets (including fonts) & mockups',
      'Implement',
      'Polish (animations/interactions)',
      'Testing',
      'Monitoring',
      'Optimization / Minification / Tree-shaking',
      'Deployment/CI',
      'Hosting',
    ];

    const UpcomingTasks = () => {
      return (
        <View style={{ marginTop: t.small }}>
          {tasks.map((task, i) => (
            <Row key={i}>
              <Dot contentStyle={{ fontSize: t.small }} />
              <Text style={{ paddingVertical: t.xs, marginLeft: t.small }}>
                {task}
              </Text>
            </Row>
          ))}
        </View>
      );
    };

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Tasks Screen')}
        style={{ flex: 0.2 }}
      >
        <View
          style={{
            ...s.card,
            backgroundColor: colors.card,
            ...s.m_vertical,
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
              <Text style={{ ...s.heading }}>Tasks</Text>
              <Text style={{ ...s.pill, ...s.warn, ...s.m_left_2 }}>5</Text>
            </View>
          </View>
          <UpcomingTasks />
        </View>
      </TouchableOpacity>
    );
  };

  const VisualizationBlock = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Visualization Screen')}
        style={{ ...s.flex }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            ...s.card,
            backgroundColor: colors.card,
            ...s.m_vertical,
          }}
        >
          <View style={{ ...s.row }}>
            <Text
              style={{
                ...s.heading,
                color: colors.text,
              }}
            >
              Visualization
            </Text>
            <Text style={{ ...s.pill, ...s.success, ...s.m_left_2 }}>
              <Octicons name="check" size={t.medium} />
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const AffirmationsBlock = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Affirmations Screen')}
        style={{ ...s.flex }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            ...s.card,
            backgroundColor: colors.card,
            ...s.m_vertical,
          }}
        >
          <View style={{ ...s.row }}>
            <Text
              style={{
                ...s.heading,
                color: colors.text,
              }}
            >
              Affirmations
            </Text>
            <Text style={{ ...s.pill, ...s.warn, ...s.m_left_2 }}>To do</Text>
            {/* <Text style={{ ...s.pill, ...s.success, ...s.m_left }}>
              Done &nbsp;
              <Octicons name="check" size={t.medium} />
            </Text> */}
          </View>
          {/* <View style={s.block_btn}>
            <Octicons name="chevron-right" size={t.large} color={t.grey} />
          </View> */}
        </View>
      </TouchableOpacity>
    );
  };

  const PlanningBlock = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Planning Screen')}
        style={{ ...s.flex }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            ...s.card,
            backgroundColor: colors.card,
            ...s.m_vertical,
          }}
        >
          <View style={{ ...s.row }}>
            <Text
              style={{
                ...s.heading,
                color: colors.text,
              }}
            >
              Planning
            </Text>
            <Text style={{ ...s.pill, ...s.warn, ...s.m_left_2 }}>To do</Text>
            {/* <Text style={{ ...s.pill, ...s.success, ...s.m_left }}>
              Done &nbsp;
              <Octicons name="check" size={t.medium} />
            </Text> */}
          </View>
          {/* <View style={s.block_btn}>
            <Octicons name="chevron-right" size={t.large} color={t.grey} />
          </View> */}
        </View>
      </TouchableOpacity>
    );
  };

  const JournalBlock = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Journal Screen')}
        style={{ ...s.flex }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            ...s.card,
            backgroundColor: colors.card,
            ...s.m_vertical,
          }}
        >
          <View style={{ ...s.row }}>
            <Text
              style={{
                ...s.heading,
                color: colors.text,
              }}
            >
              Journal
            </Text>
            <Text style={{ ...s.pill, ...s.warn, ...s.m_left_2 }}>To do</Text>
            {/* <Text style={{ ...s.pill, ...s.success, ...s.m_left }}>
            <Octicons name="check" size={t.medium} />
          </Text> */}
          </View>
          {/* <View style={s.block_btn}>
            <Octicons name="chevron-right" size={t.large} color={t.grey} />
          </View> */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: !isMobile ? 1 : 0 }}
        style={{ ...s.m_horizontal }}
      >
        <View style={{ ...s.container, flex: 1 }}>
          <Animated.View style={{ opacity: opacity }}>
            <Title style={{ marginVertical: t.xs }}>Dashboard</Title>
          </Animated.View>
          <View
            style={{
              flexDirection: isMobile ? 'column' : 'row',
              gap: t.large,
            }}
          >
            <NumbersBlock />
            <TasksBlock />
          </View>
          <View
            style={{
              flexDirection: isMobile ? 'column' : 'row',
              gap: t.large,
              flex: 1,
            }}
          >
            <VisualizationBlock />
            <AffirmationsBlock />
            <PlanningBlock />
            <JournalBlock />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const NumbersScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ ...s.heading, color: 'white' }}>Numbers Screen</Text>
    </View>
  );
};

const TasksScreen = () => {
  const { colors } = useTheme();
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const onKeyPress = (e) => {
    let key = e.nativeEvent.key;
    if (key == 'Enter') {
      addTask();
    }
    console.log('You pressed a key: ' + key);
  };
  const addTask = () => {
    setTasks([...tasks, task]);
    setTask(null);
    setRemaining(tasks.length + 1);
  };
  const checkTask = () => {
    console.log('check');
  };
  const removeTask = (index) => {
    let tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
    setRemaining(tasks.length - 1);
  };
  const showHideChecked = () => {
    console.log('show/hide');
  };
  const clearChecked = () => {
    setTasks([]);
    setRemaining(tasks.length);
    console.log('clear');
  };
  const Task = (props) => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: colors.border,
          paddingVertical: t.small,
          paddingHorizontal: 0,
          marginHorizontal: t.small,
          overflow: 'hidden',
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <TouchableOpacity
          style={{
            width: 28,
            height: 28,
            borderColor: colors.border,
            borderWidth: 1,
            borderRadius: t.small,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => checkTask(props.index)}
        >
          <Octicons
            name="check"
            size={t.large}
            style={{
              ...s.success_text,
              // opacity: props.isChecked === "true" ? 1 : 0,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: colors.text,
            ...s.subtitle,
            marginVertical: 0,
            flex: 1,
            marginHorizontal: t.large,
          }}
        >
          {props.text}
        </Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'flex-end',
            opacity: 0.5,
            position: 'relative',
            marginVertical: t.small,
          }}
          onPress={() => removeTask(props.index)}
        >
          <Octicons
            name="x"
            size={t.large}
            style={{ color: colors.text, opacity: 0.5 }}
          />
        </TouchableOpacity>
        {/* <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
        /> */}
        {/* <TouchableOpacity
          style={{
            marginLeft: t.large,
            height: t.large,
            width: t.large,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => removeTask(props.index)}
        >
          <Octicons
            name="x-circle"
            size={t.large}
            style={{ ...s.error_text, opacity: 0.33 }}
          />
        </TouchableOpacity> */}
      </View>
    );
  };
  return (
    <View
      style={{
        paddingHorizontal: t.large,
        paddingVertical: t.small,
        paddingBottom: 140,
      }}
    >
      <View
        style={{
          paddingHorizontal: t.small,
          paddingVertical: t.large,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: t.small,
            padding: t.large,
            borderColor: colors.border,
            borderWidth: 1,
          }}
          onPress={() => showHideChecked()}
        >
          <Octicons name="eye-closed" size={t.large} color={t.grey} />
          {/* <Octicons name="eye" size={t.large} color={t.grey} /> */}
          {/* <Text style={{ color: t.grey, marginLeft: t.small }}>Hide/Show</Text> */}
        </TouchableOpacity>
        <View style={{ flex: 2, marginHorizontal: t.small }}>
          <Text
            style={{
              ...s.pill,
              ...s.heading_secondary,
              ...s.info,
              alignSelf: 'center',
              // justifyContent: "center",
              // textAlign: "center",
            }}
          >
            0 / {remaining}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: t.small,
            padding: t.large,
            borderColor: colors.border,
            borderWidth: 1,
          }}
          onPress={() => clearChecked()}
        >
          {/* <Text style={{ color: t.grey, marginRight: t.small }}>Clear</Text> */}
          <Octicons name="x" size={t.large} color={t.grey} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // shadowColor: "#fff",
          // shadowOffset: { width: 0, height: 0 },
          // shadowOpacity: 1,
          // shadowRadius: t.small,
          zIndex: 999,
          overflow: 'hidden',
        }}
      >
        <TextInput
          placeholder="Add a new task"
          style={{
            backgroundColor: colors.card,
            paddingVertical: t.large,
            paddingLeft: 60,
            paddingRight: t.large,
            borderRadius: t.small,
            borderWidth: 0,
            margin: t.small,
            flex: 1,
            color: 'white',
            ...s.heading_secondary,
          }}
          onSubmitEditing={() => addTask()}
          onChangeText={(text) => setTask(text)}
          onKeyPress={(e) => {
            onKeyPress(e);
          }}
          value={task}
        />
        <TouchableOpacity
          onPress={() => addTask()}
          style={{
            width: 45,
            height: 45,
            margin: t.small,
            position: 'absolute',
            left: t.small,
            // backgroundColor: "rgba(0,0,0,.5)",
            borderWidth: 0,
            borderRadius: t.small,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Octicons name="pencil" size={t.large} color={t.grey} />
        </TouchableOpacity>
      </View>
      {/* <LinearGradient
        // Button Linear Gradient
        colors={[colors.background, colors.background, "rgba(0,0,0,0)"]}
        style={{
          height: 40,
          marginTop: -t.small,
          marginbottom: -40,
          width: "100%",
          zIndex: 100,
        }}
      ></LinearGradient> */}
      <View
        style={{
          marginTop: t.large,
          marginHorizontal: t.small,
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
            display: tasks.length === 0 ? 'flex' : 'none',
          }}
        >
          Your task list is empty
        </Text>
        {tasks.map((text, index) => {
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

const VisualizationScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ ...s.heading, color: 'white' }}>Visualization Screen</Text>
    </View>
  );
};

const AffirmationsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ ...s.heading, color: 'white' }}>Affirmations Screen</Text>
    </View>
  );
};

const PlanningScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ ...s.heading, color: 'white' }}>Planning Screen</Text>
    </View>
  );
};

const JournalScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ ...s.heading, color: 'white' }}>Journal Screen</Text>
    </View>
  );
};

const Profile = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ ...s.heading, color: 'white' }}>Profile</Text>
    </View>
  );
};
