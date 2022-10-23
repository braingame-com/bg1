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
import { VideosHeader } from "../components/VideosHeader";

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
        <YoutubePlayer
          height={270}
          play={playing}
          videoId={"iee2TATGMyI"}
          onChangeState={onStateChange}
        />
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
        style={{ padding: 10, paddingTop: 10, marginHorizontal: 10 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListHeaderComponent=<VideosHeader />
      />
    </SafeAreaView>
  );
}
