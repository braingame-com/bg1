import {
  Text,
  View,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import { s } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";

export function LessonsHeader() {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...s.row,
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
      }}
    >
      <Text style={{ ...s.title, color: colors.text, marginBottom: -10 }}>
        Lessons
      </Text>
      <View style={{ flexDirection: "row" }}>
        {/* <TouchableOpacity
          style={{
            ...s.row,
            alignItems: "center",
          }}
          onPress={() => console.log("search")}
        >
          <Octicons name="search" size={20} style={{ color: "#777777" }} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
