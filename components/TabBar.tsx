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
        const getTabColor = (
          isFocused: boolean,
          label: string,
          isFaded = true
        ) => {
          if (isFocused && typeof label === 'string') {
            if (label.includes('Dashboard'))
              return isFaded ? t.tabPurpleFaded : t.tabPurple;
            if (label.includes('Lessons'))
              return isFaded ? t.tabGreenFaded : t.tabGreen;
            if (label.includes('Videos'))
              return isFaded ? t.tabOrangeFaded : t.tabOrange;
            if (label.includes('Shop'))
              return isFaded ? t.tabBlueFaded : t.tabBlue;
            if (label.includes('Profile'))
              return isFaded ? t.tabYellowFaded : t.tabYellow;
          }
          return 'transparent';
        };
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const icon = options?.tabBarIcon?.({
          color: isFocused
            ? getTabColor(isFocused, label.toString(), false)
            : t.white,
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
            style={
              {
                ...s.tabBarItem,
                flex: 1,
                backgroundColor:
                  !isMobile && getTabColor(isFocused, label.toString()),
                borderRadius: t.medium,
                marginHorizontal: isMobile ? 0 : t.large,
                marginTop:
                  label === 'Profile' && !isMobile
                    ? 'auto'
                    : typeof label === 'string' &&
                      label.includes('Dashboard') &&
                      !isMobile
                    ? t.xxl
                    : 0,
                marginBottom: label === 'Profile' && !isMobile ? t.large : 0,
              } as any
            }
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
