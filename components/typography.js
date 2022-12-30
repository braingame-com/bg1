import { Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { styles as s } from "../setup/styles";

export function Title({ text, style }) {
  const { colors } = useTheme();
  return (
    <Text style={{ ...s.title, color: colors.text, ...style }}>{text}</Text>
  );
}

export function Heading({ text, style }) {
  const { colors } = useTheme();
  return (
    <Text style={{ ...s.heading, color: colors.text, ...style }}>{text}</Text>
  );
}

export function Subtitle({ text, style }) {
  const { colors } = useTheme();
  return (
    <Text style={{ ...s.subtitle, color: colors.text, ...style }}>{text}</Text>
  );
}

export function BoldText({ text, style }) {
  const { colors } = useTheme();
  return (
    <Text style={{ color: colors.text, fontWeight: "bold", ...style }}>
      {text}
    </Text>
  );
}

export function BodyText({ text, style }) {
  const { colors } = useTheme();
  return <Text style={{ color: colors.text, ...style }}>{text}</Text>;
}

export function SmallText({ text, style }) {
  const { colors } = useTheme();
  return (
    <Text style={{ fontSize: 10, color: colors.text, ...style }}>{text}</Text>
  );
}
