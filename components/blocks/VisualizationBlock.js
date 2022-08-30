import { Text, View, Button, Switch, SafeAreaView } from "react-native";
import { styles as s } from "../../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";

export function VisualizationBlock() {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...s.rounded,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ ...s.row }}>
        <Text
          style={{
            ...s.subtitle,
            color: colors.text,
          }}
        >
          Visualization
        </Text>
        {/* <Text style={{ ...s.pill, ...s.info, ...s.m_left }}>To do</Text> */}
        <Text style={{ ...s.pill, ...s.success, ...s.m_left }}>
          Done &nbsp;
          <Octicons name="check" size={15} />
        </Text>
      </View>
      <Octicons name="chevron-right" size={20} color="#777777" />
    </View>
  );
}
