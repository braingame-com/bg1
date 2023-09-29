import { Button, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { s, t } from '../setup/styles';
import { Octicons } from '@expo/vector-icons';
import { Text } from '../setup/typography';

export function Products({ navigation }) {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ ...s.container }}>
      <View
        style={{
          ...s.container,
          ...s.centered,
        }}
      >
        <Text
          style={{
            ...s.subtitle,
            color: colors.text,
          }}
        >
          Products Screen!
        </Text>
      </View>
      {/* <Button
          title="Go to Articles"
          onPress={() =>
            navigation.navigate("Articles", {
              itemId: 42,
              otherParam: "Jordan is cool",
            })
          }
        /> */}
    </SafeAreaView>
  );
}
