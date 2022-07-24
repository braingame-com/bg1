import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import {
  articleQuery,
  STOREFRONT_ACCESS_TOKEN,
  GRAPHQL_URL,
  GRAPHQL_BODY,
} from "./setup/shopify-sapi";
import { TailwindProvider } from "tailwindcss-react-native";

// Get Shopify JSON
fetch(GRAPHQL_URL, GRAPHQL_BODY())
  .then((res) => res.json())
  .then((json) => {
    window.localStorage.setItem("shopify-json", JSON.stringify(json));
  });
const shopifyJSON = window.localStorage.getItem("shopify-json"),
  DATA = JSON.parse(shopifyJSON).data.articles.edges,
  articleNodes = [],
  Item = ({ title }) => (
    <View>
      <Text>{title}</Text>
    </View>
  );
DATA.map((data) => {
  articleNodes.push(data.node);
});

export default function App() {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <TailwindProvider>
      <View>
        <FlatList
          data={articleNodes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <StatusBar style="auto" />
        <Text className="text-red-700">Hello world!</Text>
      </View>
    </TailwindProvider>
  );
}
