import { useState, useEffect } from "react";
import { View, ScrollView, FlatList, ActivityIndicator } from "react-native";
import { useTheme } from "@react-navigation/native";
import { styles as s, tokens as t } from "../setup/styles";
import { Text } from "../components/typography";
import { isMobile } from "../utilities/isMobile";
import { RenderVideoCard } from "../utilities/RenderVideoCard";
import { fetchVideos } from "../utilities/fetch";

export function Videos({ route }) {
  const { colors } = useTheme();
  const [data, setData] = useState({ loaded: false, videos: [] });
  useEffect(() => {
    fetchVideos(setData);
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {data.loaded ? (
        <FlatList
          data={data.videos}
          renderItem={({ item }) => <RenderVideoCard item={item} />}
          contentContainerStyle={{}}
          numColumns={isMobile() ? 1 : 3}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <ActivityIndicator
          size={isMobile() ? "small" : "large"}
          color={colors.primary}
        />
      )}
    </View>
  );
}
