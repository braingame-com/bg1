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

export function AffirmationsBlock() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Affirmations Screen")}
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
            Affirmations
          </Text>
          <Text style={{ ...s.pill, ...s.warn, ...s.m_left_2 }}>To do</Text>
          {/* <Text style={{ ...s.pill, ...s.success, ...s.m_left }}>
            Done &nbsp;
            <Octicons name="check" size={15} />
          </Text> */}
        </View>
        {/* <View style={s.block_btn}>
          <Octicons name="chevron-right" size={t.large} color="#777777" />
        </View> */}
      </View>
    </TouchableOpacity>
  );
}
