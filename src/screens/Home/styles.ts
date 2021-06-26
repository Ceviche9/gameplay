import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42,
  },
  matches: {    
    marginTop: 24,
    marginLeft: 24
  },

  modalHeader:{
  
    flex: 1,
    backgroundColor: theme.colors.secondary100,
    justifyContent: 'center',
    alignItems: 'center'

  },

  ModalText:{

    fontSize: 16,
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading

  },

  modalView:{


    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 10,
    paddingBottom:10,
    backgroundColor: theme.colors.secondary80
    

  },

  modalViewBtn:{

    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 60,
    borderRadius: 10,
    borderEndColor: theme.colors.heading


  },

  modalViewBtnClose:{

    backgroundColor: theme.colors.secondary80,
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 60,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.highlight,
    borderEndColor: theme.colors.heading


  },

  modalOptions:{
    
    fontSize: 16,
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading


  }

  
});