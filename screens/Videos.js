import { useState, useEffect, useCallback } from "react";
import {
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { styles as s } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import YoutubePlayer from "react-native-youtube-iframe";
import {
  articleListQuery,
  articleQuery,
  STOREFRONT_ACCESS_TOKEN,
  GRAPHQL_URL,
  GRAPHQL_BODY,
} from "../setup/shopify-sapi";

export function Videos({ route }) {
  const { colors } = useTheme();
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      // Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  // Get Youtube JSON
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
        <View
          style={{
            ...s.rounded,
            backgroundColor: colors.card,
            borderColor: colors.border,
            borderWidth: 1,
          }}
        >
          <YoutubePlayer
            height={270}
            play={playing}
            videoId={"iee2TATGMyI"}
            onChangeState={onStateChange}
          />
          <Text style={{ ...s.heading, color: colors.text }}>
            Title gonna go here
          </Text>
        </View>
      );
    },
    renderItem = ({ item }) => (
      <Item
        image={item.node.image}
        title={item.node.title}
        image={item.node.image.url}
        excerpt={item.node.excerpt}
        content={item.node.contentHtml}
        id={item.node.id}
      />
    );
  return (
    <SafeAreaView style={s.container}>
      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={(item) => item.node.id}
        style={{ paddingHorizontal: 10 }}
        ListHeaderComponent=<Text
          style={{
            ...s.title,
            ...s.m_horizontal,
            color: colors.text,
            paddingTop: 10,
          }}
        >
          Videos
        </Text>
      />
    </SafeAreaView>
  );
}
