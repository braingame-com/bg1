import { useContext } from 'react';
import { View, ScrollView, SafeAreaView, Animated } from 'react-native';
import { ScrollContext } from '../components/AppProvider';
import { s, t } from '../setup/styles';
import { TasksBlock } from '../components/blocks/TasksBlock';
import { VisualizationBlock } from '../components/blocks/VisualizationBlock';
import { AffirmationsBlock } from '../components/blocks/AffirmationsBlock';
import { NumbersBlock } from '../components/blocks/NumbersBlock';
import { PlanningBlock } from '../components/blocks/PlanningBlock';
import { JournalBlock } from '../components/blocks/JournalBlock';
import { Title } from '../components/typography';
import { isMobile } from '../utilities/helpers';

export function HomeList() {
  const { opacity, onScroll } = useContext(ScrollContext);
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
            <Title style={{ marginVertical: t.xs }}>Jordan</Title>
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
}
