import {
  View,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  ScrollView,
  useColorScheme,
  Dimensions,
} from "react-native";
import { useThemeUpdate } from "../components/AppProvider";
import { s, t } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { SettingsHeader } from "../components/SettingsHeader";
import { ThemeSelector } from "../components/ThemeSelector";
import { AccountSettings } from "../components/AccountSettings";
import { Support } from "../components/Support";
import { Links } from "../components/Links";
import { Text } from "../components/typography";

const screenWidth = Dimensions.get("window").width;
const isMobile = screenWidth < 769 ? true : false;

let userIsASubscriber = false;

export function Settings({ route }) {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ ...s.container, flex: 1, ...s.m_top }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ThemeSelector />
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
              marginTop: t.small,
              marginBottom: 30,
              borderRadius: 12,
              borderColor: t.primary,
              borderWidth: 1,
              ...s.info,
            }}
            onPress={() => console.log("donate")}
          >
            {userIsASubscriber ? (
              <View style={{ ...s.row }}>
                <Octicons
                  name="smiley"
                  size={t.large}
                  style={{ ...s.m_right, ...s.info_text }}
                />
                <Text style={{ ...s.info_text }}>View donations</Text>
              </View>
            ) : (
              <View style={{ ...s.row }}>
                <Octicons
                  name="code-of-conduct"
                  size={t.large}
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
