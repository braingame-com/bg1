import { useState, useEffect } from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles as s } from "../setup/styles";
import {
  GRAPHQL_URL,
  STOREFRONT_ACCESS_TOKEN,
  GRAPHQL_BODY,
} from "../setup/shopify-sapi";
import RenderHtml from "react-native-render-html";

export function Article({ route }) {
  const {
    itemId,
    itemTitle,
    itemImage,
    itemExcerpt,
    itemContent,
  } = route.params;

  const { width } = useWindowDimensions(),
    dark = true,
    fontColorPrimary = dark ? "white" : "black",
    fontColorSecondary = dark ? "whitesmoke" : "darkslategrey";
  // const fontColorPrimary = s.fontColorPrimary;
  const source = {
    html: `<div style="color: ${fontColorPrimary}">${itemContent}</div>`,
  };

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
    <ScrollView
      contentContainerStyle={{
        padding: 20,
      }}
    >
      <Image
        source={{
          uri: itemImage,
        }}
        style={{
          width: "120%",
          height: 330,
          borderRadius: 5,
          borderColor: "#202020",
          borderWidth: 1,
          marginTop: -20,
          marginHorizontal: "-10%",
          marginBottom: 10,
        }}
      />
      <Text style={s.title}>{itemTitle}</Text>
      <RenderHtml contentWidth={width} source={source} />
    </ScrollView>
  );
}
