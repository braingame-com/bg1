import { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles as s, tokens } from "../setup/styles";
import { IconArrow } from "../utilities/svg-icons";
import { Octicons } from "@expo/vector-icons";
import {
  articleListQuery,
  articleQuery,
  STOREFRONT_ACCESS_TOKEN,
  GRAPHQL_URL,
  GRAPHQL_BODY,
} from "../setup/shopify-sapi";
import { Heading, Text, Small } from "../components/typography";
import { Row, Button } from "../components/primitives";

const screenWidth = Dimensions.get("window").width;
const isMobile = screenWidth < 769 ? true : false;

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
  const LessonCard = ({ image, tags, title, excerpt, id, content }) => {
      return (
        <View
          style={{
            maxWidth: isMobile ? "100%" : "calc(33% - 20px)",
            marginHorizontal: isMobile ? 0 : 10,
            flex: 1,
          }}
        >
          <TouchableOpacity
            style={{
              ...s.card,
              backgroundColor: colors.card,
              ...s.m_vertical,
              flex: 1,
            }}
            onPress={() =>
              navigation.navigate("Article", {
                itemId: id,
                itemTags: tags,
                itemTitle: title,
                itemImage: image,
                itemExcerpt: excerpt,
                itemContent: content,
              })
            }
          >
            <Row
              style={{
                justifyContent:
                  tags.length === 0 ? "flex-end" : "space-between",
                alignItems: "flex-start",
              }}
            >
              {tags.map((tag, index) => {
                console.log(index);
                return (
                  <Row key={index} style={{ ...s.centered }}>
                    <Text
                      style={{
                        ...s.pill,
                        ...s.info,
                        ...s.m_bottom_2,
                        alignSelf: "flex-start",
                      }}
                      key={index + 1}
                    >
                      {tag}
                    </Text>
                    <Text
                      style={{
                        ...s.pill,
                        ...s.success,
                        ...s.m_left,
                        alignSelf: "flex-start",
                        ...s.centered,
                      }}
                    >
                      <Octicons
                        name="check"
                        size={16}
                        style={{ ...s.success_text }}
                      />
                    </Text>
                  </Row>
                );
              })}
              <Button
                type="Naked"
                icon="kebab-horizontal"
                onPress={() =>
                  console.log(`more options for article id: ${id}`)
                }
                contentStyle={{ fontSize: tokens.medium, color: "#777777" }}
              />
            </Row>
            <Heading>{title}</Heading>
            {excerpt !== "" && <Text style={{ ...s.m_top }}>{excerpt}</Text>}
            <Row
              style={{
                ...s.m_top_2,
                flex: 1,
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <Button
                type="Naked"
                text={Math.floor(Math.random() * (300 - 0)).toString()}
                icon="thumbsup"
                onPress={() => console.log(`like article id: ${id}`)}
                contentStyle={{ fontSize: tokens.medium, color: "#777777" }}
              />
              <Button
                type="Naked"
                icon="bookmark"
                onPress={() => console.log(`bookmark article id: ${id}`)}
                contentStyle={{ fontSize: tokens.medium, color: "#777777" }}
              />
            </Row>
          </TouchableOpacity>
        </View>
      );
    },
    renderItem = ({ item }) => (
      <LessonCard
        image={item.node.image}
        tags={item.node.tags}
        title={item.node.title}
        // image={item.node.image.url}
        excerpt={item.node.excerpt}
        content={item.node.contentHtml}
        id={item.node.id}
      />
    );
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      {isMobile ? (
        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={(item) => item.node.id}
          style={{ padding: 10, marginHorizontal: 10 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={(item) => item.node.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20, marginRight: -10 }}
          numColumns={3}
        />
      )}
    </SafeAreaView>
  );
}
