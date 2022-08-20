import { useContext } from "react";
import { Text, View, Button, useColorScheme, Appearance } from "react-native";

import { ThemeContext } from "../App";

export function Dashboard({ navigation }) {
  let darkTheme = useContext(ThemeContext);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "grey", fontSize: 33 }}>Dashboard</Text>
      <Text
        className="rounded-full"
        style={{
          marginTop: 10,
          padding: 10,
          backgroundColor: "rgba(128,128,128,.2)",
          color: "grey",
          fontSize: 20,
        }}
      >
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
