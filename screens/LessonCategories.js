import { TouchableOpacity, View, Dimensions } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Row } from "../components/primitives";
import { Text, Subtitle } from "../components/typography";
import { s, t } from "../setup/styles";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const isMobile = screenWidth < 769 ? true : false;

const blocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function LessonCategories({ navigation }) {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        padding: t.small,
        flex: 1,
      }}
    >
      {blocks.map((index, value) => {
        value++;
        return (
          <View
            key={index}
            style={{
              width: "50%",
              padding: t.small,
            }}
          >
            <TouchableOpacity
              key={index}
              style={{
                ...s.card,
                backgroundColor: colors.card,
                height: isMobile ? screenHeight / 8 : "100%",
                ...s.centered,
              }}
              onPress={() => navigation.navigate("Lessons")}
            >
              <Row style={{}}>
                <Subtitle key={index + 1}>Part {value}</Subtitle>
                {index === 1 ? (
                  <Text
                    style={{
                      ...s.pill,
                      ...s.success,
                      ...s.m_left,
                      alignSelf: "flex-start",
                    }}
                    key={index}
                  >
                    10 / 10
                  </Text>
                ) : index === 2 ? (
                  <Text
                    style={{
                      ...s.pill,
                      ...s.warn,
                      ...s.m_left,
                      alignSelf: "flex-start",
                    }}
                    key={index}
                  >
                    4 / 10
                  </Text>
                ) : (
                  <Text
                    style={{
                      ...s.pill,
                      ...s.error,
                      ...s.m_left,
                      alignSelf: "flex-start",
                    }}
                    key={index}
                  >
                    0 / 10
                  </Text>
                )}
              </Row>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}
