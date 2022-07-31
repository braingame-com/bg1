import { Image, Text, View, TouchableOpacity } from "react-native";
import { IconArrowRightSmall } from "../utilities/svg-icons";

export const Item = ({ image, title, excerpt, id }) => (
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
        <IconArrowRightSmall color={"#fff"} />
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
