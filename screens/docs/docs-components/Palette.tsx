import { useTheme } from '@react-navigation/native';
import { Pressable, View } from 'react-native';
import { Heading, Small, Text } from '../../../design/typography';
import { isMobile } from '../../../setup/helpers';
import { s, t } from '../../../setup/styles';
import { Button, Divider, Row, Tag } from '../../../design/primitives';
import { useState } from 'react';

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
          gap: t.l,
          flexWrap: 'wrap',
          paddingBottom: !isOpen ? 0 : t.l,
        } as any
      }
    >
      <Pressable
        onPress={() => setIsOpen(!isOpen)}
        style={{ flexBasis: '100%', justifyContent: 'space-between' }}
      >
        <Row style={{ flexBasis: '100%', justifyContent: 'space-between' }}>
          <Heading style={{ marginBottom: 0 }} mono={true}>
            {heading}
          </Heading>
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
      <Tag icon="copy">{label}</Tag>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'flex-start',
          gap: t.s,
          borderRadius: t.xs,
          borderColor: colors.border,
          borderWidth: 1,
          paddingHorizontal: t.s,
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
        width: t.l,
        height: t.l,
        borderRadius: t.xxs,
        backgroundColor: value,
        borderColor: colors.border,
        borderWidth: 1,
      }}
    />
  );
};
