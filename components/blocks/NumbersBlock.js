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
import { usePriceHistory } from "@shopify/react-native-skia";
import { useNavigation } from "@react-navigation/native";

export function NumbersBlock() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  // const priceHistory = usePriceHistory('ethereum')
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Numbers Screen")}>
      <View
        style={{
          ...s.rounded,
          backgroundColor: "transparent",
          borderColor: colors.border,
          borderWidth: 1,
        }}
      >
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
            <Text style={{ ...s.pill, ...s.info, ...s.m_left_2 }}>To do</Text>
            {/* <Text style={{ ...s.pill, ...s.success, ...s.m_left }}>
            Done &nbsp;
            <Octicons name="check" size={15} />
          </Text> */}
          </View>
          <View style={s.block_btn}>
            <Octicons name="chevron-right" size={20} color="#777777" />
          </View>
        </View>
        <View
          style={{
            ...s.m_vertical,
            paddingVertical: 100,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(16,16,16,.5)",
            borderRadius: 10,
          }}
        >
          {/* <LineGraph points={priceHistory} color="#4484B2" /> */}
        </View>
        <ChartRangeSelector />
      </View>
    </TouchableOpacity>
  );
}
