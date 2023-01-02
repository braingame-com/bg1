import { Text } from "../components/typography";
import { Row, Button } from "../components/primitives";
import { s, t } from "../setup/styles";
import { useTheme } from "@react-navigation/native";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  View,
  Alert,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";
import YoutubePlayer, { getYoutubeMeta } from "react-native-youtube-iframe";

export function Video({ route }) {
  const { id } = route.params;
  const [playing, setPlaying] = useState(false);
  const { colors } = useTheme();

  getYoutubeMeta(id).then((meta) => {
    console.log(
      `Width should be ${meta.width} and height should be ${meta.height}`
    );
  });

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const containerRef = useRef();

  useEffect(() => {
    containerRef.current.measure((x, y, width, height) => {
      console.log(width); // width of the container
      console.log(height); // height of the container
    });
  }, []);

  return (
    <View ref={containerRef} style={{ backgroundColor: "purple", flex: 1 }}>
      <View style={{ backgroundColor: "orange" }}>
        <YoutubePlayer
          width="100%"
          height="75%"
          maxWidth={1280}
          maxHeight={720}
          play={playing}
          videoId={id}
          onChangeState={onStateChange}
          onReady={() => console.log("ready 4 action")}
        />
        <Row
          style={{
            justifyContent: "center",
            ...s.m_top,
            paddingTop: 30,
            ...s.m_bottom_2,
            borderTopWidth: 1,
            borderColor: colors.border,
          }}
        >
          <Button
            type="Secondary"
            text="Share"
            icon={Platform.OS === "ios" ? "share" : "share-android"}
            onPress={() => console.log("share")}
          />
          <Button
            type="Secondary"
            text="Download"
            icon="download"
            style={{ marginLeft: t.medium }}
            onPress={() => console.log("download")}
          />
        </Row>
      </View>
    </View>
  );
}
