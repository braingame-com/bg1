import {
  View,
  Button,
  Switch,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { s, t } from "../../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text } from "../../components/typography";

export function VisualizationBlock() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Visualization Screen")}
      style={{ ...s.flex }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
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
}
