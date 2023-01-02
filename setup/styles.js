import { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { isMobile } from "../utilities/isMobile";

// THEMES //
export const lightTheme = {
  dark: false,
  colors: {
    primary: "rgb(59, 115, 245)",
    background: "white",
    card: "rgb(247, 249, 249)",
    text: "rgb(15, 20, 25)",
    border: "rgb(239, 243, 244)",
    notification: "rgb(240, 97, 109)",
  },
};
export const darkTheme = {
  dark: true,
  colors: {
    primary: "rgb(59, 115, 245)",
    background: "black",
    card: "rgb(22, 24, 28)",
    text: "rgb(231, 233, 234)",
    border: "rgb(47, 51, 54)",
    notification: "rgb(240, 97, 109)",
  },
};

// DESIGN TOKENS //
export const t = {
  //Palette
  primary: "rgb(59, 115, 245)",
  primaryFaded: "rgba(59, 115, 245, 0.2)",
  positive: "rgb(39,173,117)",
  positiveFaded: "rgba(39,173,117, 0.2)",
  warn: "rgb(233, 179, 0)",
  warnFaded: "rgba(233, 179, 0, 0.2)",
  negative: "rgb(240, 97, 109)",
  negativeFaded: "rgba(240, 97, 109, 0.2)",
  grey: "#777777",
  // Spacing
  xs: 8,
  small: 12,
  medium: 16,
  large: 24,
  xl: 32,
};

// SUPER CLASSES //
export const s = StyleSheet.create({
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
  centeredFlex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredFlexContainer: {
    padding: 10,
    flex: 1,
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
    flexDirection: isMobile ? "row" : "column",
    position: isMobile ? "relative" : "absolute",
    height: isMobile ? 79 : "100vh",
    width: isMobile ? "100%" : 128,
    borderTopWidth: isMobile ? 1 : 0,
    borderRightWidth: isMobile ? 0 : 1,
  },
  tabBarItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: isMobile ? "flex-start" : "center",
    flexDirection: isMobile ? "column" : "row",
    padding: isMobile ? 10 : 20,
    maxHeight: 64,
  },
  tabBarIconWrapper: {
    alignItems: "center",
    height: 20,
    marginBottom: isMobile ? 5 : 0,
  },
  tabBarLabel: {
    fontSize: isMobile ? 10 : 20,
    marginLeft: isMobile ? 0 : 20,
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
  videoThumbnail: {
    width: 360,
    height: 202,
    maxWidth: "100%",
    borderRadius: t.small,
  },
  videoDurationWrapper: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.8)",
    alignSelf: "flex-start",
    margin: t.xs / 1.5,
    padding: t.xs / 2,
    borderRadius: t.xs / 2.5,
  },
  videoDurationText: {
    fontSize: t.small,
    color: "rgb(231, 233, 234)",
    fontWeight: "bold",
  },
  dropdownMenu: {
    position: "absolute",
    bottom: t.large,
    right: t.large,
    paddingVertical: t.xs,
    paddingHorizontal: t.medium,
    borderRadius: t.small,
  },
  // Utilities
  res_gap: {
    marginTop: isMobile ? 10 : 0,
    marginLeft: isMobile ? 0 : 10,
  },
  shadow: {
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
    borderRadius: 16,
    overflow: "hidden",
  },
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    overflow: "hidden",
  },
  info: {
    backgroundColor: t.primaryFaded,
    color: t.primary,
  },
  info_text: {
    color: t.primary,
  },
  success: {
    backgroundColor: t.positiveFaded,
    color: t.positive,
  },
  success_text: {
    color: t.positive,
  },
  warn: {
    backgroundColor: t.warnFaded,
    color: t.warn,
  },
  warn_text: {
    color: t.warn,
  },
  error: {
    backgroundColor: t.negativeFaded,
    color: t.negative,
  },
  error_text: {
    color: t.negative,
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
