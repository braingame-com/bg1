import { View, ScrollView, Dimensions } from "react-native";
import { useTheme } from "@react-navigation/native";
import { styles as s } from "../setup/styles";
import { Row, Button, Divider } from "../components/primitives";
import {
  Title,
  Heading,
  Subtitle,
  BoldText,
  BodyText,
  SmallText,
} from "../components/typography";

const screenWidth = Dimensions.get("window").width;
const isMobile = screenWidth < 769 ? true : false;

const DesignPrinciples = () => {
  const { colors } = useTheme();
  return (
    <View>
      <Heading text="Design Principles" />
      <BodyText text="Coming soon..." style={{ ...s.m_bottom }} />
    </View>
  );
};

const Typography = () => {
  const { colors } = useTheme();
  return (
    <View>
      <Heading text="Typography" />
      <Heading text="Heading" />
      <Subtitle text="Subtitle" />
      <BodyText text="Body Text" />
      <SmallText text="Small Text" style={{ ...s.m_vertical }} />
    </View>
  );
};

const Components = () => {
  const { colors } = useTheme();
  return (
    <View>
      <Heading text="Components" />
      <Subtitle text="Button" style={{ ...s.m_top }} />
      <BodyText
        text="There are 4 main types of button. These are: Primary, Secondary, Destructive and Naked."
        style={{ ...s.m_bottom }}
      />
      <BoldText text="Primary" style={{ ...s.m_top }} />
      <Button text="Primary" type="Primary" style={{ ...s.m_vertical }} />
      <BodyText
        text="This is a main button, used only for the primary action that we want a user to take, for example, log in or add to cart. It is in our primary colors, with a rounded border."
        style={{ ...s.m_bottom }}
      />
      <BoldText text="Secondary" style={{ ...s.m_bottom, ...s.m_top }} />
      <BodyText text="something" style={{ ...s.m_bottom }} />
      <BoldText text="Destructive" style={{ ...s.m_bottom }} />
      <BodyText text="something" style={{ ...s.m_bottom }} />
      <BoldText text="Naked" style={{ ...s.m_bottom }} />
      <BodyText text="something" style={{ ...s.m_bottom }} />
      <View style={{ flexDirection: isMobile ? "column" : "row" }}>
        <Button text="Secondary" type="Secondary" style={{ ...s.res_gap }} />
        <Button
          text="Destructive"
          type="Destructive"
          style={{ ...s.res_gap }}
        />
        <Button text="Naked" type="Naked" style={{ ...s.res_gap }} />
      </View>
    </View>
  );
};

export function Playground() {
  return (
    <ScrollView style={{ ...s.p_all_2 }} showsVerticalScrollIndicator={false}>
      <View style={{ paddingBottom: 40 }}>
        <Title text="Documentation" />
        <Divider style={{ ...s.m_bottom }} />
        <DesignPrinciples />
        <Divider style={{ ...s.m_bottom }} />
        <Typography />
        <Divider style={{ ...s.m_bottom }} />
        <Components />
      </View>
    </ScrollView>
  );
}
