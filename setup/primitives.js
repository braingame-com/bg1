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

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Svg, { Path } from 'react-native-svg';

library.add(fab, far, fas);

export function Button({
  style,
  type,
  text,
  icon,
  iconSize,
  iconType,
  // svg,
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
          <Icon
            name={icon}
            size={iconSize === 'small' ? null : 'secondary'}
            style={{ marginRight: text ? t.small : 0 }}
            type={iconType}
          />
        )}
        {/* {icon === '' && (
          <View style={{ backgroundColor: 'green' }}>
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
          </View>
        )} */}
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

export const BackButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Row style={{ padding: t.medium }}>
      <Icon
        name="chevron-left"
        size="primary"
        type="fas"
        style={{ marginRight: t.medium }}
      />
      <Text>{text}</Text>
    </Row>
  </TouchableOpacity>
);

export const Dot = ({ contentStyle }) => (
  <Button type="Naked" icon="circle" contentStyle={contentStyle} />
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
  iconType,
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
        <Icon
          name={icon}
          type={iconType}
          style={{
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
      {secureTextEntry && (
        <Button
          type="Naked"
          icon={secure ? 'eye' : 'eye-slash'}
          iconType={'fas'}
          onPress={() => {
            console.log(secure);
            setSecure(!secure);
          }}
          style={{
            position: 'absolute',
            marginLeft: t.medium,
            top: t.xs * 2.5,
            zIndex: 999,
            color: t.grey,
            fontSize: t.large,
            right: t.medium,
          }}
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

export const Icon = ({ name, color, size, type, style }) => {
  const sizeMap =
    { primary: t.xl, secondary: t.large, small: t.small }[size] || t.medium;

  if (name === 'brain-game') {
    return (
      <Svg
        viewBox="0 0 24 24"
        fill={color || t.white}
        width={sizeMap}
        height={sizeMap}
        style={{ outline: 'none', ...style }}
      >
        <Path d="m20.88,7.56l1.56-.78,1.56-.78v-2.88c0-.57-.15-1.1-.42-1.56-.27-.47-.67-.87-1.14-1.14C21.98.15,21.45,0,20.88,0H3.12C2.55,0,2.02.15,1.56.42c-.47.27-.87.67-1.14,1.14-.27.46-.42.99-.42,1.56v17.76c0,.57.15,1.1.42,1.56.27.47.67.87,1.14,1.14.46.27.99.42,1.56.42h17.76c.57,0,1.1-.15,1.56-.42.47-.27.87-.67,1.14-1.14.27-.46.42-.99.42-1.56v-10.44h-8.88l-3.12,1.56,3.12,1.56h5.76v5.76c0,.19-.03.38-.1.55l-2.2-1.1-.58-.29-12.95-6.48,12.95-6.48.58-.29,2.2-1.1c.06.17.1.35.1.55v2.88Zm-5.05,13.32H4.68c-.86,0-1.56-.7-1.56-1.56v-4.79l12.71,6.35ZM3.12,9.47v-4.79c0-.86.7-1.56,1.56-1.56h11.14L3.12,9.47Z" />
      </Svg>
    );
  } else if (name === 'apple') {
    return (
      <Svg
        viewBox="0 0 24 24"
        fill={color || t.white}
        width={sizeMap}
        height={sizeMap}
        style={{ outline: 'none', ...style }}
      >
        <Path d="m2.28,13.72c0-.43,0-.85,0-1.28.07-.45.11-.91.2-1.36.35-1.68,1.13-3.1,2.55-4.11,1.39-.99,2.93-1.35,4.6-.84.56.17,1.1.4,1.64.62.61.24,1.2.25,1.81,0,.46-.19.92-.36,1.38-.53,1.84-.65,3.6-.47,5.26.57.58.37,1.05.85,1.44,1.42-1.74,1.19-2.7,2.78-2.57,4.92.13,2.16,1.32,3.59,3.23,4.55-.25.59-.48,1.2-.76,1.78-.65,1.32-1.46,2.52-2.5,3.57-.75.75-1.65,1.15-2.72.92-.5-.1-.99-.3-1.47-.5-.99-.41-2-.52-3.03-.24-.53.14-1.04.38-1.55.57-.5.19-1.02.3-1.56.24-.71-.08-1.3-.44-1.76-.95-.57-.63-1.12-1.29-1.61-1.98-1.31-1.83-2.07-3.89-2.43-6.11-.07-.42-.11-.84-.16-1.27Z" />
        <Path d="m16.8.04c.3,2.49-1.59,5.05-4.04,5.5-.18.03-.36.02-.54.03-.21.02-.26-.08-.27-.27-.03-.52.04-1.03.22-1.51.71-1.97,2.08-3.21,4.12-3.69.09-.02.18-.04.27-.06.08,0,.16,0,.24,0Z" />
      </Svg>
    );
  } else if (name === 'google') {
    return (
      <Svg
        viewBox="0 0 24 24"
        fill={color || t.white}
        width={sizeMap}
        height={sizeMap}
        style={{ outline: 'none', ...style }}
      >
        <Path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <Path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <Path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          fill="#FBBC05"
        />
        <Path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          fill="#EA4335"
        />
      </Svg>
    );
  } else {
    return (
      name && (
        <FontAwesomeIcon
          icon={[type || 'far', name]}
          color={color || t.white}
          size={sizeMap}
          style={{ outline: 'none', ...style }}
        />
      )
    );
  }
};
