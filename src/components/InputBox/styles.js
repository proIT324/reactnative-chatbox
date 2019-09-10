import { StyleSheet } from 'react-native';
import theme from '../../../app.theme';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: theme.paddingH.pad10,
    paddingBottom: theme.paddingH.pad10,
    paddingRight: theme.paddingH.pad20,
    paddingLeft: theme.paddingH.pad20,
    borderRadius: theme.paddingH.pad30,
    backgroundColor: theme.colors.lightGrey,
  },
  textinput: {
    fontSize: theme.fontSize.p13,
    flex: 1,
  },
  sender: {
    width: theme.paddingH.pad30,
    height: theme.paddingH.pad30,
  },
});
