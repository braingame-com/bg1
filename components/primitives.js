import { View, TouchableOpacity, Text, Platform } from "react-native";
import { useTheme } from "@react-navigation/native";
import { s, t } from "../setup/styles";
import { Octicons } from "@expo/vector-icons";

export function Button({ style, type, text, icon, onPress, contentStyle }) {
  const { colors } = useTheme();
  const isPrimary = type === "Primary" ? true : false;
  const isSecondary = type === "Secondary" ? true : false;
  const isNegative = type === "Negative" ? true : false;
  const isNaked = type === "Naked" ? true : false;
  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={{ top: t.small, bottom: t.small, left: t.small, right: t.small }}
    >
      <View
        style={{
          backgroundColor: isPrimary
            ? t.primaryFaded
            : isSecondary
            ? colors.card
            : isNegative
            ? t.negativeFaded
            : "transparent",
          borderColor: isPrimary ? t.primary : colors.border,
          borderWidth: isNaked ? 0 : 1,
          borderRadius: isNaked ? 0 : 12,
          padding: isNaked ? 0 : t.small,
          paddingHorizontal: isNaked ? 0 : t.large,
          overflow: "hidden",
          ...s.row,
          alignSelf: "flex-start",
          ...style,
        }}
      >
        {icon && (
          <Octicons
            name={icon}
            size={t.large}
            style={{
              marginRight: text == null || text === "" ? 0 : t.small,
              color: isPrimary ? t.primary : "#777777",
              ...contentStyle,
            }}
          />
        )}
        <Text
          style={{
            color: isPrimary ? t.primary : colors.text,
            ...contentStyle,
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export function Row({ style, children }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        ...style,
      }}
    >
      {children}
    </View>
  );
}

export function Divider({ style }) {
  const { colors } = useTheme();
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        ...style,
      }}
    ></View>
  );
}

export const VideoDropdownMenu = () => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...s.dropdownMenu,
        backgroundColor: colors.card,
      }}
    >
      <Button
        type="Naked"
        text="Save"
        icon={"bookmark"}
        style={{ padding: t.xs }}
        contentStyle={{ color: colors.text }}
        onPress={() => console.log("Save")}
      />
      <Button
        type="Naked"
        text="Share"
        icon={Platform.OS === "ios" ? "share" : "share-android"}
        style={{ padding: t.xs }}
        contentStyle={{ color: colors.text }}
        onPress={() => console.log("Share")}
      />
      <Divider style={{ marginVertical: t.xs, marginHorizontal: -t.medium }} />
      <Button
        type="Naked"
        text="Not interested"
        icon={"skip"}
        style={{ padding: t.xs }}
        contentStyle={{ color: colors.text }}
        onPress={() => console.log("Not interested")}
      />
    </View>
  );
};
