import {
  Text,
  View,
  TouchableOpacity,
  Button,
  Switch,
  SafeAreaView,
} from "react-native";
import { styles as s } from "../../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { ChartRangeSelector } from "../../components/ChartRangeSelector";
import { usePriceHistory } from "@shopify/react-native-skia"

export function NumbersBlock() {
  const { colors } = useTheme();
   // const priceHistory = usePriceHistory('ethereum')
  return (
    <View style={{ ...s.rounded, backgroundColor: colors.card }}>
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
              ...s.heading,
              color: colors.text,
            }}
          >
            Numbers
          </Text>
          <Text style={{ ...s.pill, ...s.info, ...s.m_left }}>To do</Text>
          {/* <Text style={{ ...s.pill, ...s.success, ...s.m_left }}>
            Done &nbsp;
            <Octicons name="check" size={15} />
          </Text> */}
        </View>
        <View style={{ ...s.row, alignItems: "center" }}>
          <View style={{ ...s.row, alignItems: "center" }}>
            <TouchableOpacity
              style={{ ...s.m_right_2 }}
              onPress={() => console.log("filter")}
            >
              <Octicons name="filter" size={20} color="#777777" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("go to numbers")}>
              <Octicons name="chevron-right" size={20} color="#777777" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          ...s.m_vertical,
          paddingVertical: 100,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(128,128,128,.11)",
          borderWidth: 1,
          borderColor: colors.border,
          borderRadius: 10,
        }}
      >
        {/* <LineGraph points={priceHistory} color="#4484B2" /> */}
      </View>
      <ChartRangeSelector />
    </View>
  );
}
