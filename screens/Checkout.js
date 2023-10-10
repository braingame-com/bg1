import { Button, SafeAreaView } from 'react-native';
import { Text } from '../setup/typography';

export function Checkout({ navigation }) {
  return (
    <SafeAreaView>
      <Text style={{ color: 'grey' }}>Checkout Screen</Text>
      <Button
        title="Back to Shop"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
}
