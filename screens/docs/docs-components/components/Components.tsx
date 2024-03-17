import { t } from '../../../../setup/styles';
import { Section } from '../Section';
import { Button, Column, ScrollPage } from '../../../../design/primitives';
import { PaletteCard, PaletteItem } from '../Palette';
import { Text } from '../../../../design/typography';

export const Components = () => {
  const components: any = {
    Button: [
      {
        label: '<Button text="Click me" />',
        text: 'Default',
        component: <Button text="Click me" />,
      },
      {
        label: '<Button text="Click me" type="Primary" />',
        text: 'Primary',
        component: <Button text="Click me" type="Primary" />,
      },
      {
        label: '<Button text="Click me" type="Naked" />',
        text: 'Naked',
        component: <Button text="Click me" type="Naked" />,
      },
      {
        label: '<Button text="Click me" type="Negative" />',
        text: 'Negative',
        component: <Button text="Click me" type="Negative" />,
      },
      {
        label: '<Button text="Click me" icon="heart" />',
        text: 'Icon Left',
        component: <Button text="Click me" icon="heart" />,
      },
      {
        label: '<Button text="Click me" icon="heart" />',
        text: 'Icon Right',
        component: <Button text="Click me" icon="heart" />,
      },
      {
        label: '<Button text="Click me" icon="heart" />',
        text: 'Icon Only',
        component: <Button text="Click me" icon="heart" />,
      },
    ],
  };

  return (
    <ScrollPage>
      <Section
        title="Components"
        icon="cubes"
        color={[t.tabBlue, t.tabBlueFaded]}
      >
        <Column
          style={{
            alignItems: 'flex-start',
            gap: t.l,
            marginBottom: t.l,
          }}
        >
          {Object.keys(components).map((component) => (
            <PaletteCard
              heading={component}
              key={component}
              description="Here's some buttons for all situations."
            >
              {components[component as keyof typeof components].map(
                (variant: any) => (
                  <>
                    <PaletteItem label={variant.label} key={variant.label}>
                      {/* <Text>{variant.text}</Text> */}
                      {variant.component}
                    </PaletteItem>
                  </>
                )
              )}
            </PaletteCard>
          ))}
        </Column>
      </Section>
    </ScrollPage>
  );
};
