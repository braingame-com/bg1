import {
  Text,
  View,
  Button,
  Switch,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { s } from "../../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function JournalBlock() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Journal Screen")}
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
            Journal
          </Text>
          <Text style={{ ...s.pill, ...s.info, ...s.m_left_2 }}>To do</Text>
          {/* <Text style={{ ...s.pill, ...s.success, ...s.m_left }}>
          <Octicons name="check" size={15} />
        </Text> */}
        </View>
        {/* <View style={s.block_btn}>
          <Octicons name="chevron-right" size={20} color="#777777" />
        </View> */}
      </View>
    </TouchableOpacity>
  );
}
