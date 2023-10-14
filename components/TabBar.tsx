import { useTheme, Route } from '@react-navigation/native';
import { View, Pressable, StyleSheet } from 'react-native';
import { s, t } from '../setup/styles';
import { Icon } from '../design/primitives';
import { isMobile, platform } from '../setup/helpers';
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

export const TabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        ...s.tabBar,
        backgroundColor: colors.background,
        borderColor: colors.border,
      }}
    >
      {!isMobile && <BrainGameLogo />}

      {state.routes.map((route: Route<string>, index: number) => {
        const isFocused = state.index === index;

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const icon = options?.tabBarIcon?.({
          color: !isMobile && isFocused ? colors.primary : t.white,
          focused: isFocused ? true : false,
          size: t.xl,
        });

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, params: {}, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              ...s.tabBarItem,
              flex: 1,
              backgroundColor:
                isFocused && platform === 'web'
                  ? t.primaryFaded
                  : 'transparent',
              borderRadius: t.medium,
              marginHorizontal: isMobile ? 0 : t.large,
              marginTop:
                label === 'Settings' && !isMobile
                  ? 'auto'
                  : typeof label === 'string' &&
                    label.includes('Dashboard') &&
                    !isMobile
                  ? t.xxl
                  : 0,
              marginBottom: label === 'Settings' && !isMobile ? t.large : 0,
            }}
            key={index}
          >
            <View
              style={{
                ...s.tabBarIconWrapper,
              }}
            >
              {icon}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

const BrainGameLogo = () => (
  <View
    style={{
      height: t.medium * 4,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: t.xxl,
    }}
  >
    <Icon name="brain-game" size="primary" />
  </View>
);
