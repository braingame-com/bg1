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
import { ArticleList } from "../screens/ArticleList";
import { Article } from "../screens/Article";

const Stack = createNativeStackNavigator();
const component = () => {
  return <Text style={{ color: "white" }}>component</Text>;
};

export function Lessons({ route }) {
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
    <Stack.Navigator>
      <Stack.Screen name="ArticleList" component={ArticleList} />
      {/* <Stack.Screen name="Article" component={Article} />} */}
    </Stack.Navigator>
  );
}
