import { t } from '../../../../setup/styles';
import { PaletteCard, PaletteItem } from '../Palette';
import { Section } from '../section';

export const Helpers = () => {
  const helpers: any = {
    isMobile: 'boolean: screenWidth < 769',
    platform: `string: 'ios' | 'android'  | 'mobWeb' | 'web'`,
  };

  return (
    <Section
      title="Helpers"
      icon="screwdriver-wrench"
      color={[t.tabYellow, t.tabYellowFaded]}
    >
      <PaletteCard
        heading={'Helpers'}
        description="Handy functions and variables to save you time."
      >
        {Object.keys(helpers).map((key) => (
          <PaletteItem label={key} value={helpers[key]} key={key} />
        ))}
      </PaletteCard>
    </Section>
  );
};
