import { Text as RNText } from "react-native";
import { useTheme } from "@react-navigation/native";
import { s, t } from "../setup/styles";

export function Title({ style, children }) {
  const { colors } = useTheme();
  return (
    <RNText style={{ ...s.title, color: colors.text, ...style }}>
      {children}
    </RNText>
  );
}

export function Heading({ style, children }) {
  const { colors } = useTheme();
  return (
    <RNText style={{ ...s.heading, color: colors.text, ...style }}>
      {children}
    </RNText>
  );
}

export function Subtitle({ style, children }) {
  const { colors } = useTheme();
  return (
    <RNText style={{ ...s.subtitle, color: colors.text, ...style }}>
      {children}
    </RNText>
  );
}

export function Bold({ style, children }) {
  const { colors } = useTheme();
  return (
    <RNText
      style={{ color: colors.text, fontSize: 16, fontWeight: "bold", ...style }}
    >
      {children}
    </RNText>
  );
}

export function Text({ style, children }) {
  const { colors } = useTheme();
  return (
    <RNText style={{ color: colors.text, fontSize: 16, ...style }}>
      {children}
    </RNText>
  );
}

export function Small({ style, children }) {
  const { colors } = useTheme();
  return (
    <RNText style={{ fontSize: 12, color: colors.text, ...style }}>
      {children}
    </RNText>
  );
}
