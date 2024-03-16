import { useTheme } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { DocsList } from './docs-components/docs-list/DocsList';
import { Colors } from './docs-components/colors/Colors';
import { Components } from './docs-components/components/Components';
import { Helpers } from './docs-components/helpers/Helpers';
import { Tokens } from './docs-components/tokens/Tokens';
import { Typography } from './docs-components/typography/Typography';

const Stack = createNativeStackNavigator();

type DocsProps = {
  navigation: NativeStackNavigationProp<any, 'Dashboard'>;
};

export const Docs: React.FC<DocsProps> = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Stack.Screen
        name="DocsList"
        component={DocsList}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Colors" component={Colors} />
      <Stack.Screen name="Tokens" component={Tokens} />
      <Stack.Screen name="Typography" component={Typography} />
      <Stack.Screen name="Components" component={Components} />
      <Stack.Screen name="Helpers" component={Helpers} />
    </Stack.Navigator>
  );
};
