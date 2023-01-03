import { useTheme } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isMobile } from "../utilities/helpers";
import { s, t } from "../setup/styles";
import { Octicons } from "@expo/vector-icons";
import { Button } from "../components/primitives";
import { Text } from "../components/typography";
import { VideosList } from "./VideosList";
import { Video } from "./Video";

const Stack = createNativeStackNavigator();

export function Videos({ route, navigation }) {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerShadowVisible: true,
        headerTitleStyle: {
          fontSize: isMobile ? t.medium : t.large,
          marginLeft: isMobile ? 0 : t.small,
        },
      }}
    >
      <Stack.Screen
        name="VideosList"
        component={VideosList}
        options={{ headerTitle: "Videos" }}
      />
      <Stack.Screen
        name="Video"
        component={Video}
        options={{
          headerTitle: " ",
          headerLeft: () => (
            <Button
              type="Naked"
              icon="chevron-left"
              onPress={() => navigation.navigate("VideosList")}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
