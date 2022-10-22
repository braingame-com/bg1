import {
  Text,
  View,
  Button,
  Switch,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { styles as s } from "../../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function JournalBlock() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Journal Screen")}>
      <View
        style={{
          ...s.rounded,
          backgroundColor: colors.card,
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
            Journal
          </Text>
          {/* <Text style={{ ...s.pill, ...s.info, ...s.m_left }}>To do</Text> */}
          {/* <Text style={{ ...s.pill, ...s.success, ...s.m_left }}>
          <Octicons name="check" size={15} />
        </Text> */}
        </View>
        {/* <Octicons name="chevron-right" size={20} color="#777777" /> */}
      </View>
    </TouchableOpacity>
  );
}
