import { View, Pressable, Text, Dimensions } from "react-native";
import { IconBG } from "../utilities/svg-icons";
import { styles as s } from "../setup/styles";

const screenWidth = Dimensions.get("window").width;
const isMobile = screenWidth < 769 ? true : false;

export function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ ...s.tabBar }}>
      {!isMobile && (
        <View
          style={{
            paddingLeft: 40,
            height: 64,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <IconBG
            fill="white"
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
          fill: isFocused ? "#49A6E9" : "#777777",
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
              background: isFocused ? "rgba(73, 166, 233, .2)" : "transparent",
              borderRadius: 20,
              marginHorizontal: isMobile ? 0 : 20,
              marginTop: (label === "Settings") & !isMobile ? "auto" : 0,
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
            <Text
              style={{
                ...s.tabBarLabel,
                color: isFocused ? "#49A6E9" : "#777777",
              }}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
