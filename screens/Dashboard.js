import {
  Text,
  View,
  ScrollView,
  Button,
  Switch,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { styles as s } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { DashboardHeader } from "../components/DashboardHeader";
import { TasksBlock } from "../components/blocks/TasksBlock";
import { VisualizationBlock } from "../components/blocks/VisualizationBlock";
import { AffirmationsBlock } from "../components/blocks/AffirmationsBlock";
import { NumberChartBlock } from "../components/blocks/NumberChartBlock";
import { PlanningBlock } from "../components/blocks/PlanningBlock";
import { JournalBlock } from "../components/blocks/JournalBlock";

export function Dashboard({ navigation }) {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ ...s.container }}>
      <ScrollView style={{ ...s.container }}>
        <DashboardHeader />
        <View style={{ ...s.container, marginBottom: 10 }}>
          <TasksBlock />
          {/* <VisualizationBlock /> */}
          {/* <AffirmationsBlock /> */}
          <NumberChartBlock />
          {/* <PlanningBlock /> */}
          <JournalBlock />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
