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

export function VisualizationBlock() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Visualization Screen")}
      style={{ ...s.flex }}
    >
      <View
        style={{
          ...s.rounded,
          backgroundColor: "transparent",
          borderColor: colors.border,
          borderWidth: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <View style={{ ...s.row }}>
          <Text
            style={{
              ...s.heading,
              color: colors.text,
            }}
          >
            Visualization
          </Text>
          {/* <Text style={{ ...s.pill, ...s.info, ...s.m_left }}>To do</Text> */}
          <Text style={{ ...s.pill, ...s.success, ...s.m_left_2 }}>
            Done &nbsp;
            <Octicons name="check" size={15} />
          </Text>
        </View>
        {/* <View style={s.block_btn}>
          <Octicons name="chevron-right" size={20} color="#777777" />
        </View> */}
      </View>
    </TouchableOpacity>
  );
}
