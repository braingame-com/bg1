import { Text, View, useColorScheme } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export function Shop({ route }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        className={useColorScheme() === "dark" ? "text-white" : "text-black"}
      >
        Shop Screen
      </Text>
    </View>
  );
}
