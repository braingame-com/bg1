import { t } from '../../../../setup/styles';
import { Column, ScrollPage } from '../../../../design/primitives';
import {
  DisplayTitle,
  Title,
  Heading,
  Subtitle,
  Bold,
  Text,
  SecondaryText,
  Small,
  SmallThin,
} from '../../../../design/typography';
import { PaletteCard, PaletteItem } from '../Palette';
import { Section } from '../Section';

export const Typography = () => {
  const baseVariants = [
    { component: DisplayTitle, label: '<DisplayTitle>', text: 'Display' },
    { component: Title, label: '<Title>', text: 'Title' },
    { component: Heading, label: '<Heading>', text: 'Heading' },
    { component: Subtitle, label: '<Subtitle>', text: 'Subtitle' },
    { component: Bold, label: '<Bold>', text: 'Bold' },
    { component: Text, label: '<Text>', text: 'Text' },
    {
      component: SecondaryText,
      label: '<SecondaryText>',
      text: 'Secondary Text',
    },
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
    <ScrollPage>
      <Section
        title="Typography"
        icon="font"
        color={[t.tabOrange, t.tabOrangeFaded]}
      >
        <Column
          style={{
            alignItems: 'flex-start',
            gap: t.l,
            marginBottom: t.l,
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
              {variants[category as keyof typeof variants].map(
                (variant: any) => {
                  const VariantComponent = variant.component;

                  return (
                    <PaletteItem label={variant.label} key={variant.label}>
                      <VariantComponent mono={variant.mono}>
                        {variant.text}
                      </VariantComponent>
                    </PaletteItem>
                  );
                }
              )}
            </PaletteCard>
          ))}
        </Column>
      </Section>
    </ScrollPage>
  );
};
