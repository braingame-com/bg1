import { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';
import { Text } from './typography';
import { useTheme } from '@react-navigation/native';
import { s, t } from './styles';
import { isMobile } from '../utilities/helpers';
import { Icon } from '../utilities/svg-icons';

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
        {icon === '' && (
          <Icon
            name="lock"
            style={{
              ...s.iconMedium,
              fill: t.white,
              position: 'absolute',
              left: t.medium,
              top: t.xs * 2.5,
              zIndex: 999,
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
          <Icon
            name="google"
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
          <Icon
            name="apple"
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
      {icon === 'mail' && (
        <Icon
          name="Mail"
          style={{
            ...s.iconMedium,
            fill: t.white,
            position: 'absolute',
            left: t.medium,
            top: t.xs * 2.5,
            zIndex: 999,
          }}
        />
      )}
      {icon === 'lock' && (
        <Icon
          name="Lock"
          style={{
            ...s.iconMedium,
            fill: t.white,
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
          fontFamily: 'SohneBook',
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
      {secureTextEntry &&
        secure(
          <Icon
            name="eye"
            style={{
              ...s.iconMedium,
              fill: t.white,
              position: 'absolute',
              left: t.medium,
              top: t.xs * 2.5,
              zIndex: 999,
              color: t.grey,
              fontSize: t.large,
              right: t.medium,
            }}
            onPress={() => setSecure(!secure)}
          />
        )}
      {secureTextEntry &&
        !secure(
          <Icon
            name="eye-slash"
            style={{
              ...s.iconMedium,
              fill: t.white,
              position: 'absolute',
              left: t.medium,
              top: t.xs * 2.5,
              zIndex: 999,
              color: t.grey,
              fontSize: t.large,
              right: t.medium,
            }}
            onPress={() => setSecure(!secure)}
          />
        )}
    </View>
  );
};

export const ProfileIcon = ({ navigation }) => (
  <TouchableOpacity
    style={{
      ...s.row,
      alignItems: 'center',
      marginRight: isMobile ? t.large : t.xl,
    }}
    onPress={() => navigation.navigate('Profile')}
    hitSlop={{
      top: t.xs,
      bottom: t.xs,
      left: t.xs,
      right: t.xs,
    }}
  >
    <Image
      source={{
        uri: 'https://cdn.shopify.com/s/files/1/0171/7947/6022/files/polish.jpg?v=1671745772',
      }}
      style={{
        width: (isMobile ? t.large : t.xl) * 1.5,
        height: (isMobile ? t.large : t.xl) * 1.5,
        borderRadius: 999,
      }}
    />
  </TouchableOpacity>
);
