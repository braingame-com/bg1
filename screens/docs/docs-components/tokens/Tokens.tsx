import { t } from '../../../../setup/styles';
import { PaletteInterface } from '../../../../setup/types';
import { Column } from '../../../../design/primitives';
import { PaletteCard, PaletteItem } from '../Palette';
import { Section } from '../section';

export const Tokens = () => {
  const sizes: PaletteInterface = {
    't.xxxs': 2, // .125rem
    't.xxs': 4, // .25rem
    't.xs': 8, // .5rem
    't.s': 12, // .75rem
    't.ms': 14, // .875rem
    't.m': 16, // 1rem
    't.l': 20, // 1.25rem
    't.xl': 24, // 1.5rem
    't.xxl': 32, // 2rem
    't.xxxl': 40, // 2.5rem
  };

  return (
    <Section
      title="Tokens"
      icon="pen-ruler"
      color={[t.tabGreen, t.tabGreenFaded]}
    >
      <Column
        style={{
          alignItems: 'flex-start',
          gap: t.l,
          marginBottom: t.l,
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
    </Section>
  );
};