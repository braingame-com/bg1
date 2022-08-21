import { Image, Text, View, TouchableOpacity, Button } from "react-native";
import { styles as s } from "../setup/styles";
import { IconArrow } from "../utilities/svg-icons";
import { useTheme } from "@react-navigation/native";

export const Item = ({ image, title, excerpt, id }) => {
    const { colors } = useTheme();
    return (
      <View style={{ ...s.rounded, backgroundColor: colors.card }}>
        <Image
          source={{
            uri: image.url,
          }}
          style={{ width: 80, height: 80 }}
        />
        <Text style={{ ...s.subtitle, color: colors.text }}>{title}</Text>
        {excerpt !== "" && (
          <Text style={{ color: colors.text }}>{excerpt}</Text>
        )}
        <Text style={{ ...s.rounded, color: colors.text }}>{id}</Text>
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Text style={{ color: colors.text }}>Read article</Text>
          <IconArrow />
        </TouchableOpacity>
        <Button
          title="Read article"
          onPress={() =>
            navigation.navigate("Article", {
              itemId: 42,
              otherParam: "Jordan is cool",
            })
          }
        />
      </View>
    );
  },
  renderItem = ({ item }) => (
    <Item
      image={item.node.image}
      title={item.node.title}
      excerpt={item.node.excerpt}
      id={item.node.id}
    />
  );
