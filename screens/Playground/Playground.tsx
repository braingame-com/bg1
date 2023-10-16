import {
  StyleProp,
  ViewStyle,
  View,
  ScrollView,
  Pressable,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { s, t } from '../../setup/styles';
import {
  ScrollPage,
  Button,
  Divider,
  Column,
  Icon,
  Tag,
  Row,
} from '../../design/primitives';
import {
  DisplayTitle,
  Title,
  Heading,
  Subtitle,
  Bold,
  Text,
  Small,
  SmallThin,
} from '../../design/typography';
import { isMobile } from '../../setup/helpers';
import { PaletteCard, PaletteItem, palette } from './palette';
import { PaletteInterface } from '../../setup/types';
import { useState } from 'react';

export const Playground = () => (
  <ScrollPage>
    <DisplayTitle style={{ marginBottom: t.small }}>BGUI Docs</DisplayTitle>
    <Text>Brand guidelines & component library</Text>

    <Palette />
    <Tokens />
    <Typography />
    <Components />
    <Helpers />
  </ScrollPage>
);

const DocBlock = ({
  title,
  icon,
  colors,
  children,
}: {
  title: string;
  icon: string;
  colors: string[];
  children: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={{ ...s.doc_block }}>
      <Divider style={{ marginRight: -t.large }} height={4} color={colors[0]} />
      <Pressable onPress={() => setIsOpen(!isOpen)}>
        <Row>
          <Title
            mono={true}
            style={{
              color: colors[0],
              backgroundColor: colors[1],
              ...s.bigChip,
            }}
          >
            <Icon
              name={icon}
              size={t.xxl}
              color={colors[0]}
              style={{ marginRight: t.small }}
            />
            {title}
          </Title>
          <Button
            type="Naked"
            icon={isOpen ? 'chevron-up' : 'chevron-down'}
            iconSize={t.xxl}
            iconColor={colors[0]}
            onPress={() => setIsOpen(!isOpen)}
            style={{ marginTop: -t.large, marginLeft: t.large }}
          />
        </Row>
      </Pressable>
      {isOpen && children}
    </View>
  );
};

const Palette = () => {
  const { colors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DocBlock
      title="Palette"
      icon="palette"
      colors={[t.tabPurple, t.tabPurpleFaded]}
    >
      <Column
        style={{
          alignItems: 'flex-start',
          gap: t.large,
          marginBottom: t.large,
        }}
      >
        {palette.map((category: any) => (
          <PaletteCard
            heading={category.heading}
            description={category.description}
            key={category.heading}
          >
            {Object.keys(category.items).map((label) => (
              <PaletteItem
                label={label}
                value={category.items[label]}
                key={label}
              />
            ))}
          </PaletteCard>
        ))}
      </Column>
    </DocBlock>
  );
};

const Tokens = () => {
  const { colors } = useTheme();
  const sizes: PaletteInterface = {
    't.xxxs': 2, // .125rem
    't.xxs': 4, // .25rem
    't.xs': 8, // .5rem
    't.small': 12, // .75rem
    't.medium': 16, // 1rem
    't.large': 20, // 1.25rem
    't.xl': 24, // 1.5rem
    't.xxl': 32, // 2rem
    't.xxxl': 40, // 2.5rem
  };

  return (
    <DocBlock
      title="Tokens"
      icon="pen-ruler"
      colors={[t.tabGreen, t.tabGreenFaded]}
    >
      <Column
        style={{
          alignItems: 'flex-start',
          gap: t.large,
          marginBottom: t.large,
        }}
      >
        <PaletteCard
          heading={'Spacing'}
          description="Reusable design tokens to maintain visual consistency throughout the app."
        >
          {Object.keys(sizes).map((key) => (
            <PaletteItem label={key} value={sizes[key]} key={key} />
          ))}
        </PaletteCard>
      </Column>
    </DocBlock>
  );
};

const Typography = () => {
  const { colors } = useTheme();
  const baseVariants = [
    { component: DisplayTitle, label: '<DisplayTitle>', text: 'Display' },
    { component: Title, label: '<Title>', text: 'Title' },
    { component: Heading, label: '<Heading>', text: 'Heading' },
    { component: Subtitle, label: '<Subtitle>', text: 'Subtitle' },
    { component: Bold, label: '<Bold>', text: 'Bold' },
    { component: Text, label: '<Text>', text: 'Text' },
    { component: Small, label: '<Small>', text: 'Small' },
    { component: SmallThin, label: '<SmallThin>', text: 'SmallThin' },
  ];
  const variants = {
    Display: [...baseVariants],
    Mono: baseVariants.map((variant) => ({
      ...variant,
      label: variant.label.replace('>', ' mono={true}>'),
      mono: true,
    })),
  };

  return (
    <DocBlock
      title="Typography"
      icon="font"
      colors={[t.tabOrange, t.tabOrangeFaded]}
    >
      <Column
        style={{
          alignItems: 'flex-start',
          gap: t.large,
          marginBottom: t.large,
        }}
      >
        {Object.keys(variants).map((category) => (
          <PaletteCard
            heading={category}
            key={category}
            description={
              category === 'Display'
                ? 'The general font used throughout the app and in print. Friendly, sans-serif, optimized for legibility and class.'
                : 'Commonly used for small pieces of information like tags, but also as a nice design touch for certain titles etc.'
            }
          >
            {variants[category as keyof typeof variants].map((variant: any) => {
              const VariantComponent = variant.component;

              return (
                <PaletteItem label={variant.label} key={variant.label}>
                  <VariantComponent mono={variant.mono}>
                    {variant.text}
                  </VariantComponent>
                </PaletteItem>
              );
            })}
          </PaletteCard>
        ))}
      </Column>
    </DocBlock>
  );
};

const Components = () => {
  const { colors } = useTheme();
  const components: any = [
    {
      name: 'Button',
      description: 'A button with a label and optional icon.',
      props: [
        { name: 'label', type: 'string' },
        { name: 'icon', type: 'string' },
        { name: 'type', type: 'string' },
        { name: 'size', type: 'string' },
        { name: 'disabled', type: 'boolean' },
        { name: 'onPress', type: 'function' },
      ],
    },
    {
      name: 'Divider',
      description: 'A horizontal line.',
      props: [
        { name: 'height', type: 'number' },
        { name: 'color', type: 'string' },
        { name: 'style', type: 'object' },
      ],
    },
    {
      name: 'Icon',
      description: 'A vector icon.',
      props: [
        { name: 'name', type: 'string' },
        { name: 'size', type: 'string' },
        { name: 'color', type: 'string' },
        { name: 'type', type: 'string' },
        { name: 'style', type: 'object' },
      ],
    },
    {
      name: 'ScrollPage',
      description: 'A scrollable page.',
      props: [
        { name: 'style', type: 'object' },
        { name: 'children', type: 'ReactNode' },
      ],
    },
    {
      name: 'Tag',
      description: 'A tag with an optional icon.',
      props: [
        { name: 'icon', type: 'string' },
        { name: 'position', type: 'string' },
        { name: 'style', type: 'object' },
        { name: 'children', type: 'ReactNode' },
      ],
    },
    {
      name: 'Text',
      description: 'A text component.',
      props: [
        { name: 'style', type: 'object' },
        { name: 'children', type: 'ReactNode' },
      ],
    },
    {
      name: 'Title',
      description: 'A title component.',
      props: [
        { name: 'style', type: 'object' },
        { name: 'children', type: 'ReactNode' },
      ],
    },
  ];

  return (
    <DocBlock
      title="Components"
      icon="cubes"
      colors={[t.tabBlue, t.tabBlueFaded]}
    >
      <Text>Coming soon...</Text>
    </DocBlock>
  );
};

const Helpers = () => {
  const { colors } = useTheme();
  const helpers: any = {
    isMobile: 'boolean: screenWidth < 769',
    platform: `string: 'ios' | 'android'  | 'mobWeb' | 'web'`,
  };

  return (
    <DocBlock
      title="Helpers"
      icon="screwdriver-wrench"
      colors={[t.tabYellow, t.tabYellowFaded]}
    >
      <PaletteCard
        heading={'Helpers'}
        description="Handy functions and variables to save you time."
      >
        {Object.keys(helpers).map((key) => (
          <PaletteItem label={key} value={helpers[key]} key={key} />
        ))}
      </PaletteCard>
    </DocBlock>
  );
};
