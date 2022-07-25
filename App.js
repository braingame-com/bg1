import { useState, useEffect } from "react";
import {
  Image,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  useColorScheme,
  Appearance,
  Switch,
} from "react-native";
import {
  articleQuery,
  STOREFRONT_ACCESS_TOKEN,
  GRAPHQL_URL,
  GRAPHQL_BODY,
} from "./setup/shopify-sapi";
import { TailwindProvider } from "tailwindcss-react-native";
import {
  IconBrainGame,
  IconCode,
  IconHome,
  IconBookOpen,
  IconShoppingBag,
  IconCog,
  IconArrowRightSmall,
} from "./utilities/svg-icons";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
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
        <IconArrowRightSmall width={20} height={20} color={"#fff"} />
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
      <Text
        className={
          useColorScheme() === "dark" ? "mb-4 text-white" : "mb-4 text-black"
        }
      >
        Home Screen ({Appearance.getColorScheme()})
      </Text>
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
    /* const { itemId, otherParam } = route.params;
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Articles Screen for {itemId}</Text>
          <Text className="text-xs mt-4">{otherParam}</Text>
        </View>
      ); */
  }
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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={(item) => item.node.id}
      />
    </View>
  );
}
function ShopScreen({ route }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        className={useColorScheme() === "dark" ? "text-white" : "text-black"}
      >
        Shop Screen
      </Text>
    </View>
  );
}
function SettingsScreen({ route }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  function ToggleDarkMode() {
    return (
      <View className="pt-4">
        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
          onChange={() => console.log(isEnabled)}
        />
      </View>
    );
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        className={useColorScheme() === "dark" ? "text-white" : "text-black"}
      >
        Settings Screen
      </Text>
      <ToggleDarkMode />
      <TouchableOpacity
        className="bg-slate-300 py-2 px-4 mt-4 rounded-full"
        onPress={(theme) => {
          console.log("light");
          setIsEnabled(false);
        }}
      >
        <Text classname="text-xl">Light</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-slate-300 py-2 px-4 mt-4 rounded-full"
        onPress={(theme) => {
          console.log("dark");
          setIsEnabled(true);
        }}
      >
        <Text classname="text-xl">Dark</Text>
      </TouchableOpacity>
      <View className="flex-row mt-80">
        <IconBrainGame width={20} height={20} fill={"rgb(107, 114, 128)"} />
        <View className="flex-row ml-2">
          <IconCode width={20} height={20} fill={"rgb(107, 114, 128)"} />
          <Text className="text-sm font-semibold text-gray-500 ml-2">
            v1.1.1
          </Text>
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer
        theme={useColorScheme() === "dark" ? DarkTheme : DefaultTheme}
      >
        {/* <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Articles" component={ArticlesScreen} />
            </Stack.Navigator> */}
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <IconHome
                  width={20}
                  height={20}
                  color={useColorScheme() === "dark" ? "#fff" : "#000"}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Articles"
            component={ArticlesScreen}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <IconBookOpen
                  width={20}
                  height={20}
                  color={useColorScheme() === "dark" ? "#fff" : "#000"}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Shop"
            component={ShopScreen}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <IconShoppingBag
                  width={20}
                  height={20}
                  color={useColorScheme() === "dark" ? "#fff" : "#000"}
                />
              ),
              tabBarBadge: 3,
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <IconCog
                  width={20}
                  height={20}
                  color={useColorScheme() === "dark" ? "#fff" : "#000"}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
