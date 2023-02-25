
import { StyleSheet } from 'react-native';

import Theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  label: {
    height: 19,
    fontFamily: Theme.fonts.bold,
    fontSize: 14,
  },
  ballon: {
    height: 19,
    backgroundColor: Theme.colors.gray400,
    color: Theme.colors.gray200,
    fontFamily: Theme.fonts.bold,
    textAlignVertical: 'center',
    borderRadius: 999,
    fontSize: 12,
    paddingHorizontal: 8,
    marginLeft: 8
  }
});