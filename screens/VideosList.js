import { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { s, t } from "../setup/styles";
import { Text } from "../components/typography";
import { isMobile } from "../utilities/isMobile";
import { RenderVideoCard } from "../utilities/RenderVideoCard";
import { fetchVideos } from "../setup/youtube-api";

export function VideosList({ route, navigation }) {
  const [data, setData] = useState({ loaded: false, videos: [] });
  useEffect(() => {
    fetchVideos(setData);
  }, []);
  return (
    <View style={{ ...s.centeredFlexContainer }}>
      {data.loaded ? (
        <FlatList
          data={data.videos}
          renderItem={({ item }) => (
            <RenderVideoCard item={item} navigation={navigation} />
          )}
          numColumns={isMobile ? 1 : 3}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <ActivityIndicator size={isMobile ? "small" : "large"} />
      )}
    </View>
  );
}
