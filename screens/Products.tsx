import { View, SafeAreaView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { t, s } from '../setup/styles';
import { Text, Title } from '../design/typography';
import { Divider } from '../design/primitives';

export function Products() {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ padding: t.large }}>
      <View>
        <Divider
          style={{ marginRight: -t.large, marginTop: 0 }}
          height={4}
          color={t.tabBlue}
        />
        <Title
          mono={true}
          style={{
            ...s.bigChip,
            color: t.tabBlue,
            backgroundColor: t.tabBlueFaded,
            marginBottom: t.xs,
          }}
        >
          Shop
        </Title>
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
}
