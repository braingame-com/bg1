import { Text as RNText, StyleProp, TextStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { t } from '../setup/styles';

interface TypographyProps {
  text?: string;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

export const Title: React.FC<TypographyProps> = ({ style, children }) => {
  const { colors } = useTheme();
  return (
    <RNText
      style={{
        fontFamily: 'SohneHalfFat',
        fontSize: t.xxl,
        color: colors.text,
        ...(typeof style === 'object' && style !== null ? style : {}),
      }}
    >
      {children}
    </RNText>
  );
};

export const Heading: React.FC<TypographyProps> = ({ style, children }) => {
  const { colors } = useTheme();
  return (
    <RNText
      style={{
        fontFamily: 'SohneStrong',
        fontSize: t.large,
        color: colors.text,
        ...(typeof style === 'object' && style !== null ? style : {}),
      }}
    >
      {children}
    </RNText>
  );
};

export const Subtitle: React.FC<TypographyProps> = ({ style, children }) => {
  const { colors } = useTheme();
  return (
    <RNText
      style={{
        fontFamily: 'SohneStrong',
        fontSize: t.medium * 1.25,
        color: colors.text,
        ...(typeof style === 'object' && style !== null ? style : {}),
      }}
    >
      {children}
    </RNText>
  );
};

export const Bold: React.FC<TypographyProps> = ({ style, children }) => {
  const { colors } = useTheme();
  return (
    <RNText
      style={{
        fontFamily: 'SohneStrong',
        color: colors.text,
        fontSize: t.medium,
        ...(typeof style === 'object' && style !== null ? style : {}),
      }}
    >
      {children}
    </RNText>
  );
};

export const Text: React.FC<TypographyProps> = ({ style, children }) => {
  const { colors } = useTheme();
  return (
    <RNText
      style={{
        fontFamily: 'SohneBook',
        color: colors.text,
        fontSize: t.medium,
        ...(typeof style === 'object' && style !== null ? style : {}),
      }}
    >
      {children}
    </RNText>
  );
};

export const Small: React.FC<TypographyProps> = ({ style, children }) => {
  const { colors } = useTheme();
  return (
    <RNText
      style={{
        fontFamily: 'SohneBook',
        fontSize: t.small,
        color: colors.text,
        ...(typeof style === 'object' && style !== null ? style : {}),
      }}
    >
      {children}
    </RNText>
  );
};

export const SmallThin: React.FC<TypographyProps> = ({ style, children }) => {
  const { colors } = useTheme();
  return (
    <RNText
      style={{
        fontFamily: 'SohneLight',
        fontSize: t.small,
        color: colors.text,
        ...(typeof style === 'object' && style !== null ? style : {}),
      }}
    >
      {children}
    </RNText>
  );
};
