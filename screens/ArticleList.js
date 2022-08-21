import { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles as s } from "../setup/styles";
import { IconArrow } from "../utilities/svg-icons";
import {
  articleListQuery,
  articleQuery,
  STOREFRONT_ACCESS_TOKEN,
  GRAPHQL_URL,
  GRAPHQL_BODY,
} from "../setup/shopify-sapi";

const Stack = createNativeStackNavigator();

export function ArticleList({ route, navigation }) {
  // Get Shopify JSON
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch(GRAPHQL_URL, GRAPHQL_BODY())
      .then((res) => res.json())
      .then((json) => {
        setResults(json.data.articles.edges);
      });
  }, []);
  // Item
  const Item = ({ image, title, excerpt, id }) => {
      const { colors } = useTheme();
      return (
        <View style={{ ...s.rounded, backgroundColor: colors.card }}>
          <Image
            source={{
              uri: image.url,
            }}
            style={{ width: 80, height: 80 }}
          />
          <Text style={{ ...s.rounded, color: colors.text }}>{id}</Text>
          <Text style={{ ...s.subtitle, color: colors.text }}>{title}</Text>
          {excerpt !== "" && (
            <Text style={{ color: colors.text }}>{excerpt}</Text>
          )}
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Text style={{ color: colors.text }}>Read article</Text>
            <IconArrow />
          </TouchableOpacity>
          <Button
            title="Read article"
            onPress={() =>
              navigation.navigate("Article", {
                itemId: id,
                itemTitle: title,
                itemExcerpt: excerpt,
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
  return (
    <View>
      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={(item) => item.node.id}
      />
    </View>
  );
}
