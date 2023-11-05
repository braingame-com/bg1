import { useState } from 'react';
import {
  ScrollView,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
  Image,
  Pressable,
  TextInput,
  Platform,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';
import { Text, Small } from './typography';
import {
  NavigationProp,
  ParamListBase,
  useTheme,
} from '@react-navigation/native';

import { s, t } from '../setup/styles';
import { isMobile } from '../setup/helpers';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fat } from '@fortawesome/pro-thin-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Svg, { Path } from 'react-native-svg';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { InputFieldProps, TagProps } from '../setup/types';

library.add(fab, fad, fal, far, fas, fat);

export const ScrollPage = ({
  children,
  style,
}: {
  children?: any;
  style?: any;
}) => (
  <ScrollView
    style={{ padding: t.l, ...style }}
    showsVerticalScrollIndicator={false}
  >
    {children}
  </ScrollView>
);

interface ButtonProps {
  style?: StyleProp<TextStyle>;
  type?: string;
  text?: string;
  icon?: string;
  iconSize?: string | number;
  iconColor?: string;
  iconType?: string;
  onPress?: () => void;
  contentStyle?: StyleProp<TextStyle>;
}

export const Button: React.FC<ButtonProps> = ({
  style,
  type,
  text,
  icon,
  iconSize,
  iconColor,
  iconType,
  onPress,
  contentStyle,
}) => {
  const { colors } = useTheme();
  const isPrimary = type === 'Primary' ? true : false;
  const isSecondary = type === 'Secondary' ? true : false;
  const isNegative = type === 'Negative' ? true : false;
  const isNaked = type === 'Naked' ? true : false;
  const [loading, setLoading] = useState(false);

  return (
    <Pressable
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
          borderRadius: isNaked ? 0 : t.s,
          padding: isNaked ? 0 : t.s,
          paddingHorizontal: isNaked ? 0 : t.l,
          overflow: 'hidden',
          ...s.row,
          alignSelf: 'flex-start',
          ...(typeof style === 'object' && style !== null ? style : {}),
        }}
      >
        {icon && (
          <Icon
            name={icon}
            size={
              iconSize === 'small'
                ? undefined
                : iconSize
                ? iconSize
                : 'secondary'
            }
            color={iconColor ? iconColor : isPrimary ? t.primary : colors.text}
            style={{ marginRight: text ? t.s : 0 }}
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
                left: t.m,
                top: t.xs * 2.5,
                zIndex: 999,
                opacity: loading ? 0 : 1,
                marginRight:
                  text == null || text === '' ? 0 : isNaked ? t.xs : t.s,
                color: isPrimary ? t.primary : t.grey,
                fontSize: t.l,
                ...contentStyle,
              }}
            />
          </View>
        )} */}
        <Text
          style={{
            opacity: loading ? 0 : 1,
            color: isPrimary ? t.primary : colors.text,
            fontSize: t.m,
            ...(typeof contentStyle === 'object' && contentStyle !== null
              ? contentStyle
              : {}),
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
    </Pressable>
  );
};

interface BackButtonProps {
  text?: string;
  onPress: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({ text, onPress }) => (
  <Pressable onPress={onPress}>
    <Row style={{ padding: t.m }}>
      <Icon name="chevron-left" size="primary" style={{ marginRight: t.m }} />
      <Text>{text}</Text>
    </Row>
  </Pressable>
);

export const Dot = ({ style }: { style?: StyleProp<ViewStyle> }) => (
  <Icon name="circle" type="fas" size={t.xxs} color={t.grey} style={style} />
);

export const Column = ({
  style,
  children,
}: {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        ...(typeof style === 'object' && style !== null ? style : {}),
      }}
    >
      {children}
    </View>
  );
};

export const Row = ({
  style,
  children,
}: {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...(typeof style === 'object' && style !== null ? style : {}),
      }}
    >
      {children}
    </View>
  );
};

export const ResponsiveRow = ({
  style,
  children,
}: {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}) => {
  return (
    <View
      style={{
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        ...(typeof style === 'object' && style !== null ? style : {}),
      }}
    >
      {children}
    </View>
  );
};

export function Divider({
  height,
  color,
  style,
}: {
  height?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}) {
  const { colors } = useTheme();
  return (
    <View
      style={{
        height: height || 1,
        backgroundColor: color || colors.border,
        marginVertical: t.l,
        ...(typeof style === 'object' && style !== null ? style : {}),
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
        icon="bookmark"
        iconSize={t.m}
        style={{ padding: t.xs }}
        contentStyle={{ color: colors.text, fontSize: t.m }}
        onPress={() => console.log('Save')}
      />
      <Button
        type="Naked"
        text="Share"
        icon={Platform.OS === 'ios' ? 'share' : 'share-nodes'}
        iconSize={t.m}
        style={{ padding: t.xs }}
        contentStyle={{ color: colors.text, fontSize: t.m }}
        onPress={() => console.log('Share')}
      />
      <Divider style={{ marginVertical: t.xs, marginHorizontal: -t.m }} />
      <Button
        type="Naked"
        text="Not interested"
        icon="ban"
        iconSize={t.m}
        style={{ padding: t.xs }}
        contentStyle={{ color: colors.text, fontSize: t.m }}
        onPress={() => console.log('Not interested')}
      />
    </View>
  );
};

export const ActivityIndicator = () => (
  <RNActivityIndicator size={isMobile ? 'small' : 'large'} />
);

export const InputField: React.FC<InputFieldProps> = ({
  icon,
  iconType,
  placeholder,
  textContentType,
  secureTextEntry,
  value,
  onChangeText,
  onSubmitEditing,
  onKeyPress,
  style,
}) => {
  const { colors } = useTheme();
  const [secure, setSecure] = useState(secureTextEntry);

  return (
    <View
      style={{
        backgroundColor: colors.card,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: t.s,
        paddingHorizontal: t.s,
        borderRadius: t.s,
        padding: t.s,
      }}
    >
      {icon && <Icon name={icon} type={iconType} />}
      <TextInput
        style={{
          ...s.account_input,
          fontFamily: 'SohneBook',
          color: colors.text,
          paddingRight: secureTextEntry ? t.m * 3.5 : t.m,
          fontSize: t.m,
          ...style,
        }}
        placeholder={placeholder}
        placeholderTextColor={t.grey}
        textContentType={textContentType}
        secureTextEntry={secure}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        onKeyPress={onKeyPress}
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
            marginLeft: t.m,
            top: t.xs * 2.5,
            zIndex: 999,
            color: t.grey,
            fontSize: t.l,
            right: t.m,
          }}
        />
      )}
    </View>
  );
};

type ProfileIconProps = {
  navigation: NavigationProp<ParamListBase>;
};

export const ProfileIcon: React.FC<ProfileIconProps> = ({ navigation }) => (
  <Pressable
    style={{
      ...s.row,
      alignItems: 'center',
      marginRight: isMobile ? t.l : t.xl,
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
        width: (isMobile ? t.l : t.xl) * 1.5,
        height: (isMobile ? t.l : t.xl) * 1.5,
        borderRadius: 999,
      }}
    />
  </Pressable>
);

interface IconProps {
  name: string;
  color?: string;
  size?: string | number;
  type?: string;
  style?: StyleProp<ViewStyle>;
}

type IconPrefix = 'far' | 'fas' | 'fab';

export const Icon: React.FC<IconProps> = ({
  name,
  color,
  size,
  type,
  style,
}) => {
  const sizeMap =
    // human readable size
    { primary: t.xl, secondary: t.l, small: t.s }[
      size as 'primary' | 'secondary' | 'small'
    ] ||
    // or provided value
    size ||
    // else medium
    t.m;

  if (name === 'brain-game') {
    return (
      <Svg
        viewBox="0 0 24 24"
        fill={color || t.white}
        width={sizeMap}
        height={sizeMap}
        style={{
          ...(typeof style === 'object' && style !== null ? style : {}),
        }}
      >
        <Path d="m20.88,7.56l1.56-.78,1.56-.78v-2.88c0-.57-.15-1.1-.42-1.56-.27-.47-.67-.87-1.14-1.14C21.98.15,21.45,0,20.88,0H3.12C2.55,0,2.02.15,1.56.42c-.47.27-.87.67-1.14,1.14-.27.46-.42.99-.42,1.56v17.76c0,.57.15,1.1.42,1.56.27.47.67.87,1.14,1.14.46.27.99.42,1.56.42h17.76c.57,0,1.1-.15,1.56-.42.47-.27.87-.67,1.14-1.14.27-.46.42-.99.42-1.56v-10.44h-8.88l-3.12,1.56,3.12,1.56h5.76v5.76c0,.19-.03.38-.1.55l-2.2-1.1-.58-.29-12.95-6.48,12.95-6.48.58-.29,2.2-1.1c.06.17.1.35.1.55v2.88Zm-5.05,13.32H4.68c-.86,0-1.56-.7-1.56-1.56v-4.79l12.71,6.35ZM3.12,9.47v-4.79c0-.86.7-1.56,1.56-1.56h11.14L3.12,9.47Z" />
      </Svg>
    );
  } else if (name === 'grid-dashboard-light') {
    return (
      <Svg
        viewBox="0 0 448 512"
        fill={color || t.white}
        width={sizeMap}
        height={sizeMap}
        style={{
          ...(typeof style === 'object' && style !== null ? style : {}),
        }}
      >
        <Path d="m248,128H40c-22.1,0-40,17.9-40,40v48c0,22.1,17.9,40,40,40h208c22.1,0,40-17.9,40-40v-48c0-22.1-17.9-40-40-40Zm8,88c0,4.4-3.6,8-8,8H40c-4.4,0-8-3.6-8-8v-48c0-4.4,3.6-8,8-8h208c4.4,0,8,3.6,8,8v48Zm104-88h48c22.1,0,40,17.9,40,40v48c0,22.1-17.9,40-40,40h-48c-22.1,0-40-17.9-40-40v-48c0-22.1,17.9-40,40-40ZM40,320c-4.4,0-8,3.6-8,8v48c0,4.4,3.6,8,8,8h48c4.4,0,8-3.6,8-8v-48c0-4.4-3.6-8-8-8h-48ZM0,328c0-22.1,17.9-40,40-40h48c22.1,0,40,17.9,40,40v48c0,22.1-17.9,40-40,40h-48c-22.1,0-40-17.9-40-40v-48Zm200-8c-4.4,0-8,3.6-8,8v48c0,4.4,3.6,8,8,8h48c4.4,0,8-3.6,8-8v-48c0-4.4-3.6-8-8-8h-48Zm-40,8c0-22.1,17.9-40,40-40h48c22.1,0,40,17.9,40,40v48c0,22.1-17.9,40-40,40h-48c-22.1,0-40-17.9-40-40v-48Zm248-168h-48c-4.4,0-8,3.6-8,8v48c0,4.4,3.6,8,8,8h48c4.4,0,8-3.6,8-8v-48c0-4.4-3.6-8-8-8Zm-48,160c-4.4,0-8,3.6-8,8v48c0,4.4,3.6,8,8,8h48c4.4,0,8-3.6,8-8v-48c0-4.4-3.6-8-8-8h-48Zm-40,8c0-22.1,17.9-40,40-40h48c22.1,0,40,17.9,40,40v48c0,22.1-17.9,40-40,40h-48c-22.1,0-40-17.9-40-40v-48Z" />
      </Svg>
    );
  } else if (name === 'grid-dashboard-solid') {
    return (
      <Svg
        viewBox="0 0 448 512"
        fill={color || t.white}
        width={sizeMap}
        height={sizeMap}
        style={{
          ...(typeof style === 'object' && style !== null ? style : {}),
        }}
      >
        <Path d="m0,328c0-22.1,17.9-40,40-40h48c22.1,0,40,17.9,40,40v48c0,22.1-17.9,40-40,40h-48c-22.1,0-40-17.9-40-40v-48Zm160,0c0-22.1,17.9-40,40-40h48c22.1,0,40,17.9,40,40v48c0,22.1-17.9,40-40,40h-48c-22.1,0-40-17.9-40-40v-48Zm160,0c0-22.1,17.9-40,40-40h48c22.1,0,40,17.9,40,40v48c0,22.1-17.9,40-40,40h-48c-22.1,0-40-17.9-40-40v-48Zm-72-200H40c-22.1,0-40,17.9-40,40v48c0,22.1,17.9,40,40,40h208c22.1,0,40-17.9,40-40v-48c0-22.1-17.9-40-40-40Zm112,0h48c22.1,0,40,17.9,40,40v48c0,22.1-17.9,40-40,40h-48c-22.1,0-40-17.9-40-40v-48c0-22.1,17.9-40,40-40Z" />
      </Svg>
    );
  } else {
    return (
      name && (
        <FontAwesomeIcon
          icon={[(type as IconPrefix) || 'fal', name as any]}
          color={color || t.white}
          size={sizeMap as number}
          style={{
            ...(typeof style === 'object' && style !== null ? style : {}),
          }}
        />
      )
    );
  }
};

export const Tag: React.FC<TagProps> = ({ children, icon, position }) => {
  const { colors } = useTheme();

  return (
    <Small style={{ ...s.tag, color: colors.text, gap: t.xs }} mono={true}>
      {children}
      {icon && <Icon name={icon} color={t.grey} size={t.s} />}
    </Small>
  );
};
