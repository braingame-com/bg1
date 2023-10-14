import { View, SafeAreaView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { s } from '../setup/styles';
import { Text } from '../design/typography';

export function Products() {
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
