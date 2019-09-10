import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const RatioH = height / 812;
const RatioW = width / 375;

const theme = {
  colors: {
    blue: '#547ffb',
    white: '#fff',
    lightGrey: '#f4f6fa',
    black: '#000',
  },
  paddingH: {
    pad5: 5 * RatioH,
    pad8: 8 * RatioH,
    pad10: 10 * RatioH,
    pad15: 15 * RatioH,
    pad20: 20 * RatioH,
    pad30: 30 * RatioH,
    pad40: 40 * RatioH,
    pad50: 50 * RatioH,
    pad60: 60 * RatioH,
    pad70: 70 * RatioH,
    pad80: 80 * RatioH,
    pad90: 90 * RatioH,
    pad100: 100 * RatioH,
  },
  paddingW: {
    pad2: 2 * RatioW,
    pad8: 8 * RatioW,
    pad10: 10 * RatioW,
    pad20: 20 * RatioW,
    pad30: 30 * RatioW,
    pad40: 40 * RatioW,
    pad50: 50 * RatioW,
    pad60: 60 * RatioW,
    pad70: 70 * RatioW,
    pad80: 80 * RatioW,
    pad90: 90 * RatioW,
    pad100: 100 * RatioW,
  },
  fontSize: {
    p1: 1 * RatioW,
    p10: 10 * RatioW,
    p11: 11 * RatioW,
    p12: 12 * RatioW,
    p13: 13 * RatioW,
    p14: 14 * RatioW,
    p15: 15 * RatioW,
    p16: 16 * RatioW,
    p17: 17 * RatioW,
    p19: 19 * RatioW,
    p20: 20 * RatioW,
    p24: 24 * RatioW,
    p30: 30 * RatioW,
    p35: 35 * RatioW,
    p40: 40 * RatioW,
  },
};

export default theme;
