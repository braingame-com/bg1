import { useNavigation, useTheme } from '@react-navigation/native';
import {
  Animated,
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { s, t } from '../../../../setup/styles';
import {
  Heading,
  SecondaryText,
  Small,
  Text,
  Title,
} from '../../../../design/typography';
import { Dot, Icon, Row } from '../../../../design/primitives';
import { ChartRangeSelector } from '../../../../components/ChartRangeSelector';
import { isMobile } from '../../../../setup/helpers';

export const DashboardList = () => {
  // const { opacity, onScroll } = useContext(ScrollContext);
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        // onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: !isMobile ? 1 : 0 }}
        style={{ marginHorizontal: t.s }}
      >
        <View style={{ ...s.container, flex: 1 }}>
          <Animated.View
          //   style={{ opacity: opacity }}
          >
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

const NumbersBlock = () => {
  const navigation = useNavigation();
  // const priceHistory = usePriceHistory("ethereum");
  const { colors } = useTheme();

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
