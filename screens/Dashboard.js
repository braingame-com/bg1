import { useContext } from "react";
import { Text, View, Button, useColorScheme, Appearance } from "react-native";
import { styles } from "../setup/styles";
import { ThemeContext } from "../App";

export function Dashboard({ navigation }) {
  let darkTheme = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text style={{ color: "grey", fontSize: 33 }}>Dashboard</Text>
      <Text className="rounded-full" style={styles.rounded}>
        darkTheme is [{String(darkTheme)}]
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
