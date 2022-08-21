import { Text, View, Button, Switch } from "react-native";
import { styles as s } from "../setup/styles";
import { useTheme } from "@react-navigation/native";

export function Dashboard({ navigation }) {
  const { colors } = useTheme();
  return (
    <View style={s.container}>
      <Text
        style={{
          ...s.subtitle,
          color: colors.text,
        }}
      >
        Hello world :)
      </Text>
      {/* <Button
          title="Go to Articles"
          onPress={() =>
            navigation.navigate("Articles", {
              itemId: 42,
              otherParam: "Jordan is cool",
            })
          }
        /> */}
    </View>
  );
}
