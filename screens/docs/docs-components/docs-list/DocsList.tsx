import {
  Button,
  Column,
  Icon,
  Row,
  ScrollPage,
} from '../../../../design/primitives';
import { c, s, t } from '../../../../setup/styles';
import { DisplayTitle, Text, Title } from '../../../../design/typography';
import { Pressable } from 'react-native';
import { useState } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { isMobile } from '../../../../setup/helpers';

export const DocsList = () => (
  <ScrollPage>
    <DisplayTitle style={{ marginBottom: t.s }}>BGUI Docs</DisplayTitle>
    <Text style={{ marginBottom: t.m }}>
      Brain Game User Interface (BGUI) is a design system and component library
      built with a focus on minimal, flexible power and beauty.
    </Text>
    <Text style={{ marginBottom: t.xxxl }}>
      It's written in pure React Native and is responsive to mobile, tablet and
      web screen sizes.
    </Text>

    <Column style={{ gap: t.l }}>
      <CategoryCard
        title="Colors"
        icon="palette"
        color={[t.tabPurple, t.tabPurpleFaded]}
        description="Informational and decorative colors, how and where to use them."
      />
      <CategoryCard
        title="Tokens"
        icon="pen-ruler"
        color={[t.tabGreen, t.tabGreenFaded]}
        description="Consistent styling is key, so we made it easy."
      />
      <CategoryCard
        title="Typography"
        icon="font"
        color={[t.tabOrange, t.tabOrangeFaded]}
        description="Our fonts are beautiful and functional."
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

type CategoryCardProps = {
  title: string;
  icon: string;
  color: string[];
  description: string;
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
      onPressIn={() => setHover(true)}
      onPressOut={() => setHover(false)}
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
        <Row style={{ width: '100%', justifyContent: 'space-between' }}>
          <Row>
            <Icon
              name={icon}
              size={t.xxl}
              color={color[0]}
              style={{ marginRight: t.s }}
            />
            {title}
          </Row>
          <Button
            type="Naked"
            icon={'chevron-right'}
            iconSize={t.xxl}
            iconColor={color[0]}
            onPress={() => setIsOpen(!isOpen)}
            style={{
              opacity: hover ? 1 : 0,
            }}
          />
        </Row>
        <Text style={{ width: '100%' }}>{description}</Text>
      </Title>
    </Pressable>
  );
};
