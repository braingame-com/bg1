import { View, TouchableOpacity, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { styles as s } from "../setup/styles";
import { Octicons } from "@expo/vector-icons";

export function Button({ style, type, text, icon, onPress, contentStyle }) {
  const { colors } = useTheme();
  const isPrimary = type === "Primary" ? true : false;
  const isSecondary = type === "Secondary" ? true : false;
  const isDestructive = type === "Destructive" ? true : false;
  const isNaked = type === "Naked" ? true : false;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: isPrimary ? "rgba(73, 166, 233, .2)" : colors.card,
          borderColor: isPrimary ? "#49A6E9" : colors.border,
          borderWidth: isNaked ? 0 : 1,
          borderRadius: isNaked ? 0 : 12,
          ...s.p_all,
          ...s.p_horizontal_2,
          overflow: "hidden",
          ...s.row,
          alignSelf: "flex-start",
          padding: isNaked && 0,
          paddingHorizontal: isNaked && 0,
          ...style,
        }}
      >
        {icon && (
          <Octicons
            name={icon}
            size={20}
            style={{
              marginRight: text == null || text === "" ? 0 : 10,
              color: isPrimary ? "#49A6E9" : "#777777",
              ...contentStyle,
            }}
          />
        )}
        <Text
          style={{
            color: isPrimary ? "#49A6E9" : colors.text,
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
