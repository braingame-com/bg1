import {
  View,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import { s, t } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { Text } from "../components/typography";

export function LessonsHeader() {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...s.row,
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: t.large,
      }}
    >
      <Text style={{ ...s.title, color: colors.text, marginBottom: -t.small }}>
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
          <Octicons name="search" size={t.large} style={{ color: "#777777" }} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
