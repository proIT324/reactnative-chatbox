import { StyleSheet } from 'react-native';
import theme from '../../../app.theme';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    marginTop: theme.paddingH.pad20,
    marginRight: 20,
    marginLeft: 'auto',
  },
  avatar: {
    marginRight: theme.paddingW.pad10,
    width: theme.paddingH.pad30,
    height: theme.paddingH.pad30,
    borderRadius: theme.paddingH.pad15,
  },
  textbox: {
    flex: 1,
  },
  interactions: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: theme.paddingH.pad8,
    paddingLeft: theme.paddingW.pad10,
  },
  text: {
    backgroundColor: theme.colors.lightGrey,
    paddingRight: theme.paddingW.pad20,
    paddingLeft: theme.paddingW.pad20,
    paddingTop: theme.paddingH.pad10,
    paddingBottom: theme.paddingH.pad10,
    borderTopRightRadius: theme.paddingH.pad20,
    borderBottomLeftRadius: theme.paddingH.pad20,
    borderBottomRightRadius: theme.paddingH.pad20,
  },
  interact: {
    marginLeft: theme.paddingW.pad20,
    width: theme.paddingW.pad40,
  },
  text_active: {
    backgroundColor: theme.colors.blue,
    paddingRight: theme.paddingW.pad20,
    paddingLeft: theme.paddingW.pad20,
    paddingTop: theme.paddingH.pad10,
    paddingBottom: theme.paddingH.pad10,
    borderTopRightRadius: theme.paddingH.pad20,
    borderBottomLeftRadius: theme.paddingH.pad20,
    borderBottomRightRadius: theme.paddingH.pad20,
  },
  text_white: {
    fontSize: theme.fontSize.p13,
    color: theme.colors.white,
  },
  text_black: {
    fontSize: theme.fontSize.p13,
    color: theme.colors.black,
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
});
