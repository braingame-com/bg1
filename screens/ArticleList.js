import { useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import { useTheme } from "@react-navigation/native";
import { s, t } from "../setup/styles";
import { Octicons } from "@expo/vector-icons";
import { GRAPHQL_URL, GRAPHQL_BODY } from "../setup/shopify-sapi";
import { Heading, Text } from "../components/typography";
import { Row, Button, ActivityIndicator } from "../components/primitives";
import { isMobile } from "../utilities/helpers";

export function ArticleList({ navigation }) {
  const { colors } = useTheme();
  const [loaded, setLoaded] = useState(false);
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    fetch(GRAPHQL_URL, GRAPHQL_BODY())
      .then((res) => res.json())
      .then((json) => {
        setLessons(json.data.articles.edges);
        setLoaded(true);
      });
  }, []);
  const LessonCard = ({ image, tags, title, excerpt, id, content }) => {
    return (
      <View
        style={{
          maxWidth: isMobile ? "100%" : "calc(33% - 20px)",
          marginHorizontal: isMobile ? 0 : t.small,
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
              justifyContent: tags.length === 0 ? "flex-end" : "space-between",
              alignItems: "flex-start",
            }}
          >
            {tags.map((tag, index) => {
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
              onPress={() => console.log(`more options for article id: ${id}`)}
              contentStyle={{ fontSize: t.medium, color: t.grey }}
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
            <Row>
              <Button
                type="Naked"
                text={Math.floor(Math.random() * (300 - 0)).toString()}
                icon="heart"
                onPress={() => console.log(`like article id: ${id}`)}
                contentStyle={{ fontSize: t.medium, color: t.grey }}
              />
              <Button
                type="Naked"
                text={Math.floor(Math.random() * (300 - 0)).toString()}
                icon="heart"
                onPress={() => console.log(`like article id: ${id}`)}
                style={{ marginLeft: t.xl }}
                contentStyle={{ fontSize: t.medium, color: t.grey }}
              />
            </Row>
            <Button
              type="Naked"
              icon="bookmark"
              onPress={() => console.log(`bookmark article id: ${id}`)}
              contentStyle={{ fontSize: t.medium, color: t.grey }}
            />
          </Row>
        </TouchableOpacity>
      </View>
    );
  };
  const renderItem = ({ item }) => (
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
  const LessonsFlatList = () => {
    if (isMobile) {
      return (
        <FlatList
          data={lessons}
          renderItem={renderItem}
          keyExtractor={(item) => item.node.id}
          style={{ padding: t.small, marginHorizontal: t.small }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: t.large }}
        />
      );
    } else {
      return (
        <FlatList
          data={lessons}
          renderItem={renderItem}
          keyExtractor={(item) => item.node.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: t.large,
            marginRight: -t.small,
          }}
          numColumns={3}
        />
      );
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, padding: t.small, ...s.centered }}>
      {loaded ? <LessonsFlatList /> : <ActivityIndicator />}
    </SafeAreaView>
  );
}
