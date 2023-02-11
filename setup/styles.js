import { StyleSheet } from 'react-native';
import { isMobile, platform } from '../utilities/helpers';

// THEMES //
export const lightTheme = {
  dark: false,
  colors: {
    primary: 'rgb(59, 115, 245)',
    background: 'rgb(247, 249, 249)',
    card: 'white',
    text: 'rgb(15, 20, 25)',
    border: 'rgb(239, 243, 244)',
    notification: 'rgb(240, 97, 109)',
  },
};
export const darkTheme = {
  dark: true,
  colors: {
    primary: 'rgb(59, 115, 245)',
    background: 'black',
    card: 'rgb(22, 24, 28)',
    text: 'rgb(231, 233, 234)',
    border: 'rgb(47, 51, 54)',
    notification: 'rgb(240, 97, 109)',
  },
};

// DESIGN TOKENS //
export const t = {
  //Palette
  primary: 'rgb(59, 115, 245)',
  primaryFaded: 'rgba(59, 115, 245, 0.2)',
  positive: 'rgb(39,173,117)',
  positiveFaded: 'rgba(39,173,117, 0.2)',
  warn: 'rgb(233, 179, 0)',
  warnFaded: 'rgba(233, 179, 0, 0.2)',
  negative: 'rgb(240, 97, 109)',
  negativeFaded: 'rgba(240, 97, 109, 0.2)',
  grey: '#777777',
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
    padding: t.small,
  },
  flex: {
    flex: 1,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredFlexContainer: {
    padding: t.small,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    padding: t.large,
    borderRadius: t.medium,
  },
  modalView: {
    margin: t.large,
    borderRadius: t.medium,
    padding: t.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Typography
  title: {
    fontSize: t.xl,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: t.large,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: t.medium * 1.25,
    fontWeight: 'bold',
  },
  // Components
  tabBar: {
    flexDirection: isMobile ? 'row' : 'column',
    position: isMobile ? 'relative' : 'absolute',
    height:
      platform === 'ios'
        ? t.medium * 5
        : platform === 'android' || platform === 'mobWeb'
        ? t.medium * 4
        : '100vh',
    width: isMobile ? '100%' : t.medium * 8,
    borderTopWidth: isMobile ? 1 : 0,
    borderRightWidth: isMobile ? 0 : 1,
  },
  tabBarItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: platform === 'ios' ? 'flex-start' : 'center',
    flexDirection: isMobile ? 'column' : 'row',
    padding: isMobile ? t.small : t.large,
    maxHeight: t.medium * 4,
  },
  tabBarIconWrapper: {
    alignItems: 'center',
    height: t.large,
  },
  doc_block: {
    marginBottom: t.small,
    paddingTop: t.large,
    borderTopWidth: 1,
  },
  btn_secondary: {
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: t.small,
    paddingHorizontal: t.medium,
    paddingVertical: t.xs,
  },
  block_btn: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back_btn: {
    width: t.xl,
    height: t.xl,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch_btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  toggle: {
    margin: t.small,
  },
  checkbox: {
    margin: 0,
    borderWidth: 1,
    width: t.xl,
    height: t.xl,
    padding: t.small,
  },
  account_input: {
    height: t.medium * 3,
    padding: t.medium,
    paddingLeft: t.medium * 3.5,
    borderRadius: t.medium,
    marginVertical: t.xs,
  },
  videoThumbnail: {
    width: 360, // From Youtube
    height: 202, // From Youtube
    maxWidth: '100%',
    borderRadius: t.small,
  },
  videoDurationWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.8)', // Hardcoded because it should ignore theme
    alignSelf: 'flex-start',
    margin: t.xs / 1.5,
    padding: t.xs / 2,
    borderRadius: t.xs / 2.5,
  },
  videoDurationText: {
    fontSize: t.small,
    color: 'rgb(231, 233, 234)', // Hardcoded because it should ignore theme
    fontWeight: 'bold',
  },
  dropdownMenu: {
    position: 'absolute',
    bottom: t.large,
    right: t.large,
    paddingVertical: t.xs,
    paddingHorizontal: t.medium,
    borderRadius: t.small,
  },
  // Utilities
  res_gap: {
    marginTop: isMobile ? t.small : 0,
    marginLeft: isMobile ? 0 : t.small,
  },
  rounded: {
    marginVertical: t.small,
    paddingHorizontal: t.large,
    paddingVertical: t.small,
    borderRadius: t.medium,
    overflow: 'hidden',
  },
  pill: {
    paddingHorizontal: t.small,
    paddingVertical: t.xs,
    borderRadius: t.small,
    overflow: 'hidden',
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  // Spacing
  m_top: {
    marginTop: t.small,
  },
  m_top_2: {
    marginTop: t.large,
  },
  m_left: {
    marginLeft: t.small,
  },
  m_left_2: {
    marginLeft: t.large,
  },
  m_right: {
    marginRight: t.small,
  },
  m_right_2: {
    marginRight: t.large,
  },
  m_bottom: {
    marginBottom: t.small,
  },
  m_bottom_2: {
    marginBottom: t.large,
  },
  m_vertical: {
    marginVertical: t.small,
  },
  m_vertical_2: {
    marginVertical: t.large,
  },
  m_horizontal: {
    marginHorizontal: t.small,
  },
  m_horizontal_2: {
    marginHorizontal: t.large,
  },
  m_all: {
    margin: t.small,
  },
  m_all_2: {
    margin: t.large,
  },
  p_top: {
    paddingTop: t.small,
  },
  p_top_2: {
    paddingTop: t.large,
  },
  p_left: {
    paddingLeft: t.small,
  },
  p_left_2: {
    paddingLeft: t.large,
  },
  p_right: {
    paddingRight: t.small,
  },
  p_right_2: {
    paddingRight: t.large,
  },
  p_bottom: {
    paddingBottom: t.small,
  },
  p_bottom_2: {
    paddingBottom: t.large,
  },
  p_vertical: {
    paddingVertical: t.small,
  },
  p_vertical_2: {
    paddingVertical: t.large,
  },
  p_horizontal: {
    paddingHorizontal: t.small,
  },
  p_horizontal_2: {
    paddingHorizontal: t.large,
  },
  p_all: {
    padding: t.small,
  },
  p_all_2: {
    padding: t.large,
  },
});
