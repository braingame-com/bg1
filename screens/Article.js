import { useState, useEffect } from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles as s, tokens } from "../setup/styles";
import {
  GRAPHQL_URL,
  STOREFRONT_ACCESS_TOKEN,
  GRAPHQL_BODY,
} from "../setup/shopify-sapi";
import RenderHtml from "react-native-render-html";

export function Article({ route }) {
  const { colors } = useTheme();
  const {
    itemId,
    itemTitle,
    itemImage,
    itemExcerpt,
    itemContent,
  } = route.params;

  const { width } = useWindowDimensions();

  const tagsStyles = {
    body: {
      color: colors.text,
      fontSize: 16,
      lineHeight: 24,
    },
    a: {
      color: colors.primary,
    },
  };

  const source = {
    html: `<div>${itemContent}</div>`,
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

  // console.log(source);
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        maxWidth: 600,
        marginHorizontal: "auto",
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* <Image
        source={{
          uri: itemImage,
        }}
        style={{
          width: "120%",
          height: 330,
          borderColor: colors.border,
          borderWidth: 0,
          marginTop: -20,
          marginHorizontal: "-10%",
          marginBottom: 10,
        }}
      /> */}
      <Text style={{ ...s.title, color: colors.text, ...s.m_bottom }}>
        {itemTitle}
      </Text>
      <RenderHtml
        contentWidth={width}
        source={source}
        tagsStyles={tagsStyles}
      />
    </ScrollView>
  );
}
