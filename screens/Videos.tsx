import { useState, useEffect, useCallback, useRef } from 'react';
import { useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isMobile } from '../setup/helpers';
import { s, t } from '../setup/styles';
import {
  View,
  FlatList,
  Pressable,
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
  Divider,
} from '../design/primitives';
import { Text, Small, Subtitle, Title } from '../design/typography';
import { fetchVideos } from '../setup/youtube-api';
import YoutubePlayer, { getYoutubeMeta } from 'react-native-youtube-iframe';

const Stack = createNativeStackNavigator();

export const Videos = ({ navigation }: any) => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={
        {
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTitleStyle: {
            fontSize: isMobile ? t.m : t.l,
            marginLeft: isMobile ? 0 : t.s,
          },
          headerShadowVisible: false,
        } as any
      }
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

const VideosList = ({ navigation }: { navigation: any }) => {
  const { colors } = useTheme();
  const [data, setData] = useState({ loaded: false, videos: [] });
  useEffect(() => {
    fetchVideos(setData);
  }, []);
  const RenderVideoCard = ({
    item,
    navigation,
  }: {
    item: any;
    navigation: any;
  }) => {
    const id = item.contentDetails.videoId;
    const title = item.snippet.title;
    const uri = item.snippet.thumbnails.standard.url;
    const [menuVisible, setMenuVisible] = useState(false);
    console.log(menuVisible);

    return (
      <View>
        <Pressable
          style={{ margin: t.s }}
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
          <Row style={{ justifyContent: 'space-between', marginTop: t.s }}>
            <Subtitle>{title}</Subtitle>
            <Button
              type="Naked"
              icon="ellipsis-vertical"
              iconSize="secondary"
              onPress={() => setMenuVisible(!menuVisible)}
            />
          </Row>
          <Row style={{ marginTop: t.xs, marginBottom: t.s }}>
            {menuVisible && <VideoDropdownMenu />}
            <Small style={{ color: t.grey }}>12K views</Small>
            <Dot style={{ marginHorizontal: t.xs }} />
            <Small style={{ color: t.grey }}>4 months ago</Small>
          </Row>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={{ padding: t.l }}>
      <Title>Videos</Title>
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

const Video = ({ route }: any) => {
  const { id } = route.params;
  const [playing, setPlaying] = useState(false);
  const { colors } = useTheme();

  getYoutubeMeta(id).then((meta) => {
    console.log(
      `Width should be ${meta.width} and height should be ${meta.height}`
    );
  });

  const onStateChange = useCallback((state: any) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const containerRef = useRef(null);

  useEffect(() => {
    (containerRef as any).current.measure(
      (x: any, y: any, width: any, height: any) => {
        console.log(width); // width of the container
        console.log(height); // height of the container
      }
    );
  }, []);

  return (
    <View ref={containerRef} style={{ backgroundColor: 'purple', flex: 1 }}>
      <View style={{ backgroundColor: 'orange' }}>
        <YoutubePlayer
          width={'100%' as any}
          height={'75%' as any}
          play={playing}
          videoId={id}
          onChangeState={onStateChange}
          onReady={() => console.log('ready 4 action')}
        />
        <Row
          style={{
            justifyContent: 'center',
            marginTop: t.s,
            paddingTop: 30,
            marginBottom: t.l,
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
            style={{ marginLeft: t.m }}
            onPress={() => console.log('download')}
          />
        </Row>
      </View>
    </View>
  );
};
