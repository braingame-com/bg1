import {
  Text,
  Button,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { styles as s } from "../setup/styles";
import { Octicons } from "@expo/vector-icons";

export function Products({ navigation }) {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ ...s.container }}>
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
          Products Screen!
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
