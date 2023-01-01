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
import { Row, Button } from "../components/primitives";

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
      <Row
        style={{
          justifyContent: "center",
          ...s.m_top,
          paddingBottom: 30,
          ...s.m_bottom_2,
          borderBottomWidth: 1,
          borderColor: colors.border,
        }}
      >
        <Button
          type="Secondary"
          text="Watch Video"
          icon="video"
          onPress={() => console.log("watch video")}
        />
        <Button
          type="Secondary"
          text="Download Audio"
          icon="download"
          style={{ marginLeft: tokens.medium }}
          onPress={() => console.log("download audio")}
        />
      </Row>
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
