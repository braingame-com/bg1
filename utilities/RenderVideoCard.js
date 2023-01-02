import { useState } from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { Small, Text, Bold, Subtitle } from "../components/typography";
import { Button, Row, VideoDropdownMenu } from "../components/primitives";
import { s, t } from "../setup/styles";
import { useTheme } from "@react-navigation/native";

export const RenderVideoCard = ({ item, navigation }) => {
  const { colors } = useTheme();
  const id = item.contentDetails.videoId;
  const title = item.snippet.title;
  const uri = item.snippet.thumbnails.standard.url;
  const [menuVisible, setMenuVisible] = useState(false);
  console.log(menuVisible);
  return (
    <View>
      <TouchableOpacity
        style={{ ...s.m_all }}
        onPress={() => {
          navigation.navigate("Video", { id: id });
        }}
      >
        <View>
          <Image source={{ uri: uri }} style={{ ...s.videoThumbnail }} />
          <View style={{ ...s.videoDurationWrapper }}>
            <Text style={{ ...s.videoDurationText }}>17:15</Text>
          </View>
        </View>
        <Row style={{ justifyContent: "space-between", marginTop: t.small }}>
          <Subtitle>{title}</Subtitle>
          <Button
            type="Naked"
            icon="kebab-horizontal"
            style={{ transform: [{ rotate: "90deg" }] }}
            contentStyle={{ fontSize: t.medium }}
            onPress={() => setMenuVisible(!menuVisible)}
          />
        </Row>
        <Row style={{ marginTop: t.xs, marginBottom: t.small }}>
          {menuVisible && <VideoDropdownMenu />}
          <Button
            type="Naked"
            text="12K views"
            contentStyle={{ fontSize: t.small, color: t.grey }}
          />
          <Button
            type="Naked"
            icon="dot-fill"
            style={{ marginHorizontal: t.xs }}
            contentStyle={{ fontSize: t.xs }}
          />
          <Button
            type="Naked"
            text="4 months ago"
            contentStyle={{ fontSize: t.small, color: t.grey }}
          />
        </Row>
      </TouchableOpacity>
    </View>
  );
};
