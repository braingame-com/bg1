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
import {
  Title,
  Heading,
  Text,
  Small,
  SecondaryText,
} from '../design/typography';
import {
  Icon,
  Row,
  Button,
  BackButton,
  ActivityIndicator,
  Divider,
} from '../design/primitives';
import { isMobile } from '../setup/helpers';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';

const Stack = createNativeStackNavigator();

export const Lessons = ({ navigation }: { navigation: any }) => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          fontSize: isMobile ? t.m : t.l,
          marginLeft: isMobile ? 0 : t.s,
        } as any,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="Lessons"
        component={ArticleList}
        options={
          {
            // headerTitle: () => <Text>Lessons</Text>,
            // headerLeft: () => (
            //   <Button
            //     type="Naked"
            //     icon="chevron-left"
            //     onPress={() => navigation.navigate('Categories')}
            //   />
            // ),
          }
        }
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

const ArticleList = ({ navigation }: { navigation: any }) => {
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
  const LessonCard = ({
    image,
    tags,
    title,
    excerpt,
    id,
    content,
  }: {
    image: any;
    tags: any;
    title: string;
    excerpt: string;
    id: string;
    content: string;
  }) => {
    return (
      <View
        style={
          {
            maxWidth: isMobile ? '100%' : 'calc(33% - 20px)',
            marginHorizontal: isMobile ? 0 : t.s,
            flex: 1,
          } as any
        }
      >
        <Pressable
          style={{
            ...s.card,
            backgroundColor: colors.card,
            marginVertical: t.s,
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
            {tags.map((tag: any, index: number) => {
              return (
                <Row key={index} style={{ ...s.centered }}>
                  <Small
                    style={{
                      ...s.pill,
                      ...s.info,
                      marginBottom: t.l,
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
                      marginLeft: t.s,
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
              contentStyle={{ fontSize: t.m, color: t.grey }}
            />
          </Row>
          <Heading>{title}</Heading>
          {excerpt !== '' && (
            <SecondaryText style={{ marginTop: t.s }}>{excerpt}</SecondaryText>
          )}
          <Row
            style={{
              marginTop: t.l,
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
                contentStyle={{ fontSize: t.s, color: t.grey }}
              />
            </Row>
            <Button
              type="Naked"
              icon="bookmark"
              iconSize="small"
              onPress={() => console.log(`bookmark article id: ${id}`)}
              contentStyle={{ fontSize: t.m, color: t.grey }}
            />
          </Row>
        </Pressable>
      </View>
    );
  };
  const renderItem = ({ item }: { item: any }) => (
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
        padding: isMobile ? t.s : 0,
        marginHorizontal: isMobile ? t.s : 0,
      }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: t.l,
      }}
      numColumns={isMobile ? 1 : 4}
    />
  );
  const array = [1];
  return (
    <ScrollView
      style={{ flex: 1, padding: t.xs }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ marginLeft: isMobile ? 0 : t.s }}>
        <Title>Lessons</Title>
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

const Article = ({ route }: { route: any }) => {
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
        padding: t.l,
        maxWidth: 600,
        marginHorizontal: 'auto',
      }}
      showsVerticalScrollIndicator={false}
    >
      <Row
        style={{
          justifyContent: 'center',
          marginTop: t.s,
          paddingBottom: 30,
          marginBottom: t.l,
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
          style={{ marginLeft: t.m }}
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
          marginTop: -t.l,
          marginHorizontal: "-10%",
          marginBottom: t.s,
        }}
      /> */}
      <Text style={{ color: colors.text, marginBottom: t.s }}>{itemTitle}</Text>
      <RenderHtml
        contentWidth={width}
        source={source}
        tagsStyles={tagsStyles}
        systemFonts={[...defaultSystemFonts, 'SohneBook']}
      />
    </ScrollView>
  );
};
