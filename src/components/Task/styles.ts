import { StyleSheet } from 'react-native';

import Theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: Theme.colors.gray500,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Theme.colors.gray400,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginBottom: 8
  },
  buttonCheck: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  task: {
    flex: 1,
    marginHorizontal: 8,
    color: Theme.colors.gray100,
    fontFamily: Theme.fonts.regular,
    fontSize: 14,
    textAlignVertical: 'top',
    justifyContent: 'center'
  },
  taskDone: {
    flex: 1,
    marginHorizontal: 8,
    color: Theme.colors.gray300,
    fontFamily: Theme.fonts.regular,
    fontSize: 14,
    textAlignVertical: 'top',
    justifyContent: 'center',
    textDecorationLine: 'line-through'
  },
  buttonRemove: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonRemovePress: {
    color: Theme.colors.gray100,
    width: 32,
    height: 32,
    alignItems: 'center',
    backgroundColor: Theme.colors.gray400,
    justifyContent: 'center',
  }
});