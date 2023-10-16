import { Text as RNText, StyleProp, TextStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { t } from '../setup/styles';

interface TypographyProps {
  text?: string;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  mono?: boolean;
}

export const DisplayTitle: React.FC<TypographyProps> = ({
  style,
  children,
  mono,
}) => {
  const { colors } = useTheme();
  return (
    <RNText
      style={{
        fontFamily: `Sohne${mono ? 'Mono' : ''}HalfFat`,
        fontSize: t.xxxl,
        color: colors.text,
        marginBottom: t.xl,
        ...(typeof style === 'object' && style !== null ? style : {}),
      }}
    >
      {children}
    </RNText>
  );
};

export const Title: React.FC<TypographyProps> = ({ style, children, mono }) => {
  const { colors } = useTheme();
  return (
    <RNText
      style={{
        fontFamily: `Sohne${mono ? 'Mono' : ''}HalfFat`,
        fontSize: t.xxl,
        color: colors.text,
        marginBottom: t.large,
        ...(typeof style === 'object' && style !== null ? style : {}),
      }}
    >
      {children}
    </RNText>
  );
};

export const Heading: React.FC<TypographyProps> = ({
  style,
  children,
  mono,
}) => {
  const { colors } = useTheme();
  return (
    <RNText
      style={{
        fontFamily: `Sohne${mono ? 'Mono' : ''}Strong`,
        fontSize: t.large,
        color: colors.text,
        marginBottom: t.medium,
        ...(typeof style === 'object' && style !== null ? style : {}),
      }}
    >
      {children}
    </RNText>
  );
};

export const Subtitle: React.FC<TypographyProps> = ({
  style,
  children,
  mono,
}) => {
  const { colors } = useTheme();
  return (
    <RNText
      style={{
        fontFamily: `Sohne${mono ? 'Mono' : ''}Book`,
        fontSize: t.medium * 1.125,
        color: colors.text,
        marginBottom: t.medium,
        ...(typeof style === 'object' && style !== null ? style : {}),
      }}
    >
      {children}
    </RNText>
  );
};

export const Bold: React.FC<TypographyProps> = ({ style, children, mono }) => {
  const { colors } = useTheme();
  return (
    <RNText
      style={{
        fontFamily: `Sohne${mono ? 'Mono' : ''}Strong`,
        color: colors.text,
        fontSize: t.medium,
        ...(typeof style === 'object' && style !== null ? style : {}),
      }}
    >
      {children}
    </RNText>
  );
};

export const Text: React.FC<TypographyProps> = ({ style, children, mono }) => {
  const { colors } = useTheme();
  return (
    <RNText
      style={{
        fontFamily: `Sohne${mono ? 'Mono' : ''}Book`,
        color: colors.text,
        fontSize: t.medium,
        ...(typeof style === 'object' && style !== null ? style : {}),
      }}
    >
      {children}
    </RNText>
  );
};

export const Small: React.FC<TypographyProps> = ({ style, children, mono }) => {
  const { colors } = useTheme();
  return (
    <RNText
      style={{
        fontFamily: `Sohne${mono ? 'Mono' : ''}Book`,
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
