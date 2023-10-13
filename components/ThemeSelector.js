// import { useState, useContext } from 'react';
import {
  View,
  TouchableOpacity,
  // useColorScheme,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useThemeUpdate } from '../components/AppProvider';
import { s, t } from '../setup/styles';
import { Heading, Text } from '../setup/typography';
import { Icon } from '../setup/primitives';

export function ThemeSelector() {
  const { colors } = useTheme();
  // const auto = useColorScheme() === 'dark' ? true : false;
  // const [isEnabled, setIsEnabled] = useState(auto);
  const toggleTheme = useThemeUpdate();
  return (
    <View style={{ ...s.container, ...s.m_horizontal }}>
      <Heading style={{ color: colors.text, paddingBottom: t.small }}>
        Theme
      </Heading>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            ...s.btn_secondary,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderColor: colors.border,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
          onPress={() => {
            console.log('light');
          }}
        >
          <Icon name="sun-bright" size="secondary" />
          <Text style={{ ...s.subtitle, ...s.m_left, color: colors.text }}>
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...s.btn_secondary,
            borderRadius: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderColor: colors.border,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
          onPress={() => {
            console.log('dark');
          }}
        >
          <Icon name="moon" size="secondary" />
          <Text style={{ ...s.subtitle, ...s.m_left, color: colors.text }}>
            Dark
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...s.btn_secondary,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderColor: colors.border,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: colors.card,
          }}
          onPress={toggleTheme}
        >
          <Icon name="sparkles" size="secondary" />
          <Text style={{ ...s.subtitle, ...s.m_left, color: colors.text }}>
            Auto
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
