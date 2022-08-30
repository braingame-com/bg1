import { Text, View, Button, Switch, SafeAreaView } from "react-native";
import { styles as s } from "../../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { ChartRangeSelector } from "../../components/ChartRangeSelector";

export function ChartsBlock() {
  const { colors } = useTheme();
  return (
    <View style={{ ...s.rounded }}>
      <View
        style={{
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
            Charts
          </Text>
          {/* <Text style={{ ...s.pill, ...s.info, ...s.m_left }}>To do</Text>
          <Text style={{ ...s.pill, ...s.success, ...s.m_left }}>
            Done &nbsp;
            <Octicons name="check" size={15} />
          </Text> */}
        </View>
        <View style={{ ...s.row, alignItems: "center" }}>
          <View style={{ ...s.row, alignItems: "center" }}>
            <Octicons name="filter" size={20} color="#777777" />
          </View>
        </View>
      </View>
      <View
        style={{
          ...s.m_vertical,
          backgroundColor: "midnightblue",
          paddingVertical: 100,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#777777" }}>Charts here</Text>
      </View>
      <ChartRangeSelector />
    </View>
  );
}
