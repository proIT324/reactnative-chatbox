import { StyleSheet } from 'react-native';
import theme from '../../../app.theme';

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: theme.colors.blue,
    // backgroundColor: 'red',
    height: '100%',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.paddingW.pad10,
    paddingRight: theme.paddingW.pad10,
    height: theme.paddingH.pad60,
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: theme.fontSize.p20,
    letterSpacing: theme.paddingW.pad2,
    textTransform: 'uppercase',
    color: theme.colors.white,
  },
  leftIcon: {
    width: theme.paddingH.pad20,
    height: theme.paddingH.pad20,
  },
  rightIcon: {
    opacity: 0,
    width: theme.paddingH.pad20,
    height: theme.paddingH.pad20,
  },
  contentbox: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: theme.colors.white,
    borderTopRightRadius: theme.paddingH.pad40,
    borderTopLeftRadius: theme.paddingH.pad40,
    height: '80%',
  },
  commentContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: theme.paddingH.pad30,
    paddingBottom: theme.paddingH.pad30,
    paddingRight: theme.paddingW.pad20,
    paddingLeft: theme.paddingW.pad20,
  },
  commentList: {
    marginBottom: theme.paddingH.pad20,
  },
});
