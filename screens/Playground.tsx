import { View, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { s, t } from '../setup/styles';
import { Row, Button, Divider } from '../design/primitives';
import {
  Title,
  Heading,
  Subtitle,
  Bold,
  Text,
  Small,
} from '../design/typography';
import { isMobile } from '../setup/helpers';

const DesignPrinciples = ({ style }) => {
  const { colors } = useTheme();
  return (
    <View style={{ ...style }}>
      <Heading text="Design Principles" />
      <View
        style={{
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: colors.card,
            ...s.card,
          }}
        >
          <Subtitle text="Brand Voice" style={{ ...s.m_top }} />
          <Text style={{ ...s.m_bottom, color: colors.text }}>
            Coming soon...
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.card,
            ...s.card,
          }}
        >
          <Subtitle text="Palette" style={{ ...s.m_top }} />
          <Text style={{ ...s.m_bottom, color: colors.text }}>
            Coming soon...
          </Text>
        </View>
      </View>
    </View>
  );
};

const Styling = ({ style }) => {
  const { colors } = useTheme();
  return (
    <View style={{ ...style }}>
      <Heading text="Styling" />
      <Text style={{ ...s.m_bottom, color: colors.text }}>Coming soon...</Text>
    </View>
  );
};

const Typography = ({ style }) => {
  const { colors } = useTheme();
  return (
    <View style={{ ...style }}>
      <Heading text="Typography" />
      <Heading text="Heading" />
      <Subtitle text="Subtitle" />
      <Text style={{ color: colors.text }}>Text</Text>
      <Small text="Small Text" style={{ ...s.m_vertical }} />
    </View>
  );
};

const Components = ({ style }) => {
  const { colors } = useTheme();
  return (
    <View style={{ ...style }}>
      <Heading text="Components" />
      <Subtitle text="Button" style={{ ...s.m_top }} />
      <Text style={{ ...s.m_bottom, color: colors.text }}>
        There are 4 main types of button. These are: Primary, Secondary,
        Destructive and Naked.
      </Text>
      <Bold text="Primary" style={{ ...s.m_top }} />
      <Button text="Primary" type="Primary" style={{ ...s.m_vertical }} />
      <Text style={{ ...s.m_bottom, color: colors.text }}>
        This is a main button, used only for the primary action that we want a
        user to take, for example, log in or add to cart. It is in our primary
        colors, with a rounded border.
      </Text>
      <Bold text="Secondary" style={{ ...s.m_bottom, ...s.m_top }} />
      <Text style={{ ...s.m_bottom, color: colors.text }}>Something</Text>
      <Bold text="Destructive" style={{ ...s.m_bottom }} />
      <Text style={{ ...s.m_bottom, color: colors.text }}>Something</Text>
      <Bold text="Naked" style={{ ...s.m_bottom }} />
      <Text style={{ ...s.m_bottom, color: colors.text }}>Something</Text>
      <View style={{ flexDirection: isMobile ? 'column' : 'row' }}>
        <Button text="Secondary" type="Secondary" style={{ ...s.res_gap }} />
        <Button
          text="Destructive"
          type="Destructive"
          style={{ ...s.res_gap }}
        />
        <Button text="Naked" type="Naked" style={{ ...s.res_gap }} />
      </View>
    </View>
  );
};

export function Playground() {
  const { colors } = useTheme();
  return (
    <ScrollView style={{ ...s.p_all_2 }} showsVerticalScrollIndicator={false}>
      <View style={{ paddingBottom: 40 }}>
        <Title text="Documentation" style={{ ...s.m_bottom_2 }} />
        <DesignPrinciples
          style={{ ...s.doc_block, borderColor: colors.border }}
        />
        <Styling style={{ ...s.doc_block, borderColor: colors.border }} />
        <Typography style={{ ...s.doc_block, borderColor: colors.border }} />
        <Components style={{ ...s.doc_block, borderColor: colors.border }} />
      </View>
    </ScrollView>
  );
}
