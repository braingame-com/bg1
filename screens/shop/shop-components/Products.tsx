import { View, SafeAreaView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { t, s } from '../../../setup/styles';
import { Text, Title } from '../../../design/typography';
import { Divider } from '../../../design/primitives';

export const Products = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ padding: t.l }}>
      <View>
        <Title>Shop</Title>
        <Text style={{ color: colors.text }}>Products Screen!</Text>
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
};
