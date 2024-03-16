import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { s, t } from '../../../setup/styles';
import { View, Pressable } from 'react-native';
import { Button, Divider, Icon, Row } from '../../../design/primitives';
import { Title } from '../../../design/typography';

export const Section = ({
  title,
  icon,
  color,
  children,
}: {
  title: string;
  icon: string;
  color: string[];
  children: any;
}) => {
  const { colors } = useTheme();
  const [isOpen, setIsOpen] = useState(title === 'Components');

  return (
    <View>
      <Divider style={{ marginRight: -t.l }} height={4} color={color[0]} />
      <Pressable onPress={() => setIsOpen(!isOpen)}>
        <Row>
          <Title
            mono={true}
            style={{
              ...s.bigChip,
              backgroundColor: color[1],
              color: colors.text,
            }}
          >
            <Icon
              name={icon}
              size={t.xxl}
              color={colors.text}
              style={{ marginRight: t.s }}
            />
            {title}
            <Button
              type="Naked"
              icon={isOpen ? 'chevron-up' : 'chevron-down'}
              iconSize={t.xxl}
              iconColor={colors.text}
              onPress={() => setIsOpen(!isOpen)}
              style={{ marginLeft: t.s }}
            />
          </Title>
        </Row>
      </Pressable>
      {isOpen && children}
    </View>
  );
};
