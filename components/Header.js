import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Text } from "./typography";

export function Header() {
  const { colors } = useTheme();
  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text>Hello world</Text>
    </View>
  );
}
