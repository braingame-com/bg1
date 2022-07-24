import { StatusBar } from "expo-status-bar";
import { Image, Text, View, FlatList, Button } from "react-native";
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
  Item = ({ title, excerpt, id }) => (
    <View className="p-5 m-5 rounded-lg bg-gray-100 border border-gray-300">
      <Image
        source={{
          uri:
            "https://cdn.shopify.com/s/files/1/0171/7947/6022/articles/square_black_brain_08eff074-e0e0-4857-b53e-b6ccb5015289.png?v=1570831224",
        }}
      />
      <Text className="text-lg mb-2">{title}</Text>
      {excerpt !== "" && (
        <Text className="text-sm text-gray-700 mb-4">{excerpt}</Text>
      )}
      <Text className="text-xs text-gray-400 mb-4">{id}</Text>
      <Button className="w-32" title="Read article" />
    </View>
  ),
  renderItem = ({ item }) => (
    <Item title={item.title} excerpt={item.excerpt} id={item.id} />
  );
DATA.map((data) => {
  articleNodes.push(data.node);
});

// App
export default function App() {
  return (
    <TailwindProvider>
      <View>
        <FlatList
          data={articleNodes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  );
}
