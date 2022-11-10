import { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles as s } from "../setup/styles";
import { IconArrow } from "../utilities/svg-icons";
import { Octicons } from "@expo/vector-icons";
import {
  articleListQuery,
  articleQuery,
  STOREFRONT_ACCESS_TOKEN,
  GRAPHQL_URL,
  GRAPHQL_BODY,
} from "../setup/shopify-sapi";
import { LibraryHeader } from "../components/LibraryHeader";

const Stack = createNativeStackNavigator();

export function ArticleList({ route, navigation }) {
  const { colors } = useTheme();
  // Get Shopify JSON
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch(GRAPHQL_URL, GRAPHQL_BODY())
      .then((res) => res.json())
      .then((json) => {
        setResults(json.data.articles.edges);
      });
  }, []);
  const Item = ({ image, title, excerpt, id, content }) => {
      return (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Article", {
              itemId: id,
              itemTitle: title,
              itemImage: image,
              itemExcerpt: excerpt,
              itemContent: content,
            })
          }
        >
          <View
            style={{
              ...s.rounded,
              backgroundColor: "transparent",
              borderColor: colors.border,
              borderWidth: 1,
            }}
          >
            {/* <Image
              source={{
                uri: image,
              }}
              style={{
                width: "120%",
                height: 200,
                // borderRadius: 5,
                // borderColor: colors.border,
                // borderWidth: 1,
                marginTop: -11,
                marginLeft: "-10%",
                marginBottom: 10,
              }}
            /> */}
            <Text style={{ ...s.heading, color: colors.text }}>{title}</Text>
            {excerpt !== "" && (
              <Text style={{ ...s.subtitle, color: colors.text }}>
                {excerpt}
              </Text>
            )}
          </View>
        </TouchableOpacity>
      );
    },
    renderItem = ({ item }) => (
      <Item
        image={item.node.image}
        title={item.node.title}
        // image={item.node.image.url}
        excerpt={item.node.excerpt}
        content={item.node.contentHtml}
        id={item.node.id}
      />
    );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={(item) => item.node.id}
        style={{ padding: 10, marginHorizontal: 10 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        // ListHeaderComponent=<LibraryHeader />
      />
    </SafeAreaView>
  );
}
