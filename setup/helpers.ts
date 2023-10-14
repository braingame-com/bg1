import { Dimensions, Platform } from "react-native";

const screenWidth = Dimensions.get("window").width;
const os = Platform.OS;

export const isMobile = screenWidth < 769 ? true : false;

export const platform =
  os === "ios"
    ? "ios"
    : os === "android"
    ? "android"
    : os === "web" && isMobile
    ? "mobWeb"
    : "web";
