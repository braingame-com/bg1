import { Text, View, SafeAreaView } from "react-native";
import { styles as s } from "../setup/styles";
import { useTheme } from "@react-navigation/native";

export function Videos({ route }) {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={s.container}>
      <View style={s.container}>
        <Text style={{ ...s.title, ...s.m_horizontal, color: colors.text }}>
          Videos
        </Text>
      </View>
      <View
        style={{
          ...s.container,
          ...s.centered,
        }}
      >
        <Text
          style={{
            ...s.subtitle,
            color: colors.text,
          }}
        >
          Coming soon...
        </Text>
      </View>
      {/* <Button
          title="Go to Articles"
          onPress={() =>
            navigation.navigate("Articles", {
              itemId: 42,
              otherParam: "Jordan is cool",
            })
          }
        /> */}
    </SafeAreaView>
  );
}
