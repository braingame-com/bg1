import { useTheme } from '@react-navigation/native';
import { View, Pressable } from 'react-native';
import { IconBG } from '../utilities/svg-icons';
import { s, t } from '../setup/styles';
import { isMobile, platform } from '../utilities/helpers';

export function TabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...s.tabBar,
        backgroundColor: colors.background,
        borderColor: colors.border,
      }}
    >
      {!isMobile && (
        <View
          style={{
            height: t.medium * 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconBG
            fill={colors.text}
            onClick={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
      )}

      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const icon = options.tabBarIcon({
          fill: isFocused ? colors.primary : t.grey,
          focused: isFocused ? true : false,
        });

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
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
              background:
                isFocused && platform === 'web'
                  ? t.primaryFaded
                  : 'transparent',
              borderRadius: t.medium,
              marginHorizontal: isMobile ? 0 : t.large,
              marginTop:
                (label === 'Settings') & !isMobile
                  ? 'auto'
                  : (label === 'Home') & !isMobile
                  ? t.large
                  : 0,
              marginBottom: (label === 'Settings') & !isMobile ? t.large : 0,
            }}
            key={index}
          >
            <View
              style={{
                ...s.tabBarIconWrapper,
                width: t.large,
              }}
            >
              {icon}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
