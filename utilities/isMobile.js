import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const isMobile = () => {
  return screenWidth < 769 ? true : false;
};
