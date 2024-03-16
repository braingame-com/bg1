import { ScrollPage } from '../../../../design/primitives';
import { DisplayTitle, Text } from '../../../../design/typography';
import { Colors } from '../colors/Colors';
import { Components } from '../components/Components';
import { Helpers } from '../helpers/Helpers';
import { Tokens } from '../tokens/Tokens';
import { Typography } from '../typography/Typography';

export const DocsList = () => (
  <ScrollPage>
    <DisplayTitle style={{ marginBottom: t.s }}>BGUI Docs</DisplayTitle>
    <Text>Brand guidelines & component library</Text>

    <Colors />
    <Tokens />
    <Typography />
    <Components />
    <Helpers />
  </ScrollPage>
);
