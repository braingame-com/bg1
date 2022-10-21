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

export function DashboardHeader() {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...s.row,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ ...s.title, ...s.m_horizontal, color: colors.text }}>
        Dashboard
      </Text>
      <View style={{ flexDirection: "row" }}>
        {/* <TouchableOpacity
          style={{
            ...s.row,
            alignItems: "center",
            padding: 10,
          }}
          onPress={() => console.log("edit")}
        >
          <Octicons name="pencil" size={20} style={{ color: "#777777" }} />
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={{
            ...s.row,
            alignItems: "center",
            padding: 10,
          }}
          onPress={() => console.log("notifications")}
        >
          <Octicons name="bell" size={20} style={{ color: "#777777" }} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}