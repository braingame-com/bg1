import { useTheme } from "@react-navigation/native";
import { View, Pressable, Text, Dimensions } from "react-native";
import { IconBG } from "../utilities/svg-icons";
import { s, t } from "../setup/styles";

const screenWidth = Dimensions.get("window").width;
const isMobile = screenWidth < 769 ? true : false;

export function TabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...s.tabBar,
        backgroundColor: colors.background,
        borderColor: colors.border,
      }}
    >
      {!isMobile && (
        <View
          style={{
            height: 64,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconBG
            fill={colors.text}
            onClick={() => {
              navigation.navigate("Home");
            }}
          />
        </View>
      )}

      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const icon = options.tabBarIcon({
          fill: isFocused ? colors.primary : "#777777",
          focused: isFocused ? true : false,
        });

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              ...s.tabBarItem,
              flex: 1,
              background: isFocused ? t.primaryFaded : "transparent",
              borderRadius: 16,
              marginHorizontal: isMobile ? 0 : 20,
              marginTop:
                (label === "Settings") & !isMobile
                  ? "auto"
                  : (label === "Home") & !isMobile
                  ? 20
                  : 0,
              marginBottom: (label === "Settings") & !isMobile ? 20 : 0,
            }}
            key={index}
          >
            <View
              style={{
                ...s.tabBarIconWrapper,
                width: label === "Lessons" ? 24 : 20,
              }}
            >
              {icon}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
