import { useRef } from "react";
import {
  Text,
  View,
  ScrollView,
  Button,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from "react-native";
import { styles as s } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { HomeHeader } from "../components/HomeHeader";
import { TasksBlock } from "../components/blocks/TasksBlock";
import { VisualizationBlock } from "../components/blocks/VisualizationBlock";
import { AffirmationsBlock } from "../components/blocks/AffirmationsBlock";
import { NumbersBlock } from "../components/blocks/NumbersBlock";
import { PlanningBlock } from "../components/blocks/PlanningBlock";
import { JournalBlock } from "../components/blocks/JournalBlock";

export function HomeList({ navigation }) {
  const { colors } = useTheme();
  const scrollY = useRef(new Animated.Value(0)).current;
  const opacity = scrollY.interpolate({
    inputRange: [20, 40],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  const onScroll = (e) => {
    scrollY.setValue(e.nativeEvent.contentOffset.y);
  };
  return (
    <SafeAreaView style={{ ...s.container }}>
      <ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        style={{ ...s.container }}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          style={{
            opacity: opacity,
          }}
        >
          <HomeHeader />
        </Animated.View>
        <View
          style={{
            ...s.container,
            marginBottom: 10,
          }}
        >
          <TasksBlock />
          <VisualizationBlock />
          <AffirmationsBlock />
          <PlanningBlock />
          <JournalBlock />
          <NumbersBlock />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
