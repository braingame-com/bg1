import {
  View,
  TouchableOpacity,
  Button,
  Switch,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { s, t } from "../../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { ChartRangeSelector } from "../../components/ChartRangeSelector";
import { usePriceHistory } from "@shopify/react-native-skia";
import { useNavigation } from "@react-navigation/native";
import { Text } from "../../components/typography";

const screenWidth = Dimensions.get("window").width;
const isMobile = screenWidth < 769 ? true : false;

export function NumbersBlock() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  // const priceHistory = usePriceHistory("ethereum");
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Numbers Screen")}
      style={{ flex: 0.7 }}
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
            <Octicons name="check" size={15} />
          </Text> */}
          </View>
          <View style={{ ...s.row }}>
            <View style={s.block_btn}>
              <Octicons name="filter" size={t.large} color="#777777" />
            </View>
            {/* <View style={s.block_btn}>
              <Octicons name="chevron-right" size={t.large} color="#777777" />
            </View> */}
          </View>
        </View>
        <View
          style={{
            ...s.m_top,
            ...s.m_bottom_2,
            height: isMobile ? 230 : 330,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 12,
          }}
        >
          {/* <LineGraph points={priceHistory} color="#4484B2" /> */}
        </View>
        <ChartRangeSelector />
      </View>
    </TouchableOpacity>
  );
}
