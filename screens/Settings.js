import {
  Text,
  View,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  ScrollView,
  useColorScheme,
  Dimensions,
} from "react-native";
import { useThemeUpdate } from "../components/AppProvider";
import { styles as s } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { SettingsHeader } from "../components/SettingsHeader";
import { ThemeSelector } from "../components/ThemeSelector";
import { AccountSettings } from "../components/AccountSettings";
import { Support } from "../components/Support";
import { Links } from "../components/Links";

const screenWidth = Dimensions.get("window").width;
const isMobile = screenWidth < 769 ? true : false;

let userIsASubscriber = false;

export function Settings({ route }) {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ ...s.container, flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SettingsHeader />
        <View style={{ maxWidth: 330 }}>
          <ThemeSelector />
        </View>
        <AccountSettings />
        <Support />
        <Links />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity
            style={{
              ...s.row,
              ...s.p_all,
              ...s.p_horizontal_2,
              ...s.m_horizontal_2,
              marginTop: 10,
              marginBottom: 30,
              borderRadius: 10,
              borderColor: "#49A6E9",
              borderWidth: 1,
              ...s.info,
            }}
            onPress={() => console.log("donate")}
          >
            {userIsASubscriber ? (
              <View style={{ ...s.row }}>
                <Octicons
                  name="smiley"
                  size={20}
                  style={{ ...s.m_right, ...s.info_text }}
                />
                <Text style={{ ...s.info_text }}>View donations</Text>
              </View>
            ) : (
              <View style={{ ...s.row }}>
                <Octicons
                  name="code-of-conduct"
                  size={20}
                  style={{ ...s.m_right, ...s.info_text }}
                />
                <Text style={{ ...s.info_text }}>Donate</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
