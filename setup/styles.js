import { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { useTheme, useThemeUpdate } from "../components/AppProvider";

// DESIGN TOKENS //
const dark = true,
  // Containers
  containerBackground = dark ? "#202020" : "#FAFAFA",
  // Typography
  fontColorPrimary = dark ? "white" : "black",
  fontColorSecondary = dark ? "whitesmoke" : "darkslategrey";

// SUPER CLASSES //
export const styles = StyleSheet.create({
  // Containers
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  // Typography
  title: {
    margin: 10,
    color: fontColorPrimary,
    fontSize: 33,
  },
  subtitle: {
    margin: 10,
    color: fontColorSecondary,
    fontSize: 20,
  },
  // Components
  toggle: {
    margin: 10,
  },
  // Utilities
  rounded: {
    margin: 10,
    padding: 20,
    backgroundColor: "rgba(128,128,128,.2)",
    borderRadius: 10,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
  },
});
