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
  heading_secondary: {
    marginVertical: 10,
    color: fontColorSecondary,
    fontSize: 20,
  },
  subtitle: {
    marginVertical: 10,
    color: fontColorSecondary,
    fontSize: 15,
  },
  // Components
  btn: {
    overflow: "hidden",
    fontSize: 15,
    backgroundColor: "#281640",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  btn_secondary: {
    overflow: "hidden",
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#202020",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
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
  m_top: {
    marginTop: 10,
  },
  m_left: {
    marginLeft: 10,
  },
  m_right: {
    marginRight: 10,
  },
  m_bottom: {
    marginBottom: 10,
  },
  m_vertical: {
    marginVertical: 10,
  },
  m_horizontal: {
    marginHorizontal: 10,
  },
  m_all: {
    margin: 10,
  },
});
