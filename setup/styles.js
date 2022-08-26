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
    padding: 10,
  },
  flex: {
    flex: 1,
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
  // Typography
  title: {
    marginVertical: 10,
    color: fontColorPrimary,
    fontSize: 33,
    fontWeight: "bold",
  },
  heading: {
    marginVertical: 10,
    color: fontColorSecondary,
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    marginVertical: 10,
    color: fontColorSecondary,
    fontSize: 15,
  },
  // Components
  toggle: {
    margin: 10,
  },
  // Utilities
  rounded: {
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "rgba(128,128,128,.2)",
    borderRadius: 10,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
  },
  m_left: {
    marginLeft: 10,
  },
});
