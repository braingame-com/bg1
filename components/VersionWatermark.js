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
import { IconBG, IconCode } from "../utilities/svg-icons";
import { Octicons } from "@expo/vector-icons";

export function VersionWatermark() {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...s.row,
        padding: 20,
        bottom: 0,
        width: "100%",
        alignItems: "center",
      }}
    >
      <IconBG fill={colors.border} />
      <Octicons
        name="code"
        color={colors.border}
        size={20}
        style={{ marginHorizontal: 10 }}
      />
      <Text style={{ color: colors.border }}>v1.1.1</Text>
    </View>
  );
}
