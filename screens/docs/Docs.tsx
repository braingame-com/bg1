import { useTheme } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { DocsList } from './docs-components/docs-list/DocsList';

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
    </Stack.Navigator>
  );
};
