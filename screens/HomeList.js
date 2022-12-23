import { useRef } from "react";
import {
  Text,
  View,
  ScrollView,
  Button,
  Switch,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Animated,
  Dimensions,
} from "react-native";
import { styles as s } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { TasksBlock } from "../components/blocks/TasksBlock";
import { VisualizationBlock } from "../components/blocks/VisualizationBlock";
import { AffirmationsBlock } from "../components/blocks/AffirmationsBlock";
import { NumbersBlock } from "../components/blocks/NumbersBlock";
import { PlanningBlock } from "../components/blocks/PlanningBlock";
import { JournalBlock } from "../components/blocks/JournalBlock";

const screenWidth = Dimensions.get("window").width;
const isMobile = screenWidth < 769 ? true : false;

let userIsLoggeIn = true;

export function HomeList({ navigation }) {
  const { colors } = useTheme();
  const scrollY = useRef(new Animated.Value(0)).current;
  const opacity = scrollY.interpolate({
    inputRange: [20, 40],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  const headerOpacity = scrollY.interpolate({
    inputRange: [30, 40],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  const borderOpacity = scrollY.interpolate({
    inputRange: [30, 40],
    outputRange: ["rgba(0,0,0,0)", colors.border],
    extrapolate: "clamp",
  });
  const onScroll = (e) => {
    scrollY.setValue(e.nativeEvent.contentOffset.y);
  };
  return (
    <SafeAreaView style={{ marginBottom: 39 }}>
      <Animated.View
        style={{
          ...s.row,
          height: isMobile ? 49 : 64,
          alignItems: isMobile ? "flex-end" : "center",
          justifyContent: "space-between",
          paddingHorizontal: isMobile ? 20 : 30,
          borderBottomColor: isMobile ? borderOpacity : colors.border,
          borderBottomWidth: 1,
          paddingBottom: isMobile ? 10 : 0,
        }}
      >
        <TouchableOpacity
          style={{
            ...s.row,
            ...s.centered,
            borderRadius: 999,
            width: isMobile ? 30 : 20,
          }}
          onPress={() => console.log("edit")}
        >
          <Octicons name="pencil" size={20} style={{ color: "#777777" }} />
        </TouchableOpacity>
        <Animated.Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: colors.text,
            opacity: headerOpacity,
          }}
        >
          Home
        </Animated.Text>
        <TouchableOpacity
          style={{
            ...s.row,
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            source={{
              uri:
                "https://cdn.shopify.com/s/files/1/0171/7947/6022/files/polish.jpg?v=1671745772",
            }}
            style={{
              width: isMobile ? 28 : 38,
              height: isMobile ? 28 : 38,
              borderColor: colors.border,
              borderWidth: 1,
              borderRadius: 999,
            }}
          />
        </TouchableOpacity>
      </Animated.View>
      <ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={{ ...s.m_horizontal, padding: isMobile ? 0 : 10 }}
      >
        <Animated.View
          style={{
            ...s.container,
            ...s.row,
            alignItems: "center",
            justifyContent: "space-between",
            opacity: opacity,
            marginBottom: -5,
          }}
        >
          <Animated.Text
            style={{
              ...s.title,
              ...s.m_top,
              color: colors.text,
              marginBottom: 0,
            }}
          >
            Home
          </Animated.Text>
        </Animated.View>
        <View
          style={{
            ...s.container,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: isMobile ? "column" : "row",
              gap: 20,
            }}
          >
            <NumbersBlock />
            <TasksBlock />
          </View>
          <View
            style={{
              flexDirection: isMobile ? "column" : "row",
              gap: 20,
            }}
          >
            <VisualizationBlock />
            <AffirmationsBlock />
          </View>
          <View
            style={{
              flexDirection: isMobile ? "column" : "row",
              gap: 20,
            }}
          >
            <PlanningBlock />
            <JournalBlock />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
