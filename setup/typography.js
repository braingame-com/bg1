import { Text as RNText } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { s, t } from './styles';

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
      style={{
        color: colors.text,
        fontSize: t.medium,
        fontWeight: 'bold',
        ...style,
      }}
    >
      {children}
    </RNText>
  );
}

export function Text({ style, children }) {
  const { colors } = useTheme();
  return (
    <RNText style={{ color: colors.text, fontSize: t.medium, ...style }}>
      {children}
    </RNText>
  );
}

export function Small({ style, children }) {
  const { colors } = useTheme();
  return (
    <RNText style={{ fontSize: t.small, color: colors.text, ...style }}>
      {children}
    </RNText>
  );
}
