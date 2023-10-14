import { useState, useEffect, useContext } from 'react';
import {
  View,
  Pressable,
  FlatList,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollContext } from '../components/AppProvider';
import { s, t } from '../setup/styles';
import { GRAPHQL_URL, GRAPHQL_BODY } from '../setup/shopify-sapi';
import { useTheme } from '@react-navigation/native';
import { Title, Heading, Text, Small } from '../design/typography';
import {
  Icon,
  Row,
  Button,
  BackButton,
  ActivityIndicator,
} from '../design/primitives';
import { isMobile } from '../setup/helpers';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';

const Stack = createNativeStackNavigator();

export const Lessons = ({ navigation }) => {
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
        name="Lessons"
        component={ArticleList}
        options={{
          headerTitle: () => <Text>Lessons</Text>,
          headerLeft: () => (
            <Button
              type="Naked"
              icon="chevron-left"
              onPress={() => navigation.navigate('Categories')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Article"
        component={Article}
        options={{
          headerTitle: () => <Text> </Text>,
          headerLeft: () => (
            <BackButton
              text="Lessons"
              onPress={() => navigation.navigate('Lessons')}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const ArticleList = ({ navigation }) => {
  const { colors } = useTheme();
  const { opacity, onScroll } = useContext(ScrollContext);
  console.log(opacity, ' from ArticleList');
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
          maxWidth: isMobile ? '100%' : 'calc(33% - 20px)',
          marginHorizontal: isMobile ? 0 : t.small,
          flex: 1,
        }}
      >
        <Pressable
          style={{
            ...s.card,
            backgroundColor: colors.card,
            ...s.m_vertical,
            flex: 1,
          }}
          onPress={() =>
            navigation.navigate('Article', {
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
              justifyContent: tags.length === 0 ? 'flex-end' : 'space-between',
              alignItems: 'flex-start',
            }}
          >
            {tags.map((tag, index) => {
              return (
                <Row key={index} style={{ ...s.centered }}>
                  <Small
                    style={{
                      ...s.pill,
                      ...s.info,
                      ...s.m_bottom_2,
                      alignSelf: 'flex-start',
                    }}
                    key={index + 1}
                  >
                    {tag}
                  </Small>
                  <Small
                    style={{
                      ...s.pill,
                      ...s.success,
                      ...s.m_left,
                      alignSelf: 'flex-start',
                      ...s.centered,
                    }}
                  >
                    <Icon name="check" color={t.positive} size="small" />
                  </Small>
                </Row>
              );
            })}
            <Button
              type="Naked"
              icon="ellipsis-h"
              onPress={() => console.log(`more options for article id: ${id}`)}
              contentStyle={{ fontSize: t.medium, color: t.grey }}
            />
          </Row>
          <Heading>{title}</Heading>
          {excerpt !== '' && <Text style={{ ...s.m_top }}>{excerpt}</Text>}
          <Row
            style={{
              ...s.m_top_2,
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            <Row>
              <Button
                type="Naked"
                text={Math.floor(Math.random() * (300 - 0)).toString()}
                icon="heart"
                iconSize="small"
                onPress={() => console.log(`like article id: ${id}`)}
                contentStyle={{ fontSize: t.small, color: t.grey }}
              />
            </Row>
            <Button
              type="Naked"
              icon="bookmark"
              iconSize="small"
              onPress={() => console.log(`bookmark article id: ${id}`)}
              contentStyle={{ fontSize: t.medium, color: t.grey }}
            />
          </Row>
        </Pressable>
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
  const FlatListComponent = () => (
    <FlatList
      data={lessons}
      renderItem={renderItem}
      onScroll={onScroll}
      keyExtractor={(item) => item.node.id}
      style={{
        padding: isMobile ? t.small : 0,
        marginHorizontal: isMobile ? t.small : 0,
      }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: t.large,
      }}
      numColumns={isMobile ? 1 : 4}
    />
  );
  const array = [1];
  return (
    <ScrollView style={{ flex: 1, padding: t.small }}>
      <View style={{ marginLeft: isMobile ? 0 : t.small }}>
        <Title style={{ marginVertical: t.xs }}>Lessons</Title>
      </View>
      {loaded ? (
        <View>
          {array.map((i) => (
            <FlatListComponent key={i} />
          ))}
        </View>
      ) : (
        <ActivityIndicator />
      )}
    </ScrollView>
  );
};

const Article = ({ route }) => {
  const { colors } = useTheme();
  const {
    // itemId,
    itemTitle,
    // itemImage,
    // itemExcerpt,
    itemContent,
  } = route.params;

  const { width } = useWindowDimensions();

  const tagsStyles = {
    body: {
      fontFamily: 'SohneBook',
      color: colors.text,
      fontSize: 16,
      lineHeight: 24,
    },
    a: {
      color: colors.primary,
    },
  };

  const source = {
    html: `<div>${itemContent}</div>`,
  };

  // Get Shopify JSON
  const [, setResults] = useState([]);
  useEffect(() => {
    fetch(GRAPHQL_URL, GRAPHQL_BODY())
      .then((res) => res.json())
      .then((json) => {
        setResults(json.data.articles.edges);
      });
  }, []);

  // console.log(source);
  return (
    <ScrollView
      contentContainerStyle={{
        padding: t.large,
        maxWidth: 600,
        marginHorizontal: 'auto',
      }}
      showsVerticalScrollIndicator={false}
    >
      <Row
        style={{
          justifyContent: 'center',
          ...s.m_top,
          paddingBottom: 30,
          ...s.m_bottom_2,
          borderBottomWidth: 0,
          borderColor: colors.border,
        }}
      >
        <Button
          type="Secondary"
          text="Watch Video"
          icon="play-circle"
          onPress={() => console.log('watch video')}
        />
        <Button
          type="Secondary"
          text="Download Audio"
          icon="arrow-alt-circle-down"
          style={{ marginLeft: t.medium }}
          onPress={() => console.log('download audio')}
        />
      </Row>
      {/* <Image
        source={{
          uri: itemImage,
        }}
        style={{
          width: "120%",
          height: 330,
          borderColor: colors.border,
          borderWidth: 0,
          marginTop: -t.large,
          marginHorizontal: "-10%",
          marginBottom: t.small,
        }}
      /> */}
      <Text style={{ ...s.title, color: colors.text, ...s.m_bottom }}>
        {itemTitle}
      </Text>
      <RenderHtml
        contentWidth={width}
        source={source}
        tagsStyles={tagsStyles}
        systemFonts={[...defaultSystemFonts, 'SohneBook']}
      />
    </ScrollView>
  );
};
