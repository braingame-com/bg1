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
          ...s.row,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ ...s.title, ...s.m_horizontal, color: colors.text }}>
          Shop
        </Text>
        <TouchableOpacity
          style={{
            ...s.row,
            alignItems: "center",
            padding: 10,
          }}
          onPress={() => navigation.toggleDrawer()}
        >
          <Text style={{ ...s.m_right, color: "#777777" }}>£0.00</Text>
          <Octicons
            name="sidebar-expand"
            size={20}
            style={{ color: "#777777" }}
          />
        </TouchableOpacity>
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
