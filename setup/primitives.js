import { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Platform,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { s, t } from './styles';
import { Octicons } from '@expo/vector-icons';
import { isMobile } from '../utilities/helpers';
import { IconGoogle, IconApple } from '../utilities/svg-icons';

export function Button({
  style,
  type,
  text,
  icon,
  svg,
  onPress,
  contentStyle,
}) {
  const { colors } = useTheme();
  const isPrimary = type === 'Primary' ? true : false;
  const isSecondary = type === 'Secondary' ? true : false;
  const isNegative = type === 'Negative' ? true : false;
  const isNaked = type === 'Naked' ? true : false;
  const [loading, setLoading] = useState(loading);
  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={{ top: t.xs, bottom: t.xs, left: t.xs, right: t.xs }}
    >
      <View
        style={{
          backgroundColor: isPrimary
            ? t.primaryFaded
            : isSecondary
            ? colors.card
            : isNegative
            ? t.negativeFaded
            : 'transparent',
          borderColor: isPrimary ? t.primary : colors.border,
          borderWidth: isNaked ? 0 : 1,
          borderRadius: isNaked ? 0 : t.small,
          padding: isNaked ? 0 : t.small,
          paddingHorizontal: isNaked ? 0 : t.large,
          overflow: 'hidden',
          ...s.row,
          alignSelf: 'flex-start',
          ...style,
        }}
      >
        {icon && (
          <Octicons
            name={icon}
            style={{
              opacity: loading ? 0 : 1,
              marginRight:
                text == null || text === '' ? 0 : isNaked ? t.xs : t.small,
              color: isPrimary ? t.primary : t.grey,
              fontSize: t.large,
              ...contentStyle,
            }}
          />
        )}
        {svg === 'Google' && (
          <IconGoogle
            style={{
              opacity: loading ? 0 : 1,
              marginRight:
                text == null || text === '' ? 0 : isNaked ? t.xs : t.small,
              fill: isPrimary ? t.primary : t.grey,
              width: t.large,
              height: t.large,
              ...contentStyle,
            }}
          />
        )}
        {svg === 'Apple' && (
          <IconApple
            style={{
              opacity: loading ? 0 : 1,
              marginRight:
                text == null || text === '' ? 0 : isNaked ? t.xs : t.small,
              fill: isPrimary ? t.primary : t.grey,
              width: t.large,
              height: t.large,
              ...contentStyle,
            }}
          />
        )}
        <Text
          style={{
            opacity: loading ? 0 : 1,
            color: isPrimary ? t.primary : colors.text,
            fontSize: t.medium,
            ...contentStyle,
          }}
        >
          {text}
        </Text>
        {loading && (
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
            }}
          >
            <RNActivityIndicator />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

export const Dot = ({ contentStyle }) => (
  <Button type="Naked" icon="dot-fill" contentStyle={contentStyle} />
);

export function Row({ style, children }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
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
        icon={'bookmark'}
        style={{ padding: t.xs }}
        contentStyle={{ color: colors.text }}
        onPress={() => console.log('Save')}
      />
      <Button
        type="Naked"
        text="Share"
        icon={Platform.OS === 'ios' ? 'share' : 'share-android'}
        style={{ padding: t.xs }}
        contentStyle={{ color: colors.text }}
        onPress={() => console.log('Share')}
      />
      <Divider style={{ marginVertical: t.xs, marginHorizontal: -t.medium }} />
      <Button
        type="Naked"
        text="Not interested"
        icon={'skip'}
        style={{ padding: t.xs }}
        contentStyle={{ color: colors.text }}
        onPress={() => console.log('Not interested')}
      />
    </View>
  );
};

export const ActivityIndicator = () => (
  <RNActivityIndicator size={isMobile ? 'small' : 'large'} />
);

export const InputField = ({
  icon,
  placeholder,
  textContentType,
  secureTextEntry,
  value,
  onChangeText,
}) => {
  const { colors } = useTheme();
  const [secure, setSecure] = useState(secureTextEntry);
  return (
    <View style={{ position: 'relative', justifyContent: 'center' }}>
      {icon && (
        <Octicons
          name={icon}
          style={{
            color: t.grey,
            fontSize: t.large,
            position: 'absolute',
            left: t.medium,
            top: t.xs * 2.5,
            zIndex: 999,
          }}
        />
      )}
      <TextInput
        style={{
          ...s.account_input,
          backgroundColor: colors.card,
          color: colors.text,
          paddingRight: secureTextEntry ? t.medium * 3.5 : t.medium,
          fontSize: t.medium,
        }}
        placeholder={placeholder}
        placeholderTextColor={t.grey}
        textContentType={textContentType}
        secureTextEntry={secure}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
      />
      {secureTextEntry && (
        <Octicons
          name={secure ? 'eye' : 'eye-closed'}
          style={{
            color: t.grey,
            fontSize: t.large,
            position: 'absolute',
            right: t.medium,
            top: t.xs * 2.5,
            zIndex: 999,
          }}
          onPress={() => setSecure(!secure)}
        />
      )}
    </View>
  );
};