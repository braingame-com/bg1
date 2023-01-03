import { useRef, useState } from "react";
import {
  View,
  ScrollView,
  Switch,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Animated,
  Dimensions,
  Modal,
  TextInput,
} from "react-native";
import { s, t } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { TasksBlock } from "../components/blocks/TasksBlock";
import { VisualizationBlock } from "../components/blocks/VisualizationBlock";
import { AffirmationsBlock } from "../components/blocks/AffirmationsBlock";
import { NumbersBlock } from "../components/blocks/NumbersBlock";
import { PlanningBlock } from "../components/blocks/PlanningBlock";
import { JournalBlock } from "../components/blocks/JournalBlock";
import { Button, Row } from "../components/primitives";
import { AccountModal } from "../components/AccountModal";
import { Text } from "../components/typography";

const screenWidth = Dimensions.get("window").width;
const isMobile = screenWidth < 769 ? true : false;

let userIsLoggedIn = true;

export function HomeList({ navigation }) {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: !isMobile && 1 }}
        style={{ ...s.m_horizontal }}
      >
        {userIsLoggedIn ? (
          <View style={{ ...s.container, flex: 1 }}>
            <View
              style={{
                flexDirection: isMobile ? "column" : "row",
                gap: t.large,
              }}
            >
              <NumbersBlock />
              <TasksBlock />
            </View>
            <View
              style={{
                flexDirection: isMobile ? "column" : "row",
                gap: t.large,
                flex: 1,
              }}
            >
              <VisualizationBlock />
              <AffirmationsBlock />
            </View>
            <View
              style={{
                flexDirection: isMobile ? "column" : "row",
                gap: t.large,
                flex: 1,
              }}
            >
              <PlanningBlock />
              <JournalBlock />
            </View>
          </View>
        ) : (
          <View
            style={{
              ...s.centered,
              height: 330,
              borderRadius: 16,
              marginTop: 25,
              ...s.m_horizontal,
            }}
          >
            <Row
              style={{
                borderBottomColor: colors.border,
                borderBottomWidth: 1,
                ...s.p_bottom_2,
              }}
            >
              <Button
                type="Primary"
                text="Log in"
                icon="sign-in"
                onPress={() => setModalVisible(true)}
              />
              <Text style={{ color: colors.text, ...s.m_left }}>
                to view dashboard
              </Text>
            </Row>
            <Text
              style={{
                color: colors.text,
                ...s.m_top_2,
                opacity: 0.5,
              }}
            >
              Don't have an account?
            </Text>
            <Button
              text="Sign up"
              style={{ ...s.m_top }}
              onPress={() => setModalVisible(true)}
            />
            <AccountModal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
