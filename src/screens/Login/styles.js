import { StyleSheet } from 'react-native';
import { COLORS } from '../../components/ColorPallete'

export const Style = StyleSheet.create({
  logo: {
    top: 42,
    alignSelf: 'center',
    width: 200,
    height: 150,
    alignSelf: 'center'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 200,
    left: 0,
    top: 0,
    backgroundColor: COLORS.secondary,
    borderBottomLeftRadius: 50,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: { 
    marginBottom: 0, 
    marginLeft: 20, 
    marginRight: 20, 
    marginTop: 20,
  },
  
  viewSignUp: {
    marginTop: 16, 
    flexDirection: 'row', 
    alignSelf: 'center', 
    alignContent: 'space-between',
  },
  link: {
    color: COLORS.paletteBlue,
  },
});
