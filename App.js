import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  Image,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import {
  articleQuery,
  STOREFRONT_ACCESS_TOKEN,
  GRAPHQL_URL,
  GRAPHQL_BODY,
} from "./setup/shopify-sapi";
import { TailwindProvider } from "tailwindcss-react-native";
import {
  IconHome,
  IconBookOpen,
  IconShoppingBag,
  IconCog,
  IconArrowRightSmall,
} from "./utilities/svg-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Item = ({ image, title, excerpt, id }) => (
    <View className="p-6 mx-2 mt-2 bg-gray-100 items-center">
      <Image
        source={{
          uri: image.url,
        }}
        style={{ width: 80, height: 80 }}
        className="mb-4 rounded-full"
      />
      <Text className="text-lg mb-2 text-center">{title}</Text>
      {excerpt !== "" && (
        <Text className="text-sm text-gray-700 mb-4 text-center">
          {excerpt}
        </Text>
      )}
      <Text className="text-xs text-gray-400 mb-4 px-2 py-1 border border-gray-300 rounded-full text-center">
        {id}
      </Text>
      <TouchableOpacity className="bg-slate-500 rounded-md py-2 px-4 items-center flex-row">
        <Text className="text-white mr-1">Read article</Text>
        <SvgComponent width={18} height={18} color={"#fff"} />
      </TouchableOpacity>
    </View>
  ),
  renderItem = ({ item }) => (
    <Item
      image={item.node.image}
      title={item.node.title}
      excerpt={item.node.excerpt}
      id={item.node.id}
    />
  );

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text className="mb-4">Home Screen</Text>
      <Button
        title="Go to Articles"
        onPress={() =>
          navigation.navigate("Articles", {
            itemId: 42,
            otherParam: "Jordan is cool",
          })
        }
      />
    </View>
  );
}

function ArticlesScreen({ route }) {
  {
    /*const { itemId, otherParam } = route.params;*/
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Articles Screen</Text>
    </View>
  );
}

function ShopScreen({ route }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Shop Screen</Text>
    </View>
  );
}

function SettingsScreen({ route }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  // Get Shopify JSON
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch(GRAPHQL_URL, GRAPHQL_BODY())
      .then((res) => res.json())
      .then((json) => {
        setResults(json.data.articles.edges);
      });
  }, []);
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <IconHome width={18} height={18} color={"#000"} />
              ),
            }}
          />
          <Tab.Screen
            name="Articles"
            component={ArticlesScreen}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <IconBookOpen width={18} height={18} color={"#000"} />
              ),
            }}
          />
          <Tab.Screen
            name="Shop"
            component={ShopScreen}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <IconShoppingBag width={18} height={18} color={"#000"} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <IconCog width={18} height={18} color={"#000"} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
