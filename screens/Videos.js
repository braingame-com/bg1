import { useState, useEffect, useCallback, useRef } from 'react';
import { useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isMobile } from '../utilities/helpers';
import { s, t } from '../setup/styles';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
} from 'react-native';
import {
  Button,
  BackButton,
  Dot,
  ActivityIndicator,
  Row,
  VideoDropdownMenu,
} from '../setup/primitives';
import { Text, Subtitle } from '../setup/typography';
import { fetchVideos } from '../setup/youtube-api';
import YoutubePlayer, { getYoutubeMeta } from 'react-native-youtube-iframe';

const Stack = createNativeStackNavigator();

export const Videos = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          fontSize: isMobile ? t.medium : t.large,
          marginLeft: isMobile ? 0 : t.small,
        },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="VideosList"
        component={VideosList}
        options={{
          headerTitle: () => <Text>Videos</Text>,
        }}
      />
      <Stack.Screen
        name="Video"
        component={Video}
        options={{
          headerTitle: () => <Text> </Text>,
          headerLeft: () => (
            <BackButton
              text="Videos"
              onPress={() => navigation.navigate('VideosList')}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const VideosList = ({ navigation }) => {
  const [data, setData] = useState({ loaded: false, videos: [] });
  useEffect(() => {
    fetchVideos(setData);
  }, []);
  const RenderVideoCard = ({ item, navigation }) => {
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
            navigation.navigate('Video', { id: id });
          }}
        >
          <View>
            <Image source={{ uri: uri }} style={{ ...s.videoThumbnail }} />
            <View style={{ ...s.videoDurationWrapper }}>
              <Text style={{ ...s.videoDurationText }}>17:15</Text>
            </View>
          </View>
          <Row style={{ justifyContent: 'space-between', marginTop: t.small }}>
            <Subtitle>{title}</Subtitle>
            <Button
              type="Naked"
              icon="ellipsis-vertical"
              iconSize="secondary"
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
            <Dot style={{ marginHorizontal: t.xs }} />
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
        <ActivityIndicator />
      )}
    </View>
  );
};

const Video = ({ route }) => {
  const { id } = route.params;
  const [playing, setPlaying] = useState(false);
  const { colors } = useTheme();

  getYoutubeMeta(id).then((meta) => {
    console.log(
      `Width should be ${meta.width} and height should be ${meta.height}`
    );
  });

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const containerRef = useRef();

  useEffect(() => {
    containerRef.current.measure((x, y, width, height) => {
      console.log(width); // width of the container
      console.log(height); // height of the container
    });
  }, []);

  return (
    <View ref={containerRef} style={{ backgroundColor: 'purple', flex: 1 }}>
      <View style={{ backgroundColor: 'orange' }}>
        <YoutubePlayer
          width="100%"
          height="75%"
          maxWidth={1280}
          maxHeight={720}
          play={playing}
          videoId={id}
          onChangeState={onStateChange}
          onReady={() => console.log('ready 4 action')}
        />
        <Row
          style={{
            justifyContent: 'center',
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
            icon={Platform.OS === 'ios' ? 'share' : 'share-nodes'}
            onPress={() => console.log('share')}
          />
          <Button
            type="Secondary"
            text="Download"
            icon="arrow-alt-circle-down"
            style={{ marginLeft: t.medium }}
            onPress={() => console.log('download')}
          />
        </Row>
      </View>
    </View>
  );
};
