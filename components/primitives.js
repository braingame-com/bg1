import { View, TouchableOpacity, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { styles as s } from "../setup/styles";
import { Octicons } from "@expo/vector-icons";

export function Button({ style, type, text, icon, onPress }) {
  const { colors } = useTheme();
  const isPrimary = type === "Primary" ? true : false;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: isPrimary ? "rgba(73, 166, 233, .2)" : colors.card,
          borderColor: isPrimary ? "#49A6E9" : colors.border,
          borderWidth: 1,
          borderRadius: 10,
          ...s.p_all,
          ...s.p_horizontal_2,
          overflow: "hidden",
          ...s.row,
          ...style,
        }}
      >
        {icon && (
          <Octicons
            name={icon}
            size={20}
            style={{
              ...s.m_right,
              color: isPrimary ? "#49A6E9" : "#777777",
            }}
          />
        )}
        <Text style={{ color: isPrimary ? "#49A6E9" : colors.text }}>
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
