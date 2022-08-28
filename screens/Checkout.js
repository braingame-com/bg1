import { Text, Button, SafeAreaView } from "react-native";

export function Checkout({ navigation }) {
  return (
    <SafeAreaView>
      <Text style={{ color: "#777777" }}>Checkout Screen</Text>
      <Button
        title="Back to Shop"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
}
