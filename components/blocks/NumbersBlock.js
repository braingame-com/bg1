import {
  View,
  TouchableOpacity,
  Button,
  Switch,
  SafeAreaView,
} from "react-native";
import { s, t } from "../../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { ChartRangeSelector } from "../../components/ChartRangeSelector";
import { usePriceHistory } from "@shopify/react-native-skia";
import { useNavigation } from "@react-navigation/native";
import { Text } from "../../components/typography";
import { isMobile } from "../../utilities/helpers";

export function NumbersBlock() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  // const priceHistory = usePriceHistory("ethereum");
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Numbers Screen")}
      style={{ flex: 0.8 }}
    >
      <View
        style={{
          ...s.card,
          backgroundColor: colors.card,
          ...s.m_vertical,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ ...s.row, ...s.m_bottom }}>
            <Text
              style={{
                ...s.heading,
                color: colors.text,
              }}
            >
              Numbers
            </Text>
            <Text style={{ ...s.pill, ...s.warn, ...s.m_left_2 }}>To do</Text>
            {/* <Text style={{ ...s.pill, ...s.success, ...s.m_left }}>
            Done &nbsp;
            <Octicons name="check" size={t.medium} />
          </Text> */}
          </View>
          <View style={{ ...s.row }}>
            <View style={s.block_btn}>
              <Octicons name="filter" size={t.large} color={t.grey} />
            </View>
            {/* <View style={s.block_btn}>
              <Octicons name="chevron-right" size={t.large} color={t.grey} />
            </View> */}
          </View>
        </View>
        <View
          style={{
            ...s.m_top,
            ...s.m_bottom_2,
            height: isMobile ? t.medium ** 2 : t.medium * 24,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: t.small,
          }}
        >
          {/* <LineGraph points={priceHistory} color="#4484B2" /> */}
        </View>
        <ChartRangeSelector />
      </View>
    </TouchableOpacity>
  );
}
