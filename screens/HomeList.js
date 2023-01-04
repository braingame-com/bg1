import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { s, t } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { TasksBlock } from "../components/blocks/TasksBlock";
import { VisualizationBlock } from "../components/blocks/VisualizationBlock";
import { AffirmationsBlock } from "../components/blocks/AffirmationsBlock";
import { NumbersBlock } from "../components/blocks/NumbersBlock";
import { PlanningBlock } from "../components/blocks/PlanningBlock";
import { JournalBlock } from "../components/blocks/JournalBlock";
import { Button, Row } from "../components/primitives";
import { AccountModal } from "../components/AccountModal";
import { Text, Title } from "../components/typography";
import { isMobile } from "../utilities/helpers";

let userIsLoggedIn = true;

console.log;

export function HomeList({ scroll, setScroll }) {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>scroll is: {scroll.toString()}</Text>
      <Button
        type="Primary"
        text="set scroll to 180"
        icon="fold-down"
        onPress={() => setScroll(180)}
      />
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: !isMobile ? 1 : 0 }}
        style={{ ...s.m_horizontal }}
      >
        {userIsLoggedIn ? (
          <View style={{ ...s.container, flex: 1 }}>
            <Title style={{ marginVertical: t.xs }}>Home</Title>
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
              <PlanningBlock />
              <JournalBlock />
            </View>
          </View>
        ) : (
          <View
            style={{
              ...s.centered,
              height: t.medium * 20,
              borderRadius: t.medium,
              marginTop: t.large,
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
