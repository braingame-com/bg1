import { TouchableOpacity, Image } from "react-native";
import { Small, Text, Bold } from "../components/typography";
import { styles as s, tokens as t } from "../setup/styles";
import { useTheme } from "@react-navigation/native";

export const RenderVideoCard = ({ item }) => {
  const { colors } = useTheme();
  console.log(item);
  const id = item.contentDetails.videoId;
  const title = item.snippet.title;
  const uri = item.snippet.thumbnails.standard.url;
  return (
    <TouchableOpacity
      style={{
        ...s.card,
        backgroundColor: colors.card,
        marginTop: t.small,
      }}
      onPress={() => console.log(`open video with id of ${id}`)}
    >
      <Small style={{ marginBottom: t.xs }}>{id}</Small>
      <Bold style={{ marginBottom: t.xs }}>{title}</Bold>
      <Small style={{ marginBottom: t.xs }}>{uri}</Small>
      <Image source={{ uri: uri }} style={{ width: 200, height: 200 }} />
    </TouchableOpacity>
  );
};
