import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

export function Videos({ route }) {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: colors.text }}>Coming soon...</Text>
    </View>
  );
}
