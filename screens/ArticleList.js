import { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  articleQuery,
  STOREFRONT_ACCESS_TOKEN,
  GRAPHQL_URL,
  GRAPHQL_BODY,
} from "../setup/shopify-sapi";
import { Item, renderItem } from "../components/Item";

const Stack = createNativeStackNavigator();

export function ArticleList({ route }) {
  {
    /* const { itemId, otherParam } = route.params;
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Articles Screen for {itemId}</Text>
          <Text className="text-xs mt-4">{otherParam}</Text>
        </View>
      ); */
  }
  // Get Shopify JSON
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch(GRAPHQL_URL, GRAPHQL_BODY())
      .then((res) => res.json())
      .then((json) => {
        setResults(json.data.articles.edges);
      });
  }, []);
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
