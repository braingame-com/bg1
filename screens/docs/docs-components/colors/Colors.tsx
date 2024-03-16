import { t } from '../../../../setup/styles';
import { PaletteInterface } from '../../../../setup/types';
import { Column } from '../../../../design/primitives';
import { PaletteCard, PaletteItem } from '../Palette';
import { Section } from '../section';

export const Colors = () => {
  const colors: PaletteInterface = [
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

  return (
    <Section
      title="Colors"
      icon="palette"
      color={[t.tabPurple, t.tabPurpleFaded]}
    >
      <Column
        style={{
          alignItems: 'flex-start',
          gap: t.l,
          marginBottom: t.l,
        }}
      >
        {colors.map((category: any) => (
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
    </Section>
  );
};
