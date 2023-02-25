import { StyleSheet } from 'react-native';

import Theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  backgroundTop: {
    height: 173, 
    backgroundColor: Theme.colors.black
  },
  backgroundBottom: {
    flex: 1,
    backgroundColor: Theme.colors.gray600
  },
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent'
  },
  logo: {
    alignSelf: 'center',
    marginTop: 70
  },
  containerNewTask: {
    flexDirection: 'row',
    marginTop: 40,
    marginHorizontal: 24,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: Theme.colors.gray500,
    color: Theme.colors.white,
    fontFamily: Theme.fonts.regular,
    padding: 16,
    borderRadius: 6,
    fontSize: 16,
    marginRight: 4,
    textAlignVertical: 'center'
    
  },
  inputFocus: {
    flex: 1,
    height: 54,
    backgroundColor: Theme.colors.gray500,
    color: Theme.colors.white,
    fontFamily: Theme.fonts.regular,
    padding: 16,
    borderRadius: 6,
    fontSize: 16,
    marginRight: 4,
    borderWidth: 1,
    borderColor: Theme.colors.purpleDark,
    textAlignVertical: 'center'
  },
  buttonNewTask: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: Theme.colors.blueDark,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonNewTaskPress: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: Theme.colors.blue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerTasks: {
    marginVertical: 32,
    marginHorizontal: 24,
  },
  tasksInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tasksListEmptyContainer: {
    marginVertical: 20,
    borderTopWidth: 1,
    borderTopColor: Theme.colors.gray400,
    alignItems: 'center',
    paddingVertical: 48
  },
  tasksListEmptyTitle: {
    marginTop: 16,
    color: Theme.colors.gray300,
    fontFamily: Theme.fonts.bold,
    fontSize: 14
  },
  tasksListEmptySubtitle: {
    color: Theme.colors.gray300,
    fontFamily: Theme.fonts.regular,
    fontSize: 14
  }
});