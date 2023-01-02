import { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { isMobile } from "../utilities/isMobile";

// THEMES //
export const lightTheme = {
  dark: false,
  colors: {
    primary: "#49A6E9",
    background: "white",
    card: "rgb(247, 249, 249)",
    text: "rgb(15, 20, 25)",
    border: "rgb(239, 243, 244)",
    notification: "#E4616B",
  },
};
export const darkTheme = {
  dark: true,
  colors: {
    primary: "#49A6E9",
    background: "black",
    card: "rgb(22, 24, 28)",
    text: "rgb(231, 233, 234)",
    border: "rgb(47, 51, 54)",
    notification: "#E4616B",
  },
};

// DESIGN TOKENS //
export const tokens = {
  xs: 8,
  small: 12,
  medium: 16,
  large: 24,
  xl: 32,
};

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
  card: {
    padding: 20,
    borderRadius: 16,
  },
  modalView: {
    margin: 20,
    borderRadius: 16,
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  // Typography
  title: {
    fontSize: 33,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 23,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  task_mini: {
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: "#777777",
  },
  // Components
  tabBar: {
    flexDirection: isMobile() ? "row" : "column",
    position: isMobile() ? "relative" : "absolute",
    height: isMobile() ? 79 : "100vh",
    width: isMobile() ? "100%" : 128,
    borderTopWidth: isMobile() ? 1 : 0,
    borderRightWidth: isMobile() ? 0 : 1,
  },
  tabBarItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: isMobile() ? "flex-start" : "center",
    flexDirection: isMobile() ? "column" : "row",
    padding: isMobile() ? 10 : 20,
    maxHeight: 64,
  },
  tabBarIconWrapper: {
    alignItems: "center",
    height: 20,
    marginBottom: isMobile() ? 5 : 0,
  },
  tabBarLabel: {
    fontSize: isMobile() ? 10 : 20,
    marginLeft: isMobile() ? 0 : 20,
  },
  doc_block: {
    marginBottom: 10,
    paddingTop: 20,
    borderTopWidth: 1,
  },
  btn: {
    overflow: "hidden",
    fontSize: 15,
    backgroundColor: "#281640",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  btn_secondary: {
    overflow: "hidden",
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#202020",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  block_btn: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  back_btn: {
    // backgroundColor: "rgba(0,255,0,.1)",
    width: 40,
    height: 40,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  switch_btn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  toggle: {
    margin: 10,
  },
  checkbox: {
    margin: 0,
    borderWidth: 1,
    width: 30,
    height: 30,
    padding: 10,
  },
  account_input: {
    backgroundColor: "rgba(128,128,128,.5)",
    color: "white",
    width: 230,
    padding: 20,
    paddingLeft: 50,
    borderRadius: 12,
  },
  // Utilities
  res_gap: {
    marginTop: isMobile() ? 10 : 0,
    marginLeft: isMobile() ? 0 : 10,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  rounded: {
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "rgba(128,128,128,.2)",
    borderRadius: 16,
    overflow: "hidden",
  },
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "rgba(128,128,128,.2)",
    borderRadius: 12,
    overflow: "hidden",
  },
  info: {
    backgroundColor: "rgba(73, 166, 233, .2)",
    color: "#49A6E9",
  },
  info_text: {
    color: "#49A6E9",
  },
  success: {
    backgroundColor: "rgba(137, 187, 114, .2)",
    color: "#89BB72",
  },
  success_text: {
    color: "#89BB72",
  },
  warn: {
    backgroundColor: "rgba(200, 138, 93, .2)",
    color: "#C88A5D",
  },
  warn_text: {
    color: "#C88A5D",
  },
  error: {
    backgroundColor: "rgba(228, 97, 107, .2)",
    color: "#E4616B",
  },
  error_text: {
    color: "#E4616B",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  m_top: {
    marginTop: 10,
  },
  m_top_2: {
    marginTop: 20,
  },
  m_left: {
    marginLeft: 10,
  },
  m_left_2: {
    marginLeft: 20,
  },
  m_right: {
    marginRight: 10,
  },
  m_right_2: {
    marginRight: 20,
  },
  m_bottom: {
    marginBottom: 10,
  },
  m_bottom_2: {
    marginBottom: 20,
  },
  m_vertical: {
    marginVertical: 10,
  },
  m_vertical_2: {
    marginVertical: 20,
  },
  m_horizontal: {
    marginHorizontal: 10,
  },
  m_horizontal_2: {
    marginHorizontal: 20,
  },
  m_all: {
    margin: 10,
  },
  m_all_2: {
    margin: 20,
  },
  p_top: {
    paddingTop: 10,
  },
  p_top_2: {
    paddingTop: 20,
  },
  p_left: {
    paddingLeft: 10,
  },
  p_left_2: {
    paddingLeft: 20,
  },
  p_right: {
    paddingRight: 10,
  },
  p_right_2: {
    paddingRight: 20,
  },
  p_bottom: {
    paddingBottom: 10,
  },
  p_bottom_2: {
    paddingBottom: 20,
  },
  p_vertical: {
    paddingVertical: 10,
  },
  p_vertical_2: {
    paddingVertical: 20,
  },
  p_horizontal: {
    paddingHorizontal: 10,
  },
  p_horizontal_2: {
    paddingHorizontal: 20,
  },
  p_all: {
    padding: 10,
  },
  p_all_2: {
    padding: 20,
  },
});
