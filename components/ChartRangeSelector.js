import {
  Text,
  View,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import { styles as s } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";

export function ChartRangeSelector() {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...s.m_vertical,
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        style={{
          ...s.btn_secondary,
          ...s.switch_btn,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderColor: colors.border,
          backgroundColor: colors.card,
        }}
        onPress={() => {
          console.log("1W");
        }}
      >
        <Text style={{ color: "#777777" }}>1W</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...s.btn_secondary,
          ...s.switch_btn,
          borderRadius: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderColor: colors.border,
        }}
        onPress={() => {
          console.log("1M");
        }}
      >
        <Text style={{ color: "#777777" }}>1M</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...s.btn_secondary,
          ...s.switch_btn,
          borderRadius: 0,
          borderRightWidth: 0,
          borderColor: colors.border,
        }}
        onPress={() => {
          console.log("1Y");
        }}
      >
        <Text style={{ color: "#777777" }}>1Y</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...s.btn_secondary,
          ...s.switch_btn,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderColor: colors.border,
        }}
        onPress={() => {
          console.log("All");
        }}
      >
        <Text style={{ color: "#777777" }}>All</Text>
      </TouchableOpacity>
    </View>
  );
}