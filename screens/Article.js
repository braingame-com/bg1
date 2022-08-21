import { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GRAPHQL_URL, GRAPHQL_BODY } from "../setup/shopify-sapi";

export function Article({ route }) {
  const { itemId, itemTitle, itemExcerpt } = route.params;
  console.log(itemId, itemTitle, itemExcerpt);
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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "white" }}>{itemId}</Text>
      <Text style={{ color: "white", marginVertical: 20 }}>{itemTitle}</Text>
      <Text style={{ color: "white" }}>{itemExcerpt}</Text>
    </View>
  );
}
