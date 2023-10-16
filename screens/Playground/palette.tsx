import { useTheme } from '@react-navigation/native';
import { Pressable, View } from 'react-native';
import { Heading, Small, Text } from '../../design/typography';
import { isMobile } from '../../setup/helpers';
import { s, t } from '../../setup/styles';
import { Button, Divider, Icon, Row, Tag } from '../../design/primitives';
import { PaletteInterface } from '../../setup/types';
import { useState } from 'react';

export const palette: PaletteInterface = [
  {
    heading: 'Light',
    description: 'The default (light) theme of the app.',
    items: {
      'colors.primary': 'rgb(59, 115, 245)',
      'colors.background': 'rgb(247, 249, 249)',
      'colors.card': '#ffffff',
      'colors.text': 'rgb(15, 20, 25)',
      'colors.border': 'rgb(239, 243, 244)',
      'colors.notification': 'rgb(240, 97, 109)',
    },
  },
  {
    heading: 'Dark',
    description: 'The dark theme of the app.',
    items: {
      'colors.primary': 'rgb(59, 115, 245)',
      'colors.background': '#000000',
      'colors.card': 'rgb(22, 24, 28)',
      'colors.text': 'rgb(231, 233, 234)',
      'colors.border': 'rgb(47, 51, 54)',
      'colors.notification': 'rgb(240, 97, 109)',
    },
  },
  {
    heading: 'Basic',
    description: 'General, mutli-purpose brand colors.',
    items: {
      't.white': '#ffffff',
      't.grey': '#777777',
      't.greyFaded': 'rgba(128, 128, 128, .15)',
      't.black': '#000000',
    },
  },
  {
    heading: 'Informative',
    description: 'Used to convey information to the user.',
    items: {
      't.primary': 'rgb(59, 115, 245)',
      't.primaryFaded': 'rgba(59, 115, 245, .15)',
      't.positive': 'rgb(39, 173, 117)',
      't.positiveFaded': 'rgba(39, 173, 117, .15)',
      't.warn': 'rgb(233, 179, 0)',
      't.warnFaded': 'rgba(233, 179, 0, .15)',
      't.negative': 'rgb(240, 97, 109)',
      't.negativeFaded': 'rgba(240, 97, 109, .15)',
    },
  },
  {
    heading: 'Artistic',
    description: 'Used to add some pleasing aesthetic touches.',
    items: {
      't.tabPurple': 'rgb(182, 111, 247)',
      't.tabPurpleFaded': 'rgba(182, 111, 247, .15)',
      't.tabGreen': 'rgb(113, 192, 131)',
      't.tabGreenFaded': 'rgba(113, 192, 131, .15)',
      't.tabOrange': 'rgb(236, 117, 111)',
      't.tabOrangeFaded': 'rgba(236, 117, 111, .15)',
      't.tabBlue': 'rgb(120, 162, 246)',
      't.tabBlueFaded': 'rgba(120, 162, 246, .15)',
      't.tabYellow': 'rgb(252, 206, 81)',
      't.tabYellowFaded': 'rgba(252, 206, 81, .15)',
    },
  },
];

export const PaletteCard: React.FC<{
  heading: string;
  description?: string;
  children: any;
}> = ({ heading, description, children }) => {
  const { colors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View
      style={
        {
          ...s.card,
          backgroundColor: colors.card,
          width: '100%',
          flex: !isMobile ? undefined : 1,
          flexDirection: 'row',
          gap: t.large,
          flexWrap: 'wrap',
          paddingBottom: !isOpen ? 0 : t.large,
        } as any
      }
    >
      <Pressable
        onPress={() => setIsOpen(!isOpen)}
        style={{ flexBasis: '100%', justifyContent: 'space-between' }}
      >
        <Row style={{ flexBasis: '100%', justifyContent: 'space-between' }}>
          <Heading style={{ marginBottom: 0 }}>{heading}</Heading>
          <Button
            type="Naked"
            icon={isOpen ? 'chevron-up' : 'chevron-down'}
            iconSize="primary"
            onPress={() => setIsOpen(!isOpen)}
          />
        </Row>
      </Pressable>
      {description && (
        <Text
          style={{
            flexBasis: '100%',
            opacity: 0.8,
          }}
        >
          {description}
        </Text>
      )}
      <Divider
        style={
          {
            flexBasis: 'calc(100% + 20px)',
            marginTop: 0,
            marginBottom: 0,
            height: isOpen ? 1 : 0,
          } as any
        }
      />
      {isOpen && children}
    </View>
  );
};

export const PaletteItem: React.FC<{
  label: string;
  value?: string | number;
  children?: React.FC | React.ReactNode;
}> = ({ label, value, children }) => {
  const { colors } = useTheme();
  const isColor = (value: any) =>
    typeof value === 'string' && (value.includes('rgb') || value.includes('#'));

  return (
    <View
      style={{
        alignSelf: 'flex-start',
        gap: t.xs,
        borderRadius: t.xs,
      }}
    >
      <Tag icon="copy" position="right">
        {label}
      </Tag>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'flex-start',
          gap: t.small,
          borderRadius: t.xs,
          borderColor: colors.border,
          borderWidth: 1,
          paddingHorizontal: t.small,
          paddingVertical: t.xs,
        }}
      >
        {isColor(value) && <PaletteSwatch value={value} />}
        {(children as any) || (
          <Small style={{ opacity: 0.8 }} mono={true}>
            {value}
          </Small>
        )}
      </View>
    </View>
  );
};

export const PaletteSwatch: React.FC<{ value: any }> = ({ value }) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        width: t.large,
        height: t.large,
        borderRadius: t.xxs,
        backgroundColor: value,
        borderColor: colors.border,
        borderWidth: 1,
      }}
    />
  );
};
