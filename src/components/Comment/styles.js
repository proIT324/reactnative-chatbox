import { StyleSheet } from 'react-native';
import theme from '../../../app.theme';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: theme.paddingH.pad20,
  },
  avatar: {
    marginRight: theme.paddingW.pad10,
    width: theme.paddingH.pad40,
    height: theme.paddingH.pad40,
    borderRadius: theme.paddingH.pad20,
  },
  textbox: {
    flex: 1,
  },
  interactions: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: theme.paddingH.pad8,
    paddingLeft: theme.paddingW.pad20,
  },
  text: {
    // backgroundColor: theme.colors.lightGrey,
    paddingRight: theme.paddingW.pad20,
    paddingLeft: theme.paddingW.pad20,
    paddingTop: theme.paddingH.pad10,
    paddingBottom: theme.paddingH.pad10,
    borderTopRightRadius: theme.paddingH.pad20,
    borderBottomLeftRadius: theme.paddingH.pad20,
    borderBottomRightRadius: theme.paddingH.pad20,
  },
  text_active: {
    // backgroundColor: theme.colors.blue,
    paddingRight: theme.paddingW.pad20,
    paddingLeft: theme.paddingW.pad20,
    paddingTop: theme.paddingH.pad10,
    paddingBottom: theme.paddingH.pad10,
    borderTopRightRadius: theme.paddingH.pad20,
    borderBottomLeftRadius: theme.paddingH.pad20,
    borderBottomRightRadius: theme.paddingH.pad20,
  },
  text_black: {
    fontSize: theme.fontSize.p13,
    color: theme.colors.black,
  },
  text_white: {
    fontSize: theme.fontSize.p13,
    color: theme.colors.white,
  },
  poster_active: {
    fontSize: theme.fontSize.p17,
    color: theme.colors.white,
    marginBottom: theme.paddingH.pad5,
  },
  poster_inactive: {
    fontSize: theme.fontSize.p17,
    color: theme.colors.black,
    marginBottom: theme.paddingH.pad5,
  },
  interact: {
    marginLeft: theme.paddingW.pad20,
    width: theme.paddingW.pad40,
  },
});
