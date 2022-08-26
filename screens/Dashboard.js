import { Text, View, Button, Switch, SafeAreaView } from "react-native";
import { styles as s } from "../setup/styles";
import { useTheme } from "@react-navigation/native";

export function Dashboard({ navigation }) {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={s.container}>
      <View style={s.container}>
        <Text style={{ ...s.title, ...s.m_left }}>Dashboard</Text>
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
          Hello world :)
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
