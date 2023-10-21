import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import { isMobile, platform } from './helpers';

const screenHeight = Dimensions.get('window').height;

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
  white: '#ffffff',
  grey: '#777777',
  greyFaded: 'rgba(128, 128, 128, .15)',
  black: '#000000',

  primary: 'rgb(59, 115, 245)',
  primaryFaded: 'rgba(59, 115, 245, .15)',
  positive: 'rgb(39, 173, 117)',
  positiveFaded: 'rgba(39, 173, 117, .15)',
  warn: 'rgb(233, 179, 0)',
  warnFaded: 'rgba(233, 179, 0, .15)',
  negative: 'rgb(240, 97, 109)',
  negativeFaded: 'rgba(240, 97, 109, .15)',

  tabPurple: 'rgb(182, 111, 247)',
  tabPurpleFaded: 'rgba(182, 111, 247, .15)',
  tabGreen: 'rgb(113, 192, 131)',
  tabGreenFaded: 'rgba(113, 192, 131, .15)',
  tabOrange: 'rgb(236, 117, 111)',
  tabOrangeFaded: 'rgba(236, 117, 111, .15)',
  tabBlue: 'rgb(120, 162, 246)',
  tabBlueFaded: 'rgba(120, 162, 246, .15)',
  tabYellow: 'rgb(252, 206, 81)',
  tabYellowFaded: 'rgba(252, 206, 81, .15)',

  // Spacing
  xxxs: 2, // .125rem
  xxs: 4, // .25rem
  xs: 8, // .5rem
  s: 12, // .75rem
  ms: 16, // .875rem
  m: 16, // 1rem
  l: 20, // 1.25rem
  xl: 24, // 1.5rem
  xxl: 32, // 2rem
  xxxl: 40, // 2.5rem
};

// SUPER CLASSES //
export const s = StyleSheet.create({
  // Containers
  container: {
    padding: t.xs,
  },
  flexBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    padding: t.s,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    padding: t.l,
    borderRadius: t.m,
    margin: t.l / 2,
  },
  modalView: {
    margin: t.l,
    borderRadius: t.m,
    padding: t.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Components
  tabBar: {
    flexDirection: isMobile ? 'row' : 'column',
    position: isMobile ? 'relative' : 'absolute',
    height:
      platform === 'ios'
        ? t.m * 5
        : platform === 'android' || platform === 'mobWeb'
        ? t.m * 4
        : screenHeight,
    width: isMobile ? '100%' : t.m * 8,
    borderTopWidth: isMobile ? 1 : 0,
    borderRightWidth: isMobile ? 0 : 1,
  },
  tabBarItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: platform === 'ios' ? 'flex-start' : 'center',
    flexDirection: isMobile ? 'column' : 'row',
    padding: isMobile ? t.s : t.l,
    maxHeight: t.m * 4,
  },
  tabBarIconWrapper: {
    alignItems: 'center',
    width: t.xl,
    height: t.xl,
  },
  btn_secondary: {
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: t.s,
    paddingHorizontal: t.m,
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
    margin: t.s,
  },
  checkbox: {
    margin: 0,
    borderWidth: 1,
    width: t.xl,
    height: t.xl,
    padding: t.s,
  },
  account_input: {
    height: t.m * 3,
    padding: t.m,
    paddingLeft: t.m * 3.5,
    borderRadius: t.m,
    marginVertical: t.xs,
  },
  videoThumbnail: {
    width: 360, // From Youtube
    height: 202, // From Youtube
    maxWidth: '100%',
    borderRadius: t.s,
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
    fontSize: t.s,
    color: 'rgb(231, 233, 234)', // Hardcoded because it should ignore theme
  },
  dropdownMenu: {
    position: 'absolute',
    bottom: t.l,
    right: t.l,
    paddingVertical: t.xs,
    paddingHorizontal: t.m,
    borderRadius: t.s,
  },
  tag: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: t.greyFaded,
    paddingHorizontal: t.xs,
    paddingVertical: t.xxs,
    borderRadius: t.xs,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
  bigChip: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: t.s,
    paddingVertical: t.xs,
    borderRadius: t.s,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
  // Utilities
  iconSmall: {
    width: t.l,
    height: t.l,
  },
  iconLarge: {
    width: t.xl,
    height: t.xl,
  },
  res_gap: {
    marginTop: isMobile ? t.s : 0,
    marginLeft: isMobile ? 0 : t.s,
  },
  rounded: {
    marginVertical: t.s,
    padding: t.s,
    borderRadius: t.m,
    overflow: 'hidden',
  },
  pill: {
    paddingHorizontal: isMobile ? t.xs : t.s,
    paddingVertical: t.xs / 2,
    borderRadius: t.s,
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
});
