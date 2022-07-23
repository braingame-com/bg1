import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import {
  articleQuery,
  STOREFRONT_ACCESS_TOKEN,
  GRAPHQL_URL,
  GRAPHQL_BODY,
} from "./setup/shopify-sapi";

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
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
DATA.map((data) => {
  articleNodes.push(data.node);
});

export default function App() {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={articleNodes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  item: {
    backgroundColor: "#d9d9d9",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
  },
});
