import { Text as RNText } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { t } from './styles';

export function Title({ style, children }) {
  const { colors } = useTheme();
  return (
    <RNText
      style={{
        fontFamily: 'SohnePowerful',
        fontSize: t.xxl,
        color: colors.text,
        ...style,
      }}
    >
      {children}
    </RNText>
  );
}

export function Heading({ style, children }) {
  const { colors } = useTheme();
  return (
    <RNText
      style={{
        fontFamily: 'SohnePowerful',
        fontSize: t.large,
        color: colors.text,
        ...style,
      }}
    >
      {children}
    </RNText>
  );
}

export function Subtitle({ style, children }) {
  const { colors } = useTheme();
  return (
    <RNText
      style={{
        fontFamily: 'SohnePowerful',
        fontSize: t.medium * 1.25,
        color: colors.text,
        ...style,
      }}
    >
      {children}
    </RNText>
  );
}

export function Bold({ style, children }) {
  const { colors } = useTheme();
  return (
    <RNText
      style={{
        fontFamily: 'SohnePowerful',
        color: colors.text,
        fontSize: t.medium,
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
    <RNText
      style={{
        fontFamily: 'SohneBook',
        color: colors.text,
        fontSize: t.medium,
        ...style,
      }}
    >
      {children}
    </RNText>
  );
}

export function Small({ style, children }) {
  const { colors } = useTheme();
  return (
    <RNText
      style={{
        fontFamily: 'SohneBook',
        fontSize: t.small,
        color: colors.text,
        ...style,
      }}
    >
      {children}
    </RNText>
  );
}

export function ReallySmall({ style, children }) {
  const { colors } = useTheme();
  return (
    <RNText
      style={{
        fontFamily: 'SohneLight',
        fontSize: t.small,
        color: colors.text,
        ...style,
      }}
    >
      {children}
    </RNText>
  );
}
