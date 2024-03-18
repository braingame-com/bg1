import {
  Button,
  Column,
  Icon,
  Row,
  ScrollPage,
  Tag,
} from '../../../../design/primitives';
import { s, t } from '../../../../setup/styles';
import {
  DisplayTitle,
  Heading,
  Subtitle,
  Text,
  Title,
} from '../../../../design/typography';
import { Pressable, View } from 'react-native';
import { useState } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { isMobile } from '../../../../setup/helpers';
import {
  BulletIconLineProps,
  CategoryCardProps,
} from '../../../../setup/types';

export const DocsList = () => (
  <ScrollPage>
    <DisplayTitle style={{ marginBottom: t.xl }}>BGUI Docs</DisplayTitle>

    <Heading style={s.iconBullet}>
      Brain Game User Interface (BGUI) is a superior design system / component
      library.
    </Heading>
    <BulletIconLine icon="laptop-mobile">
      Cross-platform, responsive, and powerful, written in pure React Native.
    </BulletIconLine>
    <BulletIconLine icon="moon">
      Beautiful, minimal Dark / Light themes as standard.
    </BulletIconLine>
    <BulletIconLine icon="terminal" style={{ marginBottom: t.xxl }}>
      Open source, made by indie devs!
    </BulletIconLine>

    <Heading>Quick start...</Heading>
    <Tag
      icon="copy"
      style={{
        marginBottom: t.s,
        fontSize: t.m,
        paddingHorizontal: t.l,
        paddingVertical: t.m,
      }}
      iconSize={t.m}
    >
      $ npm install bgui
    </Tag>

    <Subtitle>...then</Subtitle>
    <Tag
      icon="copy"
      style={{
        marginBottom: t.xxl,
        fontSize: t.m,
        paddingHorizontal: t.l,
        paddingVertical: t.m,
      }}
      iconSize={t.m}
    >
      {
        "import { colors, tokens, typography, components, helpers } from '@bgui';"
      }
    </Tag>

    <Column style={{ gap: t.l }}>
      <CategoryCard
        title="Colors"
        icon="palette"
        color={[t.tabPurple, t.tabPurpleFaded]}
        description="Informational and decorative colors, how and where to use them."
      />
      <CategoryCard
        title="Tokens"
        icon="ruler-combined"
        color={[t.tabGreen, t.tabGreenFaded]}
        description="Consistent styling is key, so we made it easy."
      />
      <CategoryCard
        title="Typography"
        icon="font"
        color={[t.tabOrange, t.tabOrangeFaded]}
        description="Our fonts are beautiful and functional. Learn how we do it."
      />
      <CategoryCard
        title="Components"
        icon="cubes"
        color={[t.tabBlue, t.tabBlueFaded]}
        description="Pre-built components to save you time when building a UI."
      />
      <CategoryCard
        title="Helpers"
        icon="screwdriver-wrench"
        color={[t.tabYellow, t.tabYellowFaded]}
        description="Useful functions and values to call from anyhere."
      />
    </Column>
  </ScrollPage>
);

const BulletIconLine: React.FC<BulletIconLineProps> = ({
  children,
  icon,
  type,
  style,
}) => {
  return (
    <Text style={{ ...s.iconBullet, ...style }}>
      <Icon
        name={icon}
        type={type || 'fal'}
        size={t.xxl}
        style={{ marginRight: t.m, minHeight: t.xxl, minWidth: t.xxl }}
      />
      {children}
    </Text>
  );
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  icon,
  color,
  description,
}) => {
  const navigation: any = useNavigation();
  const { colors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <Pressable
      onPress={() => navigation.navigate(title)}
      onHoverIn={() => setHover(true)}
      onHoverOut={() => setHover(false)}
    >
      <Title
        mono={true}
        style={{
          ...s.bigChip,
          margin: 0,
          flexDirection: 'column',
          width: '100%',
          backgroundColor: color[1],
          color: hover ? color[0] : colors.text,
          gap: t.m,
          paddingTop: isMobile ? t.l : t.xxl,
          paddingBottom: isMobile ? t.l : t.xxl,
          paddingLeft: isMobile ? t.l : t.xxl,
          paddingRight: isMobile ? t.l : t.xxl,
        }}
      >
        <Row style={{ width: '100%' }}>
          <Row>
            <Icon
              name={icon}
              size={t.xxl}
              color={color[0]}
              style={{ marginRight: t.s }}
            />
            {title}
          </Row>
          <Icon
            name={'arrow-right'}
            size={t.xxl}
            color={color[0]}
            style={{ opacity: hover ? 1 : 0, marginLeft: t.s }}
          />
        </Row>
        <Text style={{ width: '100%' }}>{description}</Text>
        <View
          style={{
            position: 'absolute',
            right: -t.xxl,
            height: '125%',
          }}
        >
          <Icon
            name={icon}
            color={color[1]}
            style={{
              height: '100%',
              width: 'auto',
              opacity: hover ? 1 : 0.5,
            }}
          />
        </View>
      </Title>
    </Pressable>
  );
};
