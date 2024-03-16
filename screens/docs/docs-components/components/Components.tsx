import { t } from '../../../../setup/styles';
import { Text } from '../../../../design/typography';
import { Section } from '../Section';

export const Components = () => {
  // const components: any = [
  //   {
  //     name: 'Button',
  //     description: 'A button with a label and optional icon.',
  //     props: [
  //       { name: 'label', type: 'string' },
  //       { name: 'icon', type: 'string' },
  //       { name: 'type', type: 'string' },
  //       { name: 'size', type: 'string' },
  //       { name: 'disabled', type: 'boolean' },
  //       { name: 'onPress', type: 'function' },
  //     ],
  //   },
  //   {
  //     name: 'Divider',
  //     description: 'A horizontal line.',
  //     props: [
  //       { name: 'height', type: 'number' },
  //       { name: 'color', type: 'string' },
  //       { name: 'style', type: 'object' },
  //     ],
  //   },
  //   {
  //     name: 'Icon',
  //     description: 'A vector icon.',
  //     props: [
  //       { name: 'name', type: 'string' },
  //       { name: 'size', type: 'string' },
  //       { name: 'color', type: 'string' },
  //       { name: 'type', type: 'string' },
  //       { name: 'style', type: 'object' },
  //     ],
  //   },
  //   {
  //     name: 'ScrollPage',
  //     description: 'A scrollable page.',
  //     props: [
  //       { name: 'style', type: 'object' },
  //       { name: 'children', type: 'ReactNode' },
  //     ],
  //   },
  //   {
  //     name: 'Tag',
  //     description: 'A tag with an optional icon.',
  //     props: [
  //       { name: 'icon', type: 'string' },
  //       { name: 'position', type: 'string' },
  //       { name: 'style', type: 'object' },
  //       { name: 'children', type: 'ReactNode' },
  //     ],
  //   },
  //   {
  //     name: 'Text',
  //     description: 'A text component.',
  //     props: [
  //       { name: 'style', type: 'object' },
  //       { name: 'children', type: 'ReactNode' },
  //     ],
  //   },
  //   {
  //     name: 'Title',
  //     description: 'A title component.',
  //     props: [
  //       { name: 'style', type: 'object' },
  //       { name: 'children', type: 'ReactNode' },
  //     ],
  //   },
  // ];

  return (
    <Section
      title="Components"
      icon="cubes"
      color={[t.tabBlue, t.tabBlueFaded]}
    >
      <Text>Coming soon...</Text>
    </Section>
  );
};
